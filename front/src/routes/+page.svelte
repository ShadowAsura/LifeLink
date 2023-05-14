<script>
  import { goto } from "$app/navigation";
  import { add_user } from '$lib/api.js';
  import ContactForm from "../lib/components/ContactForm.svelte";
  import ConditionForm from "../lib/components/ConditionForm.svelte";
  import MedsForm from "../lib/components/MedsForm.svelte";
  import AllergiesForm from "../lib/components/AllergiesForm.svelte";

  let fname = "", lname = "", notes = "", password="";
  let dnr = false;
  let emergencyContacts = [];
  let conditions = [];
  let current_meds = [];
  let allergies = [];

  const createId = async (e) => {
    console.log("created new user!");
    const uuid = crypto.randomUUID();
    console.log(uuid);
    console.log({
      user_id: uuid,
      name: fname+" "+lname,
      password,
      emergency_contacts: emergencyContacts,
      conditions,
      current_meds,
      allergies,
      dnr,
      notes
    })
    await add_user({
      user_id: uuid,
      name: fname+" "+lname,
      password,
      emergency_contacts: emergencyContacts,
      conditions,
      current_meds,
      allergies,
      dnr,
      notes
    });
    goto(`/profile/${uuid}/`)
  };
</script>

<style>
    form {
        width: 30rem;
    }
</style>

<div class="flex flex-row justify-center py-20">
  <form on:submit|preventDefault={createId} class="flex flex-col w-96 border rounded-lg px-7 py-10 gap-4 bg-slate-50">
      <h1 class="text-3xl md:text-3xl lg:text-4xl">
          Create Your ID
      </h1>

    <label for="fname">
      First Name:
      <input name="fname" type="text" bind:value={fname} class="border-2 rounded w-full p-1" required/>
    </label>

    <label for="lname">
      Last Name:
      <input name="lname" type="text" bind:value={lname} class="border-2 rounded w-full p-1" required/>
    </label>

    <label for="password">
      Password:
      <input name="password" type="text" bind:value={password} class="border-2 rounded w-full p-1" required/>
    </label>

    <div class="row row-col">
      <label for="notes" class="block">Notes:</label>
      <textarea id="notes" name="text" oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"' required
      class="border rounded-sm w-full resize-none p-1" bind:value={notes}></textarea>
    </div>

    <ContactForm bind:emergencyContacts={emergencyContacts}/>

    <ConditionForm bind:conditions={conditions}/>

    <MedsForm bind:current_meds={current_meds}/>

    <AllergiesForm bind:allergies={allergies}/>

    <label for="dnr">
      Do not resuscitate:
      <input id="dnr" type="checkbox" bind:checked={dnr}/>
    </label>

    <button type="submit" class="border-2 rounded-lg py-2 hover:bg-green-600 hover:text-white ease-in-out duration-100">Create</button>
  </form>
</div>

