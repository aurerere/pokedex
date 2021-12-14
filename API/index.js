// IMPORTS ------------------------------------------------------------------------------------------------------------
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');


// SQL CONNECTION - APP ------------------------------------------------------------------------------------------------
const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pokedex'
});


class pokedex
{
    static find(search, query, callback)
    {
        let req = ``;
        if (!search) {
            req = ` SELECT 
                    pokedex.id_pok AS id, 
                    pokedex.nom_pok AS name, 
                    pokedex.types.type1, 
                    pokedex.types.type2, 
                    pokedex.image 
                    FROM pokedex INNER JOIN types ON pokedex.id_pok = types.id_pok`;
        }
        else {
            req = ` SELECT 
                    pokedex.id_pok AS id, 
                    pokedex.nom_pok AS name, 
                    pokedex.types.type1, 
                    pokedex.types.type2, 
                    pokedex.image 
                    FROM pokedex 
                    INNER JOIN types ON pokedex.id_pok = types.id_pok 
                    WHERE pokedex.nom_pok LIKE "%${query}%"`;
        }

        db.query(req, (err, result) => {
            if (err) return callback(true, false);
            else {
                for (let i = 0; i < result.length; ++i) {
                    let temp = result[i];
                    if (temp.type2 === '') temp.types = [temp.type1];

                    else temp.types = [temp.type1, temp.type2];

                    delete temp.type2;
                    delete temp.type1;
                }

                return callback(false, result);
            }
        });
    }
    static findOne(id)
    {
        let req = ` SELECT 
                    pokedex.id_pok AS id, 
                    pokedex.nom_pok AS name,
                    pokedex.
                    `;

    }
}


// MIDDLEWARE AND BODYPARSER -------------------------------------------------------------------------------------------
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


// ROUTES --------------------------------------------------------------------------------------------------------------
app.route('/pokemon')
    .get((req, res) => {
        pokedex.find(false, null, (err, result) => {
            if (!err) res.send({pokemon: result})
            else res.status(501).send({error: {status: 500, message: 'Internal Server Error'}});
        });
    })

app.route('/pokemon/search/:value')
    .get((req, res) => {
        pokedex.find(true, req.params.value, (err, result) => {
            if (!err) res.send({pokemon: result});
            else res.status(501).send({error: {status: 500, message: 'Internal Server Error'}});
        });
    });

app.route('/pokemon/search/')
    .get((req, res) => {
        pokedex.find(false, null, (err, result) => {
            if (!err) res.send({pokemon: result});
            else res.status(501).send({error: {status: 500, message: 'Internal Server Error'}});
        });
    });

app.use((req, res) => {
    res.status(404).send({error: {status: 404, message: 'Not Found'}});
});

app.listen('444', () => {
    console.log('Server started: http://localhost:444')
});