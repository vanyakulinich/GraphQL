const Sequelize = require('sequelize');
const sequelize = new Sequelize('testdb', 'postgres', 'postgres', {
  dialect: 'postgres',
});
const Todos = sequelize.define('todos', {
  name: {type: Sequelize.STRING},
  isDone: {type: Sequelize.BOOLEAN}
});

sequelize
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));

const findAllTodos = () => Todos.findAll({order: ['createdAt']}).then(list => list)

const db = {
  Todos,
  findAllTodos,
}

module.exports = db;