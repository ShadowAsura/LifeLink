const express = require("express");
const db = require("./db.js");
const utils = require("./utils.js");

const app = express();

app.get("/", (req, res) => {
  return res.send("Yo soy viven!!");
});

app.get("/user/:user_id", async (req, res) => {
  let user_info = await db.get_user_info(req.params.user_id);
  delete user_info.password;
  if (user_info) {
    return res.json(user_info);
  } else {
    return res.json({
      error: true,
    });
  }
});

app.post("/add_user", async (req, res) => {
  req.body.password = utils.hash(req.body.password);
  let added = await db.add_user_info(req.body);
  if (added) {
    return res.json({
      error: false
    });
  } else {
    return res.json({
      error: true
    });
  }
});

app.post("/delete_user", async (req, res) => {
  let hashed = utils.hash(req.body.password);
  let user_info = await db.get_user_info(req.body.user_id);
  if (!user_info) {
    return res.json({
      error: true,
    });
  }
  if (user_info.password === hashed) {
    await db.delete_user_info(req.body.user_id);
    return res.json({
      error: false
    });
  } else {
    return res.json({
      error: true
    });
  }
});

app.listen(1776, () => {
  console.log(`Example app listening on port 1776`);
});
