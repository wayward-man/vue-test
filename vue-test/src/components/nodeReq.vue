<template>
    <div class="container">
        <aside>
            <img :src="item.imgSrc" alt="" v-for="(item,index) in imgList" :key="index">
        </aside>
    </div>
</template>

<script>

export default {
    data() {
        return {
            imgList: []
        }
    },
    mounted() {
        this.$axios.get('http://localhost:3000/', {
        }).then((response) => {
            console.log('from Com', response.data.data);
            this.imgList = response.data.data;
        }).catch((err) => {
            console.log(err);
        });
    },
    components: {

    }
}
</script>
<style scoped lang="less">
.container {
  background: rgba(0, 0, 0, 0.1);
  aside {
    margin: 0 0.2rem 0.5rem;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
    img {
      margin: 0.1rem;
      width: 1rem;
    }
  }
}
</style>
