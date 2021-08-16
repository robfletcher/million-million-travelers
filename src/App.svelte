<script>
	export let traveler;
	export let backgrounds;

	// TODO: these should only trigger when the relevant property changes
	$: {
		traveler.applyArchetype();
		traveler.applyBackground();
	}
</script>

<main>
	<h1>{traveler.name}</h1>
	<p></p>

	<h2>Stats</h2>
	<dl>
		<dt>Silver</dt><dd>{traveler.attributes.silver}</dd>
		<dt>Salt</dt><dd>{traveler.attributes.salt}</dd>
		<dt>Iron</dt><dd>{traveler.attributes.iron}</dd>
	</dl>

	<h2>Archetype: {traveler.archetype}</h2>
	<label>
		<input type=radio bind:group={traveler.archetype} value={'Sword'}>
		Sword
	</label>
	<label>
		<input type=radio bind:group={traveler.archetype} value={'Sorcerer'}>
		Sorcerer
	</label>
	<dl>
		<dt>Level</dt>
		<dd>{traveler.level}</dd>
		<dt>XP</dt>
		<dd>{traveler.xp}</dd>
		<dt>Will</dt>
		<dd>{traveler.will}</dd>
		<dt>Stamina</dt>
		<dd>{traveler.stamina}</dd>
	</dl>

	<h2>Background</h2>
	<label>
		<select bind:value={traveler.background}>
			{#each backgrounds as background}
				<option value={background}>
					{background.name}
				</option>
			{/each}
		</select>
	</label>
	{#if traveler.background != null}{@html traveler.background.description}{/if}

	<h2>Description</h2>
	<dl>
		{#each traveler.description as { title, value } }
			<dt>{title}</dt>
			<dd>{value}</dd>
		{/each}
	</dl>

	<h2>Vocation: {traveler.vocations.join(', ')}</h2>

	<h2>Extras: {traveler.extra}</h2>

	<h2>Possessions</h2>
	<dl>
		<dt>Black glass</dt>
		<dd>{traveler.blackGlass}G</dd>
		<dt>Inventory slots</dt>
		<dd>{traveler.inventory.slots}</dd>
		<dt>Gear bubbles</dt>
		<dd>{traveler.inventory.gearBubbles}</dd>
		<dt>Weapons</dt>
		<dd>
			<ul>
				{#each traveler.inventory.weapons as { description, type } }
					<li>{description} <small>{type}</small></li>
				{/each}
			</ul>
		</dd>
		<dt>Armor</dt>
		<dd>
			<ul>
				{#each traveler.inventory.armor as { description, type } }
					<li>{description} <small>{type}</small></li>
				{/each}
			</ul>
		</dd>
	</dl>
</main>

<style>
</style>