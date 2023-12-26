const express = require('express')

app = express();

// Application level middleware
// app.use(function(req, res, next){
//     console.log('I am application level middleware')
//     next();
// })

app.use('/about',function(req, res, next){
    console.log('About Middleware execute, url: ' + req.url)
    next();
})



app.get('/', function(req, res){
    res.send('This is Homepage')
})

app.get('/about', function(req, res){
    res.send('This is About')
})


app.get('/contact', function(req, res){
    res.send('This is Contact')
})

app.listen(8080, function(){
    console.log('server run success')
})