

let imgSlide=document.getElementById("imgSlide");
let imgSlide1=document.getElementById("imgSlide1");
let imgSlide2=document.getElementById("imgSlide2");
let imgSlide3=document.getElementById("imgSlide3");
let imgSlide4=document.getElementById("imgSlide4");
let imgSlide5=document.getElementById("imgSlide5");
let imgSlide6=document.getElementById("imgSlide6");
let imgSlide7=document.getElementById("imgSlide7");

let imgSlide8=document.getElementById("imgSlide8");
let imgSlide9=document.getElementById("imgSlide9");
let imgSlide10=document.getElementById("imgSlide10");
let imgSlide11=document.getElementById("imgSlide11"); 
let imgSlide12=document.getElementById("imgSlide12");
let imgSlide13=document.getElementById("imgSlide13");
let imgSlide14=document.getElementById("imgSlide14");
let imgSlide15=document.getElementById("imgSlide15"); 

if(window.innerWidth<800)
{
	let mainBlock=document.getElementById("mainBlock");
  	let block1=document.getElementById("block1");
  	let block2=document.getElementById("block2");
  	let temp1=imgSlide.cloneNode(true);
  	let temp2=imgSlide1.cloneNode(true);
  	let temp3=imgSlide2.cloneNode(true);
  	let temp4=imgSlide3.cloneNode(true);
  	let temp5=imgSlide4.cloneNode(true);
  	let temp6=imgSlide5.cloneNode(true);
  	let temp7=imgSlide6.cloneNode(true);
  	let temp8=imgSlide7.cloneNode(true);
  	block1.remove();
  	block2.remove();
  	temp1.id="imgSlide";
  	temp2.id="imgSlide1";
  	temp3.id="imgSlide2";
  	temp4.id="imgSlide3";
  	temp5.id="imgSlide4";
  	temp6.id="imgSlide5";
  	temp7.id="imgSlide6";
  	temp8.id="imgSlide7";
  	temp1.src="/img/tile1.jpg";
  	temp2.src="/img/tile2.jpg";
  	temp3.src="/img/tile3.jpg";
  	temp4.src="/img/tile5.jpg";
  	temp5.src="/img/tile6.jpg";
  	temp6.src="/img/tile9.jpg";
  	temp7.src="/img/tile8.jpg";
  	temp8.src="/img/tile4.jpg";
  	mainBlock.appendChild(temp1);
  	mainBlock.appendChild(temp2);
  	mainBlock.appendChild(temp3);
  	mainBlock.appendChild(temp4);
  	mainBlock.appendChild(temp5);
  	mainBlock.appendChild(temp6);
  	mainBlock.appendChild(temp7);
  	mainBlock.appendChild(temp8);
  	imgSlide=document.getElementById("imgSlide");
  	imgSlide1=document.getElementById("imgSlide1");
  	imgSlide2=document.getElementById("imgSlide2");
  	imgSlide3=document.getElementById("imgSlide3");
  	imgSlide4=document.getElementById("imgSlide4");
  	imgSlide5=document.getElementById("imgSlide5");
  	imgSlide6=document.getElementById("imgSlide6");
  	imgSlide7=document.getElementById("imgSlide7");
  
  	let mainBlock2=document.getElementById("secondImg");
  	let block3=document.getElementById("block3");
  	let block4=document.getElementById("block4");
  	let temp9=imgSlide.cloneNode(true);
  	let temp10=imgSlide8.cloneNode(true);
  	let temp11=imgSlide9.cloneNode(true);
  	let temp12=imgSlide10.cloneNode(true);
  	let temp13=imgSlide11.cloneNode(true);
  	let temp14=imgSlide12.cloneNode(true);
  	let temp15=imgSlide13.cloneNode(true);
  	let temp16=imgSlide14.cloneNode(true);
  	block3.remove();
  	block4.remove();
  	temp9.id="imgSlide8";
  	temp10.id="imgSlide9";
  	temp11.id="imgSlide10";
  	temp12.id="imgSlide11";
  	temp13.id="imgSlide12";
  	temp14.id="imgSlide13";
  	temp15.id="imgSlide14";
  	temp16.id="imgSlide15";
  	mainBlock2.appendChild(temp9);
  	mainBlock2.appendChild(temp10);
  	mainBlock2.appendChild(temp11);
  	mainBlock2.appendChild(temp12);
  	mainBlock2.appendChild(temp13);
  	mainBlock2.appendChild(temp14);
  	mainBlock2.appendChild(temp15);
  	mainBlock2.appendChild(temp16);
  /*
  	<div id="block3" class="imgBlock">
                    <img class="imgDisplay" style="opacity: 0;" id="imgSlide8" src="img/wall1.jpg" alt="team">
                    <img class="imgDisplay" style="opacity: 0;" id="imgSlide9" src="img/wall2.jpg" alt="team">
                    <img class="imgDisplay" style="opacity: 0;" id="imgSlide10" src="img/ceiling.jpg" alt="team">
                    <img class="imgDisplay" style="opacity: 0;" id="imgSlide11" src="img/carpet2.png" alt="team">
                </div>
                <div id="block4" class="imgBlock">
                    <img class="imgDisplay" style="opacity: 0;" id="imgSlide15" src="img/work3.jpg" alt="team">
                    <img class="imgDisplay" style="opacity: 0;" id="imgSlide14" src="img/1.jpg" alt="team">
                    <img class="imgDisplay" style="opacity: 0;" id="imgSlide13" src="img/1b.jpg" alt="team">
                    <img class="imgDisplay" style="opacity: 0;" id="imgSlide12" src="img/1c.jpg" alt="team">
                </div>
  */
  	imgSlide8=document.getElementById("imgSlide8");
  	imgSlide9=document.getElementById("imgSlide9");
  	imgSlide10=document.getElementById("imgSlide10");
  	imgSlide11=document.getElementById("imgSlide11");
  	imgSlide12=document.getElementById("imgSlide12");
  	imgSlide13=document.getElementById("imgSlide13");
  	imgSlide14=document.getElementById("imgSlide14");
  	imgSlide15=document.getElementById("imgSlide15");
  	imgSlide8.src="img/wall1.jpg";
  	imgSlide9.src="img/wall2.jpg";
  	imgSlide10.src="img/ceiling.jpg";
  	imgSlide11.src="img/carpet2.png";
  	imgSlide12.src="img/work3.jpg";
  	imgSlide13.src="img/1.jpg";
  	imgSlide14.src="img/1b.jpg";
  	imgSlide15.src="img/1c.jpg";
}
let widthSet=window.innerWidth;
function imgGrow()
{
    let startFade;
    let opacity=0;
    let width=0;
    let height=0;
    let swi=[false,false,false]
    function start()
    {
        opacity=opacity+0.02;
        width=width+1;
        height=height+1;
        if(opacity>=1)
        {
            opacity=1;
            swi[0]=true;
        }
        if(width>=20)
        {
            width=20;
            swi[1]=true;
        }
        if(height>=100)
        {
            height=100;
            swi[2]=true;
        }
        imgSlide.setAttribute("style","opacity:"+opacity+";height:"+height+"%;padding:10px;border-radius: 12px;");
        if(swi[0]==true && swi[1]==true && swi[2]==true)
        {
            clearInterval(startFade);
        }
    }
  	function start2()
    {
        opacity=opacity+0.02;
        width=width+1;
        if(opacity>=1)
        {
            opacity=1;
            swi[0]=true;
        }
        if(width>=400)
        {
            width=400;
          	clearInterval(startFade);
        }
        
        imgSlide.setAttribute("style","opacity:"+opacity+";padding:10px;border-radius: 12px;");
    }
  	if(widthSet>800)
    {
    	startFade=setInterval(start,10);
    }
  	else
    {
    	startFade=setInterval(start2,50);
    }
    /*from
    {
        opacity:0;
        width:0;
        height:0;
    }
    to 
    {
        width:20%;
        height:100%;
        opacity:1;
    }*/
}
imgGrow();
function imgGrow1()
{
    let startFade;
    let opacity=0;
    let width=0;
    let height=0;
    let swi=[false,false,false]
    function start()
    {
        opacity=opacity+0.02;
        width=width+1;
        height=height+1;
        if(opacity>=1)
        {
            opacity=1;
            swi[0]=true;
        }
        if(width>=20)
        {
            width=20;
            swi[1]=true;
        }
        if(height>=100)
        {
            height=100;
            swi[2]=true;
        }
        imgSlide1.setAttribute("style","opacity:"+opacity+";height:"+height+"%;padding:10px;border-radius: 12px;");
        if(swi[0]==true && swi[1]==true && swi[2]==true)
        {
            clearInterval(startFade);
        }
    }
    function start2()
    {
        opacity=opacity+0.02;
        width=width+1;
        if(opacity>=1)
        {
            opacity=1;
            swi[0]=true;
        }
        if(width>=400)
        {
            width=400;
          	clearInterval(startFade);
        }
        
        imgSlide1.setAttribute("style","opacity:"+opacity+";padding:10px;border-radius: 12px;");
    }
  	if(widthSet>800)
    {
    	startFade=setInterval(start,10);
    }
  	else
    {
    	startFade1=setInterval(start2,50);
      console.log("function grow1");
    }
}

