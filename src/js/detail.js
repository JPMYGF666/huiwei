var box = $('.small');
var pdd = $("html")
var muskWidth = $('.musk').width();
var muskHeight = $('.musk').height();
$('.small').mousemove(function(e){
    var ltop =box.offset().top;
    var lleft = box.offset().left;
    var startX = $(e)[0].clientX+pdd.scrollLeft();
    var startY = $(e)[0].clientY+pdd.scrollTop();
    var left = startX - lleft - muskWidth/2;
    var top = startY -ltop - muskHeight/2;
    if(left<0){
        left=0
    }
    if(left>box.width()-muskWidth){
        left=box.width()-muskWidth
    }
    if(top<0){
        top=0
    }
    if(top>box.height()-muskHeight){
        top=box.height()-muskHeight
    }
    var x = -left/box.width()*$('.big img').width()
    var y = -top/box.height()*$('.big img').height()
    $('.big').show()
    $(".big img").css({
        left:x,
        top:y
     });
    $('.musk').show().css({
        left:left,
        top:top
     });
})      
$('.small').mouseout(function(){
    $('.musk').hide();
    $('.big').hide();
})

$(function(){
    setInterval(function(){
    var date1 = new Date();
    var date2 = new Date(8888,8,8);
    date2 = date2.getTime();
    date1 = date1.getTime();
    var diff = date2 - date1;
    var day = parseInt(diff/(1000*24*60*60))
    diff = diff-day*24*60*60*1000;
    var hour = parseInt(diff/(60*60*1000));
    diff = diff - hour*60*60*1000;
    var minute = parseInt(diff/(60*1000));
    diff = diff-minute*60*1000;
    var second = parseInt(diff/(1000));
    $('#d').html(day);
    $('#h').html(hour);
    $('#m').html(minute);
    $('#s').html(second);
},1000)
})

$('.btnjia').click(function(){
    var num = Number($('#productsum').val());
    if( isNaN(num) ){
       return false;
    }
    num++;
   $('#productsum').val(num);
})
$('.btnjian').click(function(){
    var num =$('#productsum').val();
    if(num<= 1){
        $('#productsum').val(1);
        return false;
    }else{
        num--;
        $('#productsum').val(num)
    }
 })

 $('#productsum').on('keyup',function(){
     var str = $('#productsum').val() ;
     if( isNaN(parseInt($('#productsum').val())) ){
        $(this).val(str.replace(/\D/g," "));
    }else{
        $('#productsum').val()
    }
 })   


 $('#b_cart').click(function(){
    $.ajax({
        url:'../../shopphp/addwq.php',
        dataType:'json',
        data:{
            id:'9',
            name:'gg',
            img:'../img/20191114161104.jpg',
            num:1,
            price:5
        },
        success:function(res){
            if(res.code){
                alert('商品加入成功')
            }else{
                alert('商品加入失败')
            }
        }
    })
})
