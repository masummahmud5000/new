'use server'

import { serverApi } from "../axiosInstanse"

const AddMoneyAction = async (balance,password) => {
    try{
        const res = await serverApi({url:'addMoney/',method: 'post', data:{balance,password}})
        return res?.status;
    }catch(err){
        return err;
    }

}
export default AddMoneyAction;