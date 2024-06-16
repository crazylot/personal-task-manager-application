<script>
  import StatusFilterButton from "./StatusFilter.svelte";
  import CategoryFilter from "./CategoryFilter.svelte";
  import TaskList from "./TaskList.svelte";
  import NewTask from "./NewTask.svelte";

  export let tasks = [];
  let totalTasks = tasks.length;
  let completedTasks = tasks.filter((task) => task.completed).length;
  $: totalTasks = tasks.length;
  $: completedTasks = tasks.filter((task) => task.completed).length;
  $: newTaskId = tasks.length ? Math.max(...tasks.map(t => t.id)) + 1 : 1;

  let Statusfilter = "all";
  let Categoryfilter = "all";

  function handleAddTask(event) {
    const { name, category } = event.detail;
    tasks = [
      ...tasks,
      { id: newTaskId, name: name, category:category, completed: false },
    ];
    // console.log($tasks)
  }
</script>

<div class="todoapp stack-large">
  <NewTask on:addtask={handleAddTask} />

  <div>
    <span>Filter By Status</span>
    <StatusFilterButton bind:filter={Statusfilter} />

    <hr />

    <span> Filter By Category </span>
    <CategoryFilter bind:CategoryFilter={Categoryfilter} />
  </div>

  <h2 id="list-heading">
    {completedTasks} out of {totalTasks} items completed
  </h2>

  <TaskList bind:tasks {Statusfilter} {Categoryfilter} />

  <hr />

  <div class="btn-group">
    <button type="button" class="btn btn__primary">Check all</button>
    <button type="button" class="btn btn__primary">Remove completed</button>
  </div>
</div>

<style>
  .todoapp {
    padding: 20px;
    background-color: #f5f5f5;
  }
  .btn {
    margin-right: 5px;
  }
</style>
