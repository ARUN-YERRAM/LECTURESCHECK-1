// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const allroutes = require("./AllRoutes");

// dotenv.config();

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

// // Routes
// app.use("/api", allroutes);

// // Default Route
// app.use((req, res) => {
//     console.log("Request received at " + new Date());
//     res.send("Welcome to LECTURESCHECK");
// });

// // Database Connection
// async function connectDB() {
//     try {
//         console.log(process.env.DBURI);
//         await mongoose.connect(process.env.DBURI);
//         console.log("Connected to database");
//     } catch (err) {
//         console.error("Error connecting to database:", err);
//         // Consider handling the error more gracefully, such as retrying or exiting the application
//     }
// }

// // Start server
// async function startServer() {
//     try {
//         await connectDB();
//         app.listen(3000, () => {
//             console.log("Backend server listening at http://localhost:3000");
//         });
//     } catch (err) {
//         console.error("Error starting server:", err);
//         // Consider handling the error more gracefully, such as retrying or exiting the application
//     }
// }

// startServer();
