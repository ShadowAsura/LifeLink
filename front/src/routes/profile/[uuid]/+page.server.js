import { get_user } from '$lib/api.js';

export async function load({ params }) {
	let resp = await get_user(params.uuid);
	if (resp.error) {
		//todo: return 404
		//
	}
	return {
    uuid: params.uuid,
		user_info: resp
	};
}
