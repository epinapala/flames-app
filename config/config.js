
var path = require('path')
  , rootPath = path.normalize(__dirname + '/..')
  , templatePath = path.normalize(__dirname + '/../app/mailer/templates');

module.exports = {
  development: {
    db: 'mongodb://localhost/flames',
    root: rootPath,
    app: {
      name: 'Flames app'
    },
    facebook: {
      clientID: "880079248740493",
      clientSecret: "7244ef3513c26ef0fad8fd969f35b597",
      callbackURL: "http://flames.local:3000/auth/facebook/callback"
    },
    twitter: {
      clientID: "CONSUMER_KEY",
      clientSecret: "CONSUMER_SECRET",
      callbackURL: "http://APP_URL/auth/twitter/callback"
    },
    github: {
      clientID: 'APP_ID',
      clientSecret: 'APP_SECRET',
      callbackURL: 'http://APP_URL/auth/github/callback'
    },
    google: {
      clientID: "APP_ID",
      clientSecret: "APP_SECRET",
      callbackURL: "http://APP_URL/auth/google/callback"
    },
  },
  test: {
    db: 'mongodb://localhost/flames_test',
    root: rootPath,
    app: {
      name: 'Flames Test'
    },
    facebook: {
      clientID: "880079248740493",
      clientSecret: "7244ef3513c26ef0fad8fd969f35b597",
      callbackURL: "http://flames.local:3000/auth/facebook/callback"
    },
    twitter: {
      clientID: "CONSUMER_KEY",
      clientSecret: "CONSUMER_SECRET",
      callbackURL: "http://localhost:3000/auth/twitter/callback"
    },
    github: {
      clientID: 'APP_ID',
      clientSecret: 'APP_SECRET',
      callbackURL: 'http://localhost:3000/auth/github/callback'
    },
    google: {
      clientID: "APP_ID",
      clientSecret: "APP_SECRET",
      callbackURL: "http://localhost:3000/auth/google/callback"
    }
  },
  production: {
    db: 'mongodb://localhost/flames',
    root: rootPath,
    app: {
      name: 'Flames app'
    },
    facebook: {
      clientID: "880079248740493",
      clientSecret: "7244ef3513c26ef0fad8fd969f35b597",
      callbackURL: "http://flames.local:3000/auth/facebook/callback"
    },
    twitter: {
      clientID: "CONSUMER_KEY",
      clientSecret: "CONSUMER_SECRET",
      callbackURL: "http://APP_URL/auth/twitter/callback"
    },
    github: {
      clientID: 'APP_ID',
      clientSecret: 'APP_SECRET',
      callbackURL: 'http://APP_URL/auth/github/callback'
    },
    google: {
      clientID: "APP_ID",
      clientSecret: "APP_SECRET",
      callbackURL: "http://APP_URL/auth/google/callback"
    },
  }
}
