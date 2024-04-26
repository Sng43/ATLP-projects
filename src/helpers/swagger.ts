import express  from "express";
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import {version} from '../../package.json';
// import log from 'logger';

const options: swaggerJsdoc.Options = {
    definition : {
        openapi: "3.0.0",
        info:{
            title: "REST API My_Brand",
            version
        },
        servers: [
            {
                url: 'http://localhost:7000',
            }
        ]
    },
    apis: ['./src/router/*.ts', "./src/db/*.ts"]
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app: express.Application, port:number){
    //Swagger page
    app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))

    //Docs in JSON format
    app.get('docs.json', (req: express.Request, res: express.Response) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec);
    });
    console.log(`Docs available at hhtp://localhost:${port}/docs`);
};

export default swaggerDocs;