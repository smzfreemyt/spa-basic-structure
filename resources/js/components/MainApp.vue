<template>
	<div>
		<header-vw></header-vw>
		<hr>
		<router-view></router-view>
		<hr>
		<footer-vw></footer-vw>
	</div>
</template>


<script >
	import HeaderVw from './parts/Header.vue';
	import FooterVw from './parts/Footer.vue';
	export default{ 
		components : {
			'header-vw' : HeaderVw,
			'footer-vw' : FooterVw
		}
	}
</script>