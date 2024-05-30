<script>
	import { writable } from 'svelte/store';
	import { setContext } from 'svelte';

	const initialToken = localStorage.getItem('token') || '';
    const user_id = writable(JSON.parse(localStorage.getItem('token') || '')?.id) 
    // console.log(user_id)
	const token = writable(initialToken);

    setContext("user_id", user_id)
	setContext("token", token)
</script>
