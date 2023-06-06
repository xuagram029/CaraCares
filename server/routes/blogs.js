const express = require('express')
const router = express.Router()
const {getBlogs, getSingleBlog, addBlog, updateBlog, deleteBlog} = require('../controllers/blogsController')
const { verifyAdmin } = require('../middleware/verifyToken')


router.route('/')
    .get(getBlogs)
    .post( addBlog)
    
router.route('/:id')
    .get(getSingleBlog)
    .delete(deleteBlog)
    .put(updateBlog)
    // .get()

module.exports = router