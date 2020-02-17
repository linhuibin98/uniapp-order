const prefix = 'http://www.linhuibin.com/api/public/v1'

async function request(options) {
  uni.showLoading({
    title: '加载...',
    mask: true
  })
  const [error, data] = await uni.request({
    ...options,
    url: prefix + options.url
  })
  setTimeout(() => {
    uni.hideLoading()
  }, 1000)
  if (error) {
    console.log(error)
    uni.showToast({
      title: '网络错误',
      duration: 2000
    })
    return
  } 
  const result = data.data
  if (result.errorCode === 0) {
     return result
  }
}

export default request
