<script>
  import { alert } from "../userStore";
</script>

{#if $alert}
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div on:click={() => $alert = ''} on:keydown={() => $alert = ''}> 
  <p>{ $alert }</p>
</div>
{/if}

<style>
  div {
    position: fixed;
    cursor: pointer;
    margin-right: 1.5rem;
    margin-left: 1.5rem;
    margin-top: 1rem;
    right: 0;
    display: flex;
    align-items: center;
    border-radius: 0.2rem;
    background-color: #565656;
    color: #fff;
    font-weight: 700;
    padding: 0.5rem 1.4rem;
    font-size: 1.5rem;
    z-index: 100;
    opacity: 95%;
  }
  div p {
    color: #fff;
  }
</style>
