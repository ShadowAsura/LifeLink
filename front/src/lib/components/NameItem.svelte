<script>
  export let name;
  export let name_name;
</script>

<div>
  <div class="mb-1">
      <label>{name_name || "Name"}: <input type="text" class="border-2 rounded px-1" bind:value={name}></label>
  </div>
</div>
