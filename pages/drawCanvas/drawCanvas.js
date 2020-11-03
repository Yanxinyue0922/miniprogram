// pages/drawCanvas/drawCanvas.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    getImg: '', //从相册取图片
    name: "用户007"
  },

  // 点击保存图片
  getImg: function() {
    wx.canvasToTempFilePath({
      x: 0,
      y: 0,
      width: 300,
      height: 400,
      destWidth: 300,
      destHeight: 400,
      canvasId: 'myCanvas',
      success(res) {
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success(res) {
            wx.showToast({
              title: '保存成功啦！',
              icon: 'success'
            })
          }
        })
        console.log(res.tempFilePath)
      }
    })
  },
  // 点击按钮选择图片
  myButton: function() {
    let that = this;
    wx.chooseImage({
      count: 1,
      success: function(res) {
        const tempFilePaths = res.tempFilePaths[0]
        that.setData({
          getImg: res.tempFilePaths[0].trim()
        })
        console.log(44444, res)
        wx.getImageInfo({        
          src: that.data.getImg,
          success: function(res) {
            console.log(88888,res)
            that.drawImg(res.path.trim())            
          } 
        })
        // wx.downloadFile({
        //   url: that.data.getImg,
        //   success: function(res) {
        //     if (res.statusCode === 200) {
        //       console.log('图片成功', res)
        //       that.drawImg(res.tempFilePath.trim())
        //     } else {
        //       reject(e);
        //     }
        //   },
        //   fail: function(err) {
        //     console.log(333, err)
        //   }
        // })
        console.log('图片地址', res.tempFilePaths[0])
      },

    })
  },
  drawImg: function(url) {
    const ctx = wx.createCanvasContext('myCanvas');
    ctx.setStrokeStyle('red')
    ctx.strokeRect(0, 0, 299, 399)
    ctx.setFillStyle('pink')
    ctx.fillRect(1, 1, 297, 397)
    ctx.drawImage(url, 2, 2, 296, 296)
    ctx.setFontSize(28)
    ctx.setFillStyle('#FFFFFF')
    // 文字居中 在画布中间居中
    ctx.fillText("您好：" + this.data.name, (300 - ctx.measureText("您好：" + this.data.name).width) / 2, 330);
    // draw参数为false, 本次绘制不接着上一次绘制,默认false
    // draw参数为true, 本次绘制接着上一次绘制
    ctx.draw()
  },

  // canvas画图
  drawCanvas: function() {
    // 先定义一下，获取创建 myCanvas是canvas-id名
    const ctx = wx.createCanvasContext('myCanvas');
    ctx.setStrokeStyle('red')
    ctx.strokeRect(0, 0, 299, 399)
    ctx.setFillStyle('pink')
    ctx.fillRect(1, 1, 297, 397)
    ctx.draw()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.drawCanvas()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})