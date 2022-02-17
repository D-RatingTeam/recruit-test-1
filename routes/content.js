
import { Router } from 'express'
import { getContent,getWebContent } from '../controllers/content.js'

const route = Router()

route.get('/contents', getContent)
/**
 * @swagger
 * /test:
 *   get:
 *     description: choosing todo number and returning the object of todo if it exist.
 *     parameters:
 *       - name: idTodo
 *         in: query
 *         type: string
 *     responses:
 *        "200":
 *          description: an object with title and id
 *        "500":
 *          description: error:error message
 */
 route.get('/test', getWebContent);

export default route
