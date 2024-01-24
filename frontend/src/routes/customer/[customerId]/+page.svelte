<script lang="ts">
	import { type Customer } from '$lib/types/index';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	let id: number | string;
	let firstName: string;
	let lastName: string;
	export let customers: Customer[];

	onMount(async () => {
		id = $page.params.customerId;
		const response = await fetch(`http://localhost:3000/customers/${id}`);
		const data = await response.json();
		customers = data;
		firstName = customers[0].firstName;
		lastName = customers[0].lastName;
	});

	async function updateCustomer() {
		await fetch('http://localhost:3000/customers/update', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ id, firstName, lastName })
		});
	}
</script>

<div>
	<div>
		<h2>customer 詳細ぺーじ</h2>
		<div>
			<table>
				<thead>
					{#if customers}
						{#each customers as customer}
							<div>
								<label for="inputId">:inputId {customer.id}</label>
								<input type="number" name="inputId" id="inputId" value={customer.id} disabled />
							</div>
							<div class="form-example">
								<label for="firstName">Enter your firstName: </label>
								<input
									type="text"
									name="firstName"
									id="firstName"
									value={customer.firstName}
									on:change={(event) => {
										firstName = event.target.value;
									}}
								/>
							</div>
							<div class="form-example">
								<label for="lastname">Enter your lastname: </label>
								<input
									type="text"
									name="lastname"
									id="lastname"
									value={customer.lastName}
									on:change={(event) => {
										lastName = event.target.value;
									}}
								/>
							</div>
						{/each}
					{/if}
				</thead>
			</table>
		</div>
		<button
			type="button"
			on:click={() => {
				updateCustomer();
			}}>保存する</button
		>
	</div>
</div>
