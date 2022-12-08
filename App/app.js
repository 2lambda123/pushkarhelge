//Express app 
//importing the module
const express = require("express");
const fs = require('fs');
require("./src/db/conn.js")
const Register = require('./src/models/registers.js');

//importing the path module to set views directory
const path = require('path');

// creating the app using express 
const app = express();
const port =80;

app.set('views',path.join(__dirname,'views'));
app.set('view engine','hbs'); //set the template engine as pug

// Express specific stuff
app.use('/static',express.static('static')); //serving static files
app.use(express.urlencoded());



//Endpoints
app.get('/',(req,res)=>{
    const index = fs.readFileSync('./views/dashboard.html');
    res.status(200).end(index)
})
app.get('/login.html',(req,res)=>{
    const login = fs.readFileSync('./views/login.html');
    res.status(200).end(login)
})
app.get('/signup.html',(req,res)=>{
    const signup = fs.readFileSync('./views/signup.html');
    res.status(200).end(signup)
})
app.get('/guidelines.html',(req,res)=>{
    const signup = fs.readFileSync('./views/guidelines.html');
    res.status(200).end(signup)
})
app.get('/dashboard.html',(req,res)=>{
    const dashboard = fs.readFileSync('./views/dashboard.html');
    res.status(200).end(dashboard);
})

//creating a new user
app.post('/register',async (req,res)=>{

    try {
        const email = req.body.email;
        const psw = req.body.psw;
        const pswr = req.body.pswr;
        // more = req.body.more;

        if(psw===pswr){
            const registerDriver = new Register({
                email : req.body.email,
                psw : req.body.psw,
                pswr : req.body.pswr
            })

            const registered = await registerDriver.save();

            res.status(200).send("");
        }
        else{
            res.status(200).send("Password Are not matching, Please enter same password");  
        }

        console.log(`Email Id of user is ${email} and password is ${psw}`);
        
        
    } catch (error) {
        res.status(400).send(error)
    }


    // const signup = fs.readFileSync('./views/signup.html');
    // res.status(200).end(signup)
})

//sign in of registered  user
app.post('/login',async(req,res)=>{
    // console.log(req.body); //to display entered innput from form in consoleas object

    try {
        // const email = req.body.email;
        const psw = req.body.psw;
        
        // console.log(`Email ${email} and Paswword is ${psw}`);
        // const useremail = await Register.findOne({email:email});
        // res.send(useremail);
        // res.send(useremail.psw);
        // console.log(useremail);

        if(psw === "next"){
            // res.status(200).send("<h2>Login Succesfull</h2>");
            const dashboard = fs.readFileSync('./views/dashboard2.html');
            res.status(200).end(dashboard);
        }else{
            res.send("Password doesn't match");
        }

        
    } catch (error) {
        res.status(400).send("Invalid Email")
    } 
    // res.status(200).end(index);
})
 


//Start the server
app.listen(port,()=>{
    console.log(`The application started sucessfully on ${port}`)
})
