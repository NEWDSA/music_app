<template>
  <div class="home">
    <top-nav />
    <swiper-com />
    <icon-list />
    <music-list />
  </div>
</template>

<script>
// @ is an alias to /src
import topNav from '@/components/topNav.vue'
import SwiperCom from '@/components/swiperCom.vue';
import iconList from '@/components/iconList.vue'
import musicList from '@/components/musicList.vue'
export default {
  name: 'Home',
  data() {
    return {

    }
  },
  components: {
    topNav,
    SwiperCom,
    iconList,
    musicList
  }
}
</script>
<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
  // box-sizing: border-box;
  // border: 1px solid pink;
}
#d1 {
  width: 3.75rem;
  height: 3.75rem;
  background-color: red;
}
</style>