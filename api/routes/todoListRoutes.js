
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  app.route('/api/1.0/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);

  app.route('/api/1.0/tasks/:taskId')
    .get(todoList.get_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);
    
};
