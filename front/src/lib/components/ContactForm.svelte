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
</script>

{#each emergencyContacts as contact, i}
    <div class="p-2 border rounded">
        <ContactItem phone={contact.phone} name={contact.name} note={contact.note}/>
        <input type="button" on:click={() => {removeContact(i)}} value="Remove Contact"/>
    </div>
{/each}

<div class="p-2 border rounded">
    <ContactItem bind:phone={phone} bind:name={name} bind:note={note}/>
    <input type="button" on:click={addContact} value="Add Contact"/>
</div>

<style>
    input[type="button"] {
        cursor: pointer;
    }
</style>