function imgGrow2()
{
    let startFade;
    let opacity=0;
    let width=0;
    let height=0;
    let swi=[false,false,false]
    function start()
    {
        opacity=opacity+0.02;
        width=width+1;
        height=height+1;
        if(opacity>=1)
        {
            opacity=1;
            swi[0]=true;
        }
        if(width>=20)
        {
            width=20;
            swi[1]=true;
        }
        if(height>=100)
        {
            height=100;
            swi[2]=true;
        }
        imgSlide2.setAttribute("style","opacity:"+opacity+";height:"+height+"%;padding:10px;border-radius: 12px;");
        if(swi[0]==true && swi[1]==true && swi[2]==true)
        {
            clearInterval(startFade);
        }
    }
    function start2()
    {
        opacity=opacity+0.02;
        width=width+1;
        if(opacity>=1)
        {
            opacity=1;
            swi[0]=true;
        }
        if(width>=400)
        {
            width=400;
          	clearInterval(startFade);
        }
        
        imgSlide2.setAttribute("style","opacity:"+opacity+";padding:10px;border-radius: 12px;");
    }
  	if(widthSet>800)
    {
    	startFade=setInterval(start,10);
    }
  	else
    {
    	startFade=setInterval(start2,50);
    }
  	if(widthSet>800)
    {
    	startFade=setInterval(start,10);
    }
  	else
    {
    	startFade=setInterval(start2,50);
    }
}

