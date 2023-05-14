<script>
    import QRCode from "qrcode";
    import { onMount } from "svelte";

    export let data;

    // With promises
    QRCode.toDataURL("I am a pony!")
        .then((url) => {
            console.log(url);
        })
        .catch((err) => {
            console.error(err);
        });

    // With async/await
    const generateQR = async (text) => {
        try {
            console.log(await QRCode.toDataURL(text));
        } catch (err) {
            console.error(err);
        }
    };

    onMount(() => {
        QRCode.toCanvas(document.getElementById('canvas'), data.uuid, function (error) {
            if (error) console.error(error)
            console.log('success!');
        })
    });
    
</script>

<div>
    <canvas id="canvas"></canvas>
</div>
