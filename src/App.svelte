<script>
	import Traveler from "./Traveler.svelte";
</script>

<header class="container">
	<h1>A Million Million Travelers</h1>
	<p>A character generator for the <a href="https://monkeys-paw-games.itch.io/unconquered-free-artless-edition">Unconquered</a> RPG by <a href="https://monkeyspawgames.com/">Monkey's Paw Games</a></p>
</header>

<Traveler/>

<footer class="container">
	<p><em>Unconquered</em> is &copy; Monkey's Paw Games. This web-app is an independent production by <a href="https://twitter.com/_fletchr">Rob Fletcher</a> and is not affiliated with Monkey's Paw Games.</p>
	<p>Source code is available on <a href="https://github.com/robfletcher/million-million-travelers">GitHub</a></p>
</footer>

<style lang="scss">
	@import "./style/theme.scss";

	header, footer {
		text-align: center;

		@media print {
			display: none;
		}
	}

	header {
		margin-top: 1rem;
		position: relative;
		border-bottom: 2px dotted $text-color;

		&::after {
			content: '\130F7';
			color: $text-color;
			position: absolute;
			left: 50%;
			bottom: 0;
			background-color: $body-bg-color;
			line-height: 1;
			padding: 0.5rem;
			font-size: 2rem;
			transform: translateX(-50%) translateY(50%);
		}

		p {
			margin-bottom: 2rem;
		}
	}

	h1 {
		margin: 0;
		color: transparent;
		background-image: linear-gradient(#4f91be, #8e0039);
		background-clip: text;
		-webkit-background-clip: text;
		line-height: 1;
	}

	a {
		color: #222;
		text-decoration: underline;

		&:hover, &:active {
			color: $active-link-color;
		}
	}
</style>