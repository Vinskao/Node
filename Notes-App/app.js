const validator = require('validator')

const getNotes = require('./notes.js')

const msg = getNotes()

console.log(msg);

console.log(validator.isEmail('tianyikao@gmail.com'))

console.log(validator.isURL('https/melae.com'))


// const greenMsg = chalk.green.inverse.bold('succ')

// console.log(greenMsg)

