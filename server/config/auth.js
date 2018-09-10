(function() {
    'use strict';

    let passport = require('passport');

    module.exports = {
        login: function(req, res, next) {
            let auth = passport.authenticate('local', function(err, user) {
                if (err) {
                    return next(err);
                }

                if (!user) {
                    console.log('Invalid Username or Password!');
                    req.session.error = 'Invalid Username or Password!';
                    res.redirect('/register')
                }

                req.logIn(user, function(err) {
                    if (err) {
                        return next(err);
                    }
                    res.redirect('/courses');
                })
            });

            auth(req, res, next);
        },
        logout: function(req, res, next) {
            req.logout();
            res.redirect('/');
        },
        isAuthenticated: function(req, res, next) {
            if (!req.isAuthenticated()) {
                res.status(403);
                res.render('shared/unathorized');
            }
            else {
                next();
            }
        }
    };
}());