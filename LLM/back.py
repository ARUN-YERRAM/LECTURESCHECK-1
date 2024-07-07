# backend/server.py
from flask import Flask, request, jsonify
from dotenv import load_dotenv
import os
from youtube_transcript_api import YouTubeTranscriptApi
from moviepy.editor import VideoFileClip
from google.cloud import speech
import io
import requests
from google.generativeai import genai

load_dotenv()

genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

app = Flask(__name__)

prompt = """You are YouTube video summarizer. You will be taking the transcript text
and summarizing the entire video and providing the important summary in points
within 250 words. Please provide the summary of the text given here:  """

def extract_youtube_transcript(youtube_video_url):
    try:
        video_id = youtube_video_url.split("=")[1]
        transcript_text = YouTubeTranscriptApi.get_transcript(video_id)
        transcript = " ".join([i["text"] for i in transcript_text])
        return transcript
    except Exception as e:
        raise e

def extract_local_transcript(local_video_path, language_code):
    try:
        video = VideoFileClip(local_video_path)
        audio_path = "audio.wav"
        video.audio.write_audiofile(audio_path)

        client = speech.SpeechClient()
        with io.open(audio_path, "rb") as audio_file:
            content = audio_file.read()

        audio = speech.RecognitionAudio(content=content)
        config = speech.RecognitionConfig(
            encoding=speech.RecognitionConfig.AudioEncoding.LINEAR16,
            sample_rate_hertz=16000,
            language_code=language_code
        )

        response = client.recognize(config=config, audio=audio)
        transcript = " ".join([result.alternatives[0].transcript for result in response.results])
        return transcript
    except Exception as e:
        raise e

def generate_gemini_content(transcript_text, prompt):
    model = genai.GenerativeModel("gemini-pro")
    response = model.generate_content(prompt + transcript_text)
    return response.text

def save_summary_and_thumbnail(summary, thumbnail_url, video_id):
    if not os.path.exists("files"):
        os.makedirs("files")

    if thumbnail_url.startswith("http"):
        thumbnail_response = requests.get(thumbnail_url)
        thumbnail_image_path = f"files/{video_id}.jpg"
        with open(thumbnail_image_path, 'wb') as f:
            f.write(thumbnail_response.content)
    else:
        thumbnail_image_path = f"files/{video_id}.jpg"
        with open(thumbnail_image_path, 'wb') as f:
            with open(thumbnail_url, 'rb') as thumb:
                f.write(thumb.read())

    summary_file_path = f"files/{video_id}.txt"
    with open(summary_file_path, 'w') as f:
        f.write(summary)

@app.route('/summarize_video', methods=['POST'])
def summarize_video():
    video_source = request.form.get('video_source')
    youtube_link = request.form.get('youtube_link')
    local_video_file = request.files.get('local_video_file')
    language_code = request.form.get('language_code')

    if video_source == "YouTube URL":
        transcript_text = extract_youtube_transcript(youtube_link)
    elif video_source == "Local File":
        local_video_path = "uploaded_video.mp4"
        local_video_file.save(local_video_path)
        transcript_text = extract_local_transcript(local_video_path, language_code)

    summary = generate_gemini_content(transcript_text, prompt)

    return jsonify({'summary': summary})

if __name__ == '__main__':
    app.run(debug=True)
