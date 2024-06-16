<script>
    import TaskList from '/src/components/TaskList.svelte';
    import {tasks} from '/src/taskStore.js';
    import { loginState } from '../../../userStore';
    console.log($tasks)
    console.log($loginState)
  </script>
  <div class="todoapp stack-large">
  
    <TaskList tasks = {$tasks} />
  
  </div>