<script>
  export let traveler;
</script>

{#if $traveler.words.length > 0}
<section id="words">
  <h2>Words of Creation</h2>
  <ul>
    {#each $traveler.words as word}
    <li>{word}</li>
    {/each}
  </ul>
</section>
{/if}

<style>
	section::after {
		content: '\13080';
	}
</style>