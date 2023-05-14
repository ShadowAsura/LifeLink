<script>
  import QRCode from "qrcode";
  import { onMount } from "svelte";

  export let uuid;
  const DOMAIN_NAME = "https://lifelink-eta.vercel.app/";

  onMount(() => {
      QRCode.toCanvas(document.getElementById('canvas'), `${DOMAIN_NAME}/profile/uuid`, function (error) {
          if (error) console.error(error)
          console.log('success!');
      })
  });
  
</script>

<div>
  <canvas id="canvas"></canvas>
</div>
