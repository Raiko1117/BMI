const express = require('express')
const router = express.Router()

router.get('/', (req,res) =>{
    res.sendFile('index.html',{root:'./public/view'})
})

module.exports = router

// C:\Users\Raiymbek\Desktop\Web(Front,Back)\calculatorBMI\public\view\index.html