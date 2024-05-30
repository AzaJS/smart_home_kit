import { API_URL } from '$lib/consts/consts';
import { useToken } from '$lib/helperFunctions';
import type { PageLoad } from './$types';

export const load = (async ({fetch, params}) => {
    const createRoom = async (id: number) => {
        const res = await fetch(`${API_URL}rooms/${id}`, {
            method: "POST",
            headers: useToken()
        })
        const result = await res.json();
        return result;
    }

    const deleteRoom = async (id: number) => {
		const res = await fetch(`${API_URL}rooms/delete/${id}`, {
			method: 'DELETE',
			headers: useToken()
		});
        const result = res.json();
        return result;
	};
    return {
        createRoom,
        deleteRoom
    };
}) satisfies PageLoad;