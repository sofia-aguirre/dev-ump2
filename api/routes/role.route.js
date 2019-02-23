const express = require('express');
const app = express();
const roleRoutes = express.Router();

// Require User model in our routes module
let Role = require('../models/Role');

// CREATE THIS ONE WORKS
roleRoutes.route('/add').post(function (req, res) {
  let role = new Role(req.body);
  role.save()
    .then(role => {
      res.status(200).json({'role': 'role in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});


// Defined get data(index or listing) route
roleRoutes.route('/').get(function (req, res) {
    Role.find(function (err, roles){
    if(err){
      console.log(err);
    }
    else {
      res.json(roles);
    }
  });
});

// Defined get data(SHOW ONE) route
roleRoutes.route('/detail/:id').get(function (req, res) {
  let id = req.params.id;
  Role.findById(id, function (err, role){
      res.json(role);
  });
});


// Defined edit route
roleRoutes.route('/detail/:id/edit').get(function (req, res) {
  let id = req.params.id;
  Role.findById(id, function (err, role){
      res.json(role);
  });
});

//  Defined update route
roleRoutes.route('/update/:id').post(function (req, res) {
    Role.findById(req.params.id, function(err, role) {
    if (!role)
      return next(new Error('Could not load Document'));
    else {
        role.roleId = req.body.roleId;
        role.roleName = req.body.roleName;
        role.perm1 = req.body.perm1;
        role.perm2 = req.body.perm2;
        role.perm3 = req.body.perm3;
        role.perm4 = req.body.perm4;
        role.perm5 = req.body.perm5;
        role.perm6 = req.body.perm6;

        role.save().then(role => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
roleRoutes.route('/delete/:id').get(function (req, res) {
    Role.findOneAndDelete({_id: req.params.id}, function(err, role){
        if(err) {
          res.json(err);
          }
        else res.json('Successfully removed');
        // else res.status(status, err).json(role, 'Success on delete');
    });
});

module.exports = roleRoutes;