import axios from 'axios'

const instance = axios.create({
    baseURL: "https://tiktok-clone-bc.herokuapp.com/"
})

export default instance