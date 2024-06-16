import { writable } from 'svelte/store';

const user1 = 'admin@gmail.com'
const pass1 = '123456'

const user2 = 'muskan@gmail.com'
const pass2 = '123'

export const loginState = writable('NotLoggedIn');
export const User = writable(null);
export const alert = writable("Welcome to the Personal task manager app!")

let sessions = []

//mocking API calls
export const getUserDetails = async ( username, password ) => {
	if ( username === user1 && password === pass1 )
		return {"user": user1, "role": "Admin"}
    
    if ( username === user2 && password === pass2 )
		return {"user": user2, "role": "User"}
}