//鼠标点击拖拽snowman
var box = document.getElementsByClassName("snowman")[0]; 
var x, y; //鼠标相对与div左边，上边的偏移
var isDrop = false; //移动状态的判断鼠标按下才能移动
box.onmousedown = function(e) {
    var e = e || window.event; //用event这个对象来获取鼠标的位置
    x = e.clientX - box.offsetLeft;
    y = e.clientY - box.offsetTop;
    isDrop = true; //设为true表示可以移动
            }
document.onmousemove = function(e) {
                //是否为可移动状态                　　　　　　　　　　　 　　　　　　　
    if(isDrop) {　　　　
        var e = e || window.event;                    　　
        var moveX = e.clientX - x; //得到距离左边移动距离                    　　
        var moveY = e.clientY - y; //得到距离上边移动距离
                    //可移动最大距离
        var maxX = document.documentElement.clientWidth - box.offsetWidth;
        var maxY = document.documentElement.clientHeight - box.offsetHeight;
        moveX=Math.min(maxX, Math.max(0,moveX));
                    
        moveY=Math.min(maxY, Math.max(0,moveY));
        box.style.left = moveX + "px";　　
        box.style.top = moveY + "px";　　　　　　　　　　
                } else {
                    return;　　　　　　　　　　
                }

            }
document.onmouseup = function() {
     isDrop = false; //设置为false不可移动
            }

//转动滑轮缩放snowman                  
function zoomImg(obj){          
  // 一开始默认是100%         
   let zoom = parseInt(obj.style.zoom, 10) || 100;       
     // 滚轮滚一下wheelDelta的值增加或减少120         
   zoom += event.wheelDelta/12;      
      if(zoom>0)    {          
   obj.style.zoom = zoom + '%';  
    }    
      return false;      
  }

//音乐播放
function autoPlay() {
    var myAuto = document.getElementById('myaudio');
    if (myAuto.paused) {myAuto.play();}
    else {myAuto.pause();};
        }
function closePlay() {
    var myAuto = document.getElementById('myaudio');
    myAuto.load();
        } 
