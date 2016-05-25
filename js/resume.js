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
	
	//初始化header中的粒子动画插件
    $('#particles').particleground({
	   dotColor: '#FFF',
	   lineColor: '#FFF'
    });
	

}

//初始化mian
function initMain(){
	//init main's height by bs
	var main=getObj("main");
	main.style.height=browserHei*5+"px";
	main.style.width=browserWid+"px";
	
	//初始化github按钮函数
	initGithub();
	
	//初始化专业技能页面
	initPage2();
	
	//初始化工作履历页面
	initPage4();
	
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
	var BgValueList2=[91,85,78,50,65,75,80,45];
	contentHover("contentBg2","contentEl2",BgValueList2);
	var BgValueList3=[70,35,45,30,65,45];
	contentHover("contentBg3","contentEl3",BgValueList3);
	var BgValueList4=[80,92,75,45,50,60,35,45,60];
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

var nodeIndex=0;
var btnIndex=0;
function initPage4(){
	
	scrollNodeClick();
	scrollTitleClick();
	
	
	//节点对象容器
	var container=getObj("scrollNode");
	//获取节点对象集合
	var scrollNodeList=container.getElementsByTagName("li");
	//滚动轴对象
	var scrollBar=getObj("scrollBar");
	//节点对象容器
    var nodeContainer=getObj("scrollNode");
	//获取节点对象集合
	var scrollNodeList=nodeContainer.getElementsByTagName("li");
	
	
	getObj("page4ToRightBtn").onclick=function(){
		//alert(nodeIndex)
		if(nodeIndex<3){
			if(nodeIndex==2){
		      this.style.display="none";	
		    }
			if(nodeIndex==0){
			  getObj("page4ToLeftBtn").style.display="block";
			}				
			btnIndex=nodeIndex;
			scrollPublicFunction(btnIndex+1);
			btnIndex++;
			nodeIndex++;
		}
	}
	getObj("page4ToLeftBtn").onclick=function(){
		//alert(nodeIndex)
		if(nodeIndex>0){
			if(nodeIndex==1){
		      this.style.display="none";
		    }
			if(nodeIndex<=3){
			  getObj("page4ToRightBtn").style.display="block";
			}		
			btnIndex=nodeIndex;
			scrollPublicFunction(btnIndex-1);
			btnIndex--;
			nodeIndex--;
		}
	}
	
	//点击对象title事件
	function scrollTitleClick(){
		
		//节点title对象容器
		var titleContainer=getObj("scrollTitle");
		//获取title对象集合
	    var scrollTitleList=titleContainer.getElementsByTagName("li");
		
		for(var i=0;i<scrollTitleList.length;i++){
		   	scrollTitleList[i].i=i;
			scrollTitleList[i].onclick=function(){
				//记录当前节点
				nodeIndex=this.i;
				var j=this.i;
				scrollPublicFunction(j);
			}
		}	
	}
	
	
	//点击节点对象事件
	function scrollNodeClick(){
		
		//节点对象容器
	    var container=getObj("scrollNode");
	    //获取节点对象集合
	    var scrollNodeList=container.getElementsByTagName("li");
		for(var i=0;i<scrollNodeList.length;i++){
		    //把i赋值为当前对象的私有属性
			scrollNodeList[i].i=i;
			//设置当前对象的onclick事件函数
			scrollNodeList[i].onclick=function(){
				//记录当前节点
				nodeIndex=this.i;
				var j=this.i;
				scrollPublicFunction(j);
		}
	  }	
	}
	
	//page4公共函数，改变动滚节点样式以及改变滚动轴长度，参数j为当前节点的index
	function scrollPublicFunction(j){
		       
		        //内容区容器对象
	            var contentContainer=getObj("page4Container");
				//获取容器内每个对象的宽度
				var containerChildWidth=contentContainer.getElementsByTagName("div")[0].offsetWidth;
				//alert(containerChildWidth)
			    //改变滚动轴长度，长度=本身长度+（本身长度*当前结点的下标值）+"px"
				scrollBar.style.width=120+(215*j)+"px";
				//800秒后改变当前节点样式
				setTimeout(function(){
					scrollNodeList[j].className="page4-scroll-node-clicked";
				},800);
				//改变容器的marginLeft属性，值=-（容器内元素宽度*当前节点下标）+"px"
				contentContainer.style.marginLeft=-(containerChildWidth*j)+"px";
				//重置滚动轴节点样式
				switch(j){
				   case 0:
				     scrollNodeList[1].className="page4-scroll-node";
					 scrollNodeList[2].className="page4-scroll-node";
					 scrollNodeList[3].className="page4-scroll-node"; 
					 
				   break;
				   case 1:
				     setTimeout(function(){
					    scrollNodeList[0].className="page4-scroll-node-clicked";	 
					 },400)
					 scrollNodeList[2].className="page4-scroll-node";
					 scrollNodeList[3].className="page4-scroll-node";  
				   break;
				   case 2:
					    scrollNodeList[0].className="page4-scroll-node-clicked";	 
					 setTimeout(function(){
					     scrollNodeList[1].className="page4-scroll-node-clicked";	 
					 },300)
					 scrollNodeList[3].className="page4-scroll-node";  
				   break;
				   case 3:
				     scrollNodeList[0].className="page4-scroll-node-clicked";
					  setTimeout(function(){
					     scrollNodeList[1].className="page4-scroll-node-clicked";	 
					 },300)
					  setTimeout(function(){
					     scrollNodeList[2].className="page4-scroll-node-clicked";	 
					 },400)   
				   break;	
			   }
	   }
}



