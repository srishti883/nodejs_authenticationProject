const express = require("express");
const mongoose = require("mongoose");
const cors  = require("cors");
const apiRoutes = require('./routes')
const { json } = require("express");
  
const app = express();
const port  = 9000;
const uri = "mongodb+srv://toDoAppUser:todo123@cluster1.krcjd3a.mongodb.net/growcoders?retryWrites=true&w=majority"

const connectWithDb = async () => {
    try {
        await mongoose.connect(uri)
        console.log("database connected");
    } catch {
        console.log("error while connectiong");
    }
}
connectWithDb();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api',apiRoutes);

app.listen(port,()=>{
    console.log("server started");
})

