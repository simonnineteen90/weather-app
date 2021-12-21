require('dotenv').config()
const request = require('postman-request')

const secretKey = process.env.API_KEY
const url = `http://api.weatherstack.com/current?access_key=${secretKey}&query=London`

request({url:url, json: true}, (err, response) => {
    // console.log(response.body.current)
    const data  = response.body.current
    const message = `It is ${data.weather_descriptions[0].toLowerCase()} and the temperature is currently ${data.temperature} degrees but it feels like ${data.feelslike} degrees`
    console.log(message)
})
