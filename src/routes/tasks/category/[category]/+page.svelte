<script>
    import {page} from '$app/stores';
    import TaskList from '/src/components/TaskList.svelte';
    import {tasks} from '/src/taskStore.js';
</script>
<div class="todoapp stack-large">
  
    <TaskList tasks = {$tasks}  Categoryfilter={$page.params.category}/>
  
  </div>