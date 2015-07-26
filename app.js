var express  = require('express');
var app = express();



app.get('/flames/:fname?/:sname?', function(req, res) {
  var fname = req.query.fname;
  var sname = req.query.sname;
  console.log('First Name: ' + fname);
  console.log('First Name: ' + sname);
  var Flames = require('flames');

  console.log(Flames.getRelation(fname, sname));
  res.send({
  	success : true,
  	relation : Flames.getRelation(fname, sname)
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

app.listen(3002, function(){
	console.log("Listening on 3002");
});
