const express = require('express')
const app = express()
const port = 3000

app.use( express.json() )

app.get('/', (req,res)=>{
    res.send('GET request')
})
app.post('/', (req,res)=>{
    res.send('POST request')
})

app.listen(port, ()=>{
    console.log(`LISTEN ON PORT ${port}...`);
})
