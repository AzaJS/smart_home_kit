<script lang="ts">
	import { getModalStore, type ModalSettings } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';

	export let data: PageData;

	const { createDevice } = data;

	const modalStore = getModalStore();

	const modal: ModalSettings = {
		type: 'component',
		component: 'modalComponentThree',
		title: 'Attach Device',
		body: 'Try to attach new device and manage it!'
	};

	console.log(data);
</script>

<svelte:head>
	<title>Devices</title>
	<meta name="description" content="All Devices" />
</svelte:head>

<div>
    <div class="flex justify-center my-10">
		<button
			on:click={() => modalStore.trigger(modal)}
			type="button"
			class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
		>
			Attach Device
		</button>
	</div>
	<div
		class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-4 py-10"
	>
		{#each data?.devices?.data as device}
			<a href="/devices/{device.id}">
				<div class="snap-start shrink-0 card py-20 w-40 md:w-80 text-center">
					<h4 class="h4">{device.name}</h4>
					<p>Device</p>
					<h3>Room: {device?.room_id || 'No room'}</h3>
					<p>Device</p>
					<h3>Time created</h3>
					<pre class="">{device.date_added}</pre>
					<h3>Time mod</h3>
					<pre class="">{device.date_modified}</pre>
					<p>Temp: {device.temperature || 0}</p>
					<p>Type: {device.type}</p>
					<p>Status: {device.warning ? 'Warning' : 'No problems'}</p>
				</div>
			</a>
		{/each}
	</div>
</div>
