<script>
  export let traveler;
</script>

<section id="background">
  <h2>Background</h2>
  <h3>{$traveler.background.name}</h3>
  {@html $traveler.background.description}
  <table>
    {#each $traveler.description as { title, value } }
    <tr><th>{title}</th>
      <td>{value}</td></tr>
    {/each}
  </table>
</section>

<style lang="scss">
	@import "./style/theme.scss";

	section::after {
		content: '\1329D';
	}

  td, th {
		padding: 0.5rem 1rem;
		border-bottom: none;
	}

	th {
		text-align: right;
		vertical-align: text-top;

		&::after {
			content: ':';
		}
	}
</style>