const fs = require('fs'); // Import module

/** File sistem syncroni */
fs.writeFileSync('./example.txt', 'Hello world');

if (fs.existsSync('./example.txt')) {
    let content = fs.readFileSync('./example.txt', 'utf-8');
    console.log({ content });

    fs.appendFileSync('./example.txt', 'Adding information');

    content = fs.readFileSync('./example.txt', 'utf-8');
    console.log({ content });

    fs.unlinkSync("./example.txt")
}

/** File sytem Callback y asincronico
 * 
 * Callback hell
 * NO RECOMENDADO
*/

fs.writeFile('./exampleCallback.txt', 'Hello world from callback', (error) => {
    if (error) {
        return console.error("Could not write the file");
    }

    fs.readFile('./exampleCallback.txt', 'utf-8', (error, result) => {
        if (error) {
            console.error("Could not read the file");
        }

        console.log({ content: result });

        fs.appendFile('./exampleCallback.txt', ' More info', (error) => {
            if (error) {
                console.error("Could not add information to the file");
            }

            fs.readFile('./exampleCallback.txt', 'utf8', (error, result) => {
                if (error) {
                    console.error("Could not read the file");
                }
                console.log({ result });
                fs.unlink('./exampleCallback.txt', (error) => {
                    console.log("The archive doesn't eliminate")
                })
            });
        });
    });
});

console.log("Continued executing")
