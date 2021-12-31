// IMPORTS LIBRARY -----------------------------------------------------------------------------------------------------
const   express = require('express'),
        {body} = require('express-validator'),
        bodyParser = require('body-parser'),
        cors = require('cors'),
        swaggerUi = require("swagger-ui-express"),
        swaggerFile = require('./documentation/documentation.json');


// IMPORTS INTERNAL ----------------------------------------------------------------------------------------------------
const   {register} = require('./src/controllers/registerController'),
        {login} = require('./src/controllers/loginController'),
        {getUser} = require('./src/controllers/getUserController'),
        pokedex = require('./src/controllers/pokedexController'),
        {timeGift, updateTeam, newTransaction, deleteTransaction} = require("./src/controllers/transactionController");

// APP -----------------------------------------------------------------------------------------------------------------
const app = express();
const port = '444';

// MIDDLEWARE AND BODYPARSER -------------------------------------------------------------------------------------------
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// SWAGGER DOCUMENTATION -----------------------------------------------------------------------------------------------
/*app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile, { explorer: true }))*/

// ROUTES IDENTIFICATION -----------------------------------------------------------------------------------------------
app.route('/register')
    .post([
        body('username',"The name must be of minimum 3 characters length")
            .notEmpty().escape().trim().isLength({ min: 3 }),
        body('email',"Invalid email address")
            .notEmpty().escape().trim().isEmail(),
        body('password',"The Password must be of minimum 4 characters length")
            .notEmpty().trim().isLength({ min: 4 }),
    ], register);

app.route('/auth')
    .post([
        body('email',"Invalid email address")
            .notEmpty().escape().trim().isEmail(),
        body('password',"The Password must be of minimum 4 characters length")
            .notEmpty().trim().isLength({ min: 4 }),
    ],login);

app.route('/users/me')
    .get(getUser, (req, res) => {
        console.log(req.user)
        res.send(req.user)
    });

// ROUTES POKEMON'S ----------------------------------------------------------------------------------------------------
app.route('/pokemon')
    .get((req, res) => {
        pokedex.find('pokedex', false, (err, result) => {
            if (!err) res.send({pokemon: result});
            else res.status(500).send({error: {status: 500, message: 'Internal Server Error'}});
        });
    })

app.route('/pokemon/search/:value')
    .get((req, res) => {
        pokedex.find('pokedex', req.params.value, (err, result) => {
            if (!err) res.send({pokemon: result});
            else res.status(500).send({error: {status: 500, message: 'Internal Server Error'}});
        });
    });

app.route('/pokemon/:id')
    .get((req, res) => {
        if (isNaN(req.params.id)) {
            res.status(400).send({error: {status: 400, message: 'Invalid query'}});
        }
        else {
            pokedex.findOne(req.params.id, (err, result) => {
                if (!err) res.send({pokemon: result});
                else res.status(500).send({error: {status: 500, message: 'Internal Server Error'}});
            });
        }
    });

app.route('/users')
    .get((req, res) => {
        pokedex.find('users', false, (err, result) => {
            if (!err) res.send({users:result});
            else res.status(500).send({error: {status: 500, message: 'Internal Server Error'}});
        })
    })

app.route('/users/search/:value')
    .get((req, res) => {
        pokedex.find('users', req.params.value, (err, result) => {
            if (!err) res.send({users:result});
            else res.status(500).send({error: {status: 500, message: 'Internal Server Error'}});
        })
    })

// ROUTES TEAM ---------------------------------------------------------------------------------------------------------
app.route('/team')
    .get(getUser, (req, res) => {
        pokedex.find('team', req.user.id, (err, result) => {
            if (!err) res.send({pokemon: result})
            else res.status(500).send({error: {status: 500, message: 'Internal Server Error'}});
        });
    })

app.route('/team/gift')
    .post(getUser, timeGift, updateTeam);

// ROUTES TRANSACTIONS -------------------------------------------------------------------------------------------------
app.route('/transactions')
    .get((req, res) => {
        pokedex.find('transactions', false, (err, result) => {
            if (!err) res.send({transactions:result});
            else res.status(500).send({error: {status: 500, message: 'Internal Server Error'}});
        })
    })

    .post(getUser, newTransaction)

    .delete(getUser, deleteTransaction)


app.route('/transactions/search/:value')
    .get((req, res) => {
        pokedex.find('transactions', req.params.value, (err, result) => {
            if (!err) res.send({transactions:result});
            else res.status(500).send({error: {status: 500, message: 'Internal Server Error'}});
        })
    })

app.route('/doc')
    .get((req, res) => {
        res.send(swaggerFile)
    })

// 404 -----------------------------------------------------------------------------------------------------------------
app.use((req, res) => {
    res.status(404).send({error: {status: 404, message: 'Not Found', doc: `http://localhost:${port}/doc/`}});
});

// Server --------------------------------------------------------------------------------------------------------------
app.listen(port, () => {
    console.log(`Server started: http://localhost:${port}/doc/`)
});
