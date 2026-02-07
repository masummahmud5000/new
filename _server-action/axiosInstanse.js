'use server'

import axios from "axios"
import { cookies } from "next/headers"

const api = axios.create({baseURL: 'http://127.0.0.1:8000/'});

export const serverApi = async (config) => {
    const cookieStore = await cookies();
    let access = cookieStore.get('access_token')?.value
    let refresh = cookieStore.get('refresh_token')?.value
    try{
        return await api({...config, headers: {Authorization: `Bearer ${access}`}});
    }catch(err){
        if (err?.response.status === 401 && refresh){
            try{
                const r = await api.post('http://127.0.0.1:8000/refresh/', {refresh})
                const access = r.data.access
                cookieStore.set('access_token', access, {httpOnly: true, secure: false, sameSite: 'lax'});
                return await api({...config, headers: {Authorization: `Bearer ${access}`}})
            }catch{
                cookieStore.delete('access_token');
                cookieStore.delete('refresh_token');
                throw new Error('refreshTokenInvalid');
            }
        }
    }
}