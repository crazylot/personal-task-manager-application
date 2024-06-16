<script>
    import {page} from '$app/stores';
    import TaskList from '/src/components/TaskList.svelte';
    import {tasksList} from '/src/taskStore.js';
    console.log($page)
    let task_id = parseInt($page.params.id)
</script>
<div class="todoapp stack-large">
    
    <TaskList tasks = {$tasksList} task_id={task_id}/>
  
  </div>