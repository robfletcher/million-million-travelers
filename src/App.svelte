<script>
	export let traveler;
	const overburden = traveler.usedSlots() - traveler.inventory.slots;
</script>

<header class="meta">
	<h1>A Million Million Travelers</h1>
	<p>A character generator for the <a href="https://monkeys-paw-games.itch.io/unconquered-free-artless-edition">Unconquered</a> RPG by <a href="https://monkeyspawgames.com/">Monkey's Paw Games</a></p>
</header>

<main class="container">
	<header>
		<h1>{traveler.name}</h1>

		<section id="about">
			<p>Archetype: {traveler.archetype}</p>
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
					<figure id="level" class="stat">
						<figcaption>Level</figcaption><span class="value">{traveler.level}</span>
					</figure>
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
				<h3>{traveler.background.name}</h3>
				{@html traveler.background.description}
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
					{#if overburden > 0}<span class="inventory-slots overburden">{#each [...Array(overburden).keys()] as i}&#11045;{/each}</span>{/if}
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
					<li class="gear gear-{traveler.inventory.gearBubbles}"><strong>Gear</strong></li>
				</ul>
			</section>

			<section id="gift">
				<h2>Gift</h2>
				<p><strong>{traveler.inventory.gift.name}</strong><br><small>{@html traveler.inventory.gift.description}</small></p>
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

<footer class="meta"><p><em>Unconquered</em> is &copy; Monkey's Paw Games. This web-app is an independent production by <a href="https://twitter.com/_fletchr">Rob Fletcher</a> and is not affiliated with Monkey's Paw Games.</p></footer>

<style>
	/** Milligram starts column layout at 40rem which is too small */
	@media(max-width: 45rem) {
		.row {
			flex-direction: column;
		}
	}

	.meta {
		text-align: center;
	}

	.meta {
		margin-top: 1rem;
	}

	.meta h1 {
		font-family: 'Amarante', cursive;
		font-variant: small-caps;
		margin: 0;
		color: transparent;
		background-image: linear-gradient(#4f91be, #8e0039);
		background-clip: text;
		-webkit-background-clip: text;
		line-height: 1;
	}

	.meta p {
		margin-bottom: 1rem;
	}

	.meta a {
		color: #222;
		text-decoration: underline;
	}

	.meta a:hover, .meta a:active {
		color: #8e0039;
	}

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
		margin: 0 0 2rem;
		font-family: 'Caesar Dressing', cursive;
		font-size: 6rem;
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

	@media (min-width: 80rem) {
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
		border-bottom: 2px dotted #be0116;
	}

	@media (min-width: 80rem) {
		section {
			padding: 0 2rem;
		}
	}

	section::after {
		content: '\1321D';
		color: #be0116;
		position: absolute;
		left: 50%;
		bottom: 0;
		background-color: rgb(240, 240, 221);
		line-height: 1;
		padding: 0.5rem;
		font-size: 2rem;
		transform: translateX(-50%) translateY(50%);
	}

	#about p {
		margin-bottom: 1rem;
	}

	#about p:last-child {
		margin-bottom: 2.5rem;
	}

	@media (min-width: 45rem) {
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

	#gift::after {
		content: '\13144';
	}

	#words::after {
		content: '\13080';
	}

	section > header {
		display: flex;
		align-items: center;
	}

	h2 {
		font-size: 3.2rem;
		margin: 1.5rem 0 1rem;
	}

	h3 {
		font-size: 2.2rem;
		margin-bottom: 1rem;
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
		margin: 0 1rem 1rem;
		flex-grow: 1;
	}

	figure.stat .value {
		font-size: 3.5rem;
		line-height: 1;
		margin-left: 0;
	}

	figure.stat figcaption {
		/* Only Firefox actually supports writing-mode: sideways-lr so simulating by rotating vertical text */
		writing-mode: vertical-lr;
		transform: rotate(180deg);
	}

	figure.stat-large figcaption {
		font-size: 1.8rem;
	}

	@media (min-width: 40rem) {
		figure.stat figcaption {
			font-size: 2rem;
			writing-mode: inherit;
			transform: none;
		}

		figure.stat-large figcaption {
			font-size: 2.4rem;
			writing-mode: inherit;
			transform: none;
		}

		figure.stat .value {
			margin-left: 0.5rem;
		}
	}

	figure.stat-large .value {
		font-size: 5.25rem;
	}

	.inventory-slots:first-of-type {
		margin-left: 1rem;
	}

	.inventory-slots {
		font-family: sans-serif;
		letter-spacing: 0;
	}

	.overburden {
		color: #be0116;
	}

	.gear::after {
		margin-left: 1rem;
		vertical-align: top;
	}

	.gear-5::after {
		content: '\0025EF\0025EF\0025EF\0025EF\0025EF';
	}

	.gear-6::after {
		content: '\0025EF\0025EF\0025EF\0025EF\0025EF\0025EF';
	}

	.gear-bubbles {
		margin-left: 1rem;
		font-size: 2rem;
		display: inline-block;
		vertical-align: baseline;
	}

	@media (min-width: 40rem) {
		.inventory-slots {
			font-size: 2rem;
		}
	}

	@media (min-width: 80rem) {
		.inventory-slots {
			font-size: 2.8rem;
		}
	}
</style>