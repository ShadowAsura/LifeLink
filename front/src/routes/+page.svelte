<script>
  import { goto } from "$app/navigation";
  import { add_user } from '$lib/api.js';
  import ContactForm from "$lib/components/ContactForm.svelte";
  import ConditionForm from "$lib/components/ConditionForm.svelte";
  import MedsForm from "$lib/components/MedsForm.svelte";
  import AllergiesForm from "$lib/components/AllergiesForm.svelte";

  let fname = "", lname = "", notes = "", password= "", insurance="";
  let weight;
  let height;
  let age;
  let sex;
  let bloodtype;
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
      notes,
      insurance,
      weight,
      height,
      sex,
      age,
      bloodtype,
    })
    await add_user({
      user_id: uuid,
      name: fname+" "+lname,
      password,
      emergency_contacts: emergencyContacts,
      conditions,
      current_meds,
      allergies,
      notes,
      insurance,
      weight,
      height,
      sex,
      age,
      bloodtype,
    });
    goto(`/profile/${uuid}/`)
  };
</script>

<style>
    form {
        width: 30rem;
    }
</style>

<div class="flex flex-row justify-center py-20 px-2">
  <form on:submit|preventDefault={createId} class="flex flex-col w-96 border rounded-lg px-7 py-10 gap-4 bg-slate-100">
    <h1 class="text-3xl md:text-3xl lg:text-4xl">
        Create Your LifeLink
    </h1>
    
    <div class="flex flex-row gap-3">
      <label for="fname">
        First Name:
        <input name="fname" type="text" bind:value={fname} class="border-2 rounded w-full p-1" required/>
      </label>

      <label for="lname">
        Last Name:
        <input name="lname" type="text" bind:value={lname} class="border-2 rounded w-full p-1" required/>
      </label>
    </div>

    <!-- sex, age, bloodtype -->
    <div class="flex flex-row gap-3">
      <label for="sex">
        Sex:
        <select bind:value={sex} class="border-2 rounded w-full p-1">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>

      <label for="age">
        Age:
        <input name="age" type="number" placeholder="in years" bind:value={age} class="border-2 rounded w-full p-1" required/>
      </label>
  
      <label for="bloodtype">
        Bloodtype:
        <input name="insurance" type="text" placeholder="Optional" bind:value={bloodtype} class="border-2 rounded w-full p-1"/>
      </label>
    </div>

    <!-- weight, height -->
    <div class="flex flex-row gap-3">
      <label for="weight">
        Weight:
        <input name="weight" type="number" placeholder="in pounds" bind:value={weight} class="border-2 rounded w-full p-1" required/>
      </label>
  
      <label for="height">
        Height:
        <input name="height" type="number" placeholder="in inches" bind:value={height} class="border-2 rounded w-full p-1" required/>
      </label>
    </div>

    
    
    <!-- <label for="password">
      Password:
      <input name="password" type="text" bind:value={password} class="border-2 rounded w-full p-1" required/>
    </label> -->

    <label for="insurance">
      Health Insurance Provider:
      <input name="insurance" type="text" placeholder="Optional" bind:value={insurance} class="border-2 rounded w-full p-1"/>
    </label>

    <!-- notes -->
    <div class="row row-col">
      <label for="notes" class="block">Notes:</label>
      <textarea id="notes" name="text" placeholder="Optional" oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"' required
      class="border-2 rounded w-full resize-none p-1" bind:value={notes}></textarea>
    </div>

    <ContactForm bind:emergencyContacts={emergencyContacts}/>

    <ConditionForm bind:conditions={conditions}/>

    <MedsForm bind:current_meds={current_meds}/>

    <AllergiesForm bind:allergies={allergies}/>

    <button type="submit" class="border-2 rounded-lg py-2 hover:bg-purple-600 hover:text-white ease-in-out duration-100">Create</button>
  </form>
</div>

