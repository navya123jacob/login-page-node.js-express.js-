const express = require('express');
const router = express.Router();

const cred = {
    email: "navyatjacob@gmail.com",
    password: "navya123"
};

// Login user
router.post('/login', (req, res) => {
    if (req.body.email == cred.email && req.body.password == cred.password) {
        req.session.user = req.body.email;
        res.redirect('/route/dashboard')
        
    } else {
        res.end("Invalid username or password");
    }
});

//dashboard route
router.get('/dashboard', (req, res) => {
    if (req.session.user) {
        res.render('dashboard', { title: 'Dashboard', user: req.session.user });
    } else {
        res.send("Unauthorized user");
    }
});

//logout route
router.get('/logout',(req,res)=>{
    req.session.destroy(function(err){
        if(err){
            console.log(err)
            res.send("error")
        }
        else{
            res.render('base',{title:"express",logout:"logged out"})
        }
    })
})

// Export the router
module.exports = router;