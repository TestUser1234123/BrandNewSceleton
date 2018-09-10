(function() {
    'use strict';
    
    let User = require('mongoose').model('User');
    let encryption = require('../helpers/encryption.js');
    let auth = require('../config/auth');

    module.exports = {
        getRegister: function(req, res, next) {
            res.render('users/register');
        },
        postRegister: function(req, res, next) {
            let salt = encryption.generateSalt();
            let user = {
                username: req.body.username,
                salt: salt,
                hashPass: encryption.generateHashedPassword(salt, req.body.password)
            };
            let newUser = new User(user);

            newUser.save(function(err) {
                if (err) return console.log(err);
                res.redirect('/');
            });
        },
        login: function(req, res, next) {
            auth.login(req, res, next);
        },
        logout: function(req, res, next) {
            auth.logout(req, res, next);
        }
    };
}());