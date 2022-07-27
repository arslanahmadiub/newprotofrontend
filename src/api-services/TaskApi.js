import axios from 'axios'

import { baseurlDev, baseurlProd } from '../config/config.json'

let baseurl = process.env.NODE_ENV === 'development' ? baseurlDev : baseurlProd

const addTask = async (requestData) => {
    return await axios.post(`${baseurl}/task/add`, requestData)
}

export { addTask }
