<script lang="ts">
    import type { PageData } from './$types';
	import type { SvelteComponent } from "svelte";
    
    export let data: PageData;

	export let parent: SvelteComponent;



    // const modalStore = getModalStore();
	
    // let currentTile: number = 0;

    // const modal: ModalSettings = {
	// 	type: 'component',
	// 	component: 'modalComponentThree',
	// 	title: 'Attach Device',
	// 	body: 'Try to attach new device and manage it!'
	// };

    console.log(data)
</script>



<svelte:head>
    <title>Devices</title>
    <meta name="description" content="All Devices" />
</svelte:head>
<div class="flex h-full">
	<div class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-4 py-10">
		{#each data?.devices?.data as device}
		<a href="/devices/{device.id}">
			<div class="snap-start shrink-0 card py-20 w-40 md:w-80 text-center">
				<h4 class="h4">{device.name}</h4>
				<p>Device</p>
				<h3>Room: {device?.room_id || "No room"}</h3>
				<p>Device</p>
				<h3>Time created</h3>
				<pre class="">{device.date_added}</pre>
				<h3>Time mod</h3>
				<pre class="">{device.date_modified}</pre>
                <p>Temp: {device.temperature || 0}</p>
                <p>Type: {device.type}</p>
                <p>Status: {device.warning ?  "Warning" : "No problems"}</p>
			</div>
		</a>
		{/each}
	</div>
</div>