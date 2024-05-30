<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Rooms</title>
	<meta name="description" content="All Houses" />
</svelte:head>

<div class="flex h-full">
	<div></div>
	<div
		class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-4 py-10"
	>
		{#each data?.rooms?.data as room}
			<a href="/rooms/{room.id}">
				<div class="snap-start shrink-0 card py-20 w-40 md:w-80 text-center">
					<h4 class="h4">{room.name}</h4>
					<p>Room in #{room.house_id} house</p>
					<h3>Time created</h3>
					<pre class="">{room.date_added}</pre>
					<h3>Time mod</h3>
					<pre class="">{room.date_modified}</pre>
				</div>
			</a>
		{/each}
	</div>
</div>
