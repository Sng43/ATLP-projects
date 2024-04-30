import express from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { version } from '../../package.json';


const options: swaggerJsdoc.Options = {
    definition: {
        openapi: "3.0.0",
        info:{
            title: 'REST API Docs',
            version
        },
        servers: [
            {
                url: "http://localhost:7000"
            },
        ],
    },
    apis: ['./src/router/*.ts', './src/controllers/*.ts'],
}

const swaggerSpec = swaggerJsdoc(options)

function swaggerDocs(app: express.Application, port: number){
    //Swagger page
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

    //Docs in JSON format
    app.get('docs.json', (req: express.Request, res: express.Response) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });

    console.log(`Docs available at http://localhost:${port}/docs`)
}

export default swaggerDocs;