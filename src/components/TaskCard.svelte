<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    export let task;
  
    let editing = false;
    let updatedTask = { name: task.name, completed: task.completed, category: task.category };
    let menuOpen = false;
    const menuItems = ["Personal", "Office"];
  
    function onEdit() {
      updatedTask = { name: task.name, completed: task.completed, category: task.category };
      editing = true;
    }
  
    function saveEdit(event) {
      event.preventDefault();
      task = { ...task, ...updatedTask };
      dispatch("update", task);
      editing = false;
    }
  
    function selectCategory(category) {
      updatedTask.category = category;
      menuOpen = false;
    }
  </script>
  
  <div class="stack-small">
    {#if editing}
      <form class="stack-small" on:submit={saveEdit}>
        <div class="form-group">
          <label for="todo-{task.id}" class="todo-label">New name for '{task.name}'</label>
          <input
            type="text"
            id="todo-{task.id}"
            autoComplete="off"
            class="todo-text"
            bind:value={updatedTask.name}
          />
          <input
            type="checkbox"
            bind:checked={updatedTask.completed}
            style="font-size: medium;"
          />
          <section class="dropdown">
            <button type="button" on:click={() => (menuOpen = !menuOpen)} class="btn">{!menuOpen ? "Show Menu" : "Close Menu"}</button>
            {#if menuOpen}
            <div id="myDropdown" class="dropdown-content">
              {#each menuItems as item}
                <a href="#{item.toLowerCase()}" on:click={() => selectCategory(item)}>{item}</a>
              {/each}
            </div>
            {/if}
          </section>
        </div>
        <div class="btn-group">
          <button class="btn btn__primary todo-edit" type="submit">
            Save
          </button>
        </div>
      </form>
    {:else}
      <div class="c-cb">
        <input
          type="checkbox"
          id="todo-{task.id}"
          on:click={() => (task.completed = !task.completed)}
          checked={task.completed}
        />
        <label for="todo-{task.id}" class="todo-label">{task.name}</label>
        <label for="todo-{task.id}">({task.category})</label>
      </div>
      <div class="btn-group">
        <button type="button" class="btn" on:click={onEdit}>
          Edit <span class="visually-hidden">{task.name}</span>
        </button>
        <button
          type="button"
          class="btn btn__danger"
          on:click={() => dispatch("remove", task)}
        >
          Delete <span class="visually-hidden">{task.name}</span>
        </button>
      </div>
    {/if}
  </div>
  
  <style>
    a {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
    }
  
    a:hover {
      background-color: #ddd;
    }
  
    .dropdown {
      position: relative;
      display: inline-block;
    }
  
    .dropdown-content {
      position: absolute;
      background-color: #f6f6f6;
      min-width: 230px;
      border: 1px solid #ddd;
      z-index: 1;
    }
  
  </style>