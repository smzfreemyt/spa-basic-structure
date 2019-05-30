<template>
	<div>
		ID number is:	{{ id }} <br>
		<router-link :to="{ name: 'people.list' }">Go Back</router-link>
	</div>
</template>

<script>
	
export default{
	data(){
		return {
			id : null
		}
	},
	created(){
		this.id = this.$route.params.id;
	}
}
</script>111