<script>
    //imports
    import QRCode from '$lib/components/QRCode.svelte';

    //exports
    export let data;

    //get user info
    const user_info = data.user_info;
    const contacts = user_info.emergency_contacts;
    const conditions = user_info.conditions;
    const allergies = user_info.allergies;
    const meds = user_info.current_meds;
</script>

<style>
    #card {
        width: 30rem;
    }
</style>


<div class="flex flex-row justify-center w-full py-20">
    <div id="card" class="flex flex-col border rounded-lg px-10 py-10 gap-4 bg-slate-50">
        
        <div class="flex flex-row items-center flex-nowrap">

            <h1 class="text-3xl">{user_info.name}</h1>
    
            <div class="ml-auto">
                <QRCode uuid={data.uuid}/>
            </div>

        </div>


        
        <div class="flex flex-col gap-3">
            <div class="flex flex-col">
                <h2 class="text-xl">Emergency Contacts</h2>
                {#if contacts !== undefined}
                    {#each contacts as contact}
                        <div>{contact.name}</div>
                        <div>{contact.phone}</div>
                        <div>{contact.notes}</div>
                    {/each}
                {:else}
                    <div>N/A</div>
                {/if}
            </div>

            <div class="flex flex-col">
                <h2 class="text-xl">Medical Conditions</h2>
                {#if conditions !== undefined}
                    {#each conditions as condition}
                        <div>{condition}</div>
                    {/each}
                {:else}
                    <div>N/A</div>
                {/if}
            </div>

            <div class="flex flex-col">
                <h2 class="text-xl">Allergies</h2>
                {#if allergies !== undefined}
                    {#each allergies as allergy}
                        <div>{allergy.name}</div>
                        <div>{allergy.type}</div>
                    {/each}
                {:else}
                    <div>N/A</div>
                {/if}
            </div>

            <div class="flex flex-col">
                <h2 class="text-xl">Current Medication</h2>
                {#if meds !== undefined}
                    {#each meds as med}
                        <div>{med}</div>
                    {/each}
                {:else}
                    <div>N/A</div>
                {/if}
            </div>
        </div>
    </div>
</div>

<!-- <style>
    #grid-container {
        display: grid;
        grid-template-columns: auto auto;
        grid-template-rows: auto auto;
        padding: 10px;
    }

    h1 {
        font-size: 4em;
        font-weight: bold;
    }

    h2 {
        font-size: 2.2em;
    }

    #qr-container {
        float: right;
    }

    @media (max-width: 1250px) {
        h1 {
            font-size: 2.5em;
        }

        h2 {
            font-size: 1.5em;
        }
    }
</style> -->
