<script>
    import TaskList from '/src/components/TaskList.svelte';
    import {tasksList} from '/src/taskStore.js';
    import { loginState } from '../../../userStore';
    import { onMount } from "svelte";
    console.log($tasksList)
    onMount(() => {
      console.log($loginState)
    });
  </script>
  <div class="todoapp stack-large">
  
    <TaskList tasks = {$tasksList} />
  
  </div>