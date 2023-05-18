class EmailNotVerified extends Error {
    constructor () {
        super()
        this.name = 'EmailNotVerified'
    }
}

module.exports = EmailNotVerified