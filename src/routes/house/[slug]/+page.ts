import type { ICreateHouse, ICreateRoom } from '$lib';
import { API_URL } from '$lib/consts/consts';
import { useToken } from '$lib/helperFunctions';
import type { PageLoad } from './$types';

export const load = (async ({ fetch, params }) => {
	const getDevicesInTheHouse = async () => {
		const res = await fetch(`${API_URL}house/withDevices/${params.slug}`, {
			headers: useToken()
		});
		const result = await res.json();
		// console.log(result)
		return result;
	};

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

	const getDevicesInTheRoom = async () => {
		const res = await fetch(`${API_URL}house/withRooms/${params.slug}`, {
			headers: useToken()
		});
		const result = await res.json();
		// console.log(result)
		return result;
	};

	return {
		devices: await getDevicesInTheHouse(),
        createRoom
		// roomDevices: await getDevicesInTheRoom()
	};
}) satisfies PageLoad;
