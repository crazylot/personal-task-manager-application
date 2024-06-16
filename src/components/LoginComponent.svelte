<script>
    import {User, getUserDetails, loginState, alert} from '../userStore.js';
    let username;
    let password;
    let error;
    async function onLogin() {
		const user = await getUserDetails( username, password )

		if ($loginState != "loggedIn" && user != undefined) {
            $loginState = "loggedIn"
            User.set(user); //stores user currently logged in 
			if ( error ) error = ''
            console.log($loginState, $User)
            alert.set(`${$User.user} has logged in`); 
		}
		else {
			error = 'Incorrect username and password.'
			console.log("Incorrect username and password.")
		}
	}
</script>


<div class="stack-small">
    <form on:submit|preventDefault={onLogin} class="stack-small">
        <div class="form-group">
            <label for="username" class="todo-label">Username</label>
            <input type="email" class="todo-text" id="username" bind:value={username} />
            <label for="password" class="todo-label">Password</label>
            <input type="password" class="todo-text" id="password" bind:value={password} />
            <button type="submit" class="btn">Submit</button>
            {#if error != undefined}
                <div id="error_message" class="text-danger">
                    <small>{error}</small>
                </div>
            {/if}
        </div>
    </form>
</div>
