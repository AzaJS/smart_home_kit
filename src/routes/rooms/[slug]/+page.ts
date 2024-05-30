import type { ICreateRoom } from '$lib';
import { API_URL } from '$lib/consts/consts';
import { useToken } from '$lib/helperFunctions';
import type { PageLoad } from './$types';

export const load = (async ({fetch, params}) => {
    // const getDevicesInTheRoom = async () => {
	// 	const res = await fetch(`${API_URL}houses/withDevices/${params.slug}`, {
    //         headers: useToken()
    //     })
    //     const result = await res.json()
    //     // console.log(result)
    //     return result
	// }
    return {

    };
}) satisfies PageLoad;