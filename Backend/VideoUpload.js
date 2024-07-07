// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const path = require("path");

// const app = express();

// app.use(cors());

// const mediaRoutes = require("./routes/media");

// app.get("/allvideos",async (req, res) => {
//   try {
//     const media = await Media.find();

//     res.json(media);
//   } catch (error) {
//     console.log(error);
//     res.status(400).json(error);
//   }
// }
// );

// app.use("/api/v1/media", mediaRoutes);
// app.use("/public", express.static(path.join(__dirname, "public")));

// // const mongodbUri = "mongodb://localhost:27017/uploadproject";
// const mongodbUri = "mongodb+srv://ARUN:1234@cluster0.mmyigrp.mongodb.net/LECTURESCHECK?retryWrites=true&w=majority&appName=Cluster0";

// mongoose.connect(mongodbUri, {
//   // useNewUrlParser: true,
// });


// mongoose.connection.on("connected", () => {
//   console.log("Connected to mongodb...videos");
// });

// mongoose.connection.on("error", (err) => {
//   console.log("Error connecting to mongo", err);
// });

// app.listen(4000, () => {
//   console.log("App is running on PORT 4000");
// });
