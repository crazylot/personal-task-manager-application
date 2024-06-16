import { writable } from "svelte/store";
import { localStore } from "./localStore.js";

export const alert = writable("Welcome to the to-do list app!");

const initialTasks = [
  { id: 1, name: "Create a Svelte starter app", category: "Office", completed: true },
  { id: 2, name: "Create your first component", category: "Personal", completed: true },
  { id: 3, name: "Complete the rest of the tutorial", category: "Personal", completed: false }
];

// export const tasks = localStore("personal-task-manager-application", initialTasks);
// export const tasksList = writable(initialTasks)

export const tasksList = localStore("personal-task-manager-application", initialTasks);
