import express  from "express";
import DefaultData from "./default.js";

import dotenv from "dotenv"
import bodyParser from "body-parser";
import cors from "cors"
// components
import Connection from "./database/db.js";
import Routes from "./routes/Routes.js"

dotenv.config();
const app= express();

app.use(bodyParser.json({extended:true } ) );
app.use(bodyParser.urlencoded( {extended:true}  ) );
app.use( cors() );
app.use("/",Routes )


const PORT =  process.env.PORT || 9000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username , password );

app.listen( PORT , () =>{
    console.log(`server is running at ${PORT} ` )
}   )
// default data to database
DefaultData();
