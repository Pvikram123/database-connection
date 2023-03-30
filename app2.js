const { Sequelize, DataTypes }=require("sequelize")
const express=require("express")
const mongoose=require("mongoose")

const app=express()

const sequelize2 = new Sequelize('faruq', 'super1', 'super1', {
    host: 'localhost',
    dialect:"postgres"
})


app.use(express.json())
app.get('/', (req, res) => {
    let name=req.body.name
const User = sequelize2.define(name, {
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
        allowNull:false}})
User.sync()
        res.send("{getting}");})
const PORT =  4445;
  app.listen(PORT, () => {
    console.log("port is running");})