// Modules
// CommonJS, every file is a module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-names')
const sayHi = require('./5-util')
// @ts-ignore
require('./7-mind-grenade')
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)