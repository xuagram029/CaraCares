const bcrypt = require('bcrypt')

const handleNewUser =  (req, res) => {
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const email = req.body.email
    const address = req.body.address
    const birthdate = req.body.birthdate
    const username = req.body.username
    // const password = req.body.password
    const password = bcrypt.hashSync(req.body.password, 10);

    if(!username || !password){
        return res.status(400).json({ message: 'Please fillup the input fields' });
    }
    db.query("SELECT * FROM users WHERE username = ? ", [username], (err, result) => {
        if(err) return res.json(err)

        if(result.length > 0){
            return res.status(409).json({ message: 'Username already taken' });
        }

        db.query(
            "INSERT INTO users(`firstname`, `lastname`, `email`, `address`, `birthdate`, `username`, `password`) VALUES (?, ?, ?, ?, ?, ?, ?)", 
            [firstname, lastname, email, address, birthdate, username, password],
            (err, data) => {
                if(err) return res.json(err)
                return res.json(data)
            }
        )
    })
}

module.exports = { handleNewUser }