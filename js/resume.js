// JavaScript Document

//封装js根据ID获取对象方法
function getObj(id){return document.getElementById(id);};

//获取浏览器可视区域高度和宽度
var browserHei=document.documentElement.clientHeight;
var browserWid=document.documentElement.clientWidth;


//onload 函数
window.onload=function(){
	
	initHeader();
	initMain();
}


//初始化header
function initHeader(){
	
	//初始化header的高度
	var header=getObj("header");
	header.style.height=browserHei+"px";
	
	//初始化header中的jQuery插件
    $('#particles').particleground({
	   dotColor: '#FFF',
	   lineColor: '#FFF'
    });
	

}

//初始化mian
function initMain(){
	//init main's height by bs
	var main=getObj("main");
	main.style.height=browserHei*4+"px";
	main.style.width=browserWid+"px";
	
	//初始化github按钮函数
	initGithub()
	
	//初始化专业技能页面
	initPage2();
	
	//初始化github按钮函数
	function initGithub(){
		getObj("toGithub").onmouseover=function(){
			getObj("btnChild").style.borderColor="#FFF";
		}
		getObj("toGithub").onmouseout=function(){
			getObj("btnChild").style.borderColor="#CCC";
		}
	}
}

//初始化专业技能页面
function initPage2(){
    //技能熟练度百分比数组
	var BgValueList1=[95,90,86,60,55,75,40];
	contentHover("contentBg1","contentEl1",BgValueList1);
	var BgValueList2=[91,85,78,65,75,80,45];
	contentHover("contentBg2","contentEl2",BgValueList2);
	var BgValueList3=[70,35,45,30,65,45];
	contentHover("contentBg3","contentEl3",BgValueList3);
	var BgValueList4=[92,75,45,50,60,35,45,20];
	contentHover("contentBg4","contentEl4",BgValueList4);
	
	//专业技能页面公共函数，根据ID改变背景元素的宽度，以显示每项专业技能熟练度百分比
	function contentHover(bgId,elementId,list){
		//背景元素容器
		var contentMod=getObj(elementId);
		//元素容器
		var contentBg=getObj(bgId);
		//元素集合
		var elementList=contentMod.getElementsByTagName("div");
		//背景元素集合
		var bgList=contentBg.getElementsByTagName("div");
		//定义变量储存元素的innerHTML值
		var elementValue,elementAddTimer=null;
		//遍历集合
		for(var i=0;i<elementList.length;i++){
			
			//把变量保存在每个段落对象elementList[i]中
			elementList[i].i=i;
			elementList[i].onmouseover=function(){
				//定义局部变量接收该对象的私有属性i
				var j=this.i;
				elementValue=this.innerHTML;
				this.innerHTML="";
				bgList[j].style.width=list[j]+6+"%";
				var values=0;
				elementAddTimer=setInterval(function(){
					if(values<list[j]){
						values+=3;
						bgList[j].innerHTML="<span>"+values+"%"+"</span>";
					}else{
					    clearInterval(elementAddTimer);
						
					}
					
				},1)
				
			}
			
			elementList[i].onmouseout=function(){	
				
				var j=this.i;
				this.innerHTML=elementValue;
				bgList[j].style.width=0+"%";
				bgList[j].innerHTML="";
				clearInterval(elementAddTimer);
			}
		}
	}
	
}