function imgGrow3()
{
    let startFade;
    let opacity=0;
    let width=0;
    let height=0;
    let swi=[false,false,false]
    function start()
    {
        opacity=opacity+0.02;
        width=width+1;
        height=height+1;
        if(opacity>=1)
        {
            opacity=1;
            swi[0]=true;
        }
        if(width>=20)
        {
            width=20;
            swi[1]=true;
        }
        if(height>=100)
        {
            height=100;
            swi[2]=true;
        }
        imgSlide3.setAttribute("style","opacity:"+opacity+";height:"+height+"%;padding:10px;border-radius: 12px;");
        if(swi[0]==true && swi[1]==true && swi[2]==true)
        {
            clearInterval(startFade);
        }
    }
    function start2()
    {
        opacity=opacity+0.02;
        width=width+1;
        if(opacity>=1)
        {
            opacity=1;
            swi[0]=true;
        }
        if(width>=400)
        {
            width=400;
          	clearInterval(startFade);
        }
        
        imgSlide3.setAttribute("style","opacity:"+opacity+";padding:10px;border-radius: 12px;");
    }
  	if(widthSet>800)
    {
    	startFade=setInterval(start,10);
    }
  	else
    {
    	startFade=setInterval(start2,50);
    }
  	if(widthSet>800)
    {
    	startFade=setInterval(start,10);
    }
  	else
    {
    	startFade=setInterval(start2,50);
    }
}

