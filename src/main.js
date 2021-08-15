import App from './App.svelte';
import { roll1d20, roll1d6, roll3d6 } from './dice.js';
import { backgrounds } from './backgrounds.js';
import { vocations } from './vocations.js';

const app = new App({
	target: document.body,
	props: {
		backgrounds: backgrounds,
		character: {
			attributes: {
				silver: roll3d6(),
				salt: roll3d6(),
				iron: roll3d6()
			},
			archetype: 'Sword',
			level: 1,
			xp: 0,
			will: 0,
			stamina: 0,
			background: backgrounds[roll1d20() - 1],
			vocation: vocations[roll1d6() - 1][roll1d6() - 1],
			blackGlass: roll3d6() + 10
		},
	}
});

export default app;
