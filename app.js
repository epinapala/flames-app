var express = require('express'),
    app = express(),
    //Passport Facebook Configuration
    passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy,
    //Use Flames
    Flames = require('flames');

passport.use(new FacebookStrategy({
    clientID: '937190093011617',
    clientSecret: '5adca8a327761027f2ce729ff5694889',
    callbackURL: "http://localhost:3002/users"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));

// Redirect the user to Facebook for authentication.  When complete,
// Facebook will redirect the user back to the application at
//     /auth/facebook/callback
app.get('/auth/facebook', passport.authenticate('facebook'));

// Facebook will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.
app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/',
                                      failureRedirect: '/login' }));
/**
 * By Path params
 */
app.get('/flames/:fname/:sname', function(req, res) {
  var fname = req.params.fname;
  var sname = req.params.sname;
  console.log('First Name: ' + fname);
  console.log('First Name: ' + sname);

  console.log(Flames.getRelation(fname, sname));
  res.send({
  	success : true,
  	relation : Flames.getRelation(fname, sname)
  });
});
/**
 * By query params
 */
app.get('/flames', function(req, res) {
    var fname = req.query.fname;
    var sname = req.query.sname;

    console.log('First Name: ' + fname);
    console.log('First Name: ' + sname);

    console.log(Flames.getRelation(fname, sname));
    res.send({
        success : true,
        relation : Flames.getRelation(fname, sname)
    });
});



app.get('/users', function(req, res) {
    res.send({ success: true, status: 'User ' +  req.user +' logged' +
    ' in using facebook' });
    return;
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
