<script lang="ts">
	// import { AppRail, AppRailAnchor, AppRailTile, type ModalSettings } from '@skeletonlabs/skeleton';
	import type { SvelteComponent } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	export let parent: SvelteComponent;

	// import { getModalStore } from '@skeletonlabs/skeleton';
	// import type { ICreateHouse } from '$lib';

	// const modalStore = getModalStore();

	// let currentTile: number = 0;

	// let formData: ICreateHouse;

	// const modal: ModalSettings = {
	// 	type: 'component',
	// 	component: 'modalComponentTwo',
	// 	title: 'Add Room',
	// 	body: 'Try to add new Room and manage it!'
	// 	// response: async ( r: ICreateHouse) =>{
	// 	// 	data.createHouse(r)
	// 	// }
	// };
	// $: console.log(formData);

	// const onClose = () => {
	// 	data.createHouse(formData)
	// }
</script>

<svelte:head>
	<title>Rooms</title>
	<meta name="description" content="All Houses" />
</svelte:head>

<div class="flex h-full">
	<div>
		
	</div>
    <div class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-4 py-10">
		{#each data?.rooms?.data as house}
		<a href="/rooms/{house.id}">
			<div class="snap-start shrink-0 card py-20 w-40 md:w-80 text-center">
				<h4 class="h4">{house.name}</h4>
				<p>House</p>
				<h3>Time created</h3>
				<pre class="pre">{house.date_added}</pre>
				<h3>Time mod</h3>
				<pre class="pre">{house.date_modified}</pre>
			</div>
		</a>
		{/each}
	</div>
</div>
