const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use( express.json() )
app.use( express.urlencoded({extended:false}))
//app.use( express.urlencoded({extended:false}))


//GET - POST TO HOME('/') PATH
app.get('/', (req,res)=>{
    res.send(`GET request`)
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
