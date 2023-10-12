<script>
    import { load, transStore } from '../../lib/transStore'
    
    load()
  
</script>

<div>
    <!-- <form action="" on:submit|preventDefault={handleSubmit}>
        <label for="title">Title</label>
        <input type="text" name="note" id="note" bind:value={title} />
        <button >Add</button>
    </form> -->
{#if $transStore}
    <div>
        {#each $transStore as item (item.id)}
        <p>{item.id} - { item.title}</p>
        {/each}
    </div>
{/if}
    
</div>