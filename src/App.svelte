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
	<div class="row">
		<header id="traveler-name" class="column">
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
			<header>
				<h2>Inventory</h2>
				<span class="inventory-slots">{#each [...Array(traveler.inventory.slots).keys()] as i}{#if i < traveler.usedSlots()}&#11045;{:else}&#11046;{/if}{/each}</span>
			</header>
			<ul>
				<li>{traveler.blackGlass}G Black Glass</li>
				<li><strong>Gear</strong><span class="gear-bubbles">{#each [...Array(traveler.inventory.gearBubbles).keys()] as i}&bigcirc;{/each}</span></li>
				{#each traveler.inventory.weapons as { description, type }, i }
				<li><strong>{description}</strong><br><small>{type}</small></li>
				{/each}
				{#each traveler.inventory.armor as { description, type }, i }
				<li><strong>{description}</strong><br><small>{type}</small></li>
				{/each}
				{#each traveler.inventory.belongings as { description }, i }
				<li>{description}</li>
				{/each}
				<li><strong>{traveler.inventory.gift.name}</strong><br><small>{@html traveler.inventory.gift.description}</small></li>
			</ul>

			{#if traveler.archetype === 'Sorcerer'}
			<h2>Words of Creation</h2>
			<ul>
				{#each traveler.words as word}
				<li>{word}</li>
				{/each}
			</ul>
			{/if}
		</section>
	</div>
	
</main>

<style>
	main {
		background-color: rgba(240, 240, 221, 1);
	}

	#traveler-name {
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

	header h2 {
		margin: 0;
	}

	ul {
		list-style: disc outside;
		padding: 0 1.5em;
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