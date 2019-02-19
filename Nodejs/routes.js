
module.exports = function(app) {
    let customer = require('./MovieController');
  
    // todoList Routes
    app.route('/movie')
      .get(customer.get)
      .post(customer.store);
  
    app.route('/movie/:movieId')
      .get(customer.detail)
      .put(customer.update)
      .delete(customer.delete);
  };