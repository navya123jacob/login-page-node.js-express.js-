const express=require('express');
const app=express();
const path=require('path');
const session=require('express-session')
const port=process.env.PORT||3000;
const{v4:uuidv4}=require('uuid')
const router=require('./router')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/static',express.static(path.join(__dirname,'public')))

app.use(session({
    secret:uuidv4(),
    resave:false,
    saveUninitialized:true
}))


app.set('view engine','ejs')


app.use('/route',router)
//home page
app.get('/',(req,res)=>{
    res.render('base',{title:"Login System"});
})

app.listen(port,()=>{
    console.log("listening to the server on http://localhost:3000")
})