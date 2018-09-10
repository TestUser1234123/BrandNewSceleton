(function() {
    'use strict';

    let mongoose = require('mongoose'),
        encryption = require('../helpers/encryption');

    let Schema = mongoose.Schema;

    module.exports.init = function() {
        let userSchema = new Schema({
            username: {
                unique: true,
                type: String,
                validate: function (input) {
                    return /[0-9A-z]{6,}/.test(input);
                },
                required: true,
                require: '{PATH} is required',
                message: '{PATH} is not a valid username'
            },
            salt: String,
            hashPass: String
        });

        userSchema.method({
            authenticate: function(password) {
                if (encryption.generateHashedPassword(this.salt, password) === this.hashPass) {
                    return true;
                }
                else {
                    return false;
                }
            }
        });

        let User = mongoose.model('User', userSchema);
    };
}());