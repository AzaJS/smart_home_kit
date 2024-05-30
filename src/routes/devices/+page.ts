import { API_URL } from '$lib/consts/consts';
import { useToken } from '$lib/helperFunctions';
import type { PageLoad } from './$types';

export const load = (async () => {
    const getAllDevices = async () => {
        const res = await fetch(`${API_URL}device/`, {
            headers: useToken()
        })
        const result = await res.json()
        return result
    }
    return {
        devices: await getAllDevices()
    };
}) satisfies PageLoad;