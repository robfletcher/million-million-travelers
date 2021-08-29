import App from './App.svelte';
import { Traveler } from './traveler.js';

const app = new App({
	target: document.body,
	props: {
		traveler: new Traveler()
	}
});

export default app;
