const controller = require('../controllers/test')

module.exports = function (app) {
    app.get('/test',controller.index)
}