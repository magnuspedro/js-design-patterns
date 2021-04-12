const CreateUserStrategy = function () {
    this.strategies = {}
}

CreateUserStrategy.prototype = {
    createStrategies: (strategies) => {
        this.strategies = strategies
    },
    findStrategy: (strategyName) => {
        return this.strategies[strategyName] 
    },
    create: (param) => this.strategy.create(param)
}

instance = new CreateUserStrategy()

module.exports = {
    instance
}
