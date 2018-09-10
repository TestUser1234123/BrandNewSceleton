(function() {
    'use strict';

    let Course = require('mongoose').model('Course');

    module.exports = {
        getAllCourses: function(req, res, next) {
            Course.find({}).exec(function(err, collection) {
                if (err) {
                    console.log('Courses could not be loaded: ' + err);
                }
                let featured = collection.filter(function (c) {
                    return c.featured === true;
                });
                let nonfeatured = collection.filter(function (c) {
                    return c.featured === false;
                });
                let courses = { featured: featured, nonfeatured: nonfeatured };

                res.render('courses/all-courses', { courses: courses });
            });
        },
        getCourseById: function(req, res, next) {
            Course.findOne({_id: req.params.id}).exec(function(err, course) {
                if (err) {
                    console.log('Course could not be loaded: ' + err);
                }
    
                res.render('courses/details-course', {course: course});
            });
        },
        getAddCourse: function(req, res, next) {
            res.render('courses/add-course');
        },

        postCourse: function(req, res, next) {
            let title = req.body.title;
            let tags = req.body.tags.split(', ');
            let featured = false;
            if (req.body.featured === 'on') {
                featured = true;
            }
            let course = {
                title: title,
                tags: tags,
                featured: featured,
                published: new Date()
            };

            let newCourse = new Course(course);
            newCourse.save(function(err) {
                if (err) return console.log(err);
                res.redirect(newCourse._id);
            });
        },
        deleteCourse: function(req, res, next) {
            let id = req.body.id;
            Course.findOneAndDelete({_id: id}, function(err, data) {
                res.redirect('/courses');
            });
        }
    };
}());