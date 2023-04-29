const db = require('../db');
const { promisify } = require('util');
require('dotenv').config();

const handleLogout = async (req, res) => {
    // on client also delete accessToken

    const cookies = req.cookies;
    if(!cookies?.jwt ) return res.sendStatus(204); // no content
    const refreshToken = cookies.jwt;

    // is refreshToken in db
    try {
        const results = await promisify(db.query).bind(db)(`SELECT * FROM users WHERE refreshToken = ?`, [refreshToken]);
        const userFromDb = results[0];
        if(!userFromDb){
            res.clearCookie('jwt', {httpOnly: true, maxAge: 24 * 60 * 60 * 1000})
            return res.sendStatus(403);
        }
        // delete refreshToken in db
        await promisify(db.query).bind(db)(`UPDATE users SET refreshToken = ? WHERE id = ?`, ['', userFromDb.id]);
        res.clearCookie('jwt', {httpOnly: true, sameSite: 'None', secure: true }) // secure: true - only serves https
        res.sendStatus(204);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
};

module.exports = { handleLogout };
