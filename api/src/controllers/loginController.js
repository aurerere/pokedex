// IMPORTS -------------------------------------------------------------------------------------------------------------
const {validationResult} = require('express-validator'),
    jwt = require('jsonwebtoken'),
    bcrypt = require('bcryptjs'),
    db = require("../db").promise();

// login() -------------------------------------------------------------------------------------------------------------
exports.login = async (req,res,next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array() });
    }

    try{

        const [row] = await db.query(
            "SELECT * FROM `users` WHERE `email`=?",
            [req.body.email]
        );

        if (row.length === 0) {
            return res.status(422).json({
                message: "Invalid email address",
            });
        }

        const passMatch = await bcrypt.compare(req.body.password, row[0].password);
        if(!passMatch){
            return res.status(422).json({
                message: "Incorrect password",
            });
        }

        const theToken = jwt.sign({id:row[0].id},'the-super-strong-secret',{ expiresIn: '24h' });

        return res.json({
            token:theToken
        });

    }
    catch(err){
        next(err);
    }
}