 //maindiv1 homeImg main
//-------------------------------------------------------------------------------------------------------------------------------------
let main=document.getElementById("main");
let mainA=document.getElementById("mainA");
let inner=document.getElementById("inner");
let logo=document.getElementById("logo");
let h1=document.getElementById("h1");

let secondary=document.getElementById("secondary");
let h2=document.getElementById("h2");
let label1=document.getElementById("label1");
let label2=document.getElementById("label2");
let label3=document.getElementById("label3");
let label4=document.getElementById("label4");
let label5=document.getElementById("label5");
let img1=document.getElementById("img1");
let imageId=document.getElementById("imageId");
let size=document.getElementById("size");

let quoteData=document.getElementById("quoteData");

let scrollImgY=document.getElementById("scrollYBig");
let width=window.innerWidth;
let height=window.innerHeight;
let offMain=mainA.offsetHeight;
let centerH=height/2;
offMain=offMain/2;
let position=centerH-offMain;
let mainX;
let mainFade=0;

let mainG;
let mainO=0;
let mainP=0;

let mainW=main.offsetWidth;
mainW=mainW;
let w=mainW-15;
let mainH=main.offsetHeight;
let h=mainH-15;

let imgH=img1.offsetHeight;
let logoH=inner.offsetHeight;
let posL=logoH-imgH;
posL=posL/2;
/*
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -o-filter: blur(5px);
    -ms-filter: blur(5px);
    filter: blur(5px);
*/

//img1.setAttribute("style","margin-top:"+posL+"px;");

inner.setAttribute("style","width:100%;font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;");



let info=document.getElementById("imageId");
let topI=info.offsetTop;
let infoH=info.offsetHeight;

let pos=infoH/2-topI;
let fadeIn1=false;
console.log(pos);
let te=imageId.offsetWidth;
let scrollPos=window.innerWidth;
let tempX=imageId.offsetWidth/2;
scrollPos=tempX+scrollPos;
console.log("Dimensions");
console.log("Image div "+imageId.offsetWidth);
console.log("Window width "+window.innerWidth);
let divW=size.offsetWidth;
divW=divW*7;
divW=divW+window.innerWidth;
console.log("Halve div size "+divW);

let infoId=document.getElementById("infoId");
let infoSize=infoId.offsetHeight;
let infoSize2=infoId.offsetWidth;
infoId.setAttribute("style","overflow-y: hidden;height:750px;border-radius:12px;padding:15px;");
let windW=window.innerWidth;
let windH=window.innerHeight;
let homeImg=document.getElementById("homeImg");




//let MainMain=document.getElementById("MainMain");
let widthWindow=window.innerWidth;
//MainMain.setAttribute("style","width:"+widthWindow+"px;margin-top:-90px;");

let q;
let qr=0;
let qg=0;
let qb=0;
let qa=0;
let qswi=false;
let qr1=255;
let qg1=255;
let qb1=255;
let qa1=255;
let qswi1=true;
let rotate=45;
function quote()
{
    if(qr<=255 && qswi==true)
    {
        qr=qr+2;
        qg=qg+2;
        qb=qb+2;
        if(qr>=255)
        {
            qswi=false;
        }
    }
    if(qr>=0 && qswi==false)
    {
        qr=qr-2;
        qg=qg-2;
        qb=qb-2;
        if(qr<=0)
        {
            qswi=true;
        }
    }
    if(qr1<=255 && qswi1==true)
    {
        qr1=qr1+2;
        qg1=qg1+2;
        qb1=qb1+2;
        if(qr1>=255)
        {
            qswi1=false;
        }
    }
    if(qr1>=0 && qswi1==false)
    {
        qr1=qr1-2;
        qg1=qg1-2;
        qb1=qb1-2;
        if(qr1<=0)
        {
            qswi1=true;
        }
    }
    rotate=rotate+1;
    if(rotate>=360)
    {
        rotate=0;
    }

    quoteData.setAttribute("style","background: -webkit-linear-gradient("+rotate+"deg, rgb("+qr1+","+qg1+","+qb1+")30%,black,rgb("+qr+","+qg+","+qb+"));-webkit-background-clip: text;-webkit-text-fill-color: transparent")
}
//q=setInterval(quote,10);
function scrollImg()
{
    let x=0;
    let scrollImage;
    function move()
    {
        x=x+5;
        if(x>=divW)
        {
            x=0;
        }
        imageId.scrollLeft=x;
    }
    scrollImage=setInterval(move,10);
}
let imgOH=imageId.offsetHeight;
let imgTH=imageId.offsetTop;
let imgO=false;
let fadeImg=imgOH/2+imgTH;


