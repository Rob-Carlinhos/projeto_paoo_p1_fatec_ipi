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

console.log(url)