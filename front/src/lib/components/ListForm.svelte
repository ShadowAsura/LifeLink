<script>
    import ListItem from "./ListItem.svelte";

    export let emergencyContacts = [];

    const addContact = () => {
        
    }

</script>


<div class="p-2 border rounded">
    {#each emergencyContacts as contact}
        <div>
            <div>{contact.name}</div>
            <div>{contact.phone}</div>
            <div>{contact.notes}</div>
        </div>
    {/each}
    
    
    <button on:click={addContact}>create</button>
</div>