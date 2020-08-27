function rand(min,max){
	//该方法返回一个min和max之间的随机数:200-600
	return Math.floor(Math.random()*(max-min+1)+min);
	
}
function $id(id){
	//该方法根据传入的id返回该id对应的标签
	return document.getElementById(id);
}

function windowWidth(){
	return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;

}

function create(tagName){
	return document.createElement(tagName)
}

function getElements(className){
	//传入类名,返回指定类名的节点的集合,兼容ie678
	var result = [];
	var all = document.getElementsByTagName('*');
	for(var i=0;i<all.length;i++){
		if(all[i].className==className){
			result.push(all[i])
		}
	}
	return result;
}


function getStyle(dom,attr){
	//获取指定节点的指定属性
	if(dom.currentStyle){
		return dom.currentStyle[attr]
	}else{
		return getComputedStyle(dom,false)[attr]
	}
}

function getColor(){
	//获取一个#123ABC
	var str = "#";
	for(var i=0;i<6;i++){
		//生成一个0-15之间的随机数,然后转成16进制
		str = str+rand(0,15).toString(16);
	}
	return str;
}

//希望封装一个函数,就叫trim(参数字符串),可以把传入的参数的前后空格去除
function trim(str){
	return str.replace(/(^\s+)|(\s+$)/g,"")
}

//封装一个方法,返回页面被卷曲的部分
function scroll(){
	return {
		"left":document.documentElement.scrollLeft||document.body.scrollLeft,
		"top":document.documentElement.scrollTop||document.body.scrollTop
	}
}

//封装一个多属性缓动函数
function animate(obj,json,fn){		
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var flag = true;
		for(var attr in json){
			//原来的位置
			if(attr=="opacity"){
				//如果遍历到的属性是opacity要乘以100
				var current = parseInt(getStyle(obj,attr)*100);	
			}else{
				var current = parseInt(getStyle(obj,attr));	
			}

			//速度					
			var speed = (json[attr]-current)/10;
			speed = speed>0?Math.ceil(speed):Math.floor(speed)


			//停止条件
			if(current==json[attr]){
				//如果遍历到的属性是opacity,赋值的时候要除以100
				if(attr=="opacity"){
					obj.style[attr] = json[attr]/100;
				}else if(attr == "zIndex"){
					obj.style[attr] = json[attr];
				}				
				else{
					obj.style[attr] = json[attr]+"px";
				}
					
			}else{
				current = current + speed;
				//如果遍历到的属性是opacity,赋值的时候要除以100
				if(attr=="opacity"){
					obj.style[attr] = current/100;
				}else if(attr=="zIndex"){
					obj.style[attr] = json[attr];
				}				
				else{
					obj.style[attr] = current+"px";
				}
				
				flag = false;
			}
		}
		if(flag){
			if(fn){
				fn();
			}
			clearInterval(obj.timer);
		}

	},20)
}






