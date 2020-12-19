var express= require ('express')
var app = express();

app.get('/name',(req,res,next)=>{
    console.log('hi i am from name root')
})

app.listen(3000,()=>{
console.log('hi your server started on 3000')


})