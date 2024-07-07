// // videoSummarizer.js
// const prompts = require('prompts');
// const path = require('path');
// const fs = require('fs/promises');
// const { Client } = require("@octoai/client");

// require('dotenv').config();

// // Check if the environment variable is set
// if (!process.env.OCTOAI_TOKEN) {
//     console.log('No OctoAI API key found. Please set your OCTOAI_TOKEN in the .env file.');
//     return;
// }

// // Connect to the OctoAI Client
// const client = new Client(process.env.OCTOAI_TOKEN);

// // Run the script in an async function
// (async () => {
//     try {
//         // List all available models
//         let modelsList = await client.chat.listAllModels();
//         let models = modelsList.map(model => ({
//             title: model,
//             value: model
//         }));

//         // Let the user pick a model
//         const modelSelected = await prompts({
//             type: 'select',
//             name: 'model',
//             message: 'Pick a model from OctoAI',
//             choices: models,
//             initial: 0
//         });

//         // If no model is selected, throw an error
//         if (!modelSelected.model) {
//             console.log('No model selected. Please try again.');
//             return;
//         }

//         // Get all the video files in the public/videos folder
//         let allFiles = await fs.readdir('./public/videos');
//         let videos = allFiles.filter(file => ['.mp4', '.mkv', '.avi', '.mov'].includes(path.extname(file).toLowerCase()));

//         // If the folder public/videos has no video file extensions, throw an error
//         if (videos.length === 0) {
//             console.log('No video files found in ./public/videos folder. Please add some videos and try again.');
//             return;
//         }

//         // Map all the videos to an object with a title and value
//         let choices = videos.map(video => ({
//             title: video,
//             value: video
//         }));

//         // Let the user pick a video to summarize
//         const videoSelected = await prompts({
//             type: 'select',
//             name: 'filename',
//             message: 'Pick a video to summarize',
//             choices,
//         });

//         // If no video selected, throw an error
//         if (!videoSelected.filename) {
//             console.log('No video selected. Please try again.');
//             return;
//         }

//         // Add the path to the videoSelected object
//         videoSelected.path = `./public/videos/${videoSelected.filename}`;

//         // Retrieve the video content using appropriate methods
//         // Example: Extract audio or frames from the video for summarization

//         // Perform summarization using the selected model and video content
//         // Example: Use AI to summarize the video content

//         // Generate the summary text
//         let summary = "This is a placeholder summary text.";

//         // Write the summary to a text file
//         await fs.writeFile(`./public/files/${videoSelected.filename.replace(path.extname(videoSelected.filename), '')}_summary.txt`, summary);
//         console.log(`Summary saved to ./public/files/${videoSelected.filename.replace(path.extname(videoSelected.filename), '')}_summary.txt`);

//     } catch (error) {
//         console.error('Error:', error);
//     }
// })();
