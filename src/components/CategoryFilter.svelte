<script>
    export let CategoryFilter = 'all'
  </script>
  
  <div class="filters btn-group stack-exception">
    <button class="btn toggle-btn" class:btn__primary={CategoryFilter === 'all'} aria-pressed={CategoryFilter === 'all'} on:click={() => CategoryFilter = 'all'} >
      <span>All</span>
    </button>
    <button class="btn toggle-btn" class:btn__primary={CategoryFilter === 'Office'} aria-pressed={CategoryFilter === 'Office'} on:click={() => CategoryFilter = 'Office'} >
      <span>Office</span>
    </button>
    <button class="btn toggle-btn" class:btn__primary={CategoryFilter === 'Personal'} aria-pressed={CategoryFilter === 'Personal'} on:click={() => CategoryFilter = 'Personal'} >
      <span>Personal</span>
    </button>
  </div>