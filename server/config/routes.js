(function() {
    let controllers = require('../controllers');

    module.exports = function(app) {
        // this middleware ensures that the user is displayed all the time when logged in, despire the page they are on
        app.all("*", function(req, res, next) {
            res.locals.currentUser = req.user;
            next();
        });
        
        app.get('/courses', controllers.courses.getAllCourses);
        app.get('/courses/add', controllers.courses.getAddCourse);
        app.get('/courses/:id', controllers.courses.getCourseById);
        app.post('/courses/add', controllers.courses.postCourse);
        app.post('/courses/delete', controllers.courses.deleteCourse);

        app.get('/register', controllers.users.getRegister);
        app.post('/register', controllers.users.postRegister);
        app.post('/login', controllers.users.login);
        app.get('/logout', controllers.users.logout);


        app.get('*', function(req, res) {
            res.render('index');
        });
    }
}());