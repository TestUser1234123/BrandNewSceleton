(function() {
    let usersController = require('./usersController'),
        coursesController = require('./coursesController');

    module.exports = {
        users: usersController,
        courses: coursesController
    }
}());