<script>
	export let character;
	export let backgrounds;
</script>

<main>
	<h1>Unconquered</h1>
	<p></p>

	<h2>Stats</h2>
	<dl>
		<dt>Silver</dt><dd>{character.attributes.silver}</dd>
		<dt>Salt</dt><dd>{character.attributes.salt}</dd>
		<dt>Iron</dt><dd>{character.attributes.iron}</dd>
	</dl>

	<h2>Archetype: {character.archetype}</h2>
	<label>
		<input type=radio bind:group={character.archetype} value={'Sword'}>
		Sword
	</label>
	<label>
		<input type=radio bind:group={character.archetype} value={'Sorcerer'}>
		Sorcerer
	</label>
	<dl>
		<dt>Level</dt>
		<dd>{character.level}</dd>
		<dt>XP</dt>
		<dd>{character.xp}</dd>
		<dt>Will</dt>
		<dd>{character.will}</dd>
		<dt>Stamina</dt>
		<dd>{character.stamina}</dd>
	</dl>

	<h2>Background</h2>
	<label>
		<select bind:value={character.background}>
			{#each backgrounds as background}
				<option value={background}>
					{background.name}
				</option>
			{/each}
		</select>
	</label>

	<h2>Vocation: {character.vocation}</h2>

	<h2>Possessions</h2>
	<dl>
		<dt>Black glass</dt>
		<dd>{character.blackGlass}G</dd>
	</dl>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>