const CreateUserStrategy = function () {
    this.strategies = {}
}

CreateUserStrategy.prototype = {
    createStrategies: (strategies) => {
        this.strategies = toLowerCase(strategies) 
    },
    findStrategy: (strategyName) => {
        return this.strategies[strategyName.toLowerCase()] 
    }
}

//! It has to be an Utils function
const toLowerCase = (strategies) => {
    const strategiesTemp = {}
    Object.keys(strategies).map((keys) => {return strategiesTemp[keys.toLocaleLowerCase()] = strategies[keys]})
    return strategiesTemp
}

instance = new CreateUserStrategy()

module.exports = {
    instance
}
