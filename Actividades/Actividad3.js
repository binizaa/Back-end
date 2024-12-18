/** Node project */

const randomIntArrayRange = (n = 1) => 
    Array.from(
        {length: n },
        () => Math.floor(Math.random() * (20) + 1)
    )

function countFrequency(numbers){
    return new Promise((resolve, reject) => {
        const frecuency =  {}
        for(let number of numbers){
            if(frecuency[number]) frecuency[number]++ //The keys are always string
            else frecuency[number] = 1
        }

        resolve(frecuency)
    })
}

const randomNumberQuantity = 10000

const numbers = randomIntArrayRange(randomNumberQuantity)

console.log("Numbers have alredy generated")

console.log({numbers})

const run = async () => {
    const frecuency = await countFrequency(numbers)
    console.log({frecuency})
}

run()