function getClass(classname,obj){
  obj=obj||document;
  if (document.getElementsByClassName!=undefined) {
   return obj.getElementsByClassName(classname)
  } else{
    var arr=[];
     var all=obj.getElementsByTagName("*");
     for (var i = 0; i < all.length; i++) {
      if(check[i].classname,classname){
        arr.push(all[i]);
      }
     }
     return arr;
  }
}



function check(){
  var arr=oldclass.split()
     for (var i = 0; i < arr.length; i++) {
      if(arr[i]==newclass){
        return true;
      }
     }
  return false;
}


// 获取行内样式与外部样式

function getStyle(obj,attr){
  if(obj.currentStyle){
    return obj.currentStyle[attr];
  }
  else{
    return getComputedStyle(obj,null)[attr];
  }
}


// 获取元素简化函数
function $(selector,context){ 
  if(typeof selector=="string"){
    context=context||document;
      if(selector.charAt(0)=="#"){
        return document.getElementById(selector.substr(1));
      }
  else if(selector.charAt(0)=="."){
 return getClass(selector.substring(1),context);
  }
  else if(/^[a-zA-Z][A-Za-z1-6]*$/.test(selector)){
  return context.getElementsByTagName(selector);
}
  }
if(typeof selector=="function"){
  window.onload=function(){
    selector();
  }
}

}

// 父子节点函数

function getChilds(obj,can){
        var can=can||"b"
        var childs=obj.childNodes;
        var newarr=[];
           if(can=="a"){
              for(var i=0;i<childs.length;i++){
          if(childs[i].nodeType==1||(childs[i].nodeType==3&&strm(childs[i].nodeValue)!="")){
             newarr.push(childs[i]);
           }
           }
           }
           else if(can=="b"){
                 for(var i=0;i<childs.length;i++){
          if(childs[i].nodeType==1){
             newarr.push(childs[i]);
           }
           }
           }
             return newarr;
         } 
        
    
        // 节点空格函数处理
        
      
        function strm(string,type){
        var type=type||"lr"
          if(type=="a"){
            return string.replace(/\s*/g,"")
          }
          if(type=="l"){
            return string.replace(/^\s*/g,"")
          }
          if(type=="r"){
            return string.replace(/\s*$/g,"")
          }
          if(type=="lr"){
            return string.replace(/^\s*|\s*$/g,"")
          }
          }
        
        // 第一个子节点引用函数

        function getFirst(parents,can){
          return getChilds(parents,can)[0];
        }

        // 最后一个子节点函数引用
        function getLast(parents,can){
          var arr=getChilds(parents,can)
           return arr[arr.length-1]
        }
       

       function getNumber(parents,can,index){
        var arr=getChilds(parents,can)
           return arr[index]
       }
         
      

        
      // 下个兄弟节点函数引用
         function downNext(obj){
           var down=obj.nextSibling;
             if(down==null){
              return false;
            }
            while(down.nodeType==8||(down.nodeType==3&&strm(down.nodeValue)==""))
            {
                    down=down.nextSibling;
                  
                 if(down==null){
                 return false;
             }
            
            }
          return down;
          }


   // 获取上一个兄弟节点的引用函数
        function upNext(obj){
           var up=obj.previousSibling;
             if(up==null){
              return false;
            }
            while(up.nodeType==8||(up.nodeType==3&&strm(up.nodeValue)==""))
            {
                    up=up.previousSibling;
                  
                 if(up==null){
                 return false;
             }
            
            }
          return up;
          }



// 兼容函数  1    
// 添加对象

function on(obj,event,fn){
 if(obj.addEventListener){
  obj.addEventListener(event,fn,false)
 }
else{
  obj.attachEvent("on"+event,fn)
}
}



// 兼容函数 2
// 删除对象
function off(obj,evert,fn){
  if(obj,removeEventListener){
    obj.removeEventListener(event,fn,false)
  }
else{
  obj.detachEvent("off"+event,false)
}
}