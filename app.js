const { Sequelize, DataTypes }=require("sequelize")
const express=require("express")
const mongoose=require("mongoose")

const app=express()



const conn1 =mongoose.createConnection(`mongodb+srv://vikram24:YiFret2Glb1KapXQ@cluster0.pwfx8lq.mongodb.net/roll1`);
const test=conn1.model("test1",mongoose.Schema({}));



const sequelize2 = new Sequelize('faruq', 'super1', 'super1', {
    host: 'localhost',
    dialect:"postgres"
})
const User = sequelize2.define('hide', {
    PersonID :{
        type:Sequelize.INTEGER,
        allowNull:false
        },
    LastName:{
     type:Sequelize.STRING,
     allowNull:false
    },
    FirstName:{ 
        type:Sequelize.STRING,
        allowNull:false   
     },
    Address :{
        type:Sequelize.STRING,
        allowNull:false
    },
    City :{
        type:Sequelize.STRING,
        allowNull:false
    }
})
User.sync()









app.use(express.json())

const sequelize1 = new Sequelize('a1', 'root', 'password', {
    host: 'localhost',
    dialect:"mysql"
})







app.get('/',async (req, res) => {
    

     const gettingdata= await sequelize1.query('SELECT * FROM Persons',{type:Sequelize.QueryTypes.SELECT})
     const jane = await User.create(gettingdata[0]);
     const gettingdata1=await User.findAll({raw:true})
     console.log(gettingdata1)
     const diod=conn1.collection('test').insertMany([...gettingdata1])
     res.send("diodsfsdfsdaafafasfsfasfsfda");
})
































// const sequelize2 = new Sequelize('faruq', 'super1', 'super1', {
//     host: 'localhost',VALUES (${gettingdata[0].PersonID}, ${gettingdata[0].LastName}, ${gettingdata[0].FirstName},${gettingdata[0].Address},${gettingdata[0].City})
//     dialect:"postgres"
// })

const PORT = process.env.PORT || 4444;
  app.listen(PORT, () => {
    console.log("port is running");
  })