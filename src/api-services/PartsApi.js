import axios from 'axios'

import { baseurlDev, baseurlProd } from '../config/config.json'

let baseurl = process.env.NODE_ENV === 'development' ? baseurlDev : baseurlProd

const addPartsApi = async (requestData) => {
    console.log(process.env)
    return await axios.post(`${baseurl}/parts/add`, requestData)
}

const getPartsApi = async () => {
    return await axios.get(`${baseurl}/parts/get`)
}

const updatePartsApi = async (requestData, partId) => {
    return await axios.put(`${baseurl}/parts/update/${partId}`, requestData)
}

const deletePartsApi = async (partId) => {
    return await axios.delete(`${baseurl}/parts/remove/${partId}`)
}

export { addPartsApi, getPartsApi, updatePartsApi, deletePartsApi }
