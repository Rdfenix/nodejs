module.exports.iniciaChat = function(app, req, res){
  var dataForm = req.body;
  req.assert('apelido', 'Nome ou apelido obrigatorio obrigatorio').notEmpty();
  req.assert('apelido', 'Nome ou apelido obrigatorio deve conter entre 3 e 15 caracteres').len(3,15);

  var erros = req.validationErrors();

  if(erros){
    res.render('index', {validation: erros});
    return;
  }
  res.render('chat');
};
