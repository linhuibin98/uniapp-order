<template>
	<view class="content">
		<view class="header">
			<view class="address">
        <image class="icon" src="../../static/img/icon/coordinate.png"></image>
        <text>城东公寓</text>
      </view>
      <navigator class="navigation_search" url="../search/search">
        <icon type="search" color='#b6b6b6' size='12'></icon>
        <text>搜索附近商家、商品名称</text>
      </navigator>
		</view>
    <swiper class="swiper" :indicator-dots='true' indicator-color='#ffffff' indicator-active-color='#00a8ff' :autoplay="true" :interval="3000" :duration="1000" :circular='true'>
      <swiper-item>
        <view class="swiper-item">
          <image class="item-img" src="../../static/img/swiper/cat2.jpg" width='750rpx' mode="widthFix"></image>
        </view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item">
          <image class="item-img" src="../../static/img/swiper/cat3.jpg" mode="widthFix"></image>
        </view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item">
          <image class="item-img" src="../../static/img/swiper/cat4.jpg" mode="widthFix"></image>
        </view>
      </swiper-item>
    </swiper>
    <List />
	</view>
</template>

<script>
  import List from './List.vue'
  
	export default {
		data() {
			return {
				title: 'Hello',
        storeList: []
			}
		},
		onLoad() {
      
		},
		methods: {

		},
    components: {
      List
    }
	}
</script>

<style lang="less" scoped>
	.content {
    
    .header {
      padding: 30rpx 20rpx 16rpx 20rpx;
      background-color: #00a8ff;
      
      .address {
        display: flex;
        align-items: center;
        color: #FFFFFF;
        
        .icon {
          width: 32.8rpx;
          height: 36.8rpx;
        }
        
        text {
          position: relative;
          padding-left: 10rpx;
          font-size: 35.17rpx;
          font-weight: bold;
        }
        
        text::after {
          position: absolute;
          top: 15rpx; 
          right: -20rpx;
          content: '';
          width: 0;
          height: 0;
          border: 6rpx solid;
          border-color: #FFFFFF transparent transparent transparent;
        }
      }
      
      .navigation_search {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 29.31rpx;
        width: 100%;
        height: 70.35rpx;
        background-color: #FFFFFF;
        border-radius: 6rpx;
        color: #b6b6b6;
        font-size: 28.14rpx;
        
        text {
          padding-left: 10rpx;
        }
      }
     }
     
     .swiper {
       height: 250rpx;
       height: 250rpx;
       .swiper-item {
         width: 750rpx;
         height: 250rpx;
         .item-img {
           width: 100%;
         }
       }
     }
	}
</style>
