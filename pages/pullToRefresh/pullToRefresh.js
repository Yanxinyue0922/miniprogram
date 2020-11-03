// pages/pullToRefresh/pullToRefresh.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listMes:[],
    page:1,
    data1:{
      code:200,
      message:'请求成功',
      data:{
        page:1,
        pageSize:3,
        list:[
          {
            name:'电话电话11',
            images:'images/pro_tel.png'
          },
          {
            name: '电话电话22',
            images: 'images/pro_tel.png'
          },
          {
            name: '电话电话33',
            images: 'images/pro_tel.png'
          },
        ]
      }
    },
    data2: {
      code: 200,
      message: '请求成功',
      data: {
        page: 2,
        pageSize: 3,
        list: [
          {
            name: '箭头箭头11',
            images: 'images/boxBottom.png'
          },
          {
            name: '箭头箭头22',
            images: 'images/boxBottom.png'
          },
          {
            name: '箭头箭头33',
            images: 'images/boxBottom.png'
          },
        ]
      }
    },
    data3: {
      code: 200,
      message: '请求成功',
      data: {
        page: 3,
        pageSize: 3,
        list: [
            {
            name: '对头对头11',
            images: 'images/checked.png'
          },
          {
            name: '对头对头22',
            images: 'images/checked.png'
          },
          {
            name: '对头对头33',
            images: 'images/checked.png'
          },
        ]
      }
    }

  },

  // 获取数据展示
  getMes:function(){
    let _this = this;
    let page=_this.data.page;
    page=page+1;
    _this.setData({
      listMes: _this.data.data1.data.list,
      page:page
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this=this;
    _this.getMes()
    console.log('数据数据',_this.data.listMes);
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    let _this=this;
    let mes = _this.data.listMes;
    let page=_this.data.page;
    if(page==2){
      _this.setData({
        listMes: mes.concat(_this.data.data2.data.list),
        page:page+1
      })
    } else if (page == 3){
      _this.setData({
        listMes: mes.concat(_this.data.data3.data.list),
        page: page + 1
      })
    }else{
      wx.showToast({
        title: '我也是有底线的呦~',
        icon:'none'
      })
      return false;
    }
    
    console.log('下拉数据',_this.data.listMes)

  }
})