<script lang="ts">
    import  Header  from '$lib/Header.svelte'
    import { onMount } from 'svelte'
    export type Item = {
        id: number,
        firstName: string,
        lastName: string
    }
    let item : Item;

    onMount(async ()=>{
        const response = await fetch('http://localhost:3000/customers/sample');
        const data = await response.json() as Item;
        item = data

    })
</script>

<style>
.container {
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  align-content: stretch;
  justify-content: space-around;
}

</style>

<div>
    <Header title="+pageSvelte"/>
    <div class="container">
        <div class="inner">
          <form action="customers/add" method="post" class="form-example">
            <div class="form-example">
              <label for="firstName">Enter your firstName: </label>
              <input type="text" name="firstName" id="firstName"  />
            </div>
            <div class="form-example">
              <label for="lastname">Enter your lastname: </label>
              <input type="text" name="lastname" id="lastname"  />
            </div>
            <div class="form-example">
              <input type="submit" value="add" />
            </div>
          </form>
        </div>
        <div class="inner">
          <h2>登録ユーザー</h2>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>firstName</th>
                <th>lastname</th>
              </tr>
            </thead>
            <tbody>
              {#if item }
                <tr>
                  <td>{item.id}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                </tr>
              {/if}
            </tbody>
          </table>
        </div>
      </div>
</div>
