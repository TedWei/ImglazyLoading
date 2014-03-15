/*
## Author  : TedWei
## Date    : Mar 15 2014
## version : 0.1
## It used for lazy loading Img.Used Jquery framwork.
## Please import jquery before use this.
*/ 

 $.fn.extend({
 	lazyLoading:function(){
 		var eve=$(this+"[data-src]");
 			imgLoad();
 		$(document).scroll(function(){
 			imgLoad();
 		});
 		function imgLoad(){
 			eve.each(function(){
				if($(this).attr("data-src")){
					if ( $(this).offset().top < $(document).scrollTop()+$(window).height() ) {
		   			$(this).stop(true).animate({'opacity':'0.1'},400,function(){
		   				$(this).attr("src",$(this).attr("data-src")).css("background-image","none").stop(true).animate({'opacity':'1'},400,function(){	
		   				});
		   			});
			   		$(this).load(function(){
			   			$(this).removeAttr('data-src');
			   		});
		   		}
				}		   		
		   		});
 		}
 		
 	}});