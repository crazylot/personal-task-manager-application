<script>
  import TaskCard from "./TaskCard.svelte";
  export let tasks = [];
  export let Statusfilter = 'all';
  export let Categoryfilter = 'all';
  export let task_id=null;

  const filterTodos = (statusFilter, categoryFilter, task_id, tasks) => {
    let filteredTasks = tasks;

    // Apply status filter
    if (statusFilter === 'active') {
      filteredTasks = filteredTasks.filter(t => !t.completed);
    } else if (statusFilter === 'completed') {
      filteredTasks = filteredTasks.filter(t => t.completed);
    }

    // Apply category filter
    if (categoryFilter == 'Office') {
      filteredTasks = filteredTasks.filter(t => t.category === categoryFilter);
    } else if (categoryFilter == 'Personal') {
      filteredTasks = filteredTasks.filter(t => t.category === categoryFilter);
    }

    if (task_id) {
      filteredTasks = filteredTasks.filter(t => t.id === task_id);
    }

    return filteredTasks;
  }

  const removeTask = (task) =>
    tasks = tasks.filter((t) => t.id !== task.id);

  function updateTask(task) {
    const i = tasks.findIndex((t) => t.id === task.id);
    tasks[i] = { ...tasks[i], ...task };
  }
</script>

<ul role="list" class="todo-list stack-large" aria-labelledby="list-heading">
  {#each filterTodos(Statusfilter, Categoryfilter, task_id ,tasks) as task (task.id)}
  <li class="todo">
    <TaskCard task={task} on:remove={(e) => removeTask(e.detail)} on:update={(e) => updateTask(e.detail)}/>
  </li>
  {:else}
  <li>Nothing to do here!</li>
  {/each}
</ul>
