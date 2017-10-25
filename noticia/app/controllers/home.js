module.exports.index = function(app, req, res){
  var connection = app.config.dbConnection();
  var notciasModel = new app.app.models.NoticiasDAO(connection);
  notciasModel.getUltimasNoticias(function(error, result){
    res.render('home/index', {noticias: result});
  });
}
