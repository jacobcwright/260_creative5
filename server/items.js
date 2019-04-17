const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const auth = require("./auth.js");

const users = require("./users.js");
const User = users.model;

const listItemSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User' 
    },
    type: String,
    text: String,
    created: {
        type: Date,
        default: Date.now,
      }
});

const listItem = mongoose.model("listItem", listItemSchema);

router.get('/', /*auth.verifyToken, User.verify,*/ async (req, res) => {
    try {
      console.log(req.query.user);
      let list = await listItem.find({
        user: req.query.user,
      });
      console.log(list);
      return res.send(list);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });
  
  router.post('/', async (req, res) => {
    const item = new listItem({
      user: req.body.user,
      type: req.body.type,
      text: req.body.text
    });
    try {
      await item.save();
      res.send(item);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });
  
  // router.delete('/:id', auth.verifyToken, async (req, res) => {
  //     try {
  //     await listItem.deleteOne({
  //       _id: req.params.id
  //     });
  //     res.sendStatus(200);
  //   } catch (error) {
  //     console.log(error);
  //     res.sendStatus(500);
  //   }
  // });

  router.delete('/todo', auth.verifyToken, async (req, res) => {
    console.log('in delete todo');
    try {
    await listItem.deleteMany({
      "type": "Todo"
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.delete('/note', auth.verifyToken, async (req, res) => {
  console.log('in delete note');
  try {
  await listItem.deleteMany({
    type: "Note"
  });
  res.sendStatus(200);
} catch (error) {
  console.log(error);
  res.sendStatus(500);
}
});

router.delete('/goal', auth.verifyToken, async (req, res) => {
  console.log('in delete goal');
  try {
  await listItem.deleteMany({
    type: "Goal"
  });
  res.sendStatus(200);
} catch (error) {
  console.log(error);
  res.sendStatus(500);
}
});

router.delete('/gratitude', auth.verifyToken, async (req, res) => {
  console.log('in delete gratitude');
  try {
  await listItem.deleteMany({
    type: "Gratitude"
  });
  res.sendStatus(200);
} catch (error) {
  console.log(error);
  res.sendStatus(500);
}
});
  
  module.exports = router;