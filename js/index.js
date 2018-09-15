// 当页面的DOM结构加载完成之后，执行回调函数中的代码
$(function () {
    // 初始化区域滚动组件
    var gallery = mui('.mui-slider');
    gallery.slider({
        interval:2000//自动轮播周期，若为0则不自动播放，默认为0；
    });
});