let y1=false;
let endY=scrollImgY.offsetHeight;
let yScroll;
let endX=scrollImgY.offsetWidth;
let theDiv=document.getElementById("scrollYBig");
let theDivW=theDiv.offsetWidth;
//let imgScrollSize=document.getElementById("imgScrollSize");
//let wid=imgScrollSize.offsetWidth;

//wid=wid*10;
//theDivW=theDivW+wid;
let glowDivMain=document.getElementsByClassName("glowDivMain");
if(windW<800)
{
 	let hh=window.innerHeight/1.8;
  	homeImg.setAttribute("style","font-size:0px;top:0;width:100%;height:"+hh+"px;");
  	mainA.setAttribute("style","margin-top:10px;position:relative;");
  	scrollImgY.setAttribute("style","overflow-x:hidden;height:90%;display:flex;width:100%;align-items: center;margin-top:-25px;position:relative;z-index:1;border-radius: 15px;");
	for(let i=0;i<glowDivMain.length;i++)
    {
      	//glowDivMain[i].setAttribute("style","border:1px solid white;font-size:8px;border-bottom:1px solid white;");
    }
  	let lb1=document.getElementById("lb1");
  	lb1.setAttribute("style","opacity:1;font-size:12px;margin:auto;display:flex;justify-content:center;width:100%;padding:5px;");
  	let l1=document.getElementById("label1");
  	let l2=document.getElementById("label2");
  	let l3=document.getElementById("label3");
  	let l4=document.getElementById("label4");
  	let l5=document.getElementById("label5");
  
  	//l1.setAttribute("style","width:70px;height:30px;font-size:5px;display:flex;flex-direction:column;justify-content:center;");
  	//l2.setAttribute("style","width:70px;height:30px;font-size:5px;display:flex;flex-direction:column;justify-content:center;");
  	//l3.setAttribute("style","width:70px;height:30px;font-size:5px;display:flex;flex-direction:column;justify-content:center;");
  	//l4.setAttribute("style","width:70px;height:30px;font-size:5px;display:flex;flex-direction:column;justify-content:center;");
  	//l5.setAttribute("style","width:70px;height:30px;font-size:5px;display:flex;flex-direction:column;justify-content:center;");
  	let menuNav=document.getElementById("menuNav");
  	menuNav.setAttribute("class","navBarSmall");

}
else
{
	homeImg.setAttribute("style","font-size:0px;top:0;width:100%;height:"+windH+"px;");
  	mainA.setAttribute("style","margin-top:20px;position:relative;");
  	scrollImgY.setAttribute("style","overflow-y:hidden;height:90%;margin-left:20px;display:flex; flex-direction:column;width:100%;overflow-x: hidden;align-items: center;margin-top:-25px;position:relative;z-index:1;border-radius: 15px;");
}
console.log(endY+" complete height of div");
let endYPos=scrollImgY.offsetHeight;
let yPos=endY/2;
let y=0;
let infoY=0;
let endXpos=scrollImgY.offsetWidth;
let x=0;
let infoX=0;
let xPos=endX/2;
//endX endXPos
window.alert("Still under-developement");
//infoSize infoId
infoSize=infoSize/2;
infoSize2=infoSize2/2;
let small=document.getElementById("theDiv");
window.addEventListener("scroll",()=>
{
    let windowPos=window.scrollY;
    if(windowPos>=infoId.offsetTop-200 && onceIn==false && window.innerWidth>800)
    {
        yScroll=setInterval(scrollBig,20);
        onceIn=true;
    }
  	else if(windowPos>=small.offsetTop-window.innerHeight+500 && onceIn==false)
    {
    	yScroll=setInterval(scrollBig,20);
        onceIn=true;
    }
});
let imgSize1=document.getElementsByClassName("imgSize1");
let windH1=window.innerWidth;
let phone1=document.getElementById("phone");
function scrollBig()
{
    if(windH1<800)
    {
      	x=x+2;
        infoY=infoY+0.5;
        if(x>=theDivW)
        {
            x=0;
        }
        if(infoY>=infoSize)
        {
            infoX=0;
        }
        scrollImgY.scrollLeft=x;
        infoId.scrollTop=infoY;
      	
    }
  	else
    {
  		phone1.setAttribute("style","display:none");
      	y=y-2;
        infoY=infoY+0.5;
        if(y<=0)
        {
            y=yPos;
        }
        if(infoY>=infoSize)
        {
            infoY=0;
        }
        scrollImgY.scrollTop=y;
        infoId.scrollTop=infoY;
    }
}
let onceIn=false;

