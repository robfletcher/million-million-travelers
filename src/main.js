import App from './App.svelte';
import { roll2d6, roll3d6, table2D6, tableD20, tableD66 } from './dice.js';
import { backgrounds } from './backgrounds.js';
import { vocations } from './vocations.js';

const app = new App({
	target: document.body,
	props: {
		backgrounds: backgrounds,
		character: {
			name: '',
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
			background: null,
			description: [],
			vocations: tableD66(vocations),
			blackGlass: roll3d6() + 10
		},	
		selectBackground: (character) => {
			character.background = tableD20(backgrounds);
			character.name = table2D6(character.background.names);
			character.description = [];
			character.background.tables.forEach(table => {
				character.description.push({ title: table.title, value: table2D6(table.table) });
			});
			console.log(character.description);
		}
	}
});

export default app;
