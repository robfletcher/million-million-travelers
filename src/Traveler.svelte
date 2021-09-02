<script>
	import { newSorcerer, newSword, traveler } from "./store"
	import About from "./About.svelte";
	import Attributes from "./Attributes.svelte";
	import Background from "./Background.svelte";
	import Gift from "./Gift.svelte";
	import Inventory from "./Inventory.svelte";
	import Words from "./Words.svelte";
</script>

<nav class="container">
	<p>Generate a new random traveler by choosing an archetype:</p>
	<p class="buttons">
    <button class="new-sword" on:click={newSword}>Sword</button> or <button class="new-sorcerer" on:click={newSorcerer}>Sorcerer</button>
  </p>
</nav>

<main class="container">
	<About traveler={traveler}/>
	<div class="row">
		<div class="column">
			<Attributes traveler={traveler}/>
			<Background traveler={traveler}/>
		</div>
		<div class="column">
			<Inventory traveler={traveler}/>
			<Gift traveler={traveler}/>
			<Words traveler={traveler}/>
		</div>
	</div>
</main>

<style lang="scss">
	/** Milligram starts column layout at 40rem which is too small */
	@media(max-width: 45rem) {
		.row {
			flex-direction: column;
		}
	}

	main {
		background-color: rgba(240, 240, 221, 1);
		padding-bottom: 3rem;
	}

  nav {
		text-align: center;

		p {
			margin-bottom: 1rem;
		}
	}

	.buttons {
		white-space: nowrap;
	}

	button {
		background-color: #FBDD15;
		border-color: #FBDD15;
		color: #222;
		font-family: 'Amarante', serif;
		font-variant: small-caps;
		text-transform: none;
		font-size: 2rem;
		font-weight: 300;
		letter-spacing: normal;
		height: auto;
		padding: 0 2rem;

		@media(min-width: 36rem) {
			&::before, &::after {
				display: inline-block;
				font-size: 3rem;
				vertical-align: middle;
			}

			&.new-sword::before {
				transform: translateY(0.4rem);
				content: '\1300E\00a0';
			}

			&.new-sorcerer::after {
				transform: translateY(0.4rem) scale(-1, 1);
				content: '\1301B\00a0';
				font-size: 3.5rem;
			}
		}
	}
</style>