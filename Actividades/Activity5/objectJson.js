const fs = require('fs')

const readPackageJSON = async () => {
    try {
        const contentStr = await fs.promises.readFile('./package.json', 'utf-8')
        console.log(contentStr)
        
        const contentObj = JSON.parse(contentStr) //Object
        const stats = await fs.promises.stat('./package.json')

        const info = {
            contentStr,
            contentObj,
            size: stats.size
        }

        await fs.promises.writeFile('./info.json', JSON.stringify(info), 'utf-8')
    } catch (error) {
        console.log(error)
    }
}

readPackageJSON()