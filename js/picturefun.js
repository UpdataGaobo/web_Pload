//创建一个数组来保存图片
var arr_img = [
    {src : "../images/1.jpg"},
    {src : "../images/2.jpg"},
    {src : "../images/3.jpg"},
    {src : "../images/4.jpg"},
    {src : "../images/5.jpg"},
    {src : "../images/6.jpg"},
    {src : "../images/7.jpg"},
    {src : "../images/8.jpg"},
    {src : "../images/9.jpg"},
    {src : "../images/10.jpg"},
    {src : "../images/11.jpg"},
    {src : "../images/12.jpg"}
];

var i = 0;

//动态生成图片标签
function create(){
    //创建div标签
    var oDiv = document.createElement("div");
    //创建图片对象
    var oImg = new Image();
    oImg.src = arr_img[i%arr_img.length].src;
    oImg.style.cssText = "opacity:0;transform:scale(0) rotateY(0deg)";
    //把图片放到div里面
    oDiv.appendChild(oImg);
    //把div放到高度最小的li里面
    getlist($(".box_img ul li")).append(oDiv);
    (function(oImg){
        setInterval(function(){
            oImg.style.cssText = "opacity:1;transform:scale(1) rotateY(360deg)";
        },100);
    })(oImg)//立即执行
}

//create();
//alert(arr_img.length);
//封装一个函数来获取高度最小的li
function getlist(obj){
    var leng = obj.length;
    var h = Infinity;
    var oLi;
    for (var i=0;i<leng ;i++ ){
        if(obj.eq(i).height() < h){
            h = obj.eq(i).height();
            oLi = obj.eq(i);
        }
    }
    return oLi;
}
//封装一个函数来循环动态的获取图片
var sum;
function upload(){
    i++;
    if(i<12){
        for (;i<12;i++){
            create();
        }
    }else{
        sum=i;
        for (;i<sum+3 ;i++){
            create();
        }
    }
}
upload();
//判读滚动的高度,然后在加载
//文档高度
var scrollH = "";
//滚动条高度
var srollT = "";
$(function(){
    var _height = $(window).height();
    $(window).scroll(function(){
        scrollH = document.body.scrollHeight;
        srollT = document.body.scrollTop;
        if(_height + srollT + 100 > scrollH){
            upload();
        }
    });
});

















