let idMenu=document.getElementById("menuNav");
              let width1=window.innerWidth;
              let phone=document.getElementById("phone");
              let menuNav=document.getElementById("menuNav");
              let mainDiv=document.getElementById("mainDiv1");
           	  let swiMenu=false;
           	  let opacitySw=false;
           	  //let quoteData1=document.getElementById("quoteData");
              function setMenu()
              {
                	if(swiMenu==false)
                    {
                    	idMenu.setAttribute("class","navBarSmall");
                      	idMenu.setAttribute("style","display:flex;flex-direction:column;margin-top:10px;");
                        phone.innerHTML="Close Menu";
                      	swiMenu=true;
                      	
                    }
                	else
                    {
                    	//idMenu.setAttribute("style","color:red;");
                      
                      	let setX;
                      	let setO=1;
                      	function fadeOut()
                      	{
                         	
                          	setO=setO-0.01;
                          	if(setO<=0)
                            {
                            	clearInterval(setX);
                              	opacitySw=false;
                              	
                    			idMenu.setAttribute("style","display:none;");
                    			idMenu.setAttribute("class","");
                              	phone.innerHTML="Open Menu";
                            }
                        	idMenu.setAttribute("style","opacity:"+setO+";display:flex;flex-direction:column;margin-top:10px;");
                            
                        }
                        if(opacitySw==false)
                        {
                          	setX=setInterval(fadeOut,10);
                          	opacitySw=true;
                        }
                		phone.setAttribute("style","display:block; margin-top:10px;");
                		
                      	swiMenu=false;
                      	
                    }
              }
              
              mainDiv.addEventListener("click",()=>
              {
              		idMenu.setAttribute("style","display:none;");
                	phone.setAttribute("style","display:block; margin-top:10px;");
                	phone.innerHTML="Open Menu";
              });
              if(width1<800)
              {
                	phone.setAttribute("style","display:block");
                	menuNav.setAttribute("class","navBarSmall");
                	menuNav.setAttribute("style","display:none;");
                	//quoteData1.setAttribute("style","opacity:1;font-size:15px;margin:auto;display:flex;justify-content:center;width:100%;padding:5px;");
              }
              else
              {
                	phone.setAttribute("style","display:none");
                	
              }