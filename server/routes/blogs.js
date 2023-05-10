const express = require('express')
const router = express.Router()
const {getBlogs, getSingleBlog, addBlog, updateBlog, deleteBlog} = require('../controllers/blogsController')
const { verifyAdmin } = require('../middleware/verifyToken')


router.route('/')
    .get(getBlogs)
    .post(verifyAdmin, addBlog)
    
router.route('/:id')
    .get(getSingleBlog)
    .delete(verifyAdmin, deleteBlog)
    .put(verifyAdmin, updateBlog)
    // .get()

module.exports = router