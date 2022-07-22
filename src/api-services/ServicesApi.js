import axios from 'axios'

import { baseurlDev, baseurlProd } from '../config/config.json'

let baseurl = process.env.NODE_ENV === 'development' ? baseurlDev : baseurlProd

const addServiceApi = async (requestData) => {
    return await axios.post(`${baseurl}/service/add`, requestData)
}

const viewServiceApi = async () => {
    return await axios.get(`${baseurl}/service/get`)
}

const detailServiceApi = async (serviceId) => {
    return await axios.get(`${baseurl}/service/get/${serviceId}`)
}

const addNewCarInServiceApi = async (serviceId, requestData) => {
    return await axios.put(
        `${baseurl}/service/update/${serviceId}`,
        requestData
    )
}

export {
    addServiceApi,
    viewServiceApi,
    detailServiceApi,
    addNewCarInServiceApi,
}
