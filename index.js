import express from 'express'
import bootstrap from './src/bootsrap.js';

const app = express()




bootstrap(app,express)

app.listen(3000,()=>{
    console.log('server done');
})