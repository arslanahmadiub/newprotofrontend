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

const updateTaskImages = async (id, requestData) => {
    return await axios.post(`${baseurl}/task/image/${id}`, requestData)
}

const deleteTask = async (id) => {
    return await axios.delete(`${baseurl}/task/delete/${id}`)
}
const updateTask = async (id, data) => {
    return await axios.put(`${baseurl}/task/update_task/${id}`, data)
}
export {
    addTask,
    getTask,
    getTaskById,
    updateTaskStatus,
    updateTaskImages,
    deleteTask,
    updateTask,
}
