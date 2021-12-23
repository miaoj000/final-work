const express = require('express')
const path = require('path')
const fs = require('fs')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
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
    console.log(req.body)
    var username = req.body.username
    var password = req.body.password
    // household.findOne()
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
    res.sendFile('add.html',{root:path.join(__dirname,'WebContent')},(err)=>{
        console.log(err)
    })
})

app.post('/add',(req,res)=>{
    console.log(req.body)
    var name = req.body.name
    var number = req.body.number
    var username = req.body.username
    var password = req.body.password
    var lou = req.body.lou
    var hu = req.body.hu
    var housePer = new household({'name':name,'phoneNumber':number,'username':username,'password':password,'location':parseInt(lou),'houseNumber':parseInt(hu),'administrator':false})
    housePer.save()
    res.sendFile('regcomplete.html',{root:path.join(__dirname,'WebContent')},(err)=>{
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