<template>
  <view class="content">
    <view class="subtitle">
      <text>——</text>
      <text class="title">推荐商家</text>
      <text>——</text>
    </view>
    <view class="store_content">
      <ul class="store_list">
        <li class="store_item" v-for="store in storeList" :key='store._id'>
          <view class="left">
            <image
              class="logo"
              :src="store.store_logo_url"
            ></image>
          </view>
          <view class="right">
            <view class="top">
              <text class="store_name">{{store.store_name}}</text>
              <text>...</text>
            </view>
            <view class="middle">
              <view class="rate">
                <uni-rate disabled="true" :value="store.store_grade" size="14"></uni-rate>
                <text>{{store.store_grade}}</text>
              </view>
              <text class="dispatching">商家配送</text>
            </view>
            <view class="bottom">
              <view class="b_left">
                <text>￥{{store.startup_cost}}起送</text>
                <text class="split">|</text>
                <text>配送费￥{{store.distribution_cost}}</text>
              </view>
              <view class="b_right">
                <text>718m</text>
                <text class="split">|</text>
                <text>30分钟</text>
              </view>
            </view>
          </view>
        </li>
      </ul>
    </view>
  </view>
</template>

<script>
import { uniRate } from '@dcloudio/uni-ui'
import { fetchStores } from '../../api/index.js'

export default {
  data() {
    return {
      storeList: []
    };
  },
  components: {
    uniRate
  },
  async mounted() {
    const result = await fetchStores()
    this.storeList = result.data
  }
};
</script>

<style lang="less" scoped>
.content {
  .subtitle {
    padding: 35.17rpx;
    text-align: center;

    text {
      color: #b2b2b2;
    }

    .title {
      color: #333333;
      padding: 0 25.79rpx;
    }
  }

  .store_content {
    .store_list {
      .store_item {
        display: flex;
        padding: 29.31rpx 23.45rpx;
        border-bottom: 1px solid #eee;

        .left {
          margin-right: 17.58rpx;
          border: 1px solid #eeeeee;
          height: 128.98rpx;

          .logo {
            width: 128.98rpx;
            height: 128.98rpx;
          }
        }

        .right {
          flex: 1;

          .top {
            display: flex;
            justify-content: space-between;

            .store_name {
              font-size: 35.17rpx;
              font-weight: bold;
            }
          }

          .middle {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 30rpx;
            padding-bottom: 23.45rpx;
            font-size: 23.45rpx;

            .rate {
              display: flex;
              align-items: center;

              text {
                padding-left: 10rpx;
              }
            }
          }
          
          .bottom {
            display: flex;
            justify-content: space-between;
            font-size: 23.45rpx;
            
            .split {
              padding: 0 10rpx;
            }
            
            .b_left {
              
            }
            
            .b_right {}
          }
        }
      }
    }
  }
}
</style>
