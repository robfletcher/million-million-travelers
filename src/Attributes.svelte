<script>
  export let traveler;
</script>

<section id="attributes">
  <h2>Attributes</h2>
  <div class="stats">
    <figure class="lg"><figcaption>Silver</figcaption><span class="value">{$traveler.attributes.silver}</span></figure>
    <figure class="lg"><figcaption>Salt</figcaption><span class="value">{$traveler.attributes.salt}</span></figure>
    <figure class="lg"><figcaption>Iron</figcaption><span class="value">{$traveler.attributes.iron}</span></figure>
  </div>
  <div class="stats">
    <figure><figcaption>Level</figcaption><span class="value">{$traveler.level}</span></figure>
    <figure><figcaption>Will</figcaption><span class="value">{$traveler.will}</span></figure>
    <figure><figcaption>Stamina</figcaption><span class="value">{$traveler.stamina}</span></figure>
  </div>
</section>

<style lang="scss">
	@import "./style/theme.scss";

	section::after {
		content: '\131A3';
	}

	figcaption {
		font-variant: small-caps;
		/* Only Firefox actually supports writing-mode: sideways-lr so simulating by rotating vertical text */
		writing-mode: vertical-lr;
		transform: rotate(180deg);

		@media (min-width: 40rem) {
			font-size: 2rem;
			writing-mode: inherit;
			transform: none;
		}
	}

	.stats {
		display: flex;
		align-items: center;

		&:last-child {
			margin-bottom: 2.5rem;
		}
	}

	figure {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 1rem 1rem;
		flex-grow: 1;

		&.lg {
			figcaption {
				font-size: 1.8rem;

				@media (min-width: 40rem) {
					font-size: 2.4rem;
					writing-mode: inherit;
					transform: none;
				}
			}

			.value {
				font-size: 5.25rem;
			}
		}
	}

	.value {
		font-size: 3.5rem;
		line-height: 1;
		margin-left: 0;

		@media (min-width: 40rem) {
			margin-left: 0.5rem;
		}
	}
</style>