console.log(fadeImg+" Img postion");


function loadOrder()
{
    center();
    intervals();
    
}

function intervals()
{
    console.log("Testing Intervals");
    mainX=setInterval(faderMain,10);
   
}

function center()
{
    
}
let h1F=0;
let h1FaderInt;
let h2F=0;
let h2FaderInt;
let l1F=0;
let l2F=0;
let l3F=0;
let l4F=0;
let l5F=0;

let l1FaderInt;
let l2FaderInt;
let l3FaderInt;
let l4FaderInt;
let l5FaderInt;

let l1Swi=false;
let l2Swi=false;
let l3Swi=false;
let l4Swi=false;
let l5Swi=false;
function faderMain()
{
    

    mainFade=mainFade+0.005;
    let opacity=mainFade.toString();
    console.log("tetsing fader");
    if(mainFade>=1)
    {
        clearInterval(mainX);
        //h1.setAttribute("class","w3-center w3-animate-left");
        function h1Fader()
        {
            h1F=h1F+0.01;
            if(h1F>=1)
            {
                clearInterval(h1FaderInt);
            }
            h1.setAttribute("style","opacity:"+h1F+";font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;");
        }
        h1FaderInt=setInterval(h1Fader,10);
        let logoBorder=0;
        let xBorder;
        main.setAttribute("class","welcome-div");
        logo.setAttribute("class","img-div");
        function loadH2()
        {
            
            //h2.setAttribute("class","w3-center w3-animate-left");
            function h2Fader()
            {
                h2F=h2F+0.01;
                if(h2F>=1)
                {
                    clearInterval(h2FaderInt);
                }
                secondary.setAttribute("style","opacity:"+h2F+";");
            }
            h2FaderInt=setInterval(h2Fader,15);
            h2.setAttribute("style","font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;");

            function loadlabel1()
            {
                function l1Fader()
                {
                    l1F=l1F+0.01;
                    if(l1F>=1)
                    {
                        clearInterval(l1FaderInt);
                    }
                    label1.setAttribute("style","opacity:"+l1F+";");
                } 
                l1FaderInt=setInterval(l1Fader,25);
               // label1.setAttribute("class","w3-center w3-animate-left");
                setTimeout(loadlabel2,500);
            }
            function loadlabel2()
            {
                function l2Fader()
                {
                    l2F=l2F+0.01;
                    if(l2F>=1)
                    {
                        clearInterval(l2FaderInt);
                    }
                    label2.setAttribute("style","opacity:"+l2F+";");
                } 
                l2FaderInt=setInterval(l2Fader,25);
               // label1.setAttribute("class","w3-center w3-animate-left");
                setTimeout(loadlabel3,500);
            }
            function loadlabel3()
            {
                function l3Fader()
                {
                    l3F=l3F+0.01;
                    if(l3F>=1)
                    {
                        clearInterval(l3FaderInt);
                    }
                    label3.setAttribute("style","opacity:"+l3F+";");
                } 
                l3FaderInt=setInterval(l3Fader,25);
               // label1.setAttribute("class","w3-center w3-animate-left");
                setTimeout(loadlabel4,500);
            }
            function loadlabel4()
            {
                function l4Fader()
                {
                    l4F=l4F+0.01;
                    if(l4F>=1)
                    {
                        clearInterval(l4FaderInt);
                    }
                    label4.setAttribute("style","opacity:"+l4F+";");
                } 
                l4FaderInt=setInterval(l4Fader,25);
               // label1.setAttribute("class","w3-center w3-animate-left");
                setTimeout(loadlabel5,500);
            }
            function loadlabel5()
            {
                function l5Fader()
                {
                    l5F=l5F+0.01;
                    if(l5F>=1)
                    {
                        clearInterval(l5FaderInt);
                    }
                    label5.setAttribute("style","opacity:"+l5F+";");
                } 
                l5FaderInt=setInterval(l5Fader,25);
               // label1.setAttribute("class","w3-center w3-animate-left");
            }
            setTimeout(loadlabel1,1000);
        }
        setTimeout(loadH2,1500);
    }
    main.setAttribute("style","opacity:"+opacity+";font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;");
  	if(windW<800)
	{
 		let hh=windH/2.5;
  		//homeImg.setAttribute("style","font-size:0px;top:0;width:100%;height:"+hh+"px;");
  		mainA.setAttribute("style","margin-top:10px;position:relative;");
      	mainA.setAttribute("style","position:absolute; top: 50%;left: 50%; transform: translate(-50%, -50%);top:200px;");
	}
	else
	{
		homeImg.setAttribute("style","font-size:0px;top:0;width:100%;height:"+windH+"px;");
  		mainA.setAttribute("style","margin-top:20px;position:relative;");
      	mainA.setAttribute("style","position:absolute; top: 50%;left: 50%; transform: translate(-50%, -50%);top:300px;");
	}
    
}
let r1=0;
let g1=0;
let b1=0;
let alph1=0;

let r2=0;
let g2=0;
let b2=255;
let alph2=0;
let once=false;
let b2s=false;
let b2S=true;
function mainGlow()
{
    // background-image: linear-gradient(45deg, rgba(0, 0, 255, 0), rgba(255, 0, 0, 0));
    let aG;
    function glow()
    {
        alph1=alph1+0.05;
        alph2=alph2+0.05;
        if(alph1>=1)
        {
            clearInterval(aG);
        }
        main.setAttribute("style","background-image: linear-gradient(60deg, rgba(255, 255, 255, 0), rgba(0, 0, 0, "+alph2+"));font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;")
    }
    if(once==false)
    {
        aG=setInterval(glow,50);
        once=true;
    }
    if(b2>=0 && b2s==false)
    {
        b2=b2-5;
        console.log("in the b2");
        if(b2<=0)
        {
            b2s=true;
        }
    }
    if(b2s==true)
    {
        b2=b2+5;
        if(b2>=255)
        {
            b2s=false;
        }
    }
    if(b1>=0 && b2S==false)
    {
        b1=b1-5;
        console.log("in the b2");
        if(b1<=0)
        {
            b2S=true;
        }
    }
    if(b2S==true)
    {
        b1=b1+5;
        if(b1>=255)
        {
            b2S=false;
        }
    }
    main.setAttribute("style","background-image: linear-gradient(60deg, rgba("+b2+", "+b2+","+b2+", "+alph1+"), rgba("+b1+", "+b1+", "+b1+", "+alph2+"));font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;")
    console.log(b2);
}

loadOrder();