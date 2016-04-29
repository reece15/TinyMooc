//扩展的全局方法的插件...
$.extend({
	validate:function(email){
		//做真实的需求开发，要使用正则匹配一下..
		if(email=="liufei@itcast.cn"){
			return true;
		}else{
			return false;
		}
	}
});
//扩展局部方法的插件..
jQuery.fn.extend({
	test:function(str){
		alert(str);
	}
})
