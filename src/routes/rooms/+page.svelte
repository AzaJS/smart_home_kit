<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

    console.log(data)

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
