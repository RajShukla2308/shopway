const { runInThisContext } = require('vm')
const db = require('../model/users')


const shopService ={}

shopService.getUsers = ()=>{
    return db.getUsers().then(users=>{
        if(users == null){
            return []  
        }else return users
    })
}

shopService.getMobiles = ()=>{
    return db.getMobiles().then(mobiles=>{
        if(mobiles == null){
            return []  
        }else return mobiles
    })
}

shopService.getTablets = ()=>{
    return db.getTablets().then(tabs=>{
        if(tabs == null){
            return []  
        }else return tabs
    })
}

shopService.registerUser = (user) =>{
    return db.registerUser(user).then(success=>{
        if (success){
            return success
        }
        else{
            throw new Error("Cant create user")
        }
    })

}

module.exports = shopService