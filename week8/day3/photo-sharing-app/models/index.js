'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const { User, Photo } = require('./models');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

app.post('/users', async (req, res) => {
  // req.body contains an Object with firstName, lastName, email
  const { firstName, lastName, email } = req.body;
  const newUser = await User.create({
      firstName,
      lastName,
      email
  });
  
  // Send back the new user's ID in the response:
  res.json({
      id: newUser.id
  });
})

app.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

app.get('/users/by-last-name', async (req, res) => {
  const users = await User.findAll({
      attributes: ['lastName']
  });
  res.json(users);
});

app.get('/users/:id', async (req, res) => {
  try{
      const oneUser = await User.findByPk(req.params.id);
      res.json(oneUser);
  } catch (e) {
      console.log(e);
      res.status(404).json({
          message: 'User not found'
      });
  }
});

app.post('/users/search', async (req, res) => {
  const users = await User.findAll({
      where: {
          firstName: req.body.term,
      }
  });
  res.json(users);
});

app.post('/users/search', async (req, res) => {
  const users = await User.findAll({
      where: {
          [Sequelize.Op.or]: [
              { 
                  firstName: req.body.term,
                  lastName: req.body.term
              }
          ]
      }
  });
  res.json(users);
});

app.post('/users/:id', async (req, res) => {
  const { id } = req.params;
  
  // Assuming that `req.body` is limited to
  // the keys firstName, lastName, and email
  const updatedUser = await User.update(req.body, {
    where: {
      id
    }
  });
  
  res.json(updatedUser);
});

app.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  const deletedUser = await User.destroy({
      where: {
          id
      }
  });
  res.json(deletedUser);
});

app.get('/users/photos', async (req, res) => {
  const users = await User.findAll({
      include: [{
          model: Photo
      }]
  });
  res.json(users);
});

app.post('/users/search', async (req, res) => {
  const users = await User.findAll({
      where: {
          [Sequelize.Op.or]: [
              { 
                  firstName: req.body.term,
                  lastName: req.body.term
              }
          ]
      },
      include: [{
          model: Photo
      }]
  });
  res.json(users);
});

app.get('/photos/users', async (req, res) => {
  const photos = await Photos.findAll({
      include: [{
          model: User
      }]
  });
  res.json(photos);
});