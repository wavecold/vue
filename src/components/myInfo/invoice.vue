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
				name: "发票信息"
			}
		},
		components: { headName }
	}
</script>