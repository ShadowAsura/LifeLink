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


  let showing = false;
</script>

<div>
  <button type="button" class="text-lg border-2 rounded-lg p-2 w-full bg-gradient-to-r from-gray-100 to-green-300" on:click={() => {showing = !showing;}}>
    Allergies
  </button>
  {#if showing}
    {#each allergies as allergy, i}
      <div class="p-2 border rounded">
          <AllergiesItem name={allergy.name} note={allergy.note}/>
          <button type="button" class="p-1 border-2 rounded-lg w-full transition ease-in-out hover:bg-red-600 hover:text-white" on:click={() => {removeAllergy(i)}}>Remove</button>
      </div>
    {/each}

    <div class="p-2 border rounded">
      <AllergiesItem bind:name={name} bind:note={note}/>
      <button type="button" class="p-1 border-2 rounded-lg w-full transition ease-in-out hover:bg-green-600 hover:text-white" on:click={addAllergy}>Add</button>
    </div>
  {/if}
</div>
