require('dotenv').config()
const request = require('postman-request')

const secretKey = process.env.API_KEY
const url = `http://api.weatherstack.com/current?access_key=${secretKey}&query=London`

request({url:url, json: true}, (err, response) => {
    console.log(response.body.current)
    console.log('some text')
})
