import type { ICreateRoom } from '$lib';
import { API_URL } from '$lib/consts/consts';
import { useToken } from '$lib/helperFunctions';
import type { PageLoad } from './$types';

export const load = (async ({fetch}) => {
    const createRoom = async (obj: ICreateRoom) => {
        const res = await fetch(`${API_URL}rooms/create`, {
            method: "POST",
            body: JSON.stringify(obj),
            headers: useToken()
        })
        console.log(res)
		const result = await res.json();
		console.log(result)
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

    const getAllRooms = async () => {
		const res = await fetch(`${API_URL}rooms/`, {
			headers: useToken()
		});
		const result = await res.json();
		return result;
	};

    return {
        // createRoom,
        deleteRoom,
        rooms: await getAllRooms()
    };
}) satisfies PageLoad;
