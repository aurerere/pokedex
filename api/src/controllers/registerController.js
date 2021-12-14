// IMPORTS -------------------------------------------------------------------------------------------------------------
const {validationResult} = require('express-validator'),
    bcrypt = require('bcryptjs'),
    db = require("../db").promise();

// EXPORTS -------------------------------------------------------------------------------------------------------------

// register() ----------------------------------------------------------------------------------------------------------
exports.register = async(req,res,next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array() });
    }

    try{
        let[row] = await db.query(
            "SELECT `email` FROM `users` WHERE `email`=?",
            [req.body.email]
        );

        if (row.length > 0) {
            return res.status(402).json({
                message: "The E-mail already in use",
            });
        }

        [row] = await db.query(
            "SELECT `username` FROM `users` WHERE `username`=?",
            [req.body.username]
        );

        if (row.length > 0) {
            return res.status(402).json({
                message: "The username already in use",
            });
        }

        const hashPass = await bcrypt.hash(req.body.password, 12);

        const [rows] = await db.query('INSERT INTO `users`(`username`,`email`,`password`) VALUES(?,?,?)',[
            req.body.username,
            req.body.email,
            hashPass
        ]);

        if (rows.affectedRows === 1) {
            return res.status(201).json({
                message: "The user has been successfully inserted.",
            });
        }

    } catch(err) {
        next(err);
    }
}