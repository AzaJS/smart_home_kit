<script>
	import { checkToken } from '$lib/helperFunctions';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	// const initialToken = localStorage.getItem('token') || '';

	// const token = writable(initialToken);

	// setInterval(async () => {
	// 	const currentToken = token;
	// 	if (currentToken) {
	// 		const isValid = await checkToken();
	// 		$token = isValid;
    //         setContext("token", token)
	// 	}
	// }, 1000);
</script>
