<script lang="ts">
	import Textfield from '@smui/textfield';
	export let dirty: boolean;
	export let invalid: boolean;
	export let disabled: boolean;
	export let value: string | null;
	export let type: string | undefined
</script>

<div class="title">
	<Textfield
		type={type}
		bind:dirty
		bind:invalid
		updateInvalid
		bind:value
		style="min-width: 250px;"
		input$autocomplete="email"
		on:InputEvent={() => (
			console.log('InputEvent')
		)}
		withTrailingIcon={!disabled}
	>
  </Textfield>
</div>

<style>
</style>
