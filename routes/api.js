var express = require('express');
var router = express.Router();

//api for all posts
router.route('/posts')

    //create a new post
    .post(function(req, res) {

        //TODO create a new post in the database
        res.send({message:'TODO create a new post in the database'});
    })

    .get(function(req, res) {

        //TODO get all the posts in the database
        res.send({message:'TODO get all the posts in the database'});
    })

//api for a specfic post
router.route('/posts/:id')

    //create
    .put(function(req, res) {

        res.send({message:'TODO modify an existing post by using param ' + req.params.id});
    })

    .get(function(req, res) {

        res.send({message:'TODO get an existing post by using param ' + req.params.id});
    })

    .delete(function(req, res) {

        res.send({message:'TODO delete an existing post by using param ' + req.params.id})
    });

module.exports = router;
