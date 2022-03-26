<template>
    <div class="iconList">
        <div class="iconItem">
            <svg class="icon search" aria-hidden="true">
                <use xlink:href="#icon-tuijian" />
            </svg>
            <span>每日推荐</span>
        </div>
        <div class="iconItem">
            <svg class="icon search" aria-hidden="true">
                <use xlink:href="#icon-gedan" />
            </svg>
            <span>私人FM</span>
        </div>
        <div class="iconItem">
            <svg class="icon search" aria-hidden="true">
                <use xlink:href="#icon-gedan" />
            </svg>
            <span>歌单</span>
        </div>
        <div class="iconItem">
            <svg class="icon search" aria-hidden="true">
                <use xlink:href="#icon-gedan" />
            </svg>
            <span>排行榜</span>
        </div>
    </div>
</template>
<style lang="less" scoped>
.iconList {
    display: flex;
    justify-content: space-around;
    padding: 0.4rem;
    .iconItem {
        width: 7.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        .icon {
            width: 1.2rem;
            height: 1.2rem;
        }
        span {
            font-size: 0.26rem;
        }
    }
}
</style>
