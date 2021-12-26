const express = require('express')
const ejs = require('ejs')
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
const e = require('express')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
const port = 10520
mongoose.connect('mongodb://localhost/test');
const userinfo = mongoose.model('user',{'name':String,'phoneNumber':String,'username':{type:String,unique:true},'password':String,'administrator':{type:Boolean,default:false}})
const household = mongoose.model('household',{'name':String,'location':Number,'houseNumber':Number})
const requestchange = mongoose.model('request',{'name':String,'phoneNumber':String,'location':Number,'houseNumber':Number,'status':String})

app.use('/',express.static('WebContent'))
app.use('/static',express.static('static'))
app.use('/photo',express.static('photo'))

app.get('/index',(req,res)=>{
    res.sendFile('index.html',{root:path.join(__dirname,'WebContent')},(err)=>{
        console.log(err)
    })
})

app.get('/WebContent/login.html',(req,res)=>{
    res.sendFile('login.html',{root:path.join(__dirname,'WebContent')},(err)=>{
        console.log(err)
    })
})

app.get('/WebContent/index-ejs.html',(req,res)=>{
    res.sendFile('index-ejs.html',{root:path.join(__dirname,'WebContent')},(err)=>{
        console.log(err)
    })
})

app.use('/login',(req,res)=>{
    var username = req.body.username
    var password = req.body.password
    userinfo.count({'username':username,'password':password},callback=(err,counts)=>{
        if (err) console.log(err)
        else{
            var numbers_fit = counts
            userinfo.findOne({'username':username,'password':password},callback=(err,infos)=>{
                if (err) console.log(err)
                if (numbers_fit){
                    res.status(200)
                    res.set('Content-Type', 'text/html')
                    req.session.username = username
                    req.session.administrator = infos.administrator
                    req.session.password = password
                    req.session.name = infos.name
                    req.session.number = infos.phoneNumber
                    fs.readFile('./WebContent/loginsuc.html','utf-8',(err,data)=>{
                        if(err){
                            res.send("<p>login error!</p>")
                        }else{
                            res.send(data)
                        }
                        res.end()
                    })
                }else{
                    ejs.renderFile('./WebContent/login.html',data = {tip:"用户名或密码错误！"},(err,str)=>{
                        res.send(str)
                    })
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
    var name = req.body.name
    var number = req.body.number
    var username = req.body.username
    userinfo.count({'username':username},(err,num)=>{
        if(num){
            ejs.renderFile('./WebContent/reg.html',data = {al:"用户名已存在！"},(err,str)=>{
                res.send(str)
            })
        }else{
            var password = req.body.password
            var housePer = new userinfo({'name':name,'phoneNumber':number,'username':username,'password':password})
            housePer.save()
            res.sendFile('regcomplete.html',{root:path.join(__dirname,'WebContent')},(err)=>{
                console.log(err)
            })
        }
    })
})

app.get('/info',(req,res)=>{
    if(req.session.username){  
        if(req.session.administrator == false){
            var data = {
                name:req.session.name,
                number:req.session.number,
                username:req.session.username,
                house:null,
                change:null
            }
            household.count({'name':req.session.name},(err,houses)=>{
                if(houses){
                    household.find({'name':req.session.name},(err,houseinfos)=>{
                        var houseInfo
                        for(var i=0;i<houses;i++){
                            houseInfo = houseInfo + houseinfos[i].location + "幢" + houseinfos[i].houseNumber + "室" + " "
                        }
                        data.house=houseInfo
                    })
                }else{
                    data.house='无'
                }
            })
            requestchange.count({'name':req.session.name},(err,counts)=>{
                if(counts){
                    requestchange.find({'name':req.session.name},'location houseNumber',(err,results)=>{
                        var str
                        for(i=0;i<counts;i++){
                            if(results[i].status == 'add'){
                                str = str + "申请添加:" + results[i].location + '幢' + results[i].houseNumber + '室' + '\n'
                            }else{
                                str = str + "申请删除:" + results[i].location + '幢' + results[i].houseNumber + '室' + '\n'
                            }
                        }
                        data.change=str
                    })
                }else{
                    data.change='无'
                }
            })
            ejs.renderFile('./WebContent/info-normal.html',data,(err,str)=>{
                res.send(str)
            })           
        }else{
            res.sendFile('info-admin.html',{root:path.join(__dirname,'WebContent')},(err)=>{
                console.log(err)
            })
        }
    }else{
        ejs.renderFile('./WebContent/index-ejs.html',data = {tip:"请登录！"},(err,str)=>{
            res.send(str)
        })
    }
})

app.get('/change',(req,res)=>{
    res.sendFile('change.html',{root:path.join(__dirname,'WebContent')},(err)=>{
        console.log(err)
    })
})

app.get('/logout', function(req, res) {
    req.session.destroy(function(err) {
        res.redirect('/');
    })
})

app.post('/addChange',(req,res)=>{
    var loc = req.body.lou
    var hounum = req.body.hu
    userinfo.count({'location':loc,'houseNumber':hounum},(err,counts1)=>{
        requestchange.count({'location':loc,'houseNumber':hounum},(err,counts2)=>{
            if(counts1+counts2){
                res.send("该房屋已被注册或申请中。")
            }else{
                var houseAdd = new requestchange({'name':req.session.name,'location':parseInt(loc),'houseNumber':parseInt(hounum),'status':'添加'})
                houseAdd.save()
                res.send("添加申请成功！")
            }
        })
    })
})

app.post('/rmChange',(req,res)=>{
    var loc = req.body.lou
    var hounum = req.body.hu
    userinfo.count({'location':loc,'houseNumber':hounum,'name':{'$ne':req.session.name}},(err,counts1)=>{
        requestchange.count({'location':loc,'houseNumber':hounum},(err,counts2)=>{
            if(counts1+counts2){
                res.send("该房屋已被注册或申请中。")
            }else{
                var houseAdd = new requestchange({'name':req.session.name,'location':parseInt(loc),'houseNumber':parseInt(hounum),'status':'添加'})
                houseAdd.save()
                res.send("删除申请成功！")
            }
        })
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
    // console.log('success')
})