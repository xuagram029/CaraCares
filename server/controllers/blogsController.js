const db = require('../db')
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

const getBlogs = (req, res) =>{
    db.query("SELECT * FROM blogs", (err, data) =>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

const addBlog = (req, res) =>{
    upload.single('image')(req, res, (err) => {
        if (err) {
          console.error('Error uploading file:', err);
          return res.json({ error: 'Error uploading file' });
        }
        const title = req.body.title
        const description = req.body.description
        const datecreated = req.body.datecreated
        const photo = req.file ? req.file.filename : null;
        console.log(title, description, datecreated, photo);
        db.query("INSERT INTO blogs(`title`, `description`, `datecreated`, `photo`) VALUES (?, ?, ?, ?)",
        [title, description, datecreated, photo],
        (err, data) =>{
            if(err) return res.status(500).json(err)
            return res.json(data)
        })
    })
}

const updateBlog = (req, res) =>{
    const blogId = req.params.id
    const title = req.body.title
    const description = req.body.description
    const datecreated = req.body.datecreated

    db.query("UPDATE blogs SET `title`= ?, `description` = ?, `datecreated` = ? WHERE id = ?",
    [title, description, datecreated, blogId],
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
