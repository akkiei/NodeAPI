const express = require('express');
const router =  express.Router();
const getPostController = require('../controller/post');


router.get('/',getPostController.getRoute);

router.post('/post', getPostController.createPost);

module.exports =  router;