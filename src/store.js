import { writable } from 'svelte/store';
import { Traveler } from './traveler';

export const traveler = writable(Traveler.from(JSON.parse(localStorage.traveler || '{}')));
export const newTraveler = () => {
  traveler.set(new Traveler());
};

traveler.subscribe((value) => localStorage.traveler = JSON.stringify(value));
