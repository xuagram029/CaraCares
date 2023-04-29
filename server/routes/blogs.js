const express = require('express')
const router = express.Router()
const {getBlogs, getSingleBlog, addBlog, updateBlog, deleteBlog} = require('../controllers/blogsController')

router.route('/')
    .get(getBlogs)
    .post(addBlog)
    

router.route('/:id')
    .get(getSingleBlog)
    .delete(deleteBlog)
    .put(updateBlog)
    // .get()

module.exports = router