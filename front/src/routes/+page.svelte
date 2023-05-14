<script>
  import { goto } from "$app/navigation";
    import ListForm from "../lib/components/ListForm.svelte";

  let fname = "", lname = "", notes = "";
  let emergencyContacts = [];

  const createId = async (e) => {
    console.log("created new user!");
    const uuid = crypto.randomUUID();
    console.log(uuid);
    //await fetch()
    goto(`/profile/${uuid}/`)
  };
</script>

<div class="flex flex-row justify-center my-10">
  <form on:submit|preventDefault={createId} class="flex flex-col w-96 border rounded p-5 gap-4">
      <h1 class="text-3xl md:text-3xl lg:text-4xl">
          Create Your ID
      </h1>

    <label for="fname">
      First Name:
      <input name="fname" type="text" bind:value={fname} class="border rounded-sm w-full p-1" required/>
    </label>

    <label for="lname">
      Last Name:
      <input name="lname" type="text" bind:value={lname} class="border rounded-sm w-full p-1" required/>
    </label>


    <div class="row row-col">
      <label for="notes" class="block">Notes:</label>
      <textarea id="notes" name="text" oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"' required
      class="border rounded-sm w-full resize-none p-1" bind:value={notes}></textarea>
    </div>

    <ListForm bind:emergencyContacts={emergencyContacts}/>

    <button type="submit" class="border rounded-lg py-2 hover:bg-green-600 hover:text-white ease-in-out duration-100">Create</button>
  </form>
</div>

