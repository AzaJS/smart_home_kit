<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	import { page } from '$app/stores';

	let { data: oneRoom } = data.room;

	console.log($page, data);

	// let rooms = data?.devices.data;
</script>

<div>
	<div
		class="h3 snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-4 py-10"
	></div>
	<div class="snap-start shrink-0 card py-20 w-40 md:w-80 text-center mx-4">
		<h4 class="h4">{oneRoom.name}</h4>
		<p>Room in #{oneRoom.house_id} house</p>
		<h3>Time created</h3>
		<pre class="">{oneRoom.date_added}</pre>
		<h3>Time mod</h3>
		<pre class="">{oneRoom.date_modified}</pre>
	</div>
</div>
