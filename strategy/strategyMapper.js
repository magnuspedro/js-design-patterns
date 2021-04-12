const { CreateOperatorStrategy } = require('./createOperatorStrategy') 
const { CreateDoctorStrategy } = require('./createDoctorStrategy')
const { createUserStrategy } = require('./createUserStrategy')

const strategies = {
    Operator: new CreateOperatorStrategy(),
    Doctor: new CreateDoctorStrategy(),
}

createUserStrategy.createStrategies(strategies)
