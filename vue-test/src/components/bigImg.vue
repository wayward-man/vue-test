<template>
	<div class="container">
		<section class="imgInfo_big" >
			<img class="wide" src="../../static/img/horizaon.png"  />
			<img class="narrow" src="../../static/img/double1.png" />
			<mark>备注：我是备注</mark>
		</section>
	</div>
</template>

<style scoped lang="less">
	* {
		margin: 0;
		padding: 0;
	}
	
	.container {
		margin: 30px auto;
		max-width: 900px;
		width: 100%;
		border: 1px solid blue;
		box-sizing: border-box;
		background: #CCCCCC;
	}
	
	.imgInfo_big {
		text-align: center;
		img {
			width: 80%;
			margin: 15px auto;
			display: block;
		}
		mark {
			background: rgba(0, 0, 0, 0);
			margin-top: 30px;
		}
	}
	
	@media only screen and (min-width: 100px) and (max-width: 640px) {
		.imgInfo_big .wide {
			display: none;
		}
	}
	
	@media only screen and (min-width: 640px) {
		.imgInfo_big .narrow {
			display: none;
		}
	}
</style>

<script>
	import Bus from '../common/bus.js';
	export default {
		data() {
			return {
				msg: 1
			}
		},
		mounted() {
			Bus.$on('log', content => {
				console.log(content === Bus) 
			});
		},
		methods: {
			commitLog(){
				console.log(1)
			}
		},
		components: {}
	}
</script>