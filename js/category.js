$(function () {
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });

// 获取一级分类数据
    $.ajax({
        url: " /category/queryTopCategory",
        type: "get",
        success: function (response) {
            console.log(response);
            // 将数据和html做拼接
            // html模板ID
            // 数据
            // 告诉模板引擎,html模板和数据怎样进行拼接
            $('#category_second').html(template('category_first', {data: response.rows}));
            console.log(response);
            // 如果一级分类有数据的话
            if (response.rows.length) {
                // 获取第一个一级分类的id
                var id = response.rows[0].id;
                // 根据一级分类id获取二级分类id
                getThreeGategory(id);
            }
            // 给第一个一级分类添加选中状态
            $('#category_second').find('a').eq(0).addClass('active');
        }
    });

// 获取二级数据
    // 1.一级分类添加点击事件
    // 2.在事件处理函数中获取到一级分类的ID
    // 3.调用二级分类的接口获取对应的数据
    // 4.将数据展示到对应的位置中
    // 5.如果接口中没有数据,要在页面中显示暂无数据
    $('#category_second').on('click', 'a', function () {
        // 获取到一级分类的id
        var id = $(this).attr('data-id');
        // 给当前点击的一级分类添加选中状态,
        $(this).addClass('active').siblings().removeClass('active');
        // 接口获取对应数据
        getThreeGategory(id);
    });
});

function getThreeGategory(id) {
    $.ajax({
        url: " /category/querySecondCategory",
        type: "get",
        data: {
            id: id
        },
        dataType: 'json',
        success: function (response) {
            // console.log(response)
            $('#category_three').html(template('category_fourth', {data: response.rows}));
            console.log(response)
        }
    });
};