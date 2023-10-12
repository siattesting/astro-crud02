<script>
    import { notes, addNote } from '../lib/noteStore'

    let title =''

    function handleSubmit () {
        if(!title) return 

        // add to the store
        addNote({
            id: new Date().getTime(),
            title: title
        })
        title = ''
    }

  
</script>

<div>
    <form action="" on:submit|preventDefault={handleSubmit}>
        <label for="title">Title</label>
        <input type="text" name="note" id="note" bind:value={title} />
        <button >Add</button>
    </form>
{#if $notes}
    <div>
        {#each $notes as note (note.id)}
        <p>{note.id} - { note.title}</p>
        {/each}
    </div>
{/if}
    
</div>