import axios from 'axios'

import { baseurlDev, baseurlProd } from '../config/config.json'

let baseurl = process.env.NODE_ENV === 'development' ? baseurlDev : baseurlProd

const addTask = async (requestData) => {
    return await axios.post(`${baseurl}/task/add`, requestData)
}

const getTask = async () => {
    return await axios.get(`${baseurl}/task/get`)
}

const getTaskById = async (id) => {
    return await axios.get(`${baseurl}/task/get/${id}`)
}


const updateTaskStatus = async (id, status) => {
    return await axios.put(`${baseurl}/task/update/${id}`, { status })
}



export { addTask, getTask, getTaskById, updateTaskStatus }
