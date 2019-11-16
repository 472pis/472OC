
  
    var balls = document.getElementsByClassName("ball"); //변수 지정
    document.onmousemove = function(){ //현재 파일의 마우스 위치 이벤트
      var x = event.clientX * 100 / window.innerWidth + "%"; //브라우저의 x좌표값x100/border내부 가로 값(eye값인듯?) %
      var y = event.clientY * 100 / window.innerHeight + "%"; 
      
      for(var i=0; i<2; i++){//++는 증가(1을 더함)
        balls[i].style.left= x;
        balls[i].style.top = y;
        balls[i].style.transform = "translate(-"+x+",-"+y+")";
      }//반복문 - var x,y값을 left, top에 적용, -값은 ""안에 넣어서 쓰면된다 1만 하고 끝남
      // 마우스 위치가 바뀔 때마다 var x,y값이 계산되고 for문에 적용되어서 움직이는 것임
    }
