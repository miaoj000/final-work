const express = require('express')
const ejs = require('ejs')
const path = require('path')
const app = express()
const port = 10520

app.use('/',express.static('WebContent'))
app.use('/static',express.static('static'))

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

app.listen(port, () => {
    console.log('success')
})