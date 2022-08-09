import axios from 'axios'

import { baseurlDev, baseurlProd } from '../config/config.json'

let baseurl = process.env.NODE_ENV === 'development' ? baseurlDev : baseurlProd

const addComment = async (id, comment) => {
    return await axios.post(`${baseurl}/comments/add/${id}`, comment)
}

export { addComment }
