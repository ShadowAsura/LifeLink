<script>
    export let phone, name, note;
</script>

<div>
    <div class="mb-1">
        <label>Name: <input type="text" class="border-2 rounded px-1" bind:value={name}></label>
    </div>
    <div class="mb-1">
        <label>Phone: <input type="tel" class="border-2 rounded px-1" bind:value={phone}></label>
    </div>
    <label>
        <div class="row row-col">
            <label for="note" class="block">Note:</label>
            <textarea id="note" name="text" oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'
            class="border-2 rounded w-full resize-none p-1" bind:value={note}></textarea>
          </div>
    </label>
</div>
