import App from './App.svelte';
import { Traveler } from './traveler.js';
import { backgrounds } from './backgrounds.js';

const app = new App({
	target: document.body,
	props: {
		backgrounds: backgrounds,
		traveler: new Traveler()
	}
});

export default app;
