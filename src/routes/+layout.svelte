<script>
  import LoginComponent from "../components/LoginComponent.svelte";
  import { User, loginState } from "../userStore";
  import UserProfileComponent from "../components/UserProfileComponent.svelte";
  import AlertComponent from "../components/AlertComponent.svelte";
  import { alert } from "../userStore";

  function onLogout() {
    alert.set(`${$User.user} has been logged out`); 
    loginState.set("NotLoggedIn");
    User.set(null);
  }
</script>
<AlertComponent/>
{#if $loginState !== "loggedIn"}
  <LoginComponent />
{:else}
  <div class="navbar">
    <a href="/">home</a>
    <a href="/about">about</a>
    <a href="/tasks">tasks manager</a>
    <div class="options">
      <UserProfileComponent />
      <button class="dropbtn" on:click={onLogout}>Logout</button>
    </div>
  </div>
  <slot />
{/if}

<style>
  .navbar {
    overflow: hidden;
    background-color: #333;
    font-family: Arial, Helvetica, sans-serif;
  }

  .navbar a {
    float: left;
    font-size: 16px;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  .dropbtn {
    font-size: 16px;
    color: white;
    text-align: center;
    padding: 5px 5px;
    background-color: #333;
    border: none;
    cursor: pointer;
  }

  .navbar a:hover,
  .dropbtn:hover {
    background-color: red;
  }

  .options {
    float: right;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: auto;
  }
</style>
