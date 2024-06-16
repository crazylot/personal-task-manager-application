<script>
    import {page} from '$app/stores';
    import TaskList from '/src/components/TaskList.svelte';
    import {tasks} from '/src/taskStore.js';
    console.log($page)
    let task_id = parseInt($page.params.id)
</script>
<div class="todoapp stack-large">
    
    <TaskList tasks = {$tasks} task_id={task_id}/>
  
  </div>