<script>
  import NameItem from "./NameItem.svelte";

  export let conditions = [];

  let current_condition = "";

  const addCondition = () => {
    if (current_condition.trim() === "") return;
    conditions.push(current_condition);
    conditions = conditions;
    current_condition = "";
  }

  const removeCondition = (num) => {
    conditions.splice(num, 1);
    conditions = conditions;
  }

  let showing = false;
</script>


<div>
  <button type="button" class="text-lg border-2 rounded-lg p-2 w-full bg-gradient-to-r from-gray-100 to-red-300" on:click={() => {showing = !showing;}}>
    Medical Conditions
  </button>
  {#if showing}
    {#each conditions as condition, i}
      <div class="p-2 border rounded">
        <NameItem name={condition}/>
        <button type="button" class="p-1 border-2 rounded-lg w-full transition ease-in-out hover:bg-red-600 hover:text-white" on:click={() => {removeCondition(i)}}>Remove</button>
      </div>
    {/each}
    
    <div class="p-2 border rounded">
      <NameItem bind:name={current_condition}/>
      <button type="button" class="p-1 border-2 rounded-lg w-full transition ease-in-out hover:bg-green-600 hover:text-white" on:click={removeCondition}>Add</button>
    </div>
  {/if}
</div>


