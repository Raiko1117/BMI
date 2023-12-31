const express = require('express');

const router = express.Router();

function calculateBMI(weight,height){
    height = height/100;
    return (weight/(height*height)).toFixed(2);
}

function measureBMI(bmi){
    if(bmi < 18.5){
        return 'Underweight'
    }
    else if (bmi < 24.9){
        return 'Normal weight'
    }
    else if(bmi < 29.9){
        return 'Overweight'
    }
    else{
        return 'Obese'
    }
}
router.post('/bmicalculator',(req,res) => {
    const {Weight, Height, gender, age} = req.body;
    const bmi = calculateBMI(Weight,Height);
    const message = measureBMI(bmi)
    res.send({
        bmi: bmi,
        result: message
    })
})

module.exports = router