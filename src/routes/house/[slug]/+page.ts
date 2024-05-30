import type { ICreateHouse } from '$lib';
import { API_URL } from '$lib/consts/consts';
import { useToken } from '$lib/helperFunctions';
import type { PageLoad } from './$types';

export const load = (async ({ fetch, params }) => {
	const createHouse = async (obj: ICreateHouse) => {
		const res = await fetch(`${API_URL}house/create`, {
			method: 'POST',
			body: JSON.stringify(obj),
			headers: useToken()
		});
		const result = await res.json();
        return result;
	};

	const deleteHouse = async (id: number) => {
		const res = await fetch(`${API_URL}house/delete/${id}`, {
			method: 'DELETE',
			headers: useToken()
		});
        const result = res.json();
        return result;
	};

	return {
		createHouse,
        deleteHouse
	};
}) satisfies PageLoad;
