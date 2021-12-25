const express = require('express')
const path = require('path')
const fs = require('fs')
const mongoose = require('mongoose')
const app = express()
const session = require('express-session')
app.use(session({
    secret: 'miaojunjie',
    resave: false,
    saveUninitialized: true
}))
const bodyParser = require('body-parser')
const { json } = require('express/lib/response')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
const port = 10520
mongoose.connect('mongodb://localhost/test');
const household = mongoose.model('household',{'name':String,'phoneNumber':String,'username':String,'password':String,'location':Number,'houseNumber':Number,'administrator':Boolean})

app.use('/',express.static('WebContent'))
app.use('/static',express.static('static'))
app.use('/photo',express.static('photo'))

// app.get('/login',(req,res)=>{
//     res.sendFile('login.html',{root:path.join(__dirname,'WebContent')},(err)=>{
//         console.log(err)
//     })
// })

app.post('/login',(req,res)=>{
    var username = req.body.username
    var password = req.body.password
    household.count({'username':username,'password':password},callback=(err,counts)=>{
        if (err) console.log(err)
        else{
            var numbers_fit = counts
            household.find({'username':username,'password':password},callback=(err,households)=>{
                if (err) console.log(err)
                if (numbers_fit){
                    res.status(200)
                    res.set('Content-Type', 'text/html')
                    for(i=0;i<numbers_fit;i++){
                        if(i==0){
                            req.session.username = username
                            req.session.administrator = households[i].administrator
                            req.session.password = password
                            req.session.name = households[i].name
                            req.session.number = households[i].phoneNumber
                        }
                        req.session.house = households[i].location + "幢" + households[i].houseNumber + "室"
                        console.log(req.session.house)
                    }
                    fs.readFile('./WebContent/loginsuc.html','utf-8',(err,data)=>{
                        if(err){
                            res.send("<p>login error!</p>")
                        }else{
                            res.send(data)
                        }
                        res.end()
                    })
                }else{
                    res.status(301)
                    res.send("用户名或密码错误！")
                }
            })
        }      
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

app.get('/myInfo',(req,res)=>{
    if(req.session.username != '' && req.session.username != 'undefined'){
        if(req.session.administrator == false){
            res.sendFile('info-norm.html',{root:path.join(__dirname,'WebContent')},(err)=>{
                console.log(err)
            })
        }else{
            res.sendFile('info-admin.html',{root:path.join(__dirname,'WebContent')},(err)=>{
                console.log(err)
            })
        }   
    }else{
        res.send('alert')
    }
})

app.post('/myInfo',(req,res)=>{
    var infoJson = {
        'name':req.session.name,
        'username':req.session.username,
        'password':req.session.password,
        'phoneNumber':req.session.number,
        'info':req.session.house = households[i].location + "幢" + households[i].houseNumber + "室"
        }
    res.send(infoJson)
})

app.get('/logout', function(req, res) {
    req.session.destroy(function(err) {
        res.redirect('/');
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