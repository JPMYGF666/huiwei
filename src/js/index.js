$('.top').click(function(){
    $('html').animate({
       scrollTop:0
    },300)
})

$('.leftnavlist').children().mouseover(function(){
    $(this).find('.line1').show()
    $(this).find('.navbox').show()
    $(this).css('background','#fff')
    $(this).find('span').children().css('color','green')
})
$('.leftnavlist').children().mouseout(function(){
    $(this).find('.line1').hide()
    $(this).find('.navbox').hide()
    $(this).css('background',' url(../img/bg_leftnav.jpg) repeat-x')
    $(this).find('span').children().css('color','#333')
})
$(function(){
    var num = 0;
    var timer = setInterval(function(){
        num++
        $('#slideImg a').eq(num).addClass('show').siblings('a').removeClass('show');
        if(num>$('#slideImg a').length-1){
            num=0;
        }
    },2000)

    $('#slideNum span').mouseover(function(){
        clearInterval(timer);
        var index = $(this).index();
        num=index;
        $('#slideImg a').eq(index).addClass('show').siblings('a').removeClass('show');
        
    })

    $('#slideNum span').mouseout(function(){
    clearInterval(timer);
    timer = setInterval(function(){
        num++
        $('#slideImg a').eq(num).addClass('show').siblings('a').removeClass('show');
        if(num>$('#slideImg a').length-1){
            num=0;
        }
    },2000)
    
    })
    

})


$('.titlenav li').mouseover(function(){
    $(this).addClass('hover').siblings().removeClass('hover')
    var index01 = $(this).index();
    $('.tab_con').eq(index01).addClass('ppdd').siblings().removeClass('ppdd')
})
$('#tz').click(function(){
    location.href="./detail.html"
})
$('.b_navbuy').click(function(){
    location.href="./shop.html"
})
$('#dl').click(function(){
    location.href="./register.html"
})
$('#zc').click(function(){
    location.href="./register.html"
})



