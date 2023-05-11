class UrlNotDefined extends Error {
    constructor () {
        super()
        this.name = 'UrlNotDefined'
    }
}

module.exports = UrlNotDefined