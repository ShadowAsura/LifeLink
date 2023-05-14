<script>
    //imports
    import QRCode from '$lib/components/QRCode.svelte';

    //exports
    export let data;

    //get user info
    const user_info = data.user_info;
</script>

<div id="grid-container">
    <div>
        <h1>{ user_info.name }</h1>
    </div>
    <div>
        <div id="qr-container">
            <QRCode uuid={data.uuid}/>
        </div>
    </div>
    <div>
        <div>
            <h2>Emergency contacts</h2>
        </div>
    </div>
</div>

<style>
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
</style>
