const mockAPIResponse = require('./mockAPI.js')
const PORT = 8081

// add  the configuration to be able to the use of .env variables
const dotenv = require('dotenv');
dotenv.config();

// TODO: Create an instance for the server
const express = require('express')
const app = express()

// TODO: Configure cors to avoid cors-origin issue
const cors = require("cors");
app.use(cors());
// TODO: Configure express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// the configuration of express static directory.
app.use(express.static("dist"));


app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})


const ApiURL = 'https://api.meaningcloud.com/sentiment-2.1'
const ApiKey = process.env.API_KEY


const axios = require('axios')
app.post('/add-url', async (req, res) => {
    const { articleUrl } = req.body
    const meaningCloudUrl = `${ApiURL}?key=${ApiKey}&url=${articleUrl}&lang=en`
    try {
      const {
        data: { sentence_list, agreement, score_tag, subjectivity, confidence, irony },
      } = await axios(meaningCloudUrl)
      res.send({
        text: sentence_list[0].text || '',
        agreement: agreement,
        score_tag: score_tag,
        subjectivity: subjectivity,
        confidence: confidence,
        irony: irony,
      })
    } catch (error) {
      console.log(error.message)
    }
  })

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})


module.exports = {
  app,
}