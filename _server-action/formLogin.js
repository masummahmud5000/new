'use server'

import axios from "axios";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

const LoginForm = async (username,password) => {
    try{
        const res  = await axios.post('http://127.0.0.1:8000/login/', {username:username,password:password})
        const setCookie = res.headers['set-cookie'];
        /////////////////////
        if (setCookie && Array.isArray(setCookie)){
            const cookieStore = await cookies();

            setCookie.forEach(cookieString => {

                const parts = cookieString.split(';');
                const [name, value] = parts[0].split('=');
                
                cookieStore.set(name, value,{httpOnly: true, sameSite: 'lax', secure: false,})
            })
        }
        ///////////////////
        return res?.data
    }catch(err){
        return err?.response?.data
    }
}
export default LoginForm;