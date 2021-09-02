import { writable } from 'svelte/store';
import { sorcerer, sword } from './archetypes';
import { Traveler } from './traveler';

export const traveler = writable(Traveler.from(JSON.parse(localStorage.traveler || '{}')));

export const newSword = () => {
  const value = Traveler.from({archetype: sword});
  value.applyArchetype();
  traveler.set(value);
}

export const newSorcerer = () => {
  const value = Traveler.from({archetype: sorcerer});
  value.applyArchetype();
  traveler.set(value);
}

traveler.subscribe((value) => localStorage.traveler = JSON.stringify(value));
