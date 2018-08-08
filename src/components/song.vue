<template>
	<div>
		<div class="main-container">
			<div class="left-container">
				<img src="../assets/double1.png"/>
			</div>
			<div class="right-container">
				<img src="../assets/double2.png"/>
			</div>
		</div>
		<div class="main-container">
			<div class="left-container">
				<p>1233</p>
			</div>
			<div class="right-container">
				<p>123123</p>
				<p>123</p>
				<p>123</p>
			</div>
		</div>
	</div>
</template>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	
	.main-container {
		width: 600px;
		height: 100%;
		margin: 0 auto;
	}
	
	.left-container,
	.right-container {
		display: table-cell;
		vertical-align: bottom;
		
		p{
			margin-top: 20px;
		}
	}
	
	.left-container {
		width: 320px;
		border: 1px solid #ccc;
	}
	
	.left-container img {
		width: 100%;
		height: auto;
	}
	
	.right-container {
		width: 320px;
		border: 1px solid red;
		font-size: 30px;
	}
	
	.right-container img {
		width: 100%;
	}
</style>

<script>
	export default {
		data() {
			return {
				msg: 1
			}
		},
		mounted() {},
		methods: {},
		components: {}
	}
</script>