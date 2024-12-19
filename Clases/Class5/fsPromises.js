const fs = require('fs')

const asyncOperations = async () => {
    try {
        await fs.promises.writeFile('./promiseArchive.txt', 'Hola desde promesas', 'utf-8')
        let result = await fs.promises.readFile('./promiseArchive.txt', 'utf-8') 
        console.log(result)

        await fs.promises.appendFile('./promiseArchive.txt', 'Mas info')
        result = await fs.promises.readFile('./promiseArchive.txt', 'utf-8') 
        console.log(result)

        await fs.promises.unlink('./promiseArchive.txt')
    } catch (error) {
        console.log(error)
    }
}

asyncOperations()