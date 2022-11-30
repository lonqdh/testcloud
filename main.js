const { response } = require('express')
var express = require('express')
var app = express()

app.set('view engine','hbs')

app.get('/',(req,res)=>{
    res.render('home')
})

const PORT = process.env.PORT || 5000
app.listen(PORT)
console.log("Server is running...")