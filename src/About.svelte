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

<style lang="scss">
	header {
		position: relative;
		@media (min-width: 80rem) {
			padding: 0.5rem 0 0;
		}
	}

	h1, h1::before, h1::after {
		background-color: #fbdd15;
	}
	
	h1 {
		margin: 0 0 2rem;
		font-size: 6rem;

		&::before, &::after {
			position: absolute;
			content: '\00A0';
			width: 2rem;

			@media (min-width: 80rem) {
				width: 3.5rem;
			}
		}

		&::before {
			left: -2rem;
			@media (min-width: 80rem) {
				left: -3.5rem;
			}
		}

		&::after {
			right: -2rem;
			@media (min-width: 80rem) {
				right: -3.5rem;
			}
		}

		@media (min-width: 80rem) {
			margin-top: 1rem;
			padding: 0 1rem;
			line-height: 1;
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