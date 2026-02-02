'use server'
import axios from "axios"

const FormSubmit = async(name,username,password) => {
    // console.log(name,username,password)
    try{
        const res = await axios.post('http://127.0.0.1:8000/register/', {name:name,username:username,password:password});
        return await res?.data
    }catch(err){
        return err.response?.data
    }
}
export default FormSubmit;