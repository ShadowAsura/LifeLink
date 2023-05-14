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
</script>

{#each current_meds as med, i}
  <div class="p-2 border rounded">
    <NameItem name={med}/>
    <input type="button" on:click={() => {removeMed(i)}} value="Remove Current Med"/>
  </div>
{/each}

<div class="p-2 border rounded">
  <NameItem bind:name={current_med}/>
  <input type="button" on:click={addMed} value="Add Current Med"/>
</div>

<style>
  input[type="button"] {
      cursor: pointer;
  }
</style>
