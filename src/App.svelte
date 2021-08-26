<script>
import { get_all_dirty_from_scope } from "svelte/internal";

	export let traveler;
	export let backgrounds;

	// TODO: these should only trigger when the relevant property changes
	$: {
		traveler.applyArchetype();
		traveler.applyBackground();
	}
</script>

<main class="container">
	<header>
		<div class="row">
			<h1 class="column">{traveler.name}</h1>
		</div>

		<section id="about" class="row">
			<div class="column">Archetype: 
				<label><input type=radio bind:group={traveler.archetype} value={'Sword'}>Sword</label>
				<label><input type=radio bind:group={traveler.archetype} value={'Sorcerer'}>Sorcerer</label>
			</div>
			<div class="column"><p>Level: {traveler.level}</p></div>
			<div class="column"><p>Vocation: {traveler.vocations.join(', ')}</p></div>
			<div class="column"><p>{traveler.complication}</p></div>
			<div class="column"><p>Extra: {traveler.extra}</p></div>
		</section>
	</header>

	<div class="row">
		<div class="column">
			<section id="attributes">
				<h2>Attributes</h2>
				<div class="stats">
					<figure id="silver" class="stat stat-large">
						<figcaption>Silver</figcaption>
						<span class="value">{traveler.attributes.silver}</span>
					</figure>
					<figure id="salt" class="stat stat-large">
						<figcaption>Salt</figcaption>
						<span class="value">{traveler.attributes.salt}</span>
					</figure>
					<figure id="iron" class="stat stat-large">
						<figcaption>Iron</figcaption>
						<span class="value">{traveler.attributes.iron}</span>
					</figure>
				</div>
				<div class="stats">
					<figure id="will" class="stat">
						<figcaption>Will</figcaption><span class="value">{traveler.will}</span>
					</figure>
					<figure id="stamina" class="stat">
						<figcaption>Stamina</figcaption><span class="value">{traveler.stamina}</span>
					</figure>
				</div>
			</section>

			<section id="background">
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
				</table>
			</section>
		</div>

		<div class="column">
			<section id="inventory">
				<header>
					<h2>Inventory</h2>
					<span class="inventory-slots">{#each [...Array(traveler.inventory.slots).keys()] as i}{#if i < traveler.usedSlots()}&#11045;{:else}&#11046;{/if}{/each}</span>
				</header>
				<ul>
					<li>{traveler.blackGlass}G Black Glass</li>
					<li><strong>Gear</strong><span class="gear-bubbles">{#each [...Array(traveler.inventory.gearBubbles).keys()] as i}&bigcirc;{/each}</span></li>
					{#each traveler.inventory.weapons as { aspect, form, type }, i }
					<li><strong>{aspect} {form}</strong><br><small>{type}</small></li>
					{/each}
					{#each traveler.inventory.armor as { description, type }, i }
					<li><strong>{description}</strong><br><small>{type}</small></li>
					{/each}
					{#each traveler.inventory.belongings as { description }, i }
					<li>{description}</li>
					{/each}
					<li><strong>{traveler.inventory.gift.name}</strong><br><small>{@html traveler.inventory.gift.description}</small></li>
				</ul>
			</section>

			{#if traveler.archetype === 'Sorcerer'}
			<section id="words">
				<h2>Words of Creation</h2>
				<ul>
					{#each traveler.words as word}
					<li>{word}</li>
					{/each}
				</ul>
			</section>
			{/if}
		</div>
	</div>
	
</main>

<style>
	main {
		background-color: rgba(240, 240, 221, 1);
	}

	main > header h1 {
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

	section > header {
		display: flex;
		align-items: center;
		margin-bottom: 2rem;
	}

	h2 {
		font-size: 3.2rem;
		margin-bottom: 1rem;
	}

	header h2 {
		margin: 0;
	}

	ul {
		list-style: disc outside;
		padding: 0 1.5em;
	}

	td, th {
		padding: 0.5rem 1rem;
		border-bottom: none;
	}

	th {
		text-align: right;
		vertical-align: text-top;
	}

	h2, th, figcaption {
		font-variant: small-caps;
	}

	label {
		display: inline-block;
		vertical-align: middle;
		cursor: pointer;
	}

	#about .column {
		display: flex;
		align-items: baseline;
		justify-content: center;
	}

	#about .column > * {
		white-space: nowrap;
	}

	.stats {
		display: flex;
		align-items: center;
	}

	figure.stat {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 0 1rem;
		flex-grow: 1;
	}

	figure.stat figcaption {
		font-size: 2rem;
	}

	figure.stat .value {
		font-size: 3.5rem;
		line-height: 1;
		margin-left: 1rem;
	}

	figure.stat-large figcaption {
		font-size: 2.4rem;
	}

	figure.stat-large .value {
		font-size: 5.25rem;
	}

	.inventory-slots {
		margin-left: 2rem;
		font-size: 2rem;
	}

	.gear-bubbles {
		margin-left: 1rem;
		font-size: 2rem;
		display: inline-block;
		vertical-align: baseline;
	}

	@media (min-width: 769px) {
		.inventory-slots {
			font-size: 2.8rem;
		}
	}
</style>