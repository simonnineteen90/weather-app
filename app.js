require('dotenv').config()
const request = require('postman-request')

const weatherKey = process.env.WEATHER_API_KEY
const weatherUrl = `http://api.weatherstack.com/current?access_key=${weatherKey}&query=London`
const locationKey = process.env.LOCATION_API_KEY
const locationUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/York.json?access_token=${locationKey}&limit=1`

request({ url: weatherUrl, json: true }, (err, response) => {
  if (err) {
    console.log(`Ooops something went wrong: ${err}`)
  } else if (response.body.error) {
    console.log(`Ooops something went wrong with the response. Error code: ${response.body.error.code}. ${response.body.error.info}`)
  } else {
    const data = response.body.current
    const message = `It is ${data.weather_descriptions[0].toLowerCase()} and the temperature is currently ${data.temperature} degrees but it feels like ${data.feelslike} degrees`
    console.log(message)
  }
})

request({ url: locationUrl, json: true }, (err, response) => {
  if (err) {
    console.log(`Ooops something went wrong: ${err}`)
  } else if (response.body.features.length === 0) {
    console.log('Ooops something went wrong with the response. Location not found.')
  } else {
    const data = response.body.features[0]
    const long = data.center[0]
    const lat = data.center[1]
    console.log(`Longitude: ${long} Latitude: ${lat}`)
  }
})
