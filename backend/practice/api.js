const express= require("express");
const axios = require("axios");


const app=express();
app.use(express.urlencoded({extended:true}));


app.post("/",(req,res)=>{


const tempURL=
      "https://v6.exchangerate-api.com/v6/acaf2890609a3f807c44b0a9/pair";
    const amount = Number(req.body.input1);
    const currCode1=req.body.convert_from;
    const currCode2=req.body.convert_to;
    const finalURL=`${tempURL}/${currCode1}/${currCode2}`;
    console.log(finalURL);

axios({
    
    
    method:"get",
    url:finalURL,

}).then(
    (response)=>{
 const result=response.data.conversion_rate *amount;
 res.send(
    amount+" in "+currCode1+" to " +currCode2+" = "+result
 );
 },
    (error)=>{
        console.log(error);
    }
);
});
app.get("/", (req,res)=>{
    res.sendFile(`${__dirname}/api.html`);
});
app.listen(5000,()=>{
    console.log("server running at 5000");
});