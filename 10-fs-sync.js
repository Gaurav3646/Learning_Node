const { readFileSync, writeFileSync } = require('fs')
//or
console.log('start');
// const fs = require('fs')
// const readFileSync = fs.readFileSync()
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync('./content/result-sync.txt', `Here is my result: ${first}, ${second}`)
// want to append
writeFileSync('./content/result-sync.txt', `Here is my result: ${first}, ${second}`, {flag: 'a'})
console.log(first, second);
console.log('done with this task');
console.log('starting next task');