const shortid = require('shortid')

const createGiftCardRequest = (request) => {
    const {partnerId, amount, currencyCode, creationRequestId} = request

    return {
        creationRequestId,
        partnerId,
        value: {
            amount,
            currencyCode,
        },
    }
}

const getEndpoint = (endpoint, endpoints, environment) => {
    return endpoints.find(obj => obj.location === endpoint && obj.environment === environment)
}

module.exports = {
    createGiftCardRequest,
    getEndpoint,
}
