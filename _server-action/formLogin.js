'use server'

import axios from "axios";

const LoginForm = async (username,password) => {
    try{
        const res  = await axios.post('http://127.0.0.1:8000/login/', {username:username,password:password},{withCredentials:true})
        return await res?.data
    }catch(err){
        return err?.response.data
    }
}
export default LoginForm;