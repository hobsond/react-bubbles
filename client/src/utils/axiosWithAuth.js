import axios from 'axios'
import {useHistory} from 'react-router-dom'

export const axiosWithAuth = ()=>{
    
    const token = localStorage.getItem('token')

    return axios.create({
        headers:{
            Authorization:token,
        }
    })
}

