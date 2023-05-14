<script>
    //imports
    import QRCode from '$lib/components/QRCode.svelte';

    //exports
    export let data;

    //get user info
    const user_info = data.user_info;
</script>

<div class="flex flex-row justify-center w-full py-20">
    <div class="flex flex-col w-96 border rounded-lg px-7 py-10 gap-4 bg-slate-50   ">
        <h1 class="text-3xl">{user_info.name}</h1>

        <div>
            <QRCode uuid={data.uuid}/>
        </div>

        <div>
            <h2>Emergency Contacts</h2>
            <!-- {#each } -->
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
