<script>
  export let name;
  export let name_name;
</script>

<div>
  <div class="mb-1">
      <label>{name_name || "Name"}: <input type="text" class="border" bind:value={name}></label>
  </div>
</div>
