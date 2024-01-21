<script lang="ts">
    import  Header  from '$lib/Header.svelte'
    import CustomerList from '$lib/CustomerList.svelte'
    import { type User } from '$lib/types/index'
    import { onMount } from 'svelte'

    let users : User[]
    let id : number
    let firstName : string
    let lastName : string

    onMount(async ()=>{
        const response = await fetch('http://localhost:3000/customers/users');
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
        await new Promise(resolve => setTimeout(resolve, 1000)); //sever側でちゃんと実装する
        const response = await fetch('http://localhost:3000/customers/users');
        const data = await response.json() as User[];
        users = data
    }

    async function  updateUser (event: CustomEvent<{id:number,firstName: string, lastName: string}>) {
      console.log(event)
      // await fetch('http://localhost:3000/customers/edit', {
      //       method: 'POST',
      //       headers: {
      //           'Content-Type': 'application/json'
      //       },
      //       body: JSON.stringify({user})
      //   })
    }

    async function removeUser(event: CustomEvent<{id:number}>) {
      await fetch('http://localhost:3000/customers/remove', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({id: event.detail.id})
      })
      await new Promise(resolve => setTimeout(resolve, 1000)); //sever側でちゃんと実装する
        const response = await fetch('http://localhost:3000/customers/users');
        const data = await response.json() as User[];
        users = data
    }



</script>


<div>
    <Header title="+pageSvelte"/>
    <div class="container">
        <div class="inner">
          <div class="form-example">
            <div class="form-example">
              <label for="inputId">:inputId </label>
              <input type="number" name="inputId" id="inputId" on:change={
                (event) => {
                  id = event.target.value
                }
              } />
            </div>
            <div class="form-example">
              <label for="firstName">Enter your firstName: </label>
              <input type="text" name="firstName" id="firstName" on:change={
                (event) => {
                  firstName = event.target.value
                }
              }  />
            </div>
            <div class="form-example">
              <label for="lastname">Enter your lastname: </label>
              <input type="text" name="lastname" id="lastname" on:change={
                (event) => {
                  lastName = event.target.value
                }
              }  />
            </div>
            <div class="form-example">
              <button value="add"  on:click={()=>{
                add({id, firstName, lastName})
              }}>Add</button>
            </div>
          </div>
        </div>
        <div class="inner">
          <CustomerList name={'登録ユーザー'} users={users} on:removeuser={removeUser} on:updateUser={updateUser}/>
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
