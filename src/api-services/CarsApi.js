import axios from 'axios'

import { baseurlDev, baseurlProd } from '../config/config.json'

let baseurl = process.env.NODE_ENV === 'development' ? baseurlDev : baseurlProd

const addCarApi = async (requestData) => {
    return await axios.post(`${baseurl}/car/add`, requestData)
}

const getCarApi = async () => {
    return await axios.get(`${baseurl}/car/get`)
}

export { addCarApi, getCarApi }