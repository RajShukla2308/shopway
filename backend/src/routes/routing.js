const express = require('express')
const routing = express.Router()

const create = require('../model/dbsetup')
const shopService = require('../service/users')

const dbModel = require('../utilities/connection')

var User = require('../model/user')

// //for setting up the database
routing.get("/setupdb",(req,res,next)=>{
    create.setupdb().then(data=>{
        res.send({message:data})
    }).catch((err)=>{
        next(err)
    })
})

routing.post('/register',(req,res,next)=>{
    const user = new User(req.body)
    shopService.registerUser(user).then(success=>{
        res.json("You are registered successfully, Please login to continue...")
    }).catch(err=>next(err))
})



routing.get('/getUsers',(req,res,next)=>{
    shopService.getUsers().then(users=>{
        res.json(users)
    }).catch(err=>next(err))
})

routing.get('/getMobiles',(req,res,next)=>{
    shopService.getMobiles().then(mobiles=>{
        res.json(mobiles)
    }).catch(err=>next(err))
})

routing.get('/getTablets',(req,res,next)=>{
    shopService.getTablets().then(tabs=>{
        res.json(tabs)
    }).catch(err=>next(err))
})


module.exports = routing

