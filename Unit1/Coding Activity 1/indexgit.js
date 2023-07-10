const express=require('express');
const app = express();
const port=3004;
app.get('/',(req,res)=>{
    res.send('hi hello....smile:)')
})
app.listen(port,()=>{
    console.log(`example app listening on port ${port}`)
})