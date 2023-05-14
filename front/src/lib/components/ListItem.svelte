<script>
    let phone, name, notes;
    export const contact = {
        phone, name, notes
    }
</script>

<div>
    <label>
        Name:
        <input type="text" bind:value={name}>
    </label>
    <label>
        Phone:
        <input type="tel" bind:value={phone}>
    </label>
    <label>
        <div class="row row-col">
            <label for="notes" class="block">Notes:</label>
            <textarea id="notes" name="text" oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"' required
            class="border rounded-sm w-full resize-none p-1" bind:value={notes}></textarea>
          </div>
        <input type="text" bind:value={notes}>
    </label>
</div>