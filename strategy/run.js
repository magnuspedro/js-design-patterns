require('./strategyMapper') 
const { instance: createUserStrategy } = require('./createUserStrategy')

console.log(createUserStrategy.findStrategy('Doctor').create("That's the truth"))
console.log(createUserStrategy.findStrategy('operator').create("Truth hurts"))
