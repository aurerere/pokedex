// IMPORTS -------------------------------------------------------------------------------------------------------------
const db = require("../db");

// EXPORTS -------------------------------------------------------------------------------------------------------------
module.exports = {find, findOne};

// find() ---------------------------------------------------------------------------------------------------------------
function find(table, search, callback) {

    let req;

    if (table === 'pokedex' || table === 'team') {

        if (table === 'team') {
            req = ` SELECT
                    pokedex.id_pok AS id,
                    pokedex.nom_pok AS name,
                    pokedex.types.type1,
                    pokedex.types.type2,
                    pokedex.image
                    FROM pokedex 
                    INNER JOIN types ON pokedex.id_pok = types.id_pok
                    INNER JOIN team ON pokedex.id_pok = team.id_pok
                    WHERE team.id_user = ${search}`;

        } else if (table === 'pokedex') {
            if (!search) {
                req = ` SELECT
                        pokedex.id_pok AS id,
                        pokedex.nom_pok AS name,
                        pokedex.types.type1,
                        pokedex.types.type2,
                        pokedex.image
                        FROM pokedex INNER JOIN types ON pokedex.id_pok = types.id_pok`;
            } else {
                req = ` SELECT
                        pokedex.id_pok AS id,
                        pokedex.nom_pok AS name,
                        pokedex.types.type1,
                        pokedex.types.type2,
                        pokedex.image
                        FROM pokedex
                        INNER JOIN types ON pokedex.id_pok = types.id_pok
                        WHERE pokedex.nom_pok LIKE "%${search}%" 
                        OR pokedex.types.type1 LIKE "%${search}%"
                        OR pokedex.types.type2 LIKE "%${search}%"`;
            }
        }

        db.query(req, (err, result) => {
            if (err) return callback(true, false);
            else {
                for (let i = 0; i < result.length; ++i) {
                    let temp = result[i];

                    if (temp['type2'] === '') temp.types = [temp['type1']];
                    else temp.types = [temp['type1'], temp['type2']];

                    delete temp['type2'];
                    delete temp['type1'];
                }

                return callback(false, result);
            }
        });
    }
    else if (table === 'users') {
        if (!search) {
            req = ` SELECT
                        users.id AS id,
                        users.username AS username,
                        FROM users`;
        }
        else {
            req = ` SELECT
                        users.id AS id,
                        users.username AS username,
                        FROM users
                        WHERE users.username LIKE "%${search}$%"`;
        }

        db.query(req, (err, result) => {
            if (err) return callback(true, false);
            else return callback(false, result);
        });
    }
    else if (table === 'transactions') {
        if (!search) {
            req = ` SELECT
                        transactions.id_seller AS id_seller,
                        transactions.username_seller AS username_seller,
                        transactions.id_pok_seller AS id_pok_seller,
                        transactions.id_pok_buyer AS id_pok_buyer,
                        FROM transactions`;
        }
        else {
            req = ` SELECT
                        transactions.id_seller AS id_seller,
                        transactions.username_seller AS username_seller,
                        transactions.id_pok_seller AS id_pok_seller,
                        transactions.id_pok_buyer AS id_pok_buyer,
                        FROM transactions
                        WHERE transactions.username_seller LIKE "%${search}$%"
                        OR transactions.name_pok_seller LIKE "%${search}$%"`;
        }

        db.query(req, (err, result) => {
            if (err) return callback(true, false);
            else return callback(false, result);
        });
    }
    else return callback(true, false);
}

// findOne() ------------------------------------------------------------------------------------------------------------
function findOne(id, callback) {
    let req = ` SELECT 
                pokedex.id_pok AS id,
                pokedex.nom_pok AS name,
                pokedex.types.type1,
                pokedex.types.type2,
                pokedex.image,
                pokedex.weaknesses.bug,
                pokedex.weaknesses.dragon,
                pokedex.weaknesses.electric,
                pokedex.weaknesses.fairy,
                pokedex.weaknesses.fight,
                pokedex.weaknesses.fire,
                pokedex.weaknesses.flying,
                pokedex.weaknesses.ghost,
                pokedex.weaknesses.grass,
                pokedex.weaknesses.ground,
                pokedex.weaknesses.ice,
                pokedex.weaknesses.normal,
                pokedex.weaknesses.poison,
                pokedex.weaknesses.psychic,
                pokedex.weaknesses.rock,
                pokedex.weaknesses.steel,
                pokedex.weaknesses.water,
                pokedex.stats.hp,
                pokedex.stats.attack,
                pokedex.stats.defense,
                pokedex.stats.sp_attack,
                pokedex.stats.sp_defense,
                pokedex.stats.speed
                FROM pokedex
                INNER JOIN types ON pokedex.id_pok = types.id_pok
                INNER JOIN weaknesses ON pokedex.id_pok = weaknesses.id
                INNER JOIN stats ON pokedex.id_pok = stats.id
                WHERE pokedex.id_pok = ${id}`;

    db.query(req, (err, result) => {
        if (err) return callback(true, false)
        else {
            function move(obj, keys, parent) // To organise data in Object
            {
                obj[parent] = {};
                for (let i = 0; i < keys.length; ++i) {
                    obj[parent][keys[i]] = obj[keys[i]];
                    delete obj[keys[i]];
                }
            }

            for (let i = 0; i < result.length; ++i)
            {
                let temp = result[i];

                if (temp['type2'] === '') temp.types = [temp['type1']];
                else temp.types = [temp['type1'], temp['type2']];
                delete temp['type2'];
                delete temp['type1'];

                let keys = ['hp', 'attack', 'defense', 'sp_attack', 'sp_defense', 'speed'];
                move(temp, keys, 'stats');

                keys = ['bug', 'dragon', 'electric', 'fairy', 'fight', 'fire',
                        'flying', 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison',
                        'psychic', 'rock', 'steel', 'water'];
                move(temp, keys, 'efficiencies');

            }

            return callback(false, result);
        }
    });
}
