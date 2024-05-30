<script lang="ts">
	import '../app.postcss';
	import { checkToken } from '$lib/helperFunctions';
	import {
		AppShell,
		AppBar,
		AppRail,
		type ModalComponent,
		AppRailAnchor,
		AppRailTile,
		getModalStore,
		type ModalSettings
	} from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { initializeStores, Modal } from '@skeletonlabs/skeleton';
	import ModalHouse from '$lib/Components/Modals/ModalHouse.svelte';
	import ModalRoom from '$lib/Components/Modals/ModalRoom.svelte';
	import ModalDevice from '$lib/Components/Modals/ModalDevice.svelte';
	
	let currentTile: number = 0;
	initializeStores();
	const modalStore = getModalStore();

	const modalDevice: ModalSettings = {
		type: 'component',
		component: 'modalComponentThree',
		title: 'Attach Device',
		body: 'Try to attach new device and manage it!'
	};

	const modalHouse: ModalSettings = {
		type: 'component',
		component: 'modalComponentOne',
		title: 'Add House',
		body: 'Try to add new House and manage it!'
	};

	const modalRoom: ModalSettings = {
		type: 'component',
		component: 'modalComponentTwo',
		title: 'Add Room',
		body: 'Try to add new Room and manage it!'
		// response: async ( r: ICreateHouse) =>{
		// 	data.createHouse(r)
		// }
	};

	const modalRegistry: Record<string, ModalComponent> = {
		// Set a unique modal ID, then pass the component reference
		modalComponentOne: { ref: ModalHouse },
		modalComponentTwo: { ref: ModalRoom },
		modalComponentThree: { ref: ModalDevice }
		// ...
	};


	const initialToken = localStorage.getItem('token') || '';

	$: token = initialToken;

	// setInterval(() => {
	// 	const currentToken = token;
	// 	if (currentToken) {
	// 		checkToken().then((val) => (token = val));
	// 	}
	// 	console.log(!token)
	// 	if (!token && $page.route.id !== '/login') {
	// 		goto('/login');
	// 	}
	// }, 3000);
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
				<a class="btn btn-sm variant-ghost-surface" href="/home" rel="noreferrer"> Home </a>
				<a class="btn btn-sm variant-ghost-surface" href="/house" rel="noreferrer"> Houses </a>
				<a class="btn btn-sm variant-ghost-surface" href="/rooms" rel="noreferrer"> Rooms </a>
				<a class="btn btn-sm variant-ghost-surface" href="/devices" rel="noreferrer"> Devices </a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		<AppRail>
			<!-- --- -->
			<AppRailTile
				on:click={() => modalStore.trigger(modalDevice)}
				bind:group={currentTile}
				name="tile-1"
				value={0}
				title="tile-1"
			>
				<!-- <svelte:fragment slot="lead">(icon)</svelte:fragment> -->
				<span>Attach Device</span>
			</AppRailTile>
			<AppRailTile on:click={()=> modalStore.trigger(modalHouse)} bind:group={currentTile} name="tile-2" value={1} title="tile-2">
				<span>Add House</span>
			</AppRailTile>
			<AppRailTile on:click={()=> modalStore.trigger(modalRoom)} bind:group={currentTile} name="tile-3" value={2} title="tile-3">
				<span>Add Room</span>
			</AppRailTile>
			<!-- --- -->
			<svelte:fragment slot="trail">
				<AppRailAnchor href="/" target="_blank" title="Account">(icon)</AppRailAnchor>
			</svelte:fragment>
		</AppRail>
	</svelte:fragment>

	<slot />
</AppShell>
<!-- </Middleware> -->
