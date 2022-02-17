
import { Content } from '../models/content.js'
import rp from 'request-promise'

// Get
export const getContent = async (req, res) => {
    console.log("Get contents")
    const contents = await Content.findAll()
    res.send(contents)
}

/**
 * This function seems useless but is useful for this company
 * don't forget why your are reading this code
 */
async function getDummyData() {
    const data = ['data_one', 'data_two','test1','test2']
      //exporting all databse is not a good practice
    //using Content model to add data to databse
    data.forEach(async d => await Content.addData(d))

    console.log(await db.getAll())
}

/**
 * This function gets a remote object from following url :
 * https://jsonplaceholder.typicode.com/todos/1
 * This method should only return title and completed
 */
async function getWebContent() {
    throw new Error('not implemented yet')
}
