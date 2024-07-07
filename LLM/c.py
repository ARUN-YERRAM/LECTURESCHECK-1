from flask import Flask
from flask_ngrok import run_with_ngrok

app = Flask(__name__)
run_with_ngrok(app)

@app.route("/calculate_similarity")
def home():
  return "<h2>Welcome to CID<h2>"

app.run()

