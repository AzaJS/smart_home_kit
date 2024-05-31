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
	import type { IModaleSettings } from '$lib';

	let currentTile: number = 0;
	initializeStores();
	const modalStore = getModalStore();

	const modalObjs: IModaleSettings[] = [
		// {
		// 	type: 'component',
		// 	component: 'modalComponentThree',
		// 	title: 'Attach Device',
		// 	body: 'Try to attach new device and manage it!',
		// 	link: "/devices"
		// },
		{
			type: 'component',
			component: 'modalComponentOne',
			title: 'Add House',
			body: 'Try to add new House and manage it!',
			link: "/house"
		},
		{
			type: 'component',
			component: 'modalComponentTwo',
			title: 'Add Room',
			body: 'Try to add new Room and manage it!',
			link: "/rooms"
		},
	];

	const modalRegistry: Record<string, ModalComponent> = {
		modalComponentOne: { ref: ModalHouse },
		modalComponentTwo: { ref: ModalRoom },
		modalComponentThree: { ref: ModalDevice }
	};

	const initialToken = localStorage.getItem('token') || '';

	$: token = initialToken;

	// setInterval(() => {
	// 	const currentToken = token;
	// 	if (currentToken) {
	// 		checkToken().then((val) => (token = val));
	// 	}
	// 	// console.log(!token)
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
				<a class="btn btn-sm variant-ghost-surface" href="/house" rel="noreferrer"> Houses </a>
				<a class="btn btn-sm variant-ghost-surface" href="/rooms" rel="noreferrer"> Rooms </a>
				<a class="btn btn-sm variant-ghost-surface" href="/devices" rel="noreferrer"> Devices </a>
				<a class="btn btn-sm variant-ghost-surface" href="/" rel="noreferrer">
					{token ? 'log out' : 'login'}
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<!-- <svelte:fragment slot="sidebarLeft">
		<AppRail>
			{#each modalObjs as modal}
			<a href={modal.link}>
				<AppRailTile
				on:click={() => modalStore.trigger(modal)}
				bind:group={currentTile}
				name="tile-1"
				value={1}
				title="tile-1"
				>
				<span>{modal.title}</span>
			</AppRailTile>
		</a>
			{/each}
		
			<svelte:fragment slot="trail">
				<AppRailAnchor href="/" target="_blank" title="Account">(icon)</AppRailAnchor>
			</svelte:fragment>
		</AppRail>
	</svelte:fragment> -->

	<slot />
</AppShell>
<!-- </Middleware> -->
