<script lang="ts">

    import type { PageLoad } from "./$types";

    export let data: PageLoad;

    let {devices, name} = data?.devices.data;
    console.log(devices)
</script>

<div>
    <div class="h3 snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-4 py-10">{name}</div>
    {#each devices as device}
    <a href="/rooms/{device.id}">
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
