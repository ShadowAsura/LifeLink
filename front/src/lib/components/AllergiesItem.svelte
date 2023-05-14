<script>
  export let name, note;
</script>

<div>
  <div class="mb-1">
      <label>Allergy: <input type="text" class="border-2 rounded" bind:value={name}></label>
  </div>
  <label>
      <div class="row row-col">
          <label for="note" class="block">Note:</label>
          <textarea id="note" name="text" oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'
          class="border-2 rounded w-full resize-none p-1" bind:value={note}></textarea>
        </div>
  </label>
</div>
