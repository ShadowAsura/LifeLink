const mongo = require('./mongo.js');

let db = mongo.getDb();
let users;

db.then((db) => {
	console.log("Connected to DB");
  users = db.collection("user_info"); 
});

async function get_user_info(user_id) {
  return await users.findOne({
    user_id
  });
}

async function add_user_info(user_info) {
  let info_exists = await get_user_info(user_info.user_id);
  if (info_exists) {
    if (info_exists.password === user_info.password) {
      await users.replaceOne({
        user_id: user_info.user_id
      }, user_info);
      return true;
    } else {
      return false;
    }
  } else {
    console.log(user_info)
    console.log(user_info.insertOne)
    await users.insertOne(user_info);
    return true;
  }
}

async function delete_user_info(user_id) {
  await users.deleteOne({
    user_id
  });
}

module.exports = {
  add_user_info: add_user_info,
  get_user_info: get_user_info,
  delete_user_info: delete_user_info
}
