<template>
    <div class="musicList">
        <div class="musicList-top">
            <div class="title">发现好歌单</div>
            <div class="more">查看更多</div>
        </div>
        <div class="mlist">
            <div class="swiper-container" id="musicSwiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item, i) in swiperList" :key="i">
                        <img :src="item.picUrl" :alt="item.name" />
                        <span class="name">{{ item.name }}</span>
                        <div class="count">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-bofang" />
                            </svg>

                            <span>{{ changeValue(item.playCount) }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.musicList {
    width: 7.5rem;
    padding: 0 0.4rem;
    .musicList-top {
        display: flex;
        justify-content: space-between;
        height: 1rem;
        align-items: center;
        .title {
            font-size: 0.4rem;
            font-weight: 900;
        }
        .more {
            border: 1px solid #ccc;
            padding: 0.06rem;
            border-radius: 0.2rem;
            font-size: 0.24rem;
            height: 0.5rem;
            width: 1.2rem;
            text-align: center;
            // line-height: 0.5rem;
        }
    }
    .mlist {
        .swiper-container {
            width: 100%;
            height: 3rem;
            .swiper-slide {
                // background-color: orange;
                display: flex;
                flex-direction: column;
                position: relative;
                width: 100%;
                img {
                    width: 100%;
                    height: auto;
                    border-radius: 0.1rem;
                }
                .name {
                    height: 0.6rem;
                    height: 100%;
                    font-size: 0.24rem;
                    line-height: 0.4rem;
                }
                .count {
                    position: absolute;

                    right: 0.1rem;
                    top: 0.1rem;
                    font-size: 0.24rem;
                    color: #ccc;
                    display: flex;
                    align-items: center;
                    .icon {
                        fill: #ccc;
                    }
                }
            }
        }
    }
}
</style>
<script>
import Swiper from 'swiper';
import 'swiper/css/swiper.css'
import { getRecommend } from '@/api/index.js'
export default {
    data() {
        return {
            swiperList: []
        }
    },

    async mounted() {
        let result = await getRecommend()
        this.swiperList = result.data.result;
        console.log(result)

    }, updated() {
        var mySwiper = new Swiper('#musicSwiper', {
            slidesPerView: 3,
            spaceBetween: 10
        });
    },
    methods: {
        changeValue(num) {
            if (num >= 100000000) {
                return (num / 100000000).toFixed(2) + '亿'
            } else if (num > 10000) {
                return (num / 10000).toFixed(2) + '万'
            }
        }
    }
}

</script>
