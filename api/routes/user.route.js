const express = require('express');
const app = express();
const userRoutes = express.Router();

// Require User model in our routes module
let User = require('../models/User');

// CREATE THIS ONE WORKS
userRoutes.route('/add').post(function (req, res) {
  let user = new User(req.body);
  user.save()
    .then(user => {
      res.status(200).json({'user': 'user in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});


// Defined get data(index or listing) route
userRoutes.route('/').get(function (req, res) {
    User.find(function (err, users){
    if(err){
      console.log(err);
    }
    else {
      res.json(users);
    }
  });
});

// Defined get data(SHOW ONE) route
userRoutes.route('/detail/:id').get(function (req, res) {
  let id = req.params.id;
  User.findById(id, function (err, user){
      res.json(user);
  });
});


// Defined edit route
userRoutes.route('/detail/:id/edit').get(function (req, res) {
  let id = req.params.id;
  User.findById(id, function (err, user){
      res.json(user);
  });
});

//  Defined update route
userRoutes.route('/update/:id').post(function (req, res) {
    User.findById(req.params.id, function(err, user) {
    if (!user)
      return next(new Error('Could not load Document'));
    else {
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.phoneNum = req.body.phoneNum;
        user.email = req.body.email;

        user.save().then(user => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
userRoutes.route('/delete/:id').get(function (req, res) {
    User.findOneAndDelete({_id: req.params.id}, function(err, user){
        if(err) {
          res.json(err);
          }
        else res.json('Successfully removed');
        // else res.status(status, err).json(user, 'Success on delete');
    });
});



module.exports = userRoutes;