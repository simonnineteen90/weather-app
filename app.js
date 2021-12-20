const request = require('postman-request')

const secretKey = 'b9ec91f5ad29fa44bc4d33883e70e958'
const url = `http://api.weatherstack.com/current?access_key=${secretKey}&query=London`

request({url:url}, (err, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)   
})