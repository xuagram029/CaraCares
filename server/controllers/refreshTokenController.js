const jwt = require('jsonwebtoken');
const db = require('../db');
require('dotenv').config();

const handleRefreshToken = (req, res) => {
    const cookies = req.cookies;
    if(!cookies?.jwt ) return res.sendStatus(401);
    
    const refreshToken = cookies.jwt;

    db.query("SELECT * FROM users WHERE refreshToken = ?", [refreshToken], (err, results) => {
        if(err) return res.sendStatus(500);

        const userFromDb = results[0];
        if(!userFromDb) return res.sendStatus(403);

        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if(err || userFromDb.username !== decoded.username) return res.sendStatus(403);

            const accessToken = jwt.sign({ "username": decoded.username}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30s' });
            res.json({accessToken});
        });
    });
};

module.exports = { handleRefreshToken };
