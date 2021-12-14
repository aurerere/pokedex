// IMPORTS -------------------------------------------------------------------------------------------------------------
const jwt = require('jsonwebtoken'),
    db = require("../db").promise();

// getUser() -----------------------------------------------------------------------------------------------------------
exports.getUser = async (req,res,next) => {

    try{

        if(
            !req.headers.authorization ||
            !req.headers.authorization.startsWith('Bearer') ||
            !req.headers.authorization.split(' ')[1]
        ){
            return res.status(422).json({
                message: "Please provide the token",
            });
        }

        const theToken = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(theToken, 'the-super-strong-secret');

        const [row] = await db.query(
            "SELECT `id`,`username`,`email`, `last_req` FROM `users` WHERE `id`=?",
            [decoded.id]
        );

        if(row.length > 0){
            req.user = row[0];
            next();
        }
        else {
            res.json({
                message:"No user found"
            });
        }
    }
    catch(err){
        next(err);
    }
}