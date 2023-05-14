
export const BASE_URL = "https://mayitakeyourorder.user5829.repl.co";

export async function get_user(uuid) {
  let resp = await fetch(`${BASE_URL}/user/${uuid}`);
	return await resp.json();
}

//add or replace user
export async function add_user(user_info) {
  let resp = await fetch(`${BASE_URL}/add_user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user_info)
  });
	return await resp.json();
}

export async function remove_user(user_id, password) {
  let resp = await fetch(`${BASE_URL}/delete_user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_id,
      password
    })
  });
	return await resp.json();
}
