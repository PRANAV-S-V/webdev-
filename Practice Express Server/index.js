import express from 'express';

const app = express();

app.get("/", (req, res)=> {
    res.send("Welcome to the world of <b>Mark Antony.</b>")
})

app.listen(3000, ()=>{
    console.log("The server is running");
})