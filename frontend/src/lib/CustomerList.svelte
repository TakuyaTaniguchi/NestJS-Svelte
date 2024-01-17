<script lang="ts">
 import  { type Item}  from '$lib/types/index'

  export let name : string
  export let item : Item
</script>


<div>
  <h2>{name}</h2>
  <table>
    <thead>
      {#if item }
        <tr>
          <td>{item.id}</td>
          <td>{item.firstName}</td>
          <td>{item.lastName}</td>
        </tr>
      {/if}
    </thead>
    <tbody>
   
    </tbody>
  </table>
</div>
