const express =require('express');
const app=express();
const api=require('./routes/index');

app.use('/api', api);

app.listen(3001,()=>{
    console.log(`express is running on 3001`);
})