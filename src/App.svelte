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
	<header>
		<h1>{traveler.name}</h1>

		<section id="about">
			<p>Archetype: 
				<label><input type=radio bind:group={traveler.archetype} value={'Sword'}>Sword</label>
				<label><input type=radio bind:group={traveler.archetype} value={'Sorcerer'}>Sorcerer</label>
			</p>
			<p>Level: {traveler.level}</p>
			<p>Vocation: {traveler.vocations.join(', ')}</p>
			<p>{traveler.complication}</p>
			<p>Extra: {traveler.extra}</p>
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
					<li><strong>Gear</strong><span class="gear-bubbles">{#each [...Array(traveler.inventory.gearBubbles).keys()] as i}&bigcirc;{/each}</span></li>
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
		padding-bottom: 3rem;
	}

	main > header {
		padding: 0 1rem;
	}

	main header h1, main header h1::before, main header h1::after {
		background-color: #fbdd15;
	}
	
	main header h1 {
		margin-bottom: 2rem;
		position: relative;
	}

	main header h1::before, main header h1::after {
		position: absolute;
		content: '\00A0';
		width: 3rem;
	}

	main header h1::before {
		left: -3rem;
	}

	main header h1::after {
		right: -3rem;
	}

	@media (min-width: 1025px) {
		main > header {
			padding-top: 0.5rem;
		}

		main header h1 {
			margin-top: 1rem;
		}

		main header h1::before, main header h1::after {
			width: 4.5rem;
		}

		main header h1::before {
			left: -4.5rem;
		}

		main header h1::after {
			right: -4.5rem;
		}
	}

	section {
		position: relative;
		border-bottom: 1px solid #222;
	}

	@media (min-width: 769px) {
		section {
			padding: 0 2rem;
		}
	}

	section::after {
		content: '\1321D';
		position: absolute;
		left: 50%;
		bottom: -1.5rem;
		background-color: rgb(240, 240, 221);
		line-height: 1;
		padding: 0.5rem;
		font-size: 2rem;
		transform: translateX(-50%);
	}

	#about p {
		margin-bottom: 1rem;
	}

	#about p:last-child {
		margin-bottom: 2.5rem;
	}

	@media (min-width: 768px) {
		#about {
			display: flex;
			justify-content: space-evenly;
			align-items: baseline;
		}

		#about p {
			margin: 0 1rem 2.5rem;
			text-align: center;
		}
	}

	#about::after {
		content: '\13000';
	}

	#attributes::after {
		content: '\131A3';
	}

	#background::after {
		content: '\1329D';
	}

	#inventory::after {
		content: '\130A1';
	}

	#words::after {
		content: '\13080';
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
	}

	h2 {
		font-size: 3.2rem;
		margin: 1.5rem 0 1rem;
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

	th::after {
		content: ':';
	}

	h2, figcaption {
		font-variant: small-caps;
	}

	label {
		display: inline;
		cursor: pointer;
		margin-left: 0.5rem;
		margin-bottom: 0;
		white-space: nowrap;
	}

	input {
		margin-bottom: 0;
	}

	.stats {
		display: flex;
		align-items: center;
	}

	.stats:last-child {
		margin-bottom: 2.5rem;
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
		font-size: 1.8rem;
		writing-mode: sideways-lr;
	}

	figure.stat-large .value {
		margin-left: 0;
	}

	@media (min-width: 768px) {
		figure.stat-large figcaption {
			font-size: 2.4rem;
			writing-mode: inherit;
		}

		figure.stat-large .value {
			margin-left: 1rem;
		}
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