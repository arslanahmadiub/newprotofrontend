import axios from 'axios'

import { baseurlDev, baseurlProd } from '../config/config.json'

let baseurl = process.env.NODE_ENV === 'development' ? baseurlDev : baseurlProd

const addServiceApi = async (requestData) => {
    return await axios.post(`${baseurl}/service/add`, requestData)
}

export { addServiceApi }
