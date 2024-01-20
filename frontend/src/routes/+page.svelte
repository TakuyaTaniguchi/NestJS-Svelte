<script lang="ts">
    import  Header  from '$lib/Header.svelte'
    import CustomerList from '$lib/CustomerList.svelte'
    import { type User } from '$lib/types/index'
    import type { SvelteHTMLElements  } from 'svelte/elements';
    import { onMount } from 'svelte'

    let users : User[]

    onMount(async ()=>{
        const response = await fetch('http://localhost:3000/customers/sample');
        const data = await response.json() as User[];
        users = data
    })


    async function  add (user: User) {
        await fetch('http://localhost:3000/customers/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user})
        })
    }

    async function removeUser(event: CustomEvent<{id:number}>) {
      await fetch('http://localhost:3000/customers/remove', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({id: event.detail.id})
      })
      console.log(event.detail.id)
    }
</script>


<div>
    <Header title="+pageSvelte"/>
    <div class="container">
        <div class="inner">
          <div class="form-example">
            <div class="form-example">
              <label for="firstName">Enter your firstName: </label>
              <input type="text" name="firstName" id="firstName"  />
            </div>
            <div class="form-example">
              <label for="lastname">Enter your lastname: </label>
              <input type="text" name="lastname" id="lastname"  />
            </div>
            <div class="form-example">
              <button value="add"  on:click={()=>{
                add({
                  id: 1,
                  firstName: 'hoge',
                  lastName: 'tfuga'
                })
            }}>Add</button>
            </div>
          </div>
        </div>
        <div class="inner">
          <CustomerList name={'登録ユーザー'} users={users} on:removeuser={removeUser}/>
        </div>
      </div>
</div>

<style>
  .container {
    display: flex;
    align-items: flex-end;
    flex-direction: row;
    align-content: stretch;
    justify-content: space-around;
  }
  
  </style>
