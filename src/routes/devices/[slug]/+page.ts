import { API_URL } from '$lib/consts/consts';
import { useToken } from '$lib/helperFunctions';
import type { PageLoad } from './$types';

export const load = (async ({ fetch, params }) => {
	const getDeviceById = async () => {
		const res = await fetch(`${API_URL}device/${params.slug}`, {
			headers: useToken()
		});
		const result = await res.json();
		return result;
	};

	return {
		device: await getDeviceById()
	};
}) satisfies PageLoad;
