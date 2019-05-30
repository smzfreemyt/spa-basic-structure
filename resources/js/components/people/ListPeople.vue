<template>
	<div>
		<h1>People List</h1>

		<router-link :to="{ name : 'people.item', params:{ id : 1 }}">First Person</router-link><br>
		<router-link :to="{ name : 'people.item', params:{ id : 2 }}">second Person</router-link>
	</div>
</template>