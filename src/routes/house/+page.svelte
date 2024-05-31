<script lang="ts">
	import type { PageData } from './$types';
	import { getModalStore, type ModalSettings } from '@skeletonlabs/skeleton';

	export let data: PageData;

	const modalStore = getModalStore();

	const modal: ModalSettings = {
		type: 'component',
		component: 'modalComponentOne',
		title: 'Add House',
		body: 'Try to add new House and manage it!'
	};

	$: console.log(data.houses);
</script>

<svelte:head>
	<title>Houses</title>
	<meta name="description" content="All Houses" />
</svelte:head>
<div>
	<div class="flex justify-center my-10">
		<button
			on:click={() => modalStore.trigger(modal)}
			type="button"
			class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
		>
			Add house
		</button>
	</div>
	<div
		class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-4 py-10"
	>
		{#each data?.houses?.data as house}
			<a href="/house/{house.id}">
				<div class="snap-start shrink-0 card py-20 w-40 md:w-80 text-center">
					<h4 class="h4">{house.name}</h4>
					<p>House</p>
					<h3>Time created</h3>
					<pre class="">{house.date_added}</pre>
					<h3>Time mod</h3>
					<pre class="">{house.date_modified}</pre>
				</div>
			</a>
		{/each}
	</div>
</div>

<style>
	/* * {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	} */
</style>
