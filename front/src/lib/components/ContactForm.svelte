<script>
    import ContactItem from "./ContactItem.svelte";

    export let emergencyContacts = [];

    let phone, name, note = "";

    const addContact = () => {
        if (name.trim() === "") return;
        emergencyContacts.push({
            phone,
            name,
            note
        });
        emergencyContacts = emergencyContacts;
        phone = "";
        name = "";
        note = "";
    }

    const removeContact = (num) => {
        emergencyContacts.splice(num, 1);
        emergencyContacts = emergencyContacts;
    }

    let showing = false;
</script>

<div>
  <button type="button" class="text-lg border-2 rounded-lg p-2 w-full bg-gradient-to-r from-gray-100 to-blue-300" on:click={() => {showing = !showing;}}>
    Emergency Contact
  </button>
  {#if showing}
    {#each emergencyContacts as contact, i}
        <div class="p-2 border-2 rounded">
            <ContactItem phone={contact.phone} name={contact.name} note={contact.note}/>
            <button type="button" class="p-1 border-2 rounded-lg w-full transition ease-in-out hover:bg-red-600 hover:text-white" on:click={() => {removeContact(i)}}>Remove</button>
        </div>
    {/each}

    <div class="p-2 border rounded">
        <ContactItem bind:phone={phone} bind:name={name} bind:note={note}/>
        <button type="button" class="p-1 border-2 rounded-lg w-full transition ease-in-out hover:bg-green-600 hover:text-white" on:click={addContact}>Add</button>
    </div>
  {/if}
</div>
