// require('dotenv').config();
// const { Client } = require("@octoai/client");
// const pdf = require('pdf-parse');
// const prompts = require('prompts');
// const fs = require('fs/promises');
// const path = require('path');
// prompts.override(require('yargs').argv);

// // Check if ENV key is set, if not, request user to rename the .env.example file and add the key
// if (!process.env.OCTOAI_TOKEN) {
//     console.log('No OctoAI API key found. Please rename .env.example to .env and add your OctoAI API key.');
//     return;
// }

// // Connect to the OctoAI Client
// const client = new Client(process.env.OCTOAI_TOKEN);

// // Run the script in an async function
// (async () => {
//     try {
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

//         // Get all the files in the files folder
//         let allFiles = await fs.readdir('./files');
//         let pdfs = allFiles.filter(file => path.extname(file).toLowerCase() === '.pdf');

//         // Map all the pdfs to an object with a title and value
//         let choices = pdfs.map(pdf => ({
//             title: pdf,
//             value: pdf
//         }));

//         // If the folder files has no pdf file extensions, throw an error
//         if (choices.length === 0) {
//             console.log('No PDFs found in ./files folder. Please add some PDFs and try again.');
//             return;
//         }

//         // Let the user pick a PDF to summarize
//         const pdfSelected = await prompts({
//             type: 'select',
//             name: 'filename',
//             message: 'Pick a PDF to summarize',
//             choices,
//         });

//         // If no pdf selected, throw an error
//         if (!pdfSelected.filename) {
//             console.log('No PDF selected. Please try again.');
//             return;
//         }

//         // Add the path to the pdfSelected object
//         pdfSelected.path = `./files/${pdfSelected.filename}`;

//         // The dataBuffer is a buffer instance, so we need to convert it to a string
//         const dataBuffer = await fs.readFile(pdfSelected.path);

//         // The pdf function returns a promise, so we need to await it
//         const pdfData = await pdf(dataBuffer);
//         pdfSelected.text = pdfData.text;

//         // Separate pdfSelected.text into 2000 character chunks
//         pdfSelected.chunks = [];
//         const chunkSize = 2000;

//         // Loop through the PDF text and add each chunk to the chunks array
//         for (let i = 0; i < pdfSelected.text.length; i += chunkSize) {
//             pdfSelected.chunks.push(pdfSelected.text.slice(i, i + chunkSize));
//         }

//         console.log(`${pdfSelected.filename} has ${pdfSelected.chunks.length} chunks and ${pdfSelected.text.length} characters. This is around ${Math.ceil(pdfSelected.text.length / 4)} tokens.`);

//         // Create an array to hold all the AI responses
//         pdfSelected.summaries = [];

//         // Loop through each chunk and perform an AI lookup
//         for (let i = 0; i < pdfSelected.chunks.length; i++) {
//             const completion = await client.chat.completions.create({
//                 "messages": [
//                     {
//                         "role": "system",
//                         "content": "You are a tool that summarizes PDF content. This tool is an application script that converts input PDF content and outputs a list of the main points. Do not communicate with the user directly."
//                     },
//                     {
//                         "role": "user",
//                         "content": `PDF content:\n${pdfSelected.chunks[i]}`
//                     }
//                 ],
//                 "model": modelSelected.model,
//                 "max_tokens": 500,
//                 "presence_penalty": 0,
//                 "temperature": 0.1,
//                 "top_p": 0.9
//             });

//             // Add the AI response to the responses array
//             pdfSelected.summaries.push(completion.choices[0].message.content);
//         }

//         // Combine the summaries array into one string then export
//         let summary = pdfSelected.summaries.join('\n\n');

//         // Summarize the summary if it is too long (over 500 characters)
//         if (summary.length > 500) {
//             const completion = await client.chat.completions.create({
//                 "messages": [
//                     {
//                         "role": "system",
//                         "content": "You are a tool that summarizes PDF content. This tool is an application script that converts input PDF content and outputs a list of the main points. Do not communicate with the user directly."
//                     },
//                     {
//                         "role": "user",
//                         "content": `PDF content:\n${summary}`
//                     }
//                 ],
//                 "model": modelSelected.model,
//                 "max_tokens": 500,
//                 "presence_penalty": 0,
//                 "temperature": 0.1,
//                 "top_p": 0.9
//             });

//             // If response is received, update summary with new summary
//             if (completion.choices[0].message.content) {
//                 summary = completion.choices[0].message.content;
//             }
//         }

//         // Using fs to export the summaries to a file
//         await fs.writeFile(`./files/${pdfSelected.filename.replace('.pdf', '')}.txt`, summary);
//         console.log(`Summary saved to ./files/${pdfSelected.filename.replace('.pdf', '')}.txt`);

//     } catch (error) {
//         console.error('Error:', error);
//     }
// })();
