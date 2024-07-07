import os
import tensorflow as tf
import tensorflow_hub as hub
import numpy as np
from scipy.spatial.distance import cosine
from flask import Flask, request, jsonify

# Disable oneDNN custom operations (optional, based on the initial warning)
os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'

app = Flask(__name__)

# Load pre-trained USE model
model = hub.load("https://tfhub.dev/google/universal-sentence-encoder/4")

# Function to calculate similarity using USE
def calculate_use_similarity(text1, text2):
    embeddings = model([text1, text2])
    similarity = 1 - cosine(embeddings[0].numpy(), embeddings[1].numpy())
    print("Reached llm")
    print(similarity)
    return similarity

# Function to read text from a file
def read_text_from_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        return file.read()

@app.route('/calculate_similarity', methods=['POST'])
def calculate_similarity():
    # Get the text files from the request
    file1 = request.files['file1']
    file2 = request.files['file2']

    # Read the content of the files
    text1 = file1.read().decode('utf-8')
    text2 = file2.read().decode('utf-8')

    # Calculate similarity
    similarity = calculate_use_similarity(text1, text2)
    print("return similarity: ", similarity)
    # Send the similarity score back
    return jsonify({'similarity': similarity})

if __name__ == '__main__':
    # Ensure the Flask app runs in a separate thread to avoid blocking TensorFlow operations
    from werkzeug.serving import run_simple
    run_simple('localhost', 6000, app)
