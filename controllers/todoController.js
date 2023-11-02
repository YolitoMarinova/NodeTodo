const { response } = require('express');
var Todos = require('../models/todoModel');
var bodyParser = require('body-parser');

module.exports = function(app){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true}));

    app.get('/api/todos/:uname', function(req, res){
        Todos.find({username: req.params.uname})
        .then((result) => { 
            res.send(result);
        })
        .catch((err) => {
            if(err) throw err;
        });
    });

    app.get('/api/todo/:id', function(req, res){
        Todos.findById({_id: req.params.id})
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            if(err) throw err;
        });
    });

    app.post('/api/todo3', function(req, res){
        if(req.body.id) {
            Todos.findByIdAndUpdate(req.body.id, {
                todo: req.body.todo,
                isDone: req.body.isDone, 
                hasAttachment: req.body.hasAttachment
            })
            .then(() => {
                res.send('Success')
            })
            .catch((err) => {
                if(err) throw err;
            });
        }
        else {
            var newTodo = Todos({
                username: 'test',
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            });
            newTodo.save()
            .then(() => {
                res.send('Success')
            })
            .catch((err) => {
                if(err) throw err;
            });
        }
    });

    app.delete('/api/todo', function(req, res) {
        Todos.findByIdAndRemove(req.body.id)
        .then(() => {
            res.send('Success')
        })
        .catch((err) => {
            if(err) throw err;
        });
    });
};