<script>
  export let traveler;

	$: overburden = $traveler.usedSlots() - $traveler.inventory.slots;
</script>

<section id="inventory">
  <h2>Inventory</h2>
  <div class="inventory-slots">{#each [...Array($traveler.inventory.slots).keys()] as i}{#if i < $traveler.usedSlots()}&#11045;{:else}&#11046;{/if}{/each}{#if overburden > 0}<span class="overburden">{#each [...Array(overburden).keys()] as i}&#11045;{/each}</span>{/if}</div>
  <ul>
    <li>{$traveler.blackGlass}G Black Glass</li>
    {#each $traveler.inventory.weapons as { aspect, form, type }, i }
    <li><strong>{aspect} {form}</strong><br><small>{type}</small></li>
    {/each}
    {#each $traveler.inventory.armor as { description, type }, i }
    <li><strong>{description}</strong><br><small>{type}</small></li>
    {/each}
    {#each $traveler.inventory.belongings as { description }, i }
    <li>{description}</li>
    {/each}
    <li class="gear gear-{$traveler.inventory.gearBubbles}"><strong>Gear</strong></li>
  </ul>
</section>

<style>
	section::after {
		content: '\1300B';
	}

  .inventory-slots {
		font-family: sans-serif;
		margin-bottom: 1rem;
		line-height: 1;
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
