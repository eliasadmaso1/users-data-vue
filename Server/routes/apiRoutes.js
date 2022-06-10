const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/all',(req,res)=>{
    db.User.findAll().then(users => res.send(users))
});

router.get("/find/:userName", (req, res) => {
    db.User.findAll({
      where: {
        userName: req.params.userName
      }
    }).then(user => res.send(user));
  });
  

router.post('/new',(req,res)=>{
    db.User.create({
      userName:req.body.userName, 
      nickName:req.body.nickName,
      fullName:req.body.fullName,
      email:req.body.email,
      phoneNumber:req.body.phoneNumber,
      adress:req.body.adress,
      img:req.body.img,
      male:req.body.male
    }).then(newUser => res.send(newUser))
});

router.delete("/delete/:id", (req, res) => {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(() => res.send("user deleted"));
  });

  router.put("/edit", (req, res) => {
    db.User.update(
      {
        name: req.body.name
      },
      {
        where: { id: req.body.id }
      }
    ).then(() => res.send("user updated"));
  });

module.exports = router;