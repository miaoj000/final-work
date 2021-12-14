const express = require('express')
const ejs = require('ejs')
const path = require('path')
const app = express()
const port = 10520

app.use('/',express.static('WebContent'))
app.use('/static',express.static('static'))
app.use('/photo',express.static('photo'))

app.get('/login',(req,res)=>{
    res.sendFile('login.html',{root:path.join(__dirname,'WebContent')},(err)=>{
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