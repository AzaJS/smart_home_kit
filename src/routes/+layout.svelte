<script lang="ts">
	import '../app.postcss';
	import { checkToken } from '$lib/helperFunctions';
	import { AppShell, AppBar, AppRail } from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';

	const initialToken = localStorage.getItem('token') || '';

	$: token = initialToken;


	setInterval(() => {
		const currentToken = token;
		if (currentToken) {
			checkToken().then(val=> token = val)
		}
		if(!token){
			goto("/")
		}

	}, 3000);


	
	
	// onMount(()=>{
	// 	console.log( checkToken())
	// })
	// $: console.log(checkToken())

</script>

<!-- <Middleware> -->
<AppShell>
	<svelte:fragment slot="header">
		<AppBar>

			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Skeleton</strong>
			</svelte:fragment>

			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm variant-ghost-surface"
					href="/home"
					rel="noreferrer"
				>
					Home
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="/login"
					rel="noreferrer"
				>
					Login
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="/"
					rel="noreferrer"
				>
					Register
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		<AppRail></AppRail>
	</svelte:fragment>

	<slot />
</AppShell>
<!-- </Middleware> -->
