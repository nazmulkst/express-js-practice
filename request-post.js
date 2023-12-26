const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const mul = multer();

const storage = multer.diskStorage({
    destination: function(req, file, callBack){
        callBack(null, './uploads')
    },
    filename: function(req, file, callBack){
        callBack(null, file.originalname)
    }
});

var upload = multer({storage: storage}).single('file1');


app = express();
// app.use(bodyParser.json());
// Multipart form data
// app.use(mul.array());
app.use(express.static('public'));

// File upload


app.post('/file-upload', function(req, res){
    upload(req, res, function(error){
        if(error){
            res.send('File upload Failed')
        } else {
            res.send('File Upload Success')
        }
    })
})



// Multipart form data handle
app.post("/multipart", function(req, res){
    const jsonData = req.body;
    const jsonString = JSON.stringify(jsonData);

    res.send(jsonString);
})

// Request Post method with Params
app.post('/', function(req, res){
    const firstName = req.query.firstName;
    const lastName = req.query.lastName;

    res.send("FullName: " + firstName + " " + lastName);
})

// Request Post method with header
app.post('/header', function(req, res){
    const username = req.header("username");
    const password = req.header("password");

    res.send("username: " + username + " & password " + password);
})

// Pass json on request body
app.post("/body", function(req, res){
    const jsonData = req.body;
    const jsonString = JSON.stringify(jsonData);
    res.send(jsonString)
})

app.listen(8080, function(){
    console.log("server run success")
})