<script>
      import TaskManager from '/src/components/TaskManager.svelte'
      import {tasksList} from '/src/taskStore.js';
      
      // let taskList;
      // tasks.subscribe(value => {
      //   taskList = value;
      // });
   
      $: console.log("tasks", $tasksList);
    </script>
  
  <main>
      <TaskManager bind:tasks ={$tasksList}/>
  </main>
  
  <style>
  </style>