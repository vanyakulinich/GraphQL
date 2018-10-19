import Sequelize from 'sequelize';
const sequelize = new Sequelize('testdb', 'postgres', 'postgres', {
  dialect: 'postgres',
  operatorsAliases: false
});
export const Todos = sequelize.define('todos', {
  name: {type: Sequelize.STRING},
  isDone: {type: Sequelize.BOOLEAN}
});

sequelize
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));

export const findAllTodos = () => Todos.findAll({order: ['createdAt']}).then(list => list ? list : [])
