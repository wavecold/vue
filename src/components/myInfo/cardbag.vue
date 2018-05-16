<template>
	<div class="temp">
		<headName :headName="name"></headName>
	</div>
</template>
<script type="text/javascript">
	import headName from '../common/head.vue'
	export default{
		data(){
			return {
				name: "卡包"
			}
		},
		components: { headName }
	}
</script>