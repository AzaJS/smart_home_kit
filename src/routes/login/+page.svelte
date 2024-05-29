<script lang="ts">
	import type { IUserLogin } from '$lib';
    import type { PageData } from './$types';
    
    export let data: PageData;
    const { login } = data;
    
    
    let obj: IUserLogin = {
        email: "",
        password: ""
    }

    const onLogin = async () => {
        if(obj.email !== "" && obj.password !== ""){
           let res = await login(obj)
           console.log(res)
        //    response = res;
        //    if(res?.success) goto("/login")
           console.log(res)
        } else {
            alert("NOT FILLED")
        }
    }
    
</script>

<div class="auth flex justify-center">
    <div class="card p-4 w-2/4 mt-20">
        <label class="label space-y-4">
            <h2 class="flex justify-center">Authorize yourself!</h2>
            <!-- {#if response?.success === false}
            <span>
                {response?.messagge}
            </span>
            {/if} -->
            <input bind:value={obj.email} class="input" type="text" placeholder="Login" required/>
            <input bind:value={obj.password} class="input" type="password" placeholder="Password" required />
            <div class="flex justify-center">
                <button on:click={onLogin} type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                    Login
                </button>

            </div>


        </label>
    </div>          
</div>
		