function imgGrow7()
{
    let startFade;
    let opacity=0;
    let width=0;
    let height=0;
    let swi=[false,false,false]
    function start()
    {
        opacity=opacity+0.02;
        width=width+1;
        height=height+1;
        if(opacity>=1)
        {
            opacity=1;
            swi[0]=true;
        }
        if(width>=20)
        {
            width=20;
            swi[1]=true;
        }
        if(height>=100)
        {
            height=100;
            swi[2]=true;
        }
        imgSlide7.setAttribute("style","opacity:"+opacity+";height:"+height+"%;padding:10px;border-radius: 12px;");
        if(swi[0]==true && swi[1]==true && swi[2]==true)
        {
            clearInterval(startFade);
        }
    }
    function start2()
    {
        opacity=opacity+0.02;
        width=width+1;
        if(opacity>=1)
        {
            opacity=1;
            swi[0]=true;
        }
        if(width>=400)
        {
            width=400;
          	clearInterval(startFade);
        }
        
        imgSlide7.setAttribute("style","opacity:"+opacity+";padding:10px;border-radius: 12px;");
    }
  	if(widthSet>800)
    {
    	startFade=setInterval(start,10);
    }
  	else
    {
    	startFade=setInterval(start2,50);
    }
}

function imgGrow6()
{
    let startFade;
    let opacity=0;
    let width=0;
    let height=0;
    let swi=[false,false,false]
    function start()
    {
        opacity=opacity+0.02;
        width=width+1;
        height=height+1;
        if(opacity>=1)
        {
            opacity=1;
            swi[0]=true;
        }
        if(width>=20)
        {
            width=20;
            swi[1]=true;
        }
        if(height>=100)
        {
            height=100;
            swi[2]=true;
        }
        imgSlide6.setAttribute("style","opacity:"+opacity+";height:"+height+"%;padding:10px;border-radius: 12px;");
        if(swi[0]==true && swi[1]==true && swi[2]==true)
        {
            clearInterval(startFade);
        }
    }
    function start2()
    {
        opacity=opacity+0.02;
        width=width+1;
        if(opacity>=1)
        {
            opacity=1;
            swi[0]=true;
        }
        if(width>=400)
        {
            width=400;
          	clearInterval(startFade);
        }
        
        imgSlide6.setAttribute("style","opacity:"+opacity+";padding:10px;border-radius: 12px;");
    }
  	if(widthSet>800)
    {
    	startFade=setInterval(start,10);
    }
  	else
    {
    	startFade=setInterval(start2,50);
    }
}

function imgGrow5()
{
    let startFade;
    let opacity=0;
    let width=0;
    let height=0;
    let swi=[false,false,false]
    function start()
    {
        opacity=opacity+0.02;
        width=width+1;
        height=height+1;
        if(opacity>=1)
        {
            opacity=1;
            swi[0]=true;
        }
        if(width>=20)
        {
            width=20;
            swi[1]=true;
        }
        if(height>=100)
        {
            height=100;
            swi[2]=true;
        }
        imgSlide5.setAttribute("style","opacity:"+opacity+";height:"+height+"%;padding:10px;border-radius: 12px;");
        if(swi[0]==true && swi[1]==true && swi[2]==true)
        {
            clearInterval(startFade);
        }
    }
    function start2()
    {
        opacity=opacity+0.02;
        width=width+1;
        if(opacity>=1)
        {
            opacity=1;
            swi[0]=true;
        }
        if(width>=400)
        {
            width=400;
          	clearInterval(startFade);
        }
        
        imgSlide5.setAttribute("style","opacity:"+opacity+";padding:10px;border-radius: 12px;");
    }
  	if(widthSet>800)
    {
    	startFade=setInterval(start,10);
    }
  	else
    {
    	startFade=setInterval(start2,50);
    }
}

function imgGrow4()
{
    let startFade;
    let opacity=0;
    let width=0;
    let height=0;
    let swi=[false,false,false]
    function start()
    {
        opacity=opacity+0.02;
        width=width+1;
        height=height+1;
        if(opacity>=1)
        {
            opacity=1;
            swi[0]=true;
        }
        if(width>=20)
        {
            width=20;
            swi[1]=true;
        }
        if(height>=100)
        {
            height=100;
            swi[2]=true;
        }
        imgSlide4.setAttribute("style","opacity:"+opacity+";height:"+height+"%;padding:10px;border-radius: 12px;");
        if(swi[0]==true && swi[1]==true && swi[2]==true)
        {
            clearInterval(startFade);
        }
    }
    function start2()
    {
        opacity=opacity+0.02;
        width=width+1;
        if(opacity>=1)
        {
            opacity=1;
            swi[0]=true;
        }
        if(width>=400)
        {
            width=400;
          	clearInterval(startFade);
        }
        
        imgSlide4.setAttribute("style","opacity:"+opacity+";padding:10px;border-radius: 12px;");
    }
  	if(widthSet>800)
    {
    	startFade=setInterval(start,10);
    }
  	else
    {
    	startFade=setInterval(start2,50);
    }
}

