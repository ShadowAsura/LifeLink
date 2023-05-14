const mongo = require('./mongo.js');

let db = mongo.getDb();
let user_info;

db.then((db) => {
	console.log("Connected to DB");
  user_info = db.collection("user_info"); 
});

/*user info schema
{
  user_id: string uuid,
  password: string hashed password,
  emergency_contacts: [
    {
      name: string,
      phone: string,
      notes: string
    }
    ...
  ]
  conditions: string[],
  allergies: [
    {
      name: string,
      type: string (food or drug)
    }
    ...
  ],
  current_meds: string[],
  has_epipen: boolean
}
*/

async function get_user_info(user_id) {
  return await user_info.findOne({
    user_id
  });
}

async function add_user_info(user_info) {
  let info_exists = await get_user_info(user_info.user_id);
  if (info_exists) {
    if (info_exists.password === user_info.password) {
      await user_info.replaceOne({
        user_id: user_info.user_id
      }, user_info);
      return true;
    } else {
      return false;
    }
  } else {
    await user_info.insertOne(user_info);
    return true;
  }
}

async function delete_user_info(user_id) {
  await user_info.deleteOne({
    user_id
  });
}

module.exports = {
  add_user_info: add_user_info,
  get_user_info: get_user_info,
  delete_user_info: delete_user_info
}
