<script>
    import { User, getUserDetails, loginState, alert } from '../userStore.js';
    let username = '';
    let password = '';
    let error;
  
    async function onLogin() {
      const user = await getUserDetails(username, password);
      
      if ($loginState !== "loggedIn" && user) {
        $loginState = "loggedIn";
        User.set(user);
        if (error) error = '';
        console.log($loginState, $User);
        alert.set(`${$User.user} has logged in`);
      } else {
        error = 'Incorrect username and password.';
        console.log("Incorrect username and password.");
      }
    }
  </script>
  
  <div class="login-container">
    <form on:submit|preventDefault={onLogin} class="login-form">
      <h2 class="form-title">Login</h2>
      <div class="form-group">
        <label for="username" class="form-label">Username</label>
        <input type="email" id="username" bind:value={username} class="form-input" required />
      </div>
      <div class="form-group">
        <label for="password" class="form-label">Password</label>
        <input type="password" id="password" bind:value={password} class="form-input" required />
      </div>
      <button type="submit" class="btn">Submit</button>
      {#if error}
        <div id="error_message" class="error-message">
          <small>{error}</small>
        </div>
      {/if}
    </form>
    <a href="https://github.com/crazylot/personal-task-manager-application" class="github-link">GitHub Link</a>
  </div>
  
  <style>
  
    .login-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #f5f5f5;
    }
  
    .login-form {
      background: white;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      max-width: 400px;
      width: 100%;
    }
  
    .form-title {
      margin-bottom: 20px;
      font-size: 24px;
      text-align: center;
      color: #333;
    }
  
    .form-group {
      margin-bottom: 15px;
    }
  
    .form-label {
      display: block;
      margin-bottom: 5px;
      font-size: 14px;
      color: #555;
    }
  
    .form-input {
      width: 100%;
      padding: 12px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 16px;
      color: #333;
    }
  
    .form-input:focus {
      border-color: #007bff;
      outline: none;
      box-shadow: 0 0 8px rgba(0, 123, 255, 0.2);
    }
  
    .btn {
      width: 100%;
      padding: 12px;
      border: none;
      border-radius: 5px;
      background-color: #007bff;
      color: white;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.1s ease;
    }
  
    .btn:hover {
      background-color: #0056b3;
    }
  
    .btn:active {
      transform: scale(0.98);
    }
  
    .error-message {
      margin-top: 10px;
      color: #d9534f;
      text-align: center;
    }
    .github-link {
    position: fixed;
    bottom: 0;
    right: 0;
    background-color: #333;
    color: #fff;
    padding: 10px;
    text-decoration: none;
  }
  </style>
  