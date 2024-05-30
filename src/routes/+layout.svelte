<script lang="ts">
	import '../app.postcss';
	import { checkToken } from '$lib/helperFunctions';
	import { AppShell, AppBar, AppRail, type ModalComponent } from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { initializeStores, Modal } from '@skeletonlabs/skeleton';
	import ModalHouse from '$lib/Components/Modals/ModalHouse.svelte';

	const modalRegistry: Record<string, ModalComponent> = {
	// Set a unique modal ID, then pass the component reference
	modalComponentOne: { ref: ModalHouse },
	// modalComponentTwo: { ref: ModalComponentTwo },
	// ...
};


	initializeStores();


	const initialToken = localStorage.getItem('token') || '';

	$: token = initialToken;


	setInterval(() => {
		const currentToken = token;
		if (currentToken) {
			checkToken().then(val=> token = val)
		}
		if(!token && $page.route.id !== "/login"){
			goto("/login")
		}

	}, 60000);

</script>

<Modal components={modalRegistry} />

<!-- <Middleware> -->
<AppShell>
	<svelte:fragment slot="header">
		<AppBar>

			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Smart Home</strong>
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
					href="/house"
					rel="noreferrer"
				>
					Houses
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

	<!-- <svelte:fragment slot="sidebarLeft">
		<AppRail></AppRail>
	</svelte:fragment> -->

	<slot />
</AppShell>
<!-- </Middleware> -->
