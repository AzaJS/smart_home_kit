import type { ICreateDevice } from '$lib';
import { API_URL } from '$lib/consts/consts';
import { useToken } from '$lib/helperFunctions';
import type { PageLoad } from './$types';

export const load = (async () => {

    const createDevice = async (obj: ICreateDevice) => {
        console.log(obj)
        const res = await fetch(`${API_URL}device/create`,{
            method: "POST",
            body: JSON.stringify(obj),
            headers: useToken(),
        })
        const result = await res.json()
        return result
    }

    const getAllDevices = async () => {
        const res = await fetch(`${API_URL}device/`, {
            headers: useToken()
        })
        const result = await res.json()
        return result
    }
    return {
        devices: await getAllDevices(),
        createDevice
    };
}) satisfies PageLoad;