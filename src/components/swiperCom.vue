<template>
    <div id="swipercom">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, index) in imgs">
                    <img :src="item.pic" />
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <!-- <div class="swiper-pagination"></div> -->
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper';
// import style (>= Swiper 6.x)
import 'swiper/css/swiper.css'
import axios from 'axios'
import { getBanner } from '@/api/index'
export default {
    name: 'Home',
    data() {
        return {
            imgs: [
                { pic: require('../assets/img/swiper1.webp') },
                { pic: require('../assets/img/swiper2.webp') },
                { pic: require('../assets/img/swiper3.webp') },
            ]
        }
    },
    async mounted() {
        var mySwiper = new Swiper('.swiper-container', {
            loop: true,
           
        });
        let res = getBanner(1)
        res.then(res => {
            this.imgs = res.data.banners
        })
    }
}
</script>
<style lang="less" scoped>
#swipercom {
    width: 7.5rem;
    .swiper-container {
        width: 7.1rem;
        height: 2.6rem;
        border-radius: 0.1rem;
        .swiper-slide img {
            width: 100%;
        }
        /deep/.swiper-pagination-bullet-active {
            background-color: orangered;
        }
    }
}
</style>