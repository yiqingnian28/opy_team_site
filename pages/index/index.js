//index.js
const data = require('../../data/data.js');
const miscUtil = require('../../utils/misc_util.js');

//获取应用实例
const app = getApp();

Page({
  data: {
    
  },
  //事件处理函数
  onContentTap: function (obj) {
    console.log(obj);
    wx.navigateTo({
      url: '../content/content?contentId=' + obj.currentTarget.id
    })
  },
  onLoad: function () {
    const content = data.tempData;
    console.log(content);
    
    const notices = miscUtil.findContentListByContentType('1', content.contents);
    const articles = miscUtil.findContentListByContentType('2', content.contents);
    
    console.log(notices);

    this.setData({
      slogan: content.slogan,
      notices: notices,
      articles: articles
    })
  },
  getUserInfo: function (e) {
 
  }
});

