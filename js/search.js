$(function () {
/* 实现用户点击搜索按钮跳转到搜索结果页
*    1.给搜索按钮添加点击事件
*    2.获取用户输入的搜索关键字
*    3.判断用户是否输入了搜索关键字、
*    4.如果用户没有输入，阻止跳转，并且给出提示
*    5.如果用户输入了，就跳转到搜索结果页面，并且要将用户输入的关键字带到这个页面去  */

    $('#search_btn').on('click', function () {
        var keyword = $(this).siblings().val();

        if (keyword) {
            location.href = "search-list.html?keyword=" + keyword;
        } else {
            mui.toast('请输入要搜索的商品关键字');
        }
    });

    /*实现历史关键字存储
    * 1。准备一个存储关键字的数组
    * 2.当用户点击搜索按钮的时候将用户输入的关键字追加到数组中
    * 3.将数组存储到本地存储中
    * 4.在页面一上来的时候，判断本地出储存中是否已经储存的关键字
    * 5.将数据和html拼接，将数据展现在页面中*/

    // 储存关键字的数组
    var keyArr = [];

    if (localStorage.getItem())

});