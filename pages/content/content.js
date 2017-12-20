// pages/content/content.js

const data = require('../../data/data.js');
const WxParse = require('../../lib/wxParse/wxParse.js');
const miscUtil = require('../../utils/misc_util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (objs) {
    const contentId = objs.contentId;

    console.log(contentId);

    if (!contentId) {
      //TODO ERROR HANDLE
    }

    const that = this;
    wx.request({
      url: 'https://opy-warthunder.top/opy-server/service/queryContent.json',
      data: {
        id: contentId
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data);

        const content = res.data.content;
        console.log(content);
        WxParse.wxParse('content', 'html', content, that);

        that.setData({
          title: res.data.title,
          author: res.data.author,
          gmtCreate: res.data.gmtCreate,
          gmtModify: res.data.gmtModify
        });
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})