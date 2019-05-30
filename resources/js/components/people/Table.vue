<template>
	<table class="table">
			<tr>
				<td v-for="h in columns">{{ h }}</td>
			</tr>
			<tr v-for="p in data">
				<td v-for="(col,index) in columns">{{ p[col] }}</td>
			</tr>
		</table>
</template>	

<script>
export default {
	name:'vue-table',
	props:{
		columns:{
			type:Array,
			required:true,
		},
		data:{
			type:Array,
			required:true,
		}
	}
}
</script>