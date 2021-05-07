const dbModel = require('../utilities/connection')

var ShopDb = {}

ShopDb.findUser = (username) =>{
    return dbModel.getUserCollection().then(model=>{
        return model.aggregate([{$project:{"userName":1,_id:0}}]).then(record=>{
            for(let i=0;i<record.length;i++){
                if(record[i].userName==username){
                    return username
                }
            }
            return null
        })
    })
}
 


ShopDb.registerUser = (user) =>{
    return dbModel.getUserCollection().then(model=>{
        return ShopDb.findUser(user.userName).then(founduser=>{
            if (founduser){
                throw new Error("User name is already registered...Please enter a different username")
            }
            else{
                return model.create(user).then(success=>{
                    return success
                })
            }
        })
    })
}

ShopDb.getUsers = ()=>{
    return dbModel.getUserCollection().then(model=>{
        return model.find().then(users=>{
            if (users.length>0) return users
            else return null
        })
    })
}

ShopDb.getMobiles = ()=>{
    return dbModel.getMobileCollection().then(model=>{
        return model.find().then(mobiles=>{
            if (mobiles.length>0) return mobiles
            else return null
        })
    })
}

ShopDb.getTablets = ()=>{
    return dbModel.getTabletCollection().then(model=>{
        return model.find().then(tabs=>{
            if (tabs.length>0) return tabs
            else return null
        })
    })
}


module.exports = ShopDb