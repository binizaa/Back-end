console.log("Hola mundo")

/** Asincronico */
for(let i=1; i<=5; i++) console.log(i);
console.log("\n")

/** SetTimeout */
setTimeout(() => { //Prints it after 3 sec.
    for(let i=1; i<=5; i++) console.log(i);
},100)

console.log("Program has ended")
console.log("\n")

/** SetInternal */
let cnt = 0

const interval = setInterval(() => { 
    console.log("Hola intervalo")
    cnt++
    
    if(cnt === 5) clearInterval(interval)
},3000)

console.log("Program has ended")
console.log("\n")