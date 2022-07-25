import axios from 'axios'

import { baseurlDev, baseurlProd } from '../config/config.json'

let baseurl = process.env.NODE_ENV === 'development' ? baseurlDev : baseurlProd

const addCustomerApi = async (requestData) => {
    return await axios.post(`${baseurl}/customer/add`, requestData)
}

const getCustomerByPhoneApi = async (phone) => {
    return await axios.get(`${baseurl}/customer/get/${phone}`)
}

export { addCustomerApi, getCustomerByPhoneApi }
