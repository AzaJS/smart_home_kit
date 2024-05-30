<script lang="ts">
	import { getModalStore, type ModalSettings } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';

	export let data: PageData;

	const modalStore = getModalStore();

    const modal: ModalSettings = {
            type: 'component',
			component: 'modalComponentTwo',
			title: 'Add Room',
			body: 'Try to add new Room and manage it!'
    }

	let { devices, name } = data?.devices.data;
</script>

<div>
    <div class="flex justify-center py-10">

        <button on:click={()=> modalStore.trigger(modal)} type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            Add room
        </button>
    </div>
	<div
		class="h2 snap-x scroll-px-4 snap-mandatory scroll-smooth flex justify-center gap-4 overflow-x-auto px-4 py-10"
	>
		#{name} House
	</div>
	{#each devices as device}
		<a href="/rooms/{device.room_id}">
			<div class="snap-start shrink-0 card py-20 w-40 md:w-80 text-center mx-4">
				<h4 class="h4">{device.name} {device.type}</h4>
				<p>Device</p>
				<h3>Time created</h3>
				<pre class="">{device.date_added}</pre>
				<h3>Time mod</h3>
				<pre class="">{device.date_modified}</pre>
				<h5 class="h5">House number: {device.house_id}</h5>
				<h5 class="h5">Room: {device.room_id}</h5>
			</div>
		</a>
	{/each}
</div>
