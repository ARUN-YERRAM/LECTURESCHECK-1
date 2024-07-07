let express = require("express");
let app = express();
let allroutes = require("./routes/AllRoutes");
const session = require('express-session');
const mongoose = require( "mongoose" );
const path = require("path");
const cors = require( 'cors' );

///////////////

///////////////

const dotenv = require( "dotenv" );
dotenv.config();

app.use(express.json());


app.use(cors({credentials:true, origin:'http://localhost:3000'}));


app.use("/api",allroutes);
////api/////////////////////////////////////////
app.use("/",async(req,res)=>{
    res.send("wellcome to dune university");
});

//////////////////////////////////////////////////
////////////////////




////////////////////////
//////////////////////////////////////////////////////////////

app.get('/api/similarity-scores', (req, res) => {
    if(similarity == 0){
        similarity = 30;
    }
    res.json(similarity);
});





// mongodb connection----------------------------------------------
let db = async()=>
{
    try{
        console.log(process.env.DBURI);
        await mongoose.connect(process.env.DBURI);
        console.log("connected to database");
    }
    catch(err)
    {
        console.log("error connecting");
    }

}
db();


app.listen(5000,()=>{console.log("Backend server listening at port http://localhost:5000")});


