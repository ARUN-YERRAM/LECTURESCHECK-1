// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// app.use(express.json());
// const cors = require("cors");
// app.use(cors());
// app.use("/files", express.static("files"));


// //MongoDB Connection


// // Mongoose connection
// const mongoUrl =
//   "mongodb+srv://ARUN:1234@cluster0.mmyigrp.mongodb.net/LECTURESCHECK?retryWrites=true&w=majority&appName=Cluster0";
  

// mongoose
//   .connect(mongoUrl, {
//     // useNewUrlParser: true,
//     // useUnifiedTopology: true, // Add this option to avoid deprecation warning
//   }) 
//   .then(() => {
//     console.log("Connected to database");
//   })
//   .catch((e) => console.log(e));

// // Multer
// const multer = require("multer");


// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./files");
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now();
//     cb(null, uniqueSuffix + file.originalname);
//   },
// });



// // const upload = multer({ dest: './files' });
// require("./pdfDetails")
// // Define PdfSchema and model
// const PdfSchema = mongoose.model("PdfDetails");
// // const PdfSchema = mongoose.model("PdfDetails");
// const upload = multer({ storage : storage});

// app.post("/upload-files", upload.single("file"), async (req, res) => {
//   console.log(req.file);
//   const title = req.body.title;
//   const fileName = req.file.filename;
//   try {
//     await PdfSchema.create({ title: title, pdf: fileName });
//     res.send({ status: "ok" });
//   } catch (error) {
//     // res.status(500).json({ error: "Internal Server Error" });
//     res.json({status:error})
//   }
//     // res.send("Hii");
// });



// app.get("/get-files", async (req, res) => {
//   try {
//     // const data = await PdfSchema.find({});
//     PdfSchema.find({}).then((data) => {
//     res.send({ status: "ok", data: data });
//   });
//  } catch (error) {
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });


// // Delete endpoint
// app.delete("/delete-file/:id", async (req, res) => {
//   try {
//     const pdf = await PdfSchema.findById(req.params.id);
//     if (!pdf) {
//       return res.status(404).send({ status: "error", message: "File not found" });
//     }

//     // Delete the file from the filesystem
//     const filePath = path.join(__dirname, "files", pdf.pdf);
//     fs.unlink(filePath, (err) => {
//       if (err) {
//         console.error("Error deleting file:", err);
//         return res.status(500).send({ status: "error", message: "File deletion error" });
//       }

//       // Delete the record from the database
//       PdfSchema.findByIdAndDelete(req.params.id)
//         .then(() => res.send({ status: "ok" }))
//         .catch((error) => res.status(500).send({ status: "error", message: error.message }));
//       });
//     } catch (error) {
//       res.status(500).send({ status: "error", message: error.message });
//     }
//   });
  

// // APIs


// // APIs

// app.get("/", async (req, res) => {
//   res.send("Success!!!!!!");
// });

// app.listen(5000, () => {
//   console.log("Server Started at 5000");
// });









