<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  let name = '';
  let selected = '';
  const menuItems = ["Personal", "Office"];

  const addTask = () => {
    dispatch('addtask', { name, category: selected });
    name = '';
    selected = '';
  }

  const onCancel = () => {
    name = '';
    selected = '';
  }
</script>

<form on:submit|preventDefault={addTask} on:keydown={(e) => e.key === 'Escape' && onCancel()}>
  <h2 class="label-wrapper">
    <label for="todo-0" class="label__lg">What needs to be done?</label>
  </h2>
  <input bind:value={name} type="text" id="todo-0" autoComplete="off" class="input input__lg" />
  <select bind:value={selected}>
    <option value="" disabled selected>Select a category</option>
    {#each menuItems as item}
      <option value={item}>
        {item}
      </option>
    {/each}
  </select>
  <button type="submit" disabled={!name || !selected} class="btn btn__primary btn__lg">Add</button>
</form>

<style>
</style>
