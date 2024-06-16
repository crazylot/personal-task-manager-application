<script>
    import {page} from '$app/stores';
    import TaskList from '/src/components/TaskList.svelte';
    import {tasksList} from '/src/taskStore.js';
</script>
<div class="todoapp stack-large">
  
    <TaskList tasks = {$tasksList}  Categoryfilter={$page.params.category}/>
  
  </div>