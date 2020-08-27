
function nam(username){
    var res = (/^(\+86\-)?1[3-9]\d{9}$/.test(username));
    if(res){
        return true;
    }
    $('.tipError').fadeIn().html('用户名不符合规则');
    tipHide()
    return false;
}
function pws(password){
    var res = (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/.test(password));
    if(res){
        return true;
    }
    $('.tipError').fadeIn().html('至少含有大写小写字母且8-16位数');
    tipHide()
    return false;
}
function tipHide(){
    setTimeout(function(){
        $('.tipError').fadeOut(500)
    },2000)
}

$('#btnsumbit').click(function(){
    var data = {
        username: $('#zun').val(),
        password:  $('#zpw').val(),
    }
    if(nam(data.username)&&pws(data.password)){
    $.ajax({
        method:'post',
        url:'http://localhost/huiwei/php/register.php',
        data:{
            username:$('#zun').val(),
            password:$('#zpw').val()
        },
        success:function(data){
            if(data.code==1){
           alert(data.data.tip);
        }else{
            alert(data.msg)
        }
    },
    dataType:'json'
    })
}
})

$('#btnlogin').click(function(){
    $.ajax({
        method:'post',
        url:'../../php/login.php',
        data:{
            username:$('#dun').val(),
            password:$('#dpw').val()
        },
        success:function(data){
            if(data.code==1){
                localStorage.setItem('dun',data.data.username)
                location.href="../html/index.html"
            }else{
                alert(data.msg)
            }
        },
        dataType:'json'
    })
})