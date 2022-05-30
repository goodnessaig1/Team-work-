/* eslint-disable consistent-return */
/* eslint-disable radix */
/* eslint-disable no-shadow */
const express = require('express');

const app = express();



const port = process.env.PORT || 3000; 
app.listen(port, ()=>{
    console.log(`App is running ${port}`)
})

module.exports = app; 