let secondImg=document.getElementById("secondImg");
let imgTop=secondImg.offsetTop;
let imgHeight=secondImg.offsetHeight;
let imgStartPos=imgHeight/2+imgTop;
let beginSwi=false;

let left=document.getElementById("leftImg");
let rotateImg=document.getElementById("imgRotate");
let right=document.getElementById("rightImg");

let thrdDiv=document.getElementById("thrdDiv");
let thrdDivTop=thrdDiv.offsetTop-200;

let startR=false;
let windowsSwi=false;
let windowSwi1=false;
let imgPosition=new Array();
imgPosition[0]=imgSlide.offsetTop;
imgPosition[1]=imgSlide1.offsetTop;
imgPosition[2]=imgSlide2.offsetTop;
imgPosition[3]=imgSlide3.offsetTop;
imgPosition[4]=imgSlide4.offsetTop;
imgPosition[5]=imgSlide5.offsetTop;
imgPosition[6]=imgSlide6.offsetTop;
imgPosition[7]=imgSlide7.offsetTop;


let last=false;
let last1=false;
let fadeSwi=[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];

function windowView(position,ops)
{
  	if(ops==true)
    {
    	beginFunction(position);
    }
  	if(windowsSwi==false && window.innerWidth>800)
    {
  		setTimeout(imgGrow1,1000);
        setTimeout(imgGrow2,2000);
        setTimeout(imgGrow3,3000);
        imgGrow7();
        setTimeout(imgGrow6,1000);
        setTimeout(imgGrow5,2000);
        setTimeout(imgGrow4,3000);
      	windowsSwi=true;
    }
  	if(windowsSwi==false && last==false)
    {
      
      if(position>=imgPosition[0] && fadeSwi[0]==false)
      {
        	fadeSwi[0]=true;
          	imgGrow1()
      }
      if(position>=imgPosition[1] && fadeSwi[1]==false)
      {
        	fadeSwi[1]=true;
          	imgGrow2();
      }
      if(position>=imgPosition[2] && fadeSwi[2]==false)
      {
        	fadeSwi[2]=true;
          	imgGrow3();
      }
      if(position>=imgPosition[3] && fadeSwi[3]==false)
      {
        	fadeSwi[3]=true;
          	imgGrow4();
      }
      if(position>=imgPosition[4] && fadeSwi[4]==false)
      {
        	fadeSwi[4]=true;
          	imgGrow5();
      }
      if(position>=imgPosition[5] && fadeSwi[5]==false)
      {
        	fadeSwi[5]=true;
          	imgGrow6();
      }
      if(position>=imgPosition[6] && fadeSwi[6]==false)
      {
        	fadeSwi[6]=true;
          	imgGrow7();
        	last=true;
      }
   }
}if(window.innerWidth>800){windowView();}
let option=false;
window.addEventListener("scroll",()=>
{
    let scrollPozY=window.scrollY;
    if(scrollPozY>=imgTop-200 && beginSwi==false)
    {
      	
        beginSwi=true;
      	option=true;
    }
    if(scrollPozY>=thrdDivTop && startR==false)
    {
        lastImgFunc();
        startR=true;
    }
  	windowView(scrollPozY,option);
});

function lastImgFunc()
{
    left.setAttribute("style","opacity:1;animation-name: leftSlide;animation-duration: 3s;animation-direction: alternate");
    right.setAttribute("class","imgDisplay right");
    right.setAttribute("style","opacity:1");
    rotateImg.setAttribute("class","imgDisplay rotate");
    rotateImg.setAttribute("style","opacity:1");
}

imgPosition[8]=imgSlide8.offsetTop-imgSlide8.offsetHeight/2;
imgPosition[9]=imgSlide9.offsetTop-imgSlide9.offsetHeight/2;
imgPosition[10]=imgSlide10.offsetTop-imgSlide10.offsetHeight/2;
imgPosition[11]=imgSlide11.offsetTop-imgSlide11.offsetHeight/2;
imgPosition[12]=imgSlide12.offsetTop-imgSlide12.offsetHeight/2;
imgPosition[13]=imgSlide13.offsetTop-imgSlide13.offsetHeight/2;
imgPosition[14]=imgSlide14.offsetTop-imgSlide14.offsetHeight/2;
imgPosition[15]=imgSlide15.offsetTop-imgSlide15.offsetHeight/2;
let firstSwi=false;
function beginFunction(position)
{
    if(windowSwi1==false && window.innerWidth>800)
    {
  		imgGrow();
      	setTimeout(imgGrow1,1000);
        setTimeout(imgGrow2,2000);
        setTimeout(imgGrow3,3000);
        imgGrow7();
        setTimeout(imgGrow6,1000);
        setTimeout(imgGrow5,2000);
        setTimeout(imgGrow4,3000);
      	windowSwi1=true;
    }
  	if(last==true && window.innerWidth<800 && windowSwi1==false)
    {   
        if(firstSwi==false)
        {
      		imgGrow();
          	firstSwi=true;
        }
      	if(position>=imgPosition[9] && fadeSwi[9]==false)
        {
              fadeSwi[9]=true;
              imgGrow1()
        }
        if(position>=imgPosition[10] && fadeSwi[10]==false)
        {
              fadeSwi[10]=true;
              imgGrow2();
        }
        if(position>=imgPosition[11] && fadeSwi[11]==false)
        {
              fadeSwi[11]=true;
              imgGrow3();
        }
        if(position>=imgPosition[12] && fadeSwi[12]==false)
        {
              fadeSwi[12]=true;
              imgGrow4();
        }
        if(position>=imgPosition[13] && fadeSwi[13]==false)
        {
              fadeSwi[13]=true;
              imgGrow5();
        }
        if(position>=imgPosition[14] && fadeSwi[14]==false)
        {
              fadeSwi[14]=true;
              imgGrow6();
        }
        if(position>=imgPosition[15] && fadeSwi[15]==false)
        {
              fadeSwi[15]=true;
              imgGrow7();
              last=true;
        }
   	}
  	function imgGrow()
    {
        let startFade;
        let opacity=0;
        let width=0;
        let height=0;
        let swi=[false,false,false]
        function start()
        {
            opacity=opacity+0.02;
            width=width+1;
            height=height+1;
            if(opacity>=1)
            {
                opacity=1;
                swi[0]=true;
            }
            if(width>=20)
            {
                width=20;
                swi[1]=true;
            }
            if(height>=100)
            {
                height=100;
                swi[2]=true;
            }
            imgSlide8.setAttribute("style","opacity:"+opacity+";height:"+height+"%;padding:10px;border-radius: 12px;");
            if(swi[0]==true && swi[1]==true && swi[2]==true)
            {
                clearInterval(startFade);
            }
        }
        function start2()
    	{
        	opacity=opacity+0.02;
        	width=width+1;
        	if(opacity>=1)
        	{
            	opacity=1;
            	swi[0]=true;
        	}
        	if(width>=400)
        	{
            	width=400;
          		clearInterval(startFade);
        	}
        
        	imgSlide8.setAttribute("style","opacity:"+opacity+";padding:10px;border-radius: 12px;");
          	
        }
        if(widthSet>800)
        {
            startFade=setInterval(start,10);
        }
        else
        {
            startFade=setInterval(start2,50);
        }
    }
    function imgGrow1()
    {
        let startFade;
        let opacity=0;
        let width=0;
        let height=0;
        let swi=[false,false,false]
        function start()
        {
            opacity=opacity+0.02;
            width=width+1;
            height=height+1;
            if(opacity>=1)
            {
                opacity=1;
                swi[0]=true;
            }
            if(width>=20)
            {
                width=20;
                swi[1]=true;
            }
            if(height>=100)
            {
                height=100;
                swi[2]=true;
            }
            imgSlide9.setAttribute("style","opacity:"+opacity+";height:"+height+"%;padding:10px;border-radius: 12px;");
            if(swi[0]==true && swi[1]==true && swi[2]==true)
            {
                clearInterval(startFade);
            }
        }
        function start2()
    	{
        	opacity=opacity+0.02;
        	width=width+1;
        	if(opacity>=1)
        	{
            	opacity=1;
            	swi[0]=true;
        	}
        	if(width>=400)
        	{
            	width=400;
          		clearInterval(startFade);
        	}
        
        	imgSlide9.setAttribute("style","opacity:"+opacity+";padding:10px;border-radius: 12px;");
        }
        if(widthSet>800)
        {
            startFade=setInterval(start,10);
        }
        else
        {
            startFade=setInterval(start2,50);
        }
    }
    function imgGrow2()
    {
        let startFade;
        let opacity=0;
        let width=0;
        let height=0;
        let swi=[false,false,false]
        function start()
        {
            opacity=opacity+0.02;
            width=width+1;
            height=height+1;
            if(opacity>=1)
            {
                opacity=1;
                swi[0]=true;
            }
            if(width>=20)
            {
                width=20;
                swi[1]=true;
            }
            if(height>=100)
            {
                height=100;
                swi[2]=true;
            }
            imgSlide10.setAttribute("style","opacity:"+opacity+";height:"+height+"%;padding:10px;border-radius: 12px;");
            if(swi[0]==true && swi[1]==true && swi[2]==true)
            {
                clearInterval(startFade);
            }
        }
        function start2()
    	{
        	opacity=opacity+0.02;
        	width=width+1;
        	if(opacity>=1)
        	{
            	opacity=1;
            	swi[0]=true;
        	}
        	if(width>=400)
        	{
            	width=400;
          		clearInterval(startFade);
        	}
        
        	imgSlide10.setAttribute("style","opacity:"+opacity+";padding:10px;border-radius: 12px;");
        }
      	if(widthSet>800)
        {
            startFade=setInterval(start,10);
        }
        else
        {
            startFade=setInterval(start2,50);
        }
    }
    function imgGrow3()
    {
        let startFade;
        let opacity=0;
        let width=0;
        let height=0;
        let swi=[false,false,false]
        function start()
        {
            opacity=opacity+0.02;
            width=width+1;
            height=height+1;
            if(opacity>=1)
            {
                opacity=1;
                swi[0]=true;
            }
            if(width>=20)
            {
                width=20;
                swi[1]=true;
            }
            if(height>=100)
            {
                height=100;
                swi[2]=true;
            }
            imgSlide11.setAttribute("style","opacity:"+opacity+";height:"+height+"%;padding:10px;border-radius: 12px;");
            if(swi[0]==true && swi[1]==true && swi[2]==true)
            {
                clearInterval(startFade);
            }
        }
        function start2()
    	{
        	opacity=opacity+0.02;
        	width=width+1;
        	if(opacity>=1)
        	{
            	opacity=1;
            	swi[0]=true;
        	}
        	if(width>=400)
        	{
            	width=400;
          		clearInterval(startFade);
        	}
        
        	imgSlide11.setAttribute("style","opacity:"+opacity+";padding:10px;border-radius: 12px;");
        }
      	if(widthSet>800)
        {
            startFade=setInterval(start,10);
        }
        else
        {
            startFade=setInterval(start2,50);
        }
    }
    function imgGrow7()
    {
        let startFade;
        let opacity=0;
        let width=0;
        let height=0;
        let swi=[false,false,false]
        function start()
        {
            opacity=opacity+0.02;
            width=width+1;
            height=height+1;
            if(opacity>=1)
            {
                opacity=1;
                swi[0]=true;
            }
            if(width>=20)
            {
                width=20;
                swi[1]=true;
            }
            if(height>=100)
            {
                height=100;
                swi[2]=true;
            }
            imgSlide15.setAttribute("style","opacity:"+opacity+";height:"+height+"%;padding:10px;border-radius: 12px;");
            if(swi[0]==true && swi[1]==true && swi[2]==true)
            {
                clearInterval(startFade);
            }
        }
        function start2()
    	{
        	opacity=opacity+0.02;
        	width=width+1;
        	if(opacity>=1)
        	{
            	opacity=1;
            	swi[0]=true;
        	}
        	if(width>=400)
        	{
            	width=400;
          		clearInterval(startFade);
        	}
        
        	imgSlide15.setAttribute("style","opacity:"+opacity+";padding:10px;border-radius: 12px;");
        }
      	if(widthSet>800)
        {
            startFade=setInterval(start,10);
        }
        else
        {
            startFade=setInterval(start2,50);
        }
    }
    function imgGrow6()
    {
        let startFade;
        let opacity=0;
        let width=0;
        let height=0;
        let swi=[false,false,false]
        function start()
        {
            opacity=opacity+0.02;
            width=width+1;
            height=height+1;
            if(opacity>=1)
            {
                opacity=1;
                swi[0]=true;
            }
            if(width>=20)
            {
                width=20;
                swi[1]=true;
            }
            if(height>=100)
            {
                height=100;
                swi[2]=true;
            }
            imgSlide14.setAttribute("style","opacity:"+opacity+";height:"+height+"%;padding:10px;border-radius: 12px;");
            if(swi[0]==true && swi[1]==true && swi[2]==true)
            {
                clearInterval(startFade);
            }
        }
        function start2()
    	{
        	opacity=opacity+0.02;
        	width=width+1;
        	if(opacity>=1)
        	{
            	opacity=1;
            	swi[0]=true;
        	}
        	if(width>=400)
        	{
            	width=400;
          		clearInterval(startFade);
        	}
        
        	imgSlide14.setAttribute("style","opacity:"+opacity+";padding:10px;border-radius: 12px;");
        }
      	if(widthSet>800)
        {
            startFade=setInterval(start,10);
        }
        else
        {
            startFade=setInterval(start2,50);
        }
    }
    function imgGrow5()
    {
        let startFade;
        let opacity=0;
        let width=0;
        let height=0;
        let swi=[false,false,false]
        function start()
        {
            opacity=opacity+0.02;
            width=width+1;
            height=height+1;
            if(opacity>=1)
            {
                opacity=1;
                swi[0]=true;
            }
            if(width>=20)
            {
                width=20;
                swi[1]=true;
            }
            if(height>=100)
            {
                height=100;
                swi[2]=true;
            }
            imgSlide13.setAttribute("style","opacity:"+opacity+";height:"+height+"%;padding:10px;border-radius: 12px;");
            if(swi[0]==true && swi[1]==true && swi[2]==true)
            {
                clearInterval(startFade);
            }
        }
        function start2()
    	{
        	opacity=opacity+0.02;
        	width=width+1;
        	if(opacity>=1)
        	{
            	opacity=1;
            	swi[0]=true;
        	}
        	if(width>=400)
        	{
            	width=400;
          		clearInterval(startFade);
        	}
        
        	imgSlide13.setAttribute("style","opacity:"+opacity+";padding:10px;border-radius: 12px;");
        }
      	if(widthSet>800)
        {
            startFade=setInterval(start,10);
        }
        else
        {
            startFade=setInterval(start2,50);
        }
    }
    function imgGrow4()
    {
        let startFade;
        let opacity=0;
        let width=0;
        let height=0;
        let swi=[false,false,false]
        function start()
        {
            opacity=opacity+0.02;
            width=width+1;
            height=height+1;
            if(opacity>=1)
            {
                opacity=1;
                swi[0]=true;
            }
            if(width>=20)
            {
                width=20;
                swi[1]=true;
            }
            if(height>=100)
            {
                height=100;
                swi[2]=true;
            }
            imgSlide12.setAttribute("style","opacity:"+opacity+";height:"+height+"%;padding:10px;border-radius: 12px;");
            if(swi[0]==true && swi[1]==true && swi[2]==true)
            {
                clearInterval(startFade);
            }
        }
        function start2()
    	{
        	opacity=opacity+0.02;
        	width=width+1;
        	if(opacity>=1)
        	{
            	opacity=1;
            	swi[0]=true;
        	}
        	if(width>=400)
        	{
            	width=400;
          		clearInterval(startFade);
        	}
        
        	imgSlide12.setAttribute("style","opacity:"+opacity+";padding:10px;border-radius: 12px;");
        }
      	if(widthSet>800)
        {
            startFade=setInterval(start,10);
        }
        else
        {
            startFade=setInterval(start2,50);
        }
    }
}