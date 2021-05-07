const { strict } = require('assert')
const {Schema} = require('mongoose')
const Mongoose = require('mongoose')
Mongoose.Promise = global.Promise

Mongoose.set('useCreateIndex',true)

const url = 'mongodb://localhost:27017/Shop_DB'

const userSchema = Schema({
    userName:String,
    password:String,
},{collection:"User"})


const mobileSchema = Schema({
    productId:Number,
    productName:String,
    productCode:String,
    description:String,
    price:Number,
    imageUrl:String,
    manufacturer:String,
    ostype:String,
    rating:Number
},{collection:"Mobile"})


const tabletSchema = Schema({
    productId:Number,
    productName:String,
    productCode:String,
    description:String,
    price:Number,
    imageUrl:String,
    manufacturer:String,
    ostype:String,
    rating:Number
},{collection:"Tablet"})

var collection = {}

collection.getUserCollection = ()=>{
    return Mongoose.connect(url,{useNewUrlParser:true}).then(database=>{
        return database.model('User',userSchema)
    }).catch(error=>{
        let err = new Error("Could not connect to the database")
        err.status = 500
        throw err
    })
}

collection.getMobileCollection = ()=>{
    return Mongoose.connect(url,{useNewUrlParser:true}).then(database=>{
        return database.model('Mobile',mobileSchema)
    }).catch(error=>{
        let err = new Error("Could not connect to the database")
        err.status = 500
        throw err
    })
}

collection.getTabletCollection = ()=>{
    return Mongoose.connect(url,{useNewUrlParser:true}).then(database=>{
        return database.model('Tablet',tabletSchema)
    }).catch(error=>{
        let err = new Error("Could not connect to the database")
        err.status = 500
        throw err
    })
}

module.exports = collection

