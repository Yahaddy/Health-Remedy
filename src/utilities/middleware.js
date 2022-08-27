const requestLogger = (req, res, next) => {
console.log('method:', req.method)
console.log('path:', req.path)
console.log('Body:', req.body)
}

const unknownEndPoint = (req, res) => {
    res.status(404).sent({
        error: 'unknown endpoint'
    })
}
module.exports = {
    requestLogger,
    unknownEndPoint
}
