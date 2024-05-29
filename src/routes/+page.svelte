<script lang="ts">
    import { goto } from '$app/navigation';
    import type { PageData } from "./$types";  
	import type { IUserCreate } from "$lib";

    export let data: PageData;

    const { registerUser } = data;

    let obj: IUserCreate = {
        username: "",
        email: "",
        password: "",
        is_admin: 1
    }

    let response: Record<string, string|boolean> | undefined;

    const onRegister = async () => {
        if(obj.username !== "" && obj.email !== "" && obj.password !== ""){
           let res = await registerUser(obj)
           response = res;
           if(res?.success) goto("/login")
           console.log(res)
        } else {
            alert("NOT FILLED")
        }
    }

 
</script>

<svelte:head>
    <title>Authorization</title>
    <meta name="description" content="Please login or register" />
</svelte:head>

<div class="auth flex justify-center">
    <div class="card p-4 w-2/4 mt-20">
        <label class="label space-y-4">
            <h2 class="flex justify-center">Authorize yourself!</h2>
            {#if response?.success === false}
            <span>
                {response?.messagge}
            </span>
            {/if}
            <input bind:value={obj.username} class="input" type="text" placeholder="Username" required/>
            <input bind:value={obj.email} class="input" type="text" placeholder="Login" required/>
            <input bind:value={obj.password} class="input" type="password" placeholder="Password" required />
            <div class="flex justify-center">
                <button on:click={onRegister} type="button" class="justify-self-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    Register
                </button>
            </div>
            <div class="flex justify-center">
              <span>or <a class="anchor" href="/login">Login</a></span>
            </div>    
        </label>
    </div>          
</div>
		

