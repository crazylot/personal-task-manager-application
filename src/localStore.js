import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const localStore = (key, initial) => {
  // Helper functions
  const toString = (value) => JSON.stringify(value, null, 2);
  const toObj = (value) => {
    try {
      return JSON.parse(value);
    } catch (e) {
      return initial;
    }
  };

  // Initialize local storage if the item is not present and we're in the browser
  if (browser && localStorage.getItem(key) === null) {
    localStorage.setItem(key, toString(initial));
  }

  // Create the writable store and initialize it with the value from local storage (if available)
  const saved = browser ? toObj(localStorage.getItem(key)) : initial;
  const { subscribe, set, update } = writable(saved);

  return {
    subscribe,
    set: (value) => {
      if (browser) {
        localStorage.setItem(key, toString(value));
      }
      return set(value);
    },
    update: (fn) => {
      const value = fn(saved); // Changed from `fn(get(store))`
      if (browser) {
        localStorage.setItem(key, toString(value));
      }
      return update(fn);
    },
  };
};
