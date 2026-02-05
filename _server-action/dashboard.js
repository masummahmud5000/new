'use server'

import { redirect } from "next/dist/server/api-utils";
import { serverApi } from "./axiosInstanse";

const dashboardAction = async () => {
  try{
    const res = await serverApi({url: 'profile/'})
    return res?.data;
  }catch(err){
    return ({tokenError: 401})
  }
}

export default dashboardAction;
