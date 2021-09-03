import express from 'express'
import mongoose from 'mongoose'
import Videos from './dbModel.js'
import Data from './data.js'



const app = express()
const port = process.env.PORT || 9000
const db_connection_url = "mongodb+srv://akram:q6DFng5QiXEQKe3@cluster0.hf3u2.mongodb.net/tiktok?retryWrites=true&w=majority"

app.use(express.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'),
    res.setHeader('Access-Control-Allow-Headers', '*'),
    next()
})


mongoose.connect(db_connection_url, {
    useUnifiedTopology: true
})

app.post('/v2/posts', (req, res) => {
    const dbVideos = req.body
    Videos.create(dbVideos, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

app.get('/v2/posts', (req,res) => {
    Videos.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})
app.get('/', (req, res)=>res.status(200).send("hello world"))

app.listen(port, () => console.log(`listening on localhost: ${port}`))