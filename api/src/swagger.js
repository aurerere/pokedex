// IMPORTS -------------------------------------------------------------------------------------------------------------
const swaggerAutogen = require('swagger-autogen')(),
    outputFile = './documentation/documentation.json',
    endpointsFiles = ['index.js'];

// SWAGGER AUTOGEN -----------------------------------------------------------------------------------------------------
swaggerAutogen(outputFile, endpointsFiles).then()