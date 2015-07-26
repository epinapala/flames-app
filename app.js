var express  = require('express');
var app = express();


app.get('/',function(req,res){
	res.send('<h1>Flames Application </h1>');

});

app.get('/users/:name', function(req, res) {
  var name = req.params.name;

  res.send({
  	success : true,
  	user : name
  });
});


app.post('/users', function(req, res) {
  var user = req.body;

  console.log(user);

  if (!user || !user.name) {
    res.send({ success: false, reason: 'cannot create user (missing user name)' });
    return;
  }

  res.send({ success: true, user: user })

});

app.listen(3000, function(){
	console.log("Listening on 3000");
});