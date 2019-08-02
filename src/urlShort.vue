<template>

	<div>
			<h2>Lista de urls</h2>
		<ul>
			<li v-for="short in urlsShort">
				{{short.url_user}} - tsht.tk/{{ short.url_shortened }}
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name: 'UrlShortList',
		data() {
			return {
		}
		},
		props:{
			urlsShort:{
				required: true,
				type: Array | Object
			}
		}
	}
</script>
<style>
</style>