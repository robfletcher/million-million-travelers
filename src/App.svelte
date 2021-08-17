<script>
	export let traveler;
	export let backgrounds;

	// TODO: these should only trigger when the relevant property changes
	$: {
		traveler.applyArchetype();
		traveler.applyBackground();
	}
</script>

<main class="container">
	<div class="row">
		<header class="column">
			<h1>{traveler.name}</h1>
		</header>
	</div>

	<div class="row">
		<section id="attributes" class="column">
			<figure>
				<figcaption>Silver</figcaption>
				<span class="value">{traveler.attributes.silver}</span>
			</figure>
			<figure>
				<figcaption>Salt</figcaption>
				<span class="value">{traveler.attributes.salt}</span>
			</figure>
			<figure>
				<figcaption>Iron</figcaption>
				<span class="value">{traveler.attributes.iron}</span>
			</figure>
		</section>

		<section class="column">
			<table>
				<tr><th>Level</th><td>{traveler.level}</td></tr>
				<tr><th>XP</th><td>{traveler.xp}</td></tr>
				<tr><th>Will</th><td>{traveler.will}</td></tr>
				<tr><th>Stamina</th><td>{traveler.stamina}</td></tr>
			</table>
		</section>

		<section class="column">
			<table>
				<tr>
					<th>Archetype</th>
					<td>
						<label>
							<input type=radio bind:group={traveler.archetype} value={'Sword'}>
							Sword
						</label>
						<label>
							<input type=radio bind:group={traveler.archetype} value={'Sorcerer'}>
							Sorcerer
						</label>
					</td>
				</tr>
				{#if traveler.archetype === 'Sorcerer'}
				<tr>
					<th>Words of Creation</th><td>{traveler.words.join(', ')}</td>
				</tr>
				{/if}
				<tr>
					<th>Extras</th><td>{traveler.extra}</td>
				</tr>
			</table>
		</section>
	</div>

	<div class="row">
		<section class="column">
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
			<table>
				{#each traveler.description as { title, value } }
				<tr><th>{title}</th>
					<td>{value}</td></tr>
				{/each}
				<tr>
					<th>Vocation</th><td>{traveler.vocations.join(', ')}</td>
				</tr>
				<tr>
					<th>Complication</th><td>{traveler.complication}</td>
				</tr>
			</table>
		</section>

		<section class="column">
			<h2>Belongings</h2>
			 <table>
				<tr><th>Black glass</th><td>{traveler.blackGlass}G</td></tr>
				<tr><th>Inventory slots</th><td>{traveler.usedSlots()}/{traveler.inventory.slots}</td></tr>
				<tr><th>Gear</th><td>{traveler.inventory.gearBubbles}</td></tr>
				{#each traveler.inventory.weapons as { description, type }, i }
				<tr>
					{#if i === 0}
					<th rowspan={traveler.inventory.weapons.length}>Weapons</th>
					{/if}
					<td class="spanned">{description} <small>{type}</small></td>
				</tr>
				{/each}
				{#each traveler.inventory.armor as { description, type }, i }
				<tr>
					{#if i === 0}
					<th rowspan={traveler.inventory.armor.length}>Armor</th>
					{/if}
					<td class="spanned">{description} <small>{type}</small></td>
				</tr>
				{/each}
				{#each traveler.inventory.belongings as { description }, i }
				<tr>
					{#if i === 0}
					<th rowspan={traveler.inventory.belongings.length}>Belongings</th>
					{/if}
					<td class="spanned">{description}</td>
				</tr>
				{/each}
				<tr>
					<th>Gift</th>
					<td>{@html traveler.inventory.gift}</td>
				</tr>
			 </table>			
		</section>
	</div>
	
</main>

<style>
	main {
		background-color: rgba(240, 240, 221, 1);
	}

	header {
		background-color: #fbdd15;
		margin-top: 1rem;
		margin-bottom: 2rem;
	}

	header h1 {
		margin-top: 0;
		margin-bottom: 0;
		font-family: 'Uncial Antiqua', cursive;
		font-size: 6rem;
		font-variant: small-caps;
		line-height: 1;
	}

	th {
		text-align: right;
		vertical-align: text-top;
	}

	td.spanned {
		padding-left: 1.5rem;
	}

	label {
		display: inline-block;
		vertical-align: middle;
		cursor: pointer;
	}

	#attributes {
		align-items: start;
	}

	figure {
		margin: 0 0 1rem;
		background-color: #222;
		color: #fff;
		text-align: right;
		padding: 1rem;
		border-radius: 0 5rem 5rem 0;
	}

	figure figcaption, figure .value {
		display: inline-block;
		vertical-align: middle;
	}

	figure figcaption {
		font-variant: small-caps;
		writing-mode: sideways-lr;
	}

	figure .value {
		background-color: rgba(240, 240, 221, 1);
		color: #222;
		height: 6rem;
		width: 6rem;
		border-radius: 50%;
		line-height: 6rem;
		font-size: 3.5rem;
		text-align: center;
	}
</style>