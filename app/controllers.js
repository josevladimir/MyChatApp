const users = require('./users');

function index(req,res){
    res.render('index',{validated: true});
}

function redirect(req,res){
    if(req.validate) return res.render('chat');
    return res.render('index',{validated: false});
}

function validate(req,res,next){
    req.validate = false;
    if(users.indexOf(req.body.username) == -1) req.validate = true;
    next();
}

module.exports = {
    index,
    validate,
    redirect
}