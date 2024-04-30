require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const client = require('./dbconnect')


app.use( express.json() )
app.use( express.urlencoded({extended:false}))
//app.use( express.urlencoded({extended:false}))


//GET - POST TO HOME('/') PATH
app.get('/', (req,res)=>{
    res.send(`GET request`)
})
app.get('/mongo-rail', async (req, res)=>{
    try {
        client.connect();
        const coleccion1 = client.db('test').collection('coleccion1');
        const data = await coleccion1.find().toArray();
        res.send(data)
    } catch (e) {
        console.log(e);
    }
})
app.get('/mongo', async (req, res)=>{
    try{
        client.connect();
        const teachers = client.db('persons').collection('teachers');
        const data = await teachers.find().toArray()
        res.send(data)
    }
    catch(e){
        console.log(e);
    }
})
app.post('/', (req,res)=>{
    res.send(`POST Request - isAdmin:${req.body.isAdmin}`)
})




app.get('/user/:id', (req, res, next)=>{
    console.log('ID: ', req.params.id)
    if(req.params.id == 0) next('route')
    else next()
}, (req, res, next)=>{
    res.send('Regular')
})
app.get('/user/:id', (req, res, next)=>{
    res.send('Special')
})





app.listen(port, ()=>{
    console.log(`LISTEN ON PORT ${port}...`);
})
