<script>
  export let traveler;
</script>

<section id="gift">
  <h2>Gift</h2>
  <h3>{$traveler.inventory.gift.name}</h3>
  {@html $traveler.inventory.gift.description}
</section>

<style lang="scss">
	@import "./style/theme.scss";

  section::after {
		content: '\13144';
	}
</style>