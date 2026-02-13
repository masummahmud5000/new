'use server'

import { serverApi } from "../axiosInstanse";

const MoneyTransferAction = async(userId,balance,password) => {
    try{
        const res = await serverApi({url: 'moneytransfer/', method: 'post', data: {userId,balance,password}})
        return res?.status;
    }catch(err){
        return err;
    }
}
export default MoneyTransferAction;