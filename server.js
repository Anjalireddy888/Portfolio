// How NodeJs differs from vanilla Js
//1) Node runs on a server - not in a browser
//2) The console is the terminal window
console.log('hello world')
//3) global object instead of window object 
console.log(global);
//4) Has common core modules that we will explore
//5) commonJS modeules instead of ES6

const os = require('os');
const path = require('path')

console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname)
console.log(__filename)
console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))