function index(req,res){
    res.render('index');
}

function chat(req,res){
    res.render('chat');
}

module.exports = {
    index,
    chat
}