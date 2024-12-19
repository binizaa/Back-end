const fs = require('fs')

const currentDate = new Date().toLocaleString()

const archiveName = 'fecha_hora.txt'

fs.writeFile(archiveName, currentDate, (error) => {
    if (error) console.log("The date could not be written");
    else console.log(`Date written successfully: ${currentDate}`);
});

