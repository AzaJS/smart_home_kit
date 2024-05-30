<script lang="ts">
	import { AppRail, AppRailAnchor, AppRailTile, type ModalSettings } from "@skeletonlabs/skeleton";
	import type { SvelteComponent } from 'svelte';
	export let parent: SvelteComponent;

	import { getModalStore } from '@skeletonlabs/skeleton';


    const modalStore = getModalStore();
	
    const formData = {
		name: '',
		email: ''
	};

    let currentTile: number = 0;


    const onFormSubmit =() => {
        console.log(formData)
    }



    const modal: ModalSettings = {
	type: 'component',
	component: 'modalComponentOne',
};
							

// modalStore.trigger(modal);

$: console.log($modalStore)

</script>

<svelte:head>
    <title>Houses</title>
    <meta name="description" content="All Houses" />
</svelte:head>

{#if $modalStore[0]}
	<div class="modal-example-form card p-4 w-modal shadow-xl space-y-4">
		<header class="text-2xl font-bold">{$modalStore[0].title ?? '(title missing)'}</header>
		<article>{$modalStore[0].body ?? '(body missing)'}</article>
		<!-- Enable for debugging: -->
		<form class="modal-form border border-surface-500 p-4 space-y-4 rounded-container-token">
			<label class="label">
				<span>Name</span>
				<input class="input" type="text" bind:value={formData.name} placeholder="Enter name..." />
			</label>
			<!-- <label class="label">
				<span>Phone Number</span>
				<input class="input" type="tel" bind:value={formData.tel} placeholder="Enter phone..." />
			</label> -->
			<label class="label">
				<span>Email</span>
				<input class="input" type="email" bind:value={formData.email} placeholder="Enter email address..." />
			</label>
		</form>
		<!-- prettier-ignore -->
		<footer class="modal-footer">
			<button class="btn" on:click={parent.onClose}>close</button>
			<button class="btn " on:click={onFormSubmit}>Submit Form</button>
		</footer>
	</div>
{/if}

<AppRail>
	<svelte:fragment slot="lead">
		<AppRailAnchor href="/" >(icon)</AppRailAnchor>
	</svelte:fragment>
	<!-- --- -->
<AppRailTile on:click={()=>modalStore.trigger(modal)} bind:group={currentTile} name="tile-1" value={0} title="tile-1">
		<!-- <svelte:fragment slot="lead">(icon)</svelte:fragment> -->
		<span>Create House</span>
	</AppRailTile>
	<AppRailTile bind:group={currentTile} name="tile-2" value={1} title="tile-2">
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>Tile 2</span>
	</AppRailTile>
	<AppRailTile bind:group={currentTile} name="tile-3" value={2} title="tile-3">
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>Tile 3</span>
	</AppRailTile>
	<!-- --- -->
	<svelte:fragment slot="trail">
		<AppRailAnchor href="/" target="_blank" title="Account">(icon)</AppRailAnchor>
	</svelte:fragment>
</AppRail>

