'use server'

import { serverApi } from "./axiosInstanse";

const dashboardAction = async () => {
    try{
      const res = await serverApi({url: 'profile/'});
      return res?.data;
    }catch(err){
      return err
    }
}

export default dashboardAction;
