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
</script>

{#each conditions as condition, i}
  <div class="p-2 border rounded">
    <NameItem name={condition}/>
    <input type="button" on:click={() => {removeCondition(i)}} value="Remove Condition"/>
  </div>
{/each}

<div class="p-2 border rounded">
  <NameItem bind:name={current_condition} name_name={"Condition"}/>
  <input type="button" on:click={addCondition} value="Add Condition"/>
</div>

<style>
  input[type="button"] {
      cursor: pointer;
  }
</style>
