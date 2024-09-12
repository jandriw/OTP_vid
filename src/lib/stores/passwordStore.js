import { writable } from "svelte/store";

export const passwordLengthStore = writable(6)
export const passwordStore = writable([])
export const isValidPasswordStore = writable(null)