'use server'

import { serverApi } from "./axiosInstanse";

const dashboardAction = async () => {
    const res = await serverApi({url: 'profile/'})
    if (res?.tokenError === 401){
      return res;
    }else{
      return res?.data
    }
}

export default dashboardAction;
