'use server'

import { redirect } from "next/navigation";
import { cookies } from "next/headers"

const logoutAction = async () => {
    const cookieStore = await cookies();
    let token = cookieStore.get('access_token')?.value;
    if (!token){
        console.log('No token')
    }else{
        cookieStore.delete('access_token');
        cookieStore.delete('refresh_token');
        redirect('/login')
    }
}
export default logoutAction;