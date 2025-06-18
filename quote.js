let repairs=document.getElementById("repairs");
let construction=document.getElementById("const");
let temp=document.getElementById("temp");
let main=document.getElementById("main");
let button=document.getElementsByTagName("button");
let h2=document.getElementById("h2");
let fadeTimer=false;
let opacity=1;
let quote=new Array();
let minusTemp;
let textSwi=false
construction.addEventListener("click",()=>
{
    quote[0]="Construction";
    textSwi=true;
    loadTextArea();
});

repairs.addEventListener("click",()=>
{
    OutFade();
    quote[0]="Repairs";
    h2.innerHTML="Please select the repair work to be done"
    let building=document.createElement("button");
    building.innerHTML="Building Repairs";
    building.id="build";
    let plumbing=document.createElement("button");
    plumbing.innerHTML="Plumbing Repairs";
    plumbing.id="plumb";
    let roof=document.createElement("button");
    roof.innerHTML="Roof Repairs";
    roof.id="roof";
    let arr=new Array();
    let div1=document.createElement("div");
    let div2=document.createElement("div");
    let div3=document.createElement("div");
    div1.setAttribute("class","space");
    div2.setAttribute("class","space");
    div3.setAttribute("class","space");
    div1.appendChild(building);
    div2.appendChild(roof);
    div3.appendChild(plumbing);
    arr[0]=div1;
    arr[1]=div2;
    arr[2]=div3;
    InFade(arr);
    let data=[building,plumbing,roof];
    createVar(data);
});
function createVar(data)
{
    data[0].addEventListener("click",()=>
    {
        h2.innerHTML="Please Upload a picture of the damaged area";
        quote[1]="Building";
        OutFade();
        let label=document.createElement("label");
        label.innerHTML="Click on Browse Below to upload a picture";
        let upload=document.createElement("input");
        upload.type="file"
        upload.id="upload";
        upload.innerHTML="Select Image";
        let div=document.createElement("div");
        div.setAttribute("style","display:flex;flex-direction:column;justify-content: center;");
        div.appendChild(label);
        div.appendChild(upload);
        let arr=new Array();
        arr[0]=div;
        InFade(arr);
        let imgURL;
        upload.addEventListener("change",async()=>
        {
            let output=document.getElementById("upload");
            try
            {
                let fr=new FileReader;
                let {resolve,reject,promise}=Promise.withResolvers();
                try
                {
                    fr.onload=(e)=>resolve(e.target.result);
                    fr.readAsDataURL(output.files[0]);
                    imgURL=await promise;
                    quote[2]=imgURL;
                    loadTextArea();
                }
                catch(err)
                {
                    console.log(err);
                }
            }
            catch(err)
            {
                console.log(err);
            }
        });
    });
    data[1].addEventListener("click",()=>
    {
        h2.innerHTML="Please Upload a picture of the damaged area";
        quote[1]="Plumbing";
        OutFade();
        let label=document.createElement("label");
        label.innerHTML="Click on Browse Below to upload a picture";
        let upload=document.createElement("input");
        upload.type="file"
        upload.id="upload";
        upload.innerHTML="Select Image";
        let div=document.createElement("div");
        div.setAttribute("style","display:flex;flex-direction:column;justify-content: center;");
        div.appendChild(label);
        div.appendChild(upload);
        let arr=new Array();
        arr[0]=div;
        InFade(arr);
        let imgURL;
        upload.addEventListener("change",async()=>
        {
            let output=document.getElementById("upload");
            try
            {
                let fr=new FileReader;
                let {resolve,reject,promise}=Promise.withResolvers();
                try
                {
                    fr.onload=(e)=>resolve(e.target.result);
                    fr.readAsDataURL(output.files[0]);
                    imgURL=await promise;
                    quote[2]=imgURL;
                    loadTextArea();
                }
                catch(err)
                {
                    console.log(err);
                }
            }
            catch(err)
            {
                console.log(err);
            }
        });
    });
    data[2].addEventListener("click",()=>
    {
        h2.innerHTML="Please Upload a picture of the damaged area";
        quote[1]="Roof";
        OutFade();
        let label=document.createElement("label");
        label.innerHTML="Click on Browse Below to upload a picture";
        let upload=document.createElement("input");
        upload.type="file"
        upload.id="upload";
        upload.innerHTML="Select Image";
        let div=document.createElement("div");
        div.setAttribute("style","display:flex;flex-direction:column;justify-content: center;");
        div.appendChild(label);
        div.appendChild(upload);
        let arr=new Array();
        arr[0]=div;
        InFade(arr);
        let imgURL;
        upload.addEventListener("change",async()=>
        {
            let output=document.getElementById("upload");
            try
            {
                let fr=new FileReader;
                let {resolve,reject,promise}=Promise.withResolvers();
                try
                {
                    fr.onload=(e)=>resolve(e.target.result);
                    fr.readAsDataURL(output.files[0]);
                    imgURL=await promise;
                    quote[2]=imgURL;
                    loadTextArea();
                }
                catch(err)
                {
                    console.log(err);
                }
            }
            catch(err)
            {
                console.log(err);
            }
        });
    });
}
function loadTextArea()
{
    OutFade();
    
    let textArea=document.createElement("textarea");
    textArea.id="text";
    if(textSwi==false)
    {
        h2.innerHTML="Briefly explain what you want fixed";
        textArea.value="Please write down what the problem here";
    }
    else
    {
        h2.innerHTML="Please briefly explain what work you need done";
        textArea.value="Please write here";
    }
    
    textArea.setAttribute("style","width:100%;height:200px;font-size:25px;margin:auto;margin-top:20px;");
    let arr=new Array();
    let once=false;
    let button=document.createElement("button");
    button.innerHTML="Submit";
    button.setAttribute("style","margin:auto;margin-top:20px;");
    if(textSwi==false)
    {
        let img=document.createElement("img");
        img.src=quote[2];
        img.setAttribute("style","width:200px;height:200px;margin:auto;border-radius:1000px;");
        let div=document.createElement("div");
        div.setAttribute("style","display:flex;flex-direction:column;justify-content: center;width:100%;margin:auto;")
        div.appendChild(img);
        div.appendChild(textArea);
        div.appendChild(button);
        arr[0]=div;
        InFade(arr);
    }
    else
    {
        h2.innerHTML="Please explain how you would like us to help you";
        let div=document.createElement("div");
        div.setAttribute("style","display:flex;flex-direction:column;justify-content: center;width:100%;margin:auto;")
        div.appendChild(textArea);
        div.appendChild(button);
        arr[0]=div;
        InFade(arr);
    }
    button.setAttribute("onclick","buttonFunc()");
    textArea.addEventListener("click",()=>
    {
        if(once==false)
        {
            once=true;
            textArea.value="";
        }
    });
    
}
function buttonFunc()//textSwi
{
    let text=document.getElementById("text");
    let input=text.value;
    if(input!="")
    {
        OutFade();
        h2.innerHTML="Please fill in your contact details.<br><br>Make sure you provide the right email address for the otp we will send to you via email"
        let contact=document.getElementById("contact");
        contact.setAttribute("style","display:flex;border:1px solid black;padding:10px;margin-top:10px;width:100%;");
        let first=document.getElementById("first");
        let button=document.createElement("button");
        button.innerHTML="Submit";
        button.id="submit";
        button.setAttribute("onclick","addButtonFunc()");
        button.setAttribute("style","margin-top:10px;");
        first.appendChild(button);
        if(textSwi==false)
        {
            quote[3]=text;
        }
        else
        {
            quote[1]=text;
        }
    }
    else
    {
        h2.innerHTML="Please complete the form by filling out the work you would like done";
        console.log("Tesing");
        text=document.getElementById("text");
        input=text.innerHTML
    }
}
let iInput=1;
let num=10;
let fadeOne=false;
let pin=0;
let options=[false,false];
async function addButtonFunc()//textSwi
{
    let name=document.getElementById("name");
    let lname=document.getElementById("lname");
    let phone=document.getElementById("ph");
    let email=document.getElementById("em");
    
    if(name.value!="" && lname.value!="" && phone.value!="" && email.value!="")
    {
        let contact=document.getElementById("contact");
        contact.setAttribute("style","display:none");
        if(textSwi==false)
        {
            quote[4]=[name.value,lname.value,phone.value,email.value];
            h2.innerHTML="Enter the one time pin sent to "+quote[4][3]+" to continue";
            options[0]=true;
            options[1]=false;
        }
        else
        {
            quote[2]=[name.value,lname.value,phone.value,email.value];
            h2.innerHTML="Enter the one time pin sent to "+quote[2][3]+" to continue";
            options[1]=true;
            options[0]=false;
        }
        if(fadeOne==false)
        {
            let DataIn=await otpSend();
            if(DataIn[1]==true)
            {
                OutFade();
                let input=document.createElement("input");
                input.id="otp";
                input.setAttribute("style","height:30px;text-align:center;font-size:18px;")

                let resend=document.createElement("button");
                if(textSwi==false)
                {
                    resend.innerHTML="Resend OTP to "+quote[4][3];
                }
                else
                {
                    resend.innerHTML="Resend OTP to "+quote[2][3];
                }
                resend.id="resend"
                resend.setAttribute("style","width:400px;margin-top:10px;");

                let change=document.createElement("button");
                change.innerHTML="Change Email";
                change.id="change";
                change.setAttribute("style","width:400px;margin-top:10px;");

                let div=document.createElement("div");
                div.setAttribute("style","display:flex;flex-direction:column;justify-content:center;");
                div.appendChild(input);
                div.appendChild(resend);
                div.appendChild(change);
                let arr=new Array();
                arr[0]=div;
                InFade(arr);
                fadeOne=true;
                change.addEventListener("click",()=>
                {
                    let newEmail=document.createElement("input");
                    let tempDiv=document.getElementById("temp");
                    tempDiv
                });
                resend.addEventListener("click",()=>
                {

                });
            }
            else
            {
                window.alert("Please provide the correct email address");
            }
        }
        else
        {
            /*
                post method here
            */
            let tempOtp=1234;
            let input=document.getElementById("otp");
            let dataIn=input.value;
            dataIn=dataIn.toString();
            if(dataIn!=pin)
            {
                num--;
                h2.innerHTML="The pin you have entered is incorrect<br>(Attempt no:"+iInput.toString()+")<br>You have "+num+" Attempts left";
                iInput++; 
                if(num==0)
                {
                    let first=document.getElementById("first");
                    first.remove(); 
                    let mainM=document.getElementById("mainM");
                    let label=document.createElement("label");
                    label.setAttribute("style","font-size:40px;color:white;border:1px solid white;padding:10px;")
                    label.innerHTML="You have enter the incorrect pin<br>to many times<br>please refresh the page<br>to continue";
                    mainM.appendChild(label);
                }
            }
            else 
            {
                let radio=document.getElementsByName("option");
                let swi=false;
                for(let i=0;i<radio.length;i++)
                {
                    console.log(radio[i].value);
                    if(radio[i].checked==true)
                    {
                        if(textSwi==false)
                        {
                            quote[5]=radio[i].value;
                        }
                        else
                        {
                            quote[3]=radio[i].value;
                        }
                        swi=true;
                    }
                }
                if(swi!=true)
                {
                    h2.innerHTML="Please let us know how you would like us to contact you<br>by selecting one of the options above.";
                }
                else
                {
                    OutFade();
                    h2.innerHTML="Your request is being sent to the server<br>We will contact you shortly";
                    const url="http://localhost:4010/Quote";
                    const res=await fetch(url,
                    {
                        method:"POST",
                        headers:
                        {
                            "Content-Type":"application/json"
                        },
                        body:JSON.stringify(
                        {
                            Quote:quote,
                        })
                    });
                    const dataIN=await res.json();
                    let submit=document.getElementById("submit");
                    submit.remove();
                }
            }
        }
    }
    else
    {
        h2.innerHTML="Please complete the contact form"
        window.alert("Please complete the contact form");
    }
    
}
function OutFade()
{
    let divTimer;
    let fDiv=document.getElementById("first");
    let fDivH=fDiv.offsetHeight;
    function fadeOut()
    {
        opacity=opacity-0.1;
        if(opacity<=0)
        {
            clearInterval(divTimer);
            minusTemp=temp.offsetHeight;
            temp.remove();
            let temp1=document.createElement("div");
            temp1.id="temp";
            //fDiv.setAttribute("style","height:"+fDivH+"px;padding-bottom:20px;background-color:white;width:80%;text-align:center ;margin:auto;display:flex;flex-direction: column;justify-content: center;align-items: center");
            temp=temp1;
            main.appendChild(temp1);
            fadeTimer=true;
        }
        temp.setAttribute("style","opacity:"+opacity+";");
    }
    divTimer=setInterval(fadeOut,10);
}
function InFade(data)
{
    
    let divTimer1;
    let start;
    let arr=new Array();
    let fDiv=document.getElementById("first");
    let fDivH=fDiv.offsetHeight-minusTemp;
    let addH;
    
    function begin()
    {   
        function fadeIn()
        {
            let nextTemp=document.getElementById("temp");
            opacity=opacity+0.1;
            if(opacity>=1)
            {
                clearInterval(divTimer1);
                fadeTimer=false;
            }
            nextTemp.setAttribute("style","opacity:"+opacity+";");
        }
        if(fadeTimer==true)
        {
            clearInterval(start);
            for(let i=0;i<data.length;i++)
            {
                temp.appendChild(data[i]);   
            }
            addH=temp.offsetHeight;
            fDivH=fDivH+addH;
            //fDiv.setAttribute("style","height:"+fDivH+"px;padding-bottom:20px;background-color:white;width:80%;text-align:center ;margin:auto;display:flex;flex-direction: column;justify-content: center;align-items: center");
            divTimer1=setInterval(fadeIn,10);
        }
    }
    start=setInterval(begin,100);
}
async function otpSend()
{
    let email="";//43 23
    if(options[0]==true)//repair
    {
        email=quote[4][3];
    }
    if(options[1]==true)//build
    {
        email=quote[2][3];
    }
    const url="http://localhost:4010/Patric_Hove's_Construction_Quote/OTP";
    const res=await fetch(url,
    {
        method:"POST",
        headers:
        {
            "Content-Type":"application/json"
        },
        body:JSON.stringify(
        {
            Email:email,
            Option:options
        })
    });
    const dataIN=await res.json();
    pin=dataIN[0];
    window.alert(pin);
    return dataIN;
}