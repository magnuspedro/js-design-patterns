const { CreateOperatorStrategy } = require('./createOperatorStrategy') 
const { CreateDoctorStrategy } = require('./createDoctorStrategy')
const { instance: createUserStrategy } = require('./createUserStrategy')

const strategies = {
    Operator: new CreateOperatorStrategy(),
    Doctor: new CreateDoctorStrategy(),
}

createUserStrategy.createStrategies(strategies)

module.exports = strategies