var express = require('express')
var app = express();

app.get('/name', (req, res, next) => {
    res.json({
        message: "hi i am form get req"
    })
    console.log('hi i am from name root')
})

app.post('/address',function(req,res){
        res.json({
            message:"hi i am from post req"
        })
        console.log('hi i am from address root')
})

app.listen(3000,function (req,res) {
    console.log('hi your server started on 3000')


})