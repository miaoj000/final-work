const express = require('express')
const ejs = require('ejs')
const path = require('path')
const fs = require('fs')
const mongoose = require('mongoose')
const app = express()
const port = 10520
mongoose.connect('mongodb://localhost/test');
const household = mongoose.model('household',{'name':String,'phoneNumber':String,'username':String,'password':String,'location':Number,'houseNumber':Number,'administrator':Boolean})

app.use('/',express.static('WebContent'))
app.use('/static',express.static('static'))
app.use('/photo',express.static('photo'))

app.get('/login',(req,res)=>{
    res.sendFile('login.html',{root:path.join(__dirname,'WebContent')},(err)=>{
        console.log(err)
    })
})

app.post('/login',(req,res)=>{
    res.status(200)
    res.set('Content-Type', 'text/html')
    fs.readFile('./WebContent/loginsuc.html','utf-8',(err,data)=>{
        if(err){
            res.send("<p>login error!</p>")
            console.log(data)
        }else{
            res.send(data)
            console.log(data)
        }
        res.end()
    })
})

app.get('/add',(req,res)=>{
    res.sendFile('addHouse.html',{root:path.join(__dirname,'WebContent')},(err)=>{
        console.log(err)
    })
})

app.get('/static/nav.css',(req,res)=>{
    res.sendFile('nav.css',{root:path.join(__dirname,'static')},(err)=>{
        console.log(err)
    })
})

app.get('/static/text.css',(req,res)=>{
    res.sendFile('text.css',{root:path.join(__dirname,'static')},(err)=>{
        console.log(err)
    })
})

app.get('/photo/building.jfif',(req,res)=>{
    res.sendFile('building.jfif',{root:path.join(__dirname,'photo')},(err)=>{
        console.log(err)
    })
})

app.get('/photo/back.jfif',(req,res)=>{
    res.sendFile('back.jfif',{root:path.join(__dirname,'photo')},(err)=>{
        console.log(err)
    })
})

app.listen(port, () => {
    console.log('success')
})