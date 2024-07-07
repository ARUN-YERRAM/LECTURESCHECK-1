import streamlit as st
from dotenv import load_dotenv
import os
import google.generativeai as genai
from youtube_transcript_api import YouTubeTranscriptApi
from moviepy.editor import VideoFileClip
from google.cloud import speech
import io
import requests

load_dotenv()

genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

prompt = """You are Youtube video summarizer. You will be taking the transcript text
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
    # Create the 'files' directory if it does not exist
    if not os.path.exists("files"):
        os.makedirs("files")

    # Save the thumbnail image
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

    # Save the summary to a text file
    summary_file_path = f"files/{video_id}.txt"
    with open(summary_file_path, 'w') as f:
        f.write(summary)

st.title("YouTube/Local Video Transcript to Detailed Notes Converter LLM ")
video_source = st.radio("Select Video Source:", ("YouTube URL", "Local File"))

language = st.selectbox("Select Language:", [("English", "en-US"), ("Telugu", "te-IN"), ("Hindi", "hi-IN")])
language_code = language[1]

youtube_link = ""
local_video_file = None

if video_source == "YouTube URL":
    youtube_link = st.text_input("Enter YouTube Video Link:")
    if youtube_link:
        video_id = youtube_link.split("=")[1]
        thumbnail_url = f"http://img.youtube.com/vi/{video_id}/0.jpg"
        st.image(thumbnail_url, use_column_width=True)

if video_source == "Local File":
    local_video_file = st.file_uploader("Upload Local Video File", type=["mp4", "mkv", "avi", "mov"])


def process_video(youtube_link, local_video_file, language_code):
    transcript_text = ""
    video_id = ""
    thumbnail_url = ""

    if youtube_link:
        video_id = youtube_link.split("=")[1]
        transcript_text = extract_youtube_transcript(youtube_link)
        thumbnail_url = f"http://img.youtube.com/vi/{video_id}/0.jpg"

    if local_video_file:

        local_video_path = "uploaded_video.mp4"
        with open(local_video_path, "wb") as f:
            f.write(local_video_file.getbuffer())
        transcript_text = extract_local_transcript(local_video_path, language_code)
        video_id = "local_video"
        thumbnail_url = "local_video_thumbnail.jpg"  # Placeholder for local video thumbnails
       
        video = VideoFileClip(local_video_path)
        video.save_frame(thumbnail_url, t=video.duration / 2)

    if transcript_text:
        summary = generate_gemini_content(transcript_text, prompt)
        st.markdown("## Detailed Notes:")
        st.write(summary)

        save_summary_and_thumbnail(summary, thumbnail_url, video_id)
        st.success(f"Summary and thumbnail saved in 'files' directory with filename '{video_id}'")

if (video_source == "YouTube URL" and youtube_link) or (video_source == "Local File" and local_video_file):
    process_video(youtube_link, local_video_file, language_code)
