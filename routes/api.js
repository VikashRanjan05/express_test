const express = require("express");
const Router = express.Router();
const axios = require('axios')
const testdata = require('../Data/testdata'); 

Router.post('/',(req,res)=>{
    const name = req.body.name;
    const age = req.body.age;
    const id = req.body.id;
    
    axios.get('https://reqres.in/api/users?page=2')
    .then(resp=>{
        const filterdata = resp.data.data.filter(data=>{
        if(data.id==id){
            return data;
         }
        })
        res.json(filterdata)
    })
    
    
})

module.exports=Router;