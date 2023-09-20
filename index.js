const express=require('express');
const app=express();
const PORT=9000;

const customer=[
  {
    "name":"arun",
    "id":2,
    
  
}]
app.get('/',(req,res)=>{
  res.send("hello");
})

app.listen(PORT,()=>console.log(`server started localhost:${PORT}`))
