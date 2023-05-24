const args = process.argv.slice(2)  // starting from index 2 as the first 2 arguments are not required i.e. execution path and filename

for (let arg of args) {
    console.log(`Hello ${arg}`)
}