const { CreateOperatorStrategy } = require('./createOperatorStrategy') 
const { CreateDoctorStrategy } = require('./createDoctorStrategy')
const { instance: createUserStrategy } = require('./createUserStrategy')

const strategies = {
    operator: new CreateOperatorStrategy(),
    doctor: new CreateDoctorStrategy()
}

createUserStrategy.createStrategies(strategies)

module.exports = strategies