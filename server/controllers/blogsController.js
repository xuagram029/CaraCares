const db = require('../db')

const getBlogs = (req, res) =>{
    db.query("SELECT * FROM blogs", (err, data) =>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

const addBlog = (req, res) =>{
    const title = req.body.title
    const description = req.body.description
    const datecreated = req.body.datecreated

    db.query("INSERT INTO blogs(`title`, `description`, `datecreated`) VALUES (?, ?, ?)",
    [title, description, datecreated],
    (err, data) =>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

const updateBlog = (req, res) =>{
    const blogId = req.params.id

    const title = req.body.title
    const description = req.body.description

    db.query("UPDATE books SET `title`= ?, `description` = ?, `price` = ? WHERE id = ?",
    [title, description, price, bookId],
    (err, data) =>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

const deleteBlog = (req, res) =>{
    const blogId = req.params.id

    db.query("DELETE FROM blogs WHERE id = ?",
    [blogId],
    (err, data) =>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

const getSingleBlog = (req, res) => {
    const blogId = req.params.id
    
    db.query("SELECT * FROM blogs WHERE id = ?",
    [blogId],
    (err, data) =>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

module.exports = { getBlogs,getSingleBlog, addBlog, updateBlog, deleteBlog}
