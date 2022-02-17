
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
 export const getWebContent= async (req,res) => {
    try{
       //fetching id of the todo by query parameter
       let {idTodo} = req.query;
       //if id is null or not a number return wrong id format
        if(!idTodo || isNaN(+idTodo))return res.status(500).json({message:'wrong id format'});
        //Do the query to fetch data from the external api;
       let data = await rp({uri:`https://jsonplaceholder.typicode.com/todos/${idTodo}`, json: true }) 
       //copy the received data and remove fields that are not mandatory by destructuring
       let {id,userId,...todoInfo} = data;
       //return object to user with 200 status code
       res.status(200).json(todoInfo);
    } catch(e){
     res.status(500).json({message :'someting went wrong'});
    }
 

}
