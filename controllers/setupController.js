var Todos = require('../models/todoModel');

module.exports = function(app){
    app.get('/api/seedData', function(req,resp) {
        var todos = [
            {
                username:'test',
                todo: 'Buy milk',
                isDone: false,
                hasAttachement: false
            },
            {
                username:'test',
                todo: 'Buy cheese',
                isDone: false,
                hasAttachement: false
            },
            {
                username:'test',
                todo: 'LearnNodeJS',
                isDone: false,
                hasAttachement: false
            }
        ];
        Todos.create(todos)
        .then((result) => {
            resp.send(result);
        });
    });
};