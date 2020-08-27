

function showCart(){
    $.ajax({
        url:'../../shopphp/showlist.php',
        dataType:'json',
        success:function(res){
            $('.wwk').siblings().html("");
            $.each(res.data,function(index,item){
                $('tbody').append(`
                <tr>
                   <td class="Arial leftborder" align="center">${item.product_id}</td>
                   <td>
                    <a href="#" target="_blank">
                        <img class="shop_img" src="${item.product_img}" width="65" height="60">
                    </a>
                    <span>
                        <a href="#" target="_blank">
                        ${item.product_name}
                        </a>
                    </span>
                </td>
                <td class="orange b Arial" align="center">
                ${item.product_price}
                </td>
                <td>
                    <input type="text" value="${item.product_num}" class="txtshop" >
                    <div class="shopjia">
                        <button class="btnja" type="button">
                        </button>
                        <button class="btnjian" type="button">
                        </button>
                    </div>
                </td>
                <td class="rightborder" align="center">
                    <a class="jiaru" href="#">
                        加入收藏
                    </a>
                    <a class="detal" href="javascript:void(0)">
                        删除商品
                    </a>
                </td>
            </tr>
                `)
                
            })
        }
    })
    $.ajax({
        url:"../../shopphp/zj.php",
        dataType:"json",
        success:function(res){
            var gg = 0;
            var num = 0;
            $.each(res,function(index,item){
                num +=parseInt(item.product_num);
                gg +=(parseInt(item.product_num)*parseInt(item.product_price))
                
            })
            $('.piece').html(num);
            $('.pirce').html(gg); 
        }
    })
}
showCart()

//删除商品

$('tbody').on('click','.detal',function(){
    var id = $(this).parent().parent().find('.leftborder').html()
    $.ajax({
        url:"../../shopphp/delwq.php",
        data:{
            id:id
        },
        dataType:'json',
        success:function(res){
            if(res.code){
                showCart()
            }
        }
    })
})

//增加
$('tbody').on('click','.btnja',function(){
    var id = $(this).parent().parent().parent().find('.leftborder').html()
    $.ajax({
        url:"../../shopphp/updatewq.php",
        dataType:'json',
        data:{
            type:'add',
            id:id
        },
        success:function(res){
                if(res.code){
                    alert('商品添加成功')
                    showCart()
                }
        }
    })
})

//减少
$('tbody').on('click','.btnjian',function(){
    var id = $(this).parent().parent().parent().find('.leftborder').html()
    $.ajax({
        url:"../../shopphp/updatewq.php",
        dataType:'json',
        data:{
            type:'!add',
            id:id
        },
        success:function(res){
                if(res.code){
                    alert('商品减少成功')
                    showCart()
                }
        }
    })
})




