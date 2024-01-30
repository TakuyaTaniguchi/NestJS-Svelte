<script lang="ts">
	import ImageList, {
		ImageAspectContainer,
		Image,
		Supporting,
	} from '@smui/image-list';
	import List, { Item, Text } from '@smui/list';
	import Button, { Label } from '@smui/button';

</script>

<div class="title">
	  <ImageList class="my-image-list-standard">
		{#each Array(15) as _unused, i}
		  <Item>
			  <Image 
				src="https://placehold.co/190x190?text=square"
				alt="Image {i + 1}"
				style="width: 100%; height: 100%;"
			  />
			<Supporting>
			  <Label>Image {i + 1}</Label>
			</Supporting>
		  </Item>
		{/each}
	  </ImageList>
</div>

<style>
</style>
