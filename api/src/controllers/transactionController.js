// IMPORTS -------------------------------------------------------------------------------------------------------------
const db = require("../db").promise();

// timeGift() ----------------------------------------------------------------------------------------------------------
exports.timeGift = async (req, res, next) => {
    if (req.user.last_req === null || req.user.last_req + 86400 < Date.now()) {
        await next();
    } else {
        return res.status(400).json({
            timeLeft: (Date.now() - req.user.last_req + 86400),
        });
    }
}

// updateTeam() --------------------------------------------------------------------------------------------------------
exports.updateTeam = async (req, res, next) => {

    try {

        const [team] = await db.query(
            "SELECT `id_pok` FROM `team` WHERE `id_user`=?", req.user.id);

        // Gift in a team with less than 6 pokemon
        if (team.length < 6 && req.body.transaction === "gift") {
            function rng(min, max) {
                return Math.random() * (max - min) + min;
            }
            const [rows] = await db.query('INSERT INTO `team`(`id_user`,`id_pok`) VALUES(?,?)',
                [req.user.id, rng(1, 152)])

            if (rows.affectedRows === 1) {
                return res.status(201).json({
                    message: "The team has been updated.",
                })
            }
        }

        //Gift in full team or transaction
        else {
            const [row] = await db.query(
                "SELECT `id_pok` FROM `team` WHERE `id_user`=? AND `id_pok`=?",
                [req.user.id, req.body.old.id]);

            if (row.length === 0) {
                return res.status(201).json({
                    message: "Pokemon isn't in the team",
                });
            }

            const [rows] = await db.query("UPDATE `team` SET `id_pok` = ?  WHERE `id_user`= ? AND `id_pok`= ? LIMIT 1",
                [req.body.new.id, req.user.id, req.body.old.id])

            if (rows.affectedRows === 1) {
                return res.status(201).json({
                    message: "The team has been updated.",
                })
            }
        }
    } catch(err) {
        next(err);
    }
}

// newTransaction() ----------------------------------------------------------------------------------------------------
exports.newTransaction = async (req, res, next) => {

    try {

        const [pokes] = await db.query(
            "SELECT `id_pok` FROM `team` WHERE `id_user`=? AND `id_pok`=?",
            [req.user.id, req.body.id_pok_seller]
        );

        if (pokes.length === 0) {
            return res.status(201).json({
                message: "The pokemon isn't in the team.",
            });
        }

        const [rows] = await db.query("INSERT INTO `transaction`(`id_seller`, `username_seller`, `id_pok_seller`, `name_pok_seller`, `id_pok_buyer`, `name_pok_buyer`) VALUES(?,?,?,?)",
            [req.user.id, req.user.username, req.body.id_pok_seller, req.body.name_pok_seller,  req.body.id_pok_buyer, req.body.name_pok_buyer])

        if (rows.affectedRows === 1) {
            return res.status(201).json({
                message: "The transaction has been published.",
            })
        }


    } catch (error) {
        next(error)
    }
}

exports.deleteTransaction = async (req, res, next) => {

    try {

        const id_seller = await db.query(
            "SELECT `id_seller` FROM `transaction` WHERE `id_transaction`= ?",
            req.body.id_transaction);

        if (id_seller === req.user.id) {
            return res.status(201).json({
                message: "This transaction does not belong to this user.",
            });
        }

        const [rows] = await db.query(" DELETE FROM `transactions` WHERE `id_transaction` = ?",
            req.body.id_transaction);

        if (rows.affectedRows === 1) {
            return res.status(201).json({
                message: "The transaction has been removed.",
            })
        }

    } catch (error) {
        next(error)
    }
}

exports.acceptTransaction = async (req, res, next) => {

    try {

        const [pokes] = await db.query(
            "SELECT `id_pok` FROM `team` WHERE `id_user`=? AND `id_pok`=?",
            [req.user.id, req.body.id_pok_buyer]);

        if (pokes.length === 0) {
            return res.status(201).json({
                message: "The pokemon isn't in the team.",
            });
        }

        let [rows] = await db.query("UPDATE `team` SET `id_pok` = ?  WHERE `id_user`= ? AND `id_pok`= ? LIMIT 1",
            [req.body.id_pok_seller, req.user.id,  req.body.id_pok_buyer])

        if (rows.affectedRows === 1) {
            next()
        }

        [rows] = await db.query("UPDATE `team` SET `id_pok` = ?  WHERE `id_user`= ? AND `id_pok`= ? LIMIT 1",
            [req.body.id_pok_buyer, req.body.id_seller, req.body.id_pok_seller])

        if (rows.affectedRows === 1) {
            return res.status(201).json({
                message: "The team has been updated.",
            })
        }

    } catch (error) {
        next(error)
    }
}