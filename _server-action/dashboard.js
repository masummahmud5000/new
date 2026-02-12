'use server'

import { serverApi } from "./axiosInstanse";
import { cookies } from "next/headers";

const dashboardAction = async () => {
  const cookieStore = await cookies();
  let token = cookieStore.get('refresh_token')?.value
    try{
      const res = await serverApi({url: 'profile/'});
      // console.log(token)
      return(
        {'token': token, 'user': res?.data?.username, 'status': res?.data?.userStatus}
      )
    }catch(err){
      return err
    }
}

export default dashboardAction;
