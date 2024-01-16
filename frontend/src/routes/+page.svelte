<script lang="ts">
    import  Header  from '$lib/Header.svelte'
    import { onMount } from 'svelte'

    onMount(async ()=>{
        const response = await fetch('http://localhost:3000/customers/sample');
        const data = await response.json();
        console.log(data);
        console.log(data.id);
    })
</script>
<div>
    <Header title="+pageSvelte"/>
    <div class="container">
        <div class="inner">
          <form action="customers/add" method="post" class="form-example">
            <div class="form-example">
              <label for="firtstname">Enter your firtstname: </label>
              <input type="text" name="firtstname" id="firtstname"  />
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
      </div>
</div>
