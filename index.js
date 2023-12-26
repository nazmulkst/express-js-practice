const express = require('express');

app = express();

// simple string Response
app.get("/", function(req, res){
    // res.send("<h1>Home Page</h1>"); // Added on Body ---
    res.status(200);
    res.end("Simple String Response");
})

// JSON Response
app.get("/json", function(req, res){
    const jsonArray = [
        {
            name: "Karim",
            email: "karim@gmail.com",
            address: "Dhaka"
        },
        {
            name: "Jashim",
            email: "Jashim@gmail.com",
            address: "Khulna"
        },
        {
            name: "Jamil",
            email: "Jamil@gmail.com",
            address: "Cumilla"
        }
    ]
    res.json(jsonArray);
})

// donwload Response
app.get("/download", function(req, res){
    res.download("./uploads/abc.txt");
});

// Redirect Response
app.get("/asia", function(req, res){
    res.redirect("http://localhost:8000/america");
})

app.get("/america", function(req, res){
    res.send("This is America");
})

// Store Data on Response Header
app.get("/header", function(req, res){
    res.append("name", "Razzak")
    res.append("city", "Dhaka")
    res.append("age", "17")
    res.status(201).end("Hello World");
})

// set Data on cookie
app.get("/cookie", function(req, res){
    res.cookie("name", "Sazzad");
    res.cookie("city", "Dhaka");
    res.cookie("age", "21");
    res.end("Cookie set success")

})

// clear cookie
app.get("/cookie-clear", function(req, res){
    res.clearCookie("name");
    res.clearCookie("city");
    res.cookie("age", "21");
    res.end("Cookie clear success")

})

// Request with Parameter on get method
app.get('/request-param', function(req, res){
    const firstName = req.query.firstName;
    const lastName = req.query.lastName;

    const fullName = firstName + " " + lastName;
    res.send("Full Name: " + fullName);
    res.end();
})

// Request witt Header
app.get('/request-header', function(req, res){
    const username = req.header('username');
    const password = req.header('password');
    const userAgent = req.header('User-Agent');

    res.send("UserName: " + username + " & Password: " + password + " & UserAgent: " + userAgent);
})
// Others all
app.post("/about", function(req, res){
    res.send("<h1>About Page</h1>");
})

app.put("/contact", function(req, res){
    res.send("<h1>Contact Page</h1>");
})

app.delete("/terms", function(req, res){
    res.send("<h1>Delete Page</h1>");
})



app.listen(8000, function(){
    console.log('server run success express')
});