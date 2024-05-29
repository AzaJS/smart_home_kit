import { API_URL } from '$lib/consts/consts';

import type { IUserLogin } from '$lib';
import type { PageLoad } from './$types';

export const load = (async ({fetch}) => {
    const login = async (obj: IUserLogin) => {
        try {
            const res = await fetch(`${API_URL}auth`, {
                method: "POST",
                body: JSON.stringify(obj),
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                }
            });
            let result = await res.json();
            let { data } = result;
            if(result.success){
                localStorage.setItem('token', JSON.stringify(data));
            }
            return result;
        } catch (e: any) {
            alert(e.message)
        }
    }
    return {
        login: login,
    };
}) satisfies PageLoad;