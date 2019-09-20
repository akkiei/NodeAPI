const express = require("express");
const app = express()
const getPostController = require('./routes/post');
const morgan = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


dotenv.config(); // to access env var 


//db connection
mongoose.connect(process.env.mongoURI, { useNewUrlParser: true }).then(
                () => {
                        console.log("DB connected");
                }
)

mongoose.connection.on('error', err => {
                console.log("DB connection error ");
});


//my own middleware
// const myOwnMiddleware = (req,res,next) =>{
//         console.log("this is my own middleware");
//         next();

// };

//middleware
app.use(morgan("dev"));
//app.use(myOwnMiddleware);
app.use(bodyParser.json());
app.use('/',getPostController);

const port  = process.env.PORT || 3334;

app.listen(port, () => {

        console.log("api is listening pon port");
    
});
 