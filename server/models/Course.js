(function() {
    'use strict';

    let mongoose = require('mongoose');

    let Schema = mongoose.Schema;

    module.exports.init = function() {
        let coursesSchema = new Schema({
            title: String,
            featured: Boolean,
            published: Date,
            tags: [String]
        });
    
        let Course = mongoose.model('Course', coursesSchema);

        Course.find({}).exec(function(err, collection) {
            if (err) {
                console.log('Cannot find courses: ' + err);
                return;
            }

            if (collection.length === 0) {
                Course.create({title: 'C# Part 1', featured: true, published: new Date('10/5/2013'), tags: ['C#']});
                Course.create({title: 'C# Part 2', featured: true, published: new Date('10/12/2013'), tags: ['C#']});
                Course.create({title: 'Super Expert C#', featured: false, published: new Date('10/1/2013'), tags: ['C#']});
                Course.create({title: 'Visual Basic for Visual Basic Developers', featured: false, published: new Date('7/12/2013'), tags: ['VB']});
                Course.create({title: 'C++', featured: true, published: new Date('1/1/2013'), tags: ['C++']});
                Course.create({title: 'JavaScript for Everyone', featured: true, published: new Date('10/13/2013'), tags: ['JS']});
                Course.create({title: 'Design Patterns', featured: true, published: new Date('3/1/2013'), tags: ['Coding']});
                Course.create({title: 'Code Reviews', featured: true, published: new Date('2/1/2013'), tags: ['Coding']});
                Course.create({title: "Writing Code", featured: true, published: new Date('10/13/2013'), tags: ['Coding']});
                Course.create({title: 'Code Reviews Part 2', featured: false, published: new Date('10/1/2013'), tags: ['Coding']});
            }
        });
    };
}());