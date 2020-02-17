<template>
	<view class="content">
		<uni-search-bar class='search' @confirm="handleConfimSearch" @input="handleSearchInput" />
	</view>
</template>

<script>
  import { uniSearchBar } from '@dcloudio/uni-ui'
	export default {
		data() {
			return {
				q: ''
			};
		},
    methods: {
      handleConfimSearch({value}) {
        console.log(value)
      },
      handleSearchInput({value}) {
        console.log(value)
      }
    },
    components: {
      uniSearchBar
    }
	}
</script>

<style lang="less" scoped>
.content {
  width: 100%;
  height: 200rpx;
  
  .search {
    width: 200rpx;
    height: 100rpx;
    background-color: red;
  }
}
</style>
