const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/e5a857259296f652e7b931af33e9f42d/' + latitude + ',' + longitude

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, `${body.daily.data[0].summary} It is currenlty ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain. The high will be ${body.daily.data[0].temperatureHigh}° and the low will be ${body.daily.data[0].temperatureLow}°.`)
        }
    })
}

module.exports = forecast