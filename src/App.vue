<template>
	<div id="app">

		<div class="swiper-container" id="swiper">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(item,$index) in detail.imgs">
					<img v-cloak :src="item" class="img" />
					<h1>{{$index}}</h1>
				</div>
			</div>
			<!-- Add Pagination -->
			<div class="swiper-pagination"></div>
		</div>
		<big-img></big-img>
	</div>
</template>

<script>
	import bigImg from "@/components/bigImg";
	import song from "@/components/song";
	import Swiper from 'swiper';

	export default {
		name: "App",
		data() {
			return {
				swiperObj: null,
				detail: {
					imgs: [
						"http://h.hiphotos.baidu.com/image/h%3D300/sign=ae97d8e36f2762d09f3ea2bf90ed0849/5243fbf2b2119313b705987069380cd790238daf.jpg",
						"http://h.hiphotos.baidu.com/image/h%3D300/sign=ae97d8e36f2762d09f3ea2bf90ed0849/5243fbf2b2119313b705987069380cd790238daf.jpg",
						"http://h.hiphotos.baidu.com/image/h%3D300/sign=ae97d8e36f2762d09f3ea2bf90ed0849/5243fbf2b2119313b705987069380cd790238daf.jpg",
						"http://h.hiphotos.baidu.com/image/h%3D300/sign=ae97d8e36f2762d09f3ea2bf90ed0849/5243fbf2b2119313b705987069380cd790238daf.jpg",
						"http://h.hiphotos.baidu.com/image/h%3D300/sign=ae97d8e36f2762d09f3ea2bf90ed0849/5243fbf2b2119313b705987069380cd790238daf.jpg",
					]
				}
			};
		},
		mounted() {
			this.swiperObj = new Swiper('#swiper', {
				speed: 1000,
				autoplay: {
					delay: 2000,
					disableOnInteraction: false,
					waitForTransition: false,
				},
				loop: true,
				effect: 'cube',
				pagination: {
					el: '.swiper-pagination',
					dynamicBullets: true,
					dynamicMainBullets: 5
				},
				on: {
					slideChangeTransitionEnd: function() {
						//						alert(this.activeIndex); //切换结束时，告诉我现在是第几个slide
					},
				},
			});
		},
		//		watch: {
		//			swiperObj: {
		//				handel: function(val) {
		//					console.log(val);
		//				},
		//				deep: true //深度监听
		//			}
		//		},
		computed: {
			isShowList() {
				return this.$store.state.isShowList;
			}
		},
		methods: {
			preventEvent() {
				console.log('test');
			},
			changeScreen() {
				let w = window.innerWidth;
				let h = window.innerHeight;
				this.isHorizon = w > h;
				let isLongScreen = 1.8 * w < h;
				this.$store.commit('changeScreen', isLongScreen);
			}
		},
		components: {
			bigImg,
			song
		}
	};
</script>

<style lang="less">
	@import "./swiper.min.css";
	.img {
		width: 100%;
		height: 100%;
	}
</style>