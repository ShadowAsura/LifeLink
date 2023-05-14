<script>
  import NameItem from "./NameItem.svelte";

  export let current_meds = [];

  let current_med = "";

  const addMed = () => {
    if (current_med.trim() === "") return;
    current_meds.push(current_med);
    current_meds = current_meds;
    current_med = "";
  }

  const removeMed = (num) => {
    current_meds.splice(num, 1);
    current_meds = current_meds;
  }
let showing = false;
</script>

<div>
  <button type="button" class="text-lg border-2 rounded-lg p-2 w-full bg-gradient-to-r from-gray-100 to-pink-300" on:click={() => {showing = !showing;}}>
    Current Medications
  </button>
  {#if showing}
    {#each current_meds as med, i}
      <div class="p-2 border rounded">
        <NameItem name={med}/>
        <button type="button" class="p-1 border-2 rounded-lg w-full transition ease-in-out hover:bg-red-600 hover:text-white" on:click={() => {removeMed(i)}}>Remove</button>
      </div>
    {/each}

    <div class="p-2 border rounded">
      <NameItem bind:name={current_med}/>
      <button type="button" class="p-1 border-2 rounded-lg w-full transition ease-in-out hover:bg-green-600 hover:text-white" on:click={addMed}>Add</button>
    </div>
  {/if}
</div>

