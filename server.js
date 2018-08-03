const express = require('express')

const routeInclude = require('./api/api')

const app = express()
const PORT = process.env.PORT || 3000

app.use('/api/user', routeInclude)


const contact = [{
    name : "Noyon Ahmed",
    email : "anoyon002@gmail.com"
}]

app.get('/api/info', (req, res) => {
    res.json(contact)
})

app.post('/api/info', (req, res) => {
    res.json(contact)
})

app.put('/api/info', (req, res) => {
    res.json(contact)
})


// random string
app.get('/:id', (req, res, next) => {

    const id = req.params.id
    res.json({
        // id : req.url // with "/" method
        id
    })
})



app.get('/', (req, res) => {
    res.send('<h1>Welcome</h1>')
})

app.get('/post', (req, res) => {
    res.send('<h1>Hello, Full Stack Developer</h1>')
})

app.listen(PORT, () => {
    console.log('hello world');
})



