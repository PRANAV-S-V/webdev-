/* 
1. Use the inquirer npm package to get user input.

2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
var urlValue = "";
const questions = [
    {
        type: 'input',
        name: 'url-rel',
        message: "Paste the url!"
    },
]

inquirer.prompt(questions)
.then(answers => 
    {
        urlValue = answers["url-rel"];
        const qr_image = qr.image(urlValue);
        qr_image.pipe(fs.createWriteStream(`${urlValue}.png`));
        fs.writeFile(`${urlValue}.txt`, urlValue, (err) => {
            if (err) {
                console.error("Error writing to file:", err);
            } else {
                console.log("User input saved to user_input.txt");
            }
        });
        
    })
    .catch((error) => {
          console.log("Something went wrong.");
      });
