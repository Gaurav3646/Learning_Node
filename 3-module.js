// Modules - Encapsulated Code (only share minimum)

// CommonJS every file is module (by default)
const names = require('./4-name')
console.log(names)
const sayHi = require('./5-utils')
const data = require('./6-alternative-flaver')
console.log(data)
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
require('./7-mind-grinade')

