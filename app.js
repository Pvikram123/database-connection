const { Sequelize, DataTypes }=require("sequelize")
const express=require("express")
const mongoose=require("mongoose")

const app=express()
const conn1 =mongoose.createConnection(`mongodb+srv://vikram24:YiFret2Glb1KapXQ@cluster0.pwfx8lq.mongodb.net/roll1`);
const test=conn1.model("test",mongoose.Schema({}));
const sequelize1 = new Sequelize('a1', 'root', 'password', {
    host: 'localhost',
    dialect:"mysql"
})
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

app.get('/',async (req, res) => {
    

     const gettingdata= await sequelize1.query('SELECT * FROM Persons',{type:Sequelize.QueryTypes.SELECT})
     await User.sync({ force: true });
     const jane = await User.bulkCreate(gettingdata);
     const gettingdata1=await User.findAll({raw:true})
     const diod=conn1.collection('test').insertMany([...gettingdata1])
      //const getting=await test.find({})
       // console.log('getting')
        res.send("{getting}");
})
const PORT = process.env.PORT || 4444;
  app.listen(PORT, () => {
    console.log("port is running");
  })