import type { ICreateHouse } from '$lib';
import { API_URL } from '$lib/consts/consts';
import { useToken } from '$lib/helperFunctions';
import type { PageLoad } from './$types';

export const load = (async ({ fetch, params }) => {

	const getDevicesInTheHouse = async () => {
		const res = await fetch(`${API_URL}house/withDevices/${params.slug}`, {
            headers: useToken()
        })
        const result = await res.json()
        // console.log(result)
        return result
	}

    const getDevicesInTheRoom = async () => {
        	const res = await fetch(`${API_URL}house/withRooms/${params.slug}`, {
                headers: useToken()
            })
            const result = await res.json()
            // console.log(result)
            return result
    }

    return {
        devices: await getDevicesInTheHouse(),
        // roomDevices: await getDevicesInTheRoom()
    }
}) satisfies PageLoad;
