const axios = require ("axios")
require("dotenv").config()

const {
    APPID,
    CITY_NAME,
    LAT,
    LON,
    UNITS,
    IDIOM,
    CNT,
    URL_BASE
} = process.env

const url = `${URL_BASE}?appid=${APPID}&q=${CITY_NAME}&lat=${LAT}&lon=${LON}&units=${UNITS}&lang=${IDIOM}&cnt=${CNT}`

axios.get(url)
.then(res => {
    console.log('data')
    console.log(res.data)
    console.log('ººººººººººººººººººººººººººººººº')
    console.log('*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*')
    return res.data
})
.then(res2 => {
    if (res2 && res2.coord) {
        console.log('Consulta de condições atuais em função de latitude/longitude:')
        console.log('Cidade: ', res2.name)
        console.log('Latitude:', res2.coord.lat )
        console.log('Longitude:', res2.coord.lon)
        console.log('Sensação Térmica: ', res2.main.feels_like + ' °C')
        console.log('Descrição: ', res2.weather[0].description)
        console.log('ººººººººººººººººººººººººººººººº')
        console.log('*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*')
    } else {
        console.log('Não foi possível obter Resultados.')
    }
    return res2
})
.catch(error => {
    console.error(error);
});