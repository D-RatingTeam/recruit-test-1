import db from './index.js'

class ContentModel {
    findAll() {
        return db.getAll()
    }
      //function to add data to content model in db
      addData(data){
        return db.set(data)
    }
}

export const Content = new ContentModel()
