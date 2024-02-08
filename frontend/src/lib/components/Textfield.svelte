<script lang="ts">
	import Textfield from '@smui/textfield';
	import { createEventDispatcher } from 'svelte';

	export let dirty: boolean;
	export let invalid: boolean;
	export let disabled: boolean;
	export let value: string | number | null;
	export let type: string | undefined

	const dispatch = createEventDispatcher<{ inputValue: { inputValue: number | string, formType: string } }>();
	function inputValue(value: number | string,formType: string) {
		dispatch('inputValue', {
			inputValue: value,
			formType: formType
		});
	}
</script>

<div class="title">
	<Textfield
		type={type}
		bind:dirty
		bind:invalid
		updateInvalid
		bind:value
		style="min-width: 250px;"
		on:input={(e) => {
			inputValue(e.target.value,'name');
		}}
		withTrailingIcon={!disabled}
	>
  </Textfield>
</div>

<style>
</style>
