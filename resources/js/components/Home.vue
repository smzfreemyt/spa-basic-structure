<template>
	<div>This is home
		<br>

		<router-link :to="{ name : 'people.item', params:{ id : 1 }}">First Person</router-link><br>
		<router-link :to="{ name : 'people.item', params:{ id : 2 }}">second Person</router-link>
	</div>

</template>