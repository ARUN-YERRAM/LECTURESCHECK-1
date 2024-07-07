const { text } = require('body-parser');
let mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

const pdfDetailsSchema = new mongoose.Schema({
   pdf:
   {
    type:String,
    required:true
   },
   title:
   {
    type:String,
    required:true
   }
},{timestamps:true}); ///this will add createdAt and UpdateAt fields

const videoDetailsSchema = new mongoose.Schema({
   video:{
    type:String,
    required:true
   },
   title:{
    type:String,
    required:true
   }

},{timestamps:true});



const Video = mongoose.model('Video', videoDetailsSchema);
const User = mongoose.model('User', UserSchema);
const Pdf = mongoose.model("PdfDetails", pdfDetailsSchema);



module.exports = { User, Pdf, Video };