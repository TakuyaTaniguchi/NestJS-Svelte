<script lang="ts">
	import logo from '$lib/assets/Spotify_Logo_RGB_Green.png';
	export let title = 'Home';
</script>

<div class="title">
	<div class="inner">
		<img src="{logo}" alt="{logo}"  width="200px"/>
		<h1>{title}</h1>
	</div>
</div>

<style>
	.title {
		padding: 16px;
		background-color: black;
		color: #1cdc63;
	}
	h1 {
		font-size: 36px;
		font-weight: bold;
	}

	img {
		margin-right: 8px;
	}

	.inner {
		display: flex;
		align-items: center;
	}
</style>
