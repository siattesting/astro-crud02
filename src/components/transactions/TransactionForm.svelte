<script lang="ts">
let responseMessage: string

async function submit(e: SubmitEvent) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const response = await fetch("/api/transactions", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    responseMessage = data.message;
  }
</script>
<form on:submit|preventDefault={submit} >
    <label for="title">Title</label>
    <input type="hidden" name="author" value="demba@me.com">
    <input type="text" id="title" name="title" />
    <label for="content">Description</label>
    <textarea id="content" name="content" />
    <label for="amount">Amount</label>
    <input type="number" id="title" name="amount" />
    <label for="type">Type</label>
        <select name="type">
            {#each ["RECETTES", "DEPENSES"]  as type }
            <option>{type}</option>
            {/each}
        </select>
    <label for="date">
        <span>Date</span>
        <input type="date" name="date" required />
    </label>
        <button type="submit" class="label" >Save</button>
</form>

