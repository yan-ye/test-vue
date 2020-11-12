
module.exports = function (app) {
    require('./home')(app)
    require('./test')(app)
    
    app.use(function (req,res,next) {
        res.render('cstom');
    })
}