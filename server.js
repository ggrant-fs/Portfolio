const express = require('express');
const path = require('path');

const app = express();

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('portfolio/build'));

    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'portfolio','build','index.html'));
    })
}

const port = process.env.PORT || 8080;

app.get('/',(req,res)=>{
    return res.send('Hello, Express.js');
})

app.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
})