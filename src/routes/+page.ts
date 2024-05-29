import type { IUserCreate } from '$lib';
import { API_URL } from '$lib/consts/consts';
import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	const registerUser = async (obj: IUserCreate) => {
		try {
			const res = await fetch(`${API_URL}user/create`, {
				method: 'POST',
				body: JSON.stringify(obj),
				headers: {
					'Content-Type': 'application/json;charset=utf-8'
				}
			});
			let result = await res.json();
			return result;
		} catch (e: any) {
			alert(e.message);
		}
	};

	return {
		registerUser: registerUser
	};
}) satisfies PageLoad;
