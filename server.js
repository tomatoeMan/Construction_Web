const express =require("express");
const app =express();
const port=4010;

const path=require("path");
//const bodyParser=require("body-parser");

const cors=require("cors");

const nodemailer=require("nodemailer");
const bodyParser = require('body-parser')
app.use(express.static(path.join(__dirname,"css")));
app.use(express.static(path.join(__dirname,"img")));
app.use(express.static(path.join(__dirname)));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));



app.post("/Quote",(req,res)=>
{
    let quote=req.body.Quote;
    let quoteArr=new Array()
    
    res.json("True");
});

const transporter=nodemailer.createTransport(
{
    host:"your-website-preview.co.za",
    port:587,
    secure:false,
    auth:
    {
        user:"admin@your-website-preview.co.za",
        pass:""
    }
});

app.post("/Patric_Hove's_Construction_Quote/OTP",async(req,res)=>
{
    let email="";
    let option="";
    let load=false;
    console.log("Testing");
    try
    {
        email=req.body.Email;
        option=req.body.Option;
        load=true;
    }
    catch(err)
    {

    }
    let num=new Array();
    let otp="";
    let once=false;
    for(let i=0;i<6;i++)
    {
        num[i]=Math.floor(Math.random()*10);
        if(i==0)
        {
            otp=num[i].toString();
        }
        else
        {
            otp=otp+num[i].toString();
        }
    }
    if(load==true)
    {
        try
        {
            const info=await transporter.sendMail(
            {
                from:"'Admin' <admin@your-website-preview.co.za>",
                to:email,
                subject:"Your OTP for Patrick Hoves Construction",
                html:"<label>"+otp+"</label><br><br><a href='https://affiliates.olitt.com/idevaffiliate.php?id=272'>Build your own website here</a>"
            });
            let dataOut=[otp,true]
            res.json(dataOut);
            console.log("No Error");
        }
        catch(err)
        {
            let dataOut=[otp,false];
            res.json(false);
            console.log(err);
        }
    }
    else
    {
        res.json(load);
    }
    
});
app.get("/Patric_Hove's_Construction_Home",(req,res)=>
{
    res.sendFile(path.resolve(__dirname,"homePage.html"));
    console.log("Home page Sent");
});



app.get("/Patric_Hove's_Construction_Quote",(req,res)=>
{
    res.sendFile(path.resolve(__dirname,"Quote.html"));
    console.log("Quote page sent");
});

app.get("/Patric_Hove's_Construction_Gallery",(req,res)=>
{
    res.sendFile(path.resolve(__dirname,"Gallery.html"));
    console.log("Gallery page sent");
});

app.get("/Patric_Hove's_Construction_Contact",(req,res)=>
{
    res.sendFile(path.resolve(__dirname,"Contact.html"));
    console.log("Contact page sent");
});

app.get("/Patric_Hove's_Construction_About",(req,res)=>
{
    res.sendFile(path.resolve(__dirname,"About.html"));
    console.log("About page sent");
});
    

app.listen(port,()=>
{
    console.log("Port:"+port+" is open")
});

