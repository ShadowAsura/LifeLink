<script>
  import QRCode from "qrcode";
  import { onMount } from "svelte";

  export let uuid;

  onMount(() => {
      QRCode.toCanvas(document.getElementById('canvas'), uuid, function (error) {
          if (error) console.error(error)
          console.log('success!');
      })
  });
  
</script>

<div>
  <canvas id="canvas"></canvas>
</div>
