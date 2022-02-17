
import express from 'express'
const app = express()
import routes from './routes/index.js'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
      title: 'API NODE' ,
        customCss: '.swagger-ui .topbar { display: none }'
    },
      security: [{
        bearerAuth: []
      }]
  };

  const options = {
    swaggerDefinition,
    apis: [
         './routes/*.js']
    };
    const swaggerSpec = swaggerJSDoc(options);
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(routes)

app.listen(3000, () => {

    console.log("Listening to port 3000")
})
