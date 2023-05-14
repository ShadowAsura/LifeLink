<script>
  import AllergiesItem from "./AllergiesItem.svelte";

  export let allergies = [];

  let name, note = "";

  const addAllergy = () => {
    if (name.trim() === "") return;
    allergies.push({
        name,
        note
    });
    allergies = allergies;
    name = "";
    note = "";
  }

  const removeAllergy = (num) => {
    allergies.splice(num, 1);
    allergies = allergies;
  }
</script>

{#each allergies as allergy, i}
  <div class="p-2 border rounded">
      <AllergiesItem name={allergy.name} note={allergy.note}/>
      <input type="button" on:click={() => {removeAllergy(i)}} value="Remove Contact"/>
  </div>
{/each}

<div class="p-2 border rounded">
  <AllergiesItem bind:name={name} bind:note={note}/>
  <input type="button" on:click={addAllergy} value="Add Contact"/>
</div>

<style>
  input[type="button"] {
      cursor: pointer;
  }
</style>
