<script lang="ts">
	import { type Customer } from '$lib/types/index';
	import { createEventDispatcher } from 'svelte';
	export let name: string;
	export let customers: Customer[];

	const dispatch = createEventDispatcher<{ removeCustomer: { id: number } }>();
	function removeCustomer(id: number) {
		dispatch('removeCustomer', {
			id: id
		});
	}
</script>

<div>
	<h2>{name}</h2>
	<table>
		<thead>
			{#if customers}
				{#each customers as customer}
					<tr>
						<td>
							<a href="/customer/{customer.id}">{customer.id}</a>
						</td>
						<td>{customer.firstName}</td>
						<td>{customer.lastName}</td>
						<td>
							<div>
								<button
									type="button"
									on:click={() => {
										removeCustomer(customer.id);
									}}>remove</button
								>
							</div>
						</td>
					</tr>
				{/each}
			{/if}
		</thead>
	</table>
</div>
