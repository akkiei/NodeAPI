const Post = require('../models/post'); 
const getRoute = (req,res) =>{

    //res.send("Getting response for get request from controller");
    res.send({

            'posts' : [
                {'title' : 'The response for GET request 1'},
                {'body' : 'This is bot Akash'}
            ]

    });
};

const createPost = (req,res) => {

            const post = new Post(req.body);
            console.log(" post created : "+ post);
            post.save((err,result) => {

                if(err){
                    console.log("error in post save method");
                    return res.status(400).json({

                        error : err 
                        
                    });
                }
                    res.status(200).json({
                            post : result
                    });
            });
            
};


module.exports = {getRoute,createPost} ;
