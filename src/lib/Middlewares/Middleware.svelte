<script>
	import { checkToken } from '$lib/helperFunctions';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	const initialToken = localStorage.getItem('token') || '';

	const token = writable(initialToken);

	setContext("token", token)
</script>
