import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;


app.listen(port, () => {
    console.log(`listening on port no: ${port}.`);
});

app.get("/", (req, res) => {
    const day = new Date();
    const dayNo = day.getDay();
    let advice = "";
    switch(dayNo){
        case 0:
            advice ="Sunday - a day to explore the vast horizons of computer science, uncovering the beauty of algorithms and data structures.";
            break;
        case 1:
            advice = "Monday - the start of a new week in the realm of computer science, where ideas converge into innovative solutions.";
            break;
        case 2:
            advice = "Tuesday - the perfect day to turn code ideas into reality and embrace creativity in programming.";
            break;
        case 3:
            advice = "Wednesday - halfway through the coding week, staying focused and making progress.";
            break;
        case 4:
            advice = "Thursday - optimizing code, refining algorithms, and preparing for the weekend projects.";
            break;
        case 5:
            advice = "Friday - the fusion of creativity and coding, transforming concepts into software, painting digital canvases with precision.";
            break;
        case 6:
            advice = "Saturday - a day to experiment, tinker with code, and push the boundaries of what's possible in the world of computer science.";
            break;
    };
    
    res.render(__dirname + "/views/index.ejs", {
        quote: advice
    });
});








