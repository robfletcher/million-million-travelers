<script>
  export let traveler;
</script>

<header>
  <h1>{$traveler.name}</h1>

  <section id="about">
    <p>Archetype: {$traveler.archetype.name}</p>
    <p>Vocation: {$traveler.vocations.join(', ')}</p>
    <p>{$traveler.complication}</p>
    <p>Extra: {$traveler.extra}</p>
  </section>
</header>

<style>
	header {
		position: relative;
	}

	h1, h1::before, h1::after {
		background-color: #fbdd15;
	}
	
	h1 {
		margin: 0 0 2rem;
		font-size: 6rem;
	}

	h1::before, h1::after {
		position: absolute;
		content: '\00A0';
		width: 2rem;
	}

	h1::before {
		left: -2rem;
	}

	h1::after {
		right: -2rem;
	}

	@media (min-width: 80rem) {
		header {
			padding: 0.5rem 0 0;
		}

		h1 {
			margin-top: 1rem;
			padding: 0 1rem;
			line-height: 1;
		}

		h1::before, h1::after {
			width: 3.5rem;
		}

		h1::before {
			left: -3.5rem;
		}

		h1::after {
			right: -3.5rem;
		}
	}

	@media (min-width: 45rem) {
		section {
			display: flex;
			justify-content: space-evenly;
			align-items: baseline;
		}

		section p {
			margin: 0 1rem 2.5rem;
			text-align: center;
		}
	}

	section::after {
		content: '\13000';
	}
</style>