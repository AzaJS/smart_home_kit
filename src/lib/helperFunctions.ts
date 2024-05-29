import { API_URL } from '$lib/consts/consts';

export const checkToken = async () => {
    const token = JSON.parse(localStorage.getItem('token') || '{}');

    let res = await fetch(`${API_URL}auth/isAuth`, {
        headers: { Authorization: `Bearer ${token?.access_token}` }
    });
    let result = await res.json();
    return result.success;
};