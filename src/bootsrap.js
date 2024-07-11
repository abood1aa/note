import addRuot from './user/user.router.js'
import addPOOst from './note/note.router.js'
import conected from '../database/connection.js'
import addPhotos from './photo/photo.router.js'
const bootstrap=(app,express)=>{
    conected()
    app.use('/uploads',express.static('uploads'))
    app.use(express.json())
    app.use('/user',addRuot)
    app.use('/note',addPOOst)
    app.use('/photo',addPhotos)

}


export default bootstrap