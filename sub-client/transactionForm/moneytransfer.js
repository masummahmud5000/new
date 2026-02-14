'use client'

import '@/app/globals.css'
import MoneyTransferAction from "@/_server-action/transactionForm/moneyTransfer";
import { useState } from "react";
import { useRouter } from "next/navigation";

const MoneyTransfer = (props) => {
    const router = useRouter() 
    const [isLoading,setIsLoading] = useState(false)

    const [userError,setUserError] = useState('')
    const [balanceError,setBalanceError] = useState('')
    const [passwordError,setPasswordError] = useState('')

    const [personalUser,setPersonalUser] = useState('')
    const [balance,setBalance] = useState('')
    const [password,setPassword] = useState('')

    const submitHandle = async(e) => {
        e.preventDefault();
        setIsLoading(true);
        try{
            const res = await MoneyTransferAction(personalUser,balance,password);
            if (res === 200){
                props.setMoneyTransfer(false)
            }
            if (res?.message === 'refreshTokenInvalid'){
                router.push('/login')
            }else if(res?.non_field_errors?.includes('password')){
                setPasswordError('Invalid Password , try again')
                setUserError('')
                setBalanceError('')
                setTimeout(()=>setPasswordError(''),4000)

            }else if(res?.non_field_errors?.includes('self')){
                setUserError('Sorry Money Transfer Not Allowed!')
                setBalanceError('')
                setPasswordError('')
                setTimeout(()=>setUserError(''),4000)

            }else if(res?.non_field_errors?.includes('receiver')){
                setUserError('Invalid UserId, User Not Found')
                setBalanceError('')
                setPasswordError('')
                setTimeout(()=>setUserError(''),4000)
            }else if(res?.non_field_errors?.includes('balance-')){
                setBalanceError('Insufficient Balance!')
                setUserError('')
                setPasswordError('')
                setTimeout(()=>setBalanceError(''),4000)
                
            }else if(res?.non_field_errors?.includes('balance_zoro')){
                setBalanceError('Minimum Transfer 50 Taka')
                setUserError('')
                setPasswordError('')
                setTimeout(()=>setBalanceError(''),4000)
                
            }else if(res?.non_field_errors?.includes('balance_limit')){
                setBalanceError('Maximum Transfer 30,000 Taka')
                setUserError('')
                setPasswordError('')
                setTimeout(()=>setBalanceError(''),4000)
            }
        }finally{
            setIsLoading(false)
        }
        
    }

    return(
        <main className="pt-15">
            <form onSubmit={submitHandle} className="cashOutForm flex flex-col bg-amber-500 px-10 lg:px-50 py-5 gap-1 rounded-xl border-2 border-red-800">
                <div className="mt-5">                    
                    <input type="text" required placeholder="Personal User ID" onChange={(e)=>setPersonalUser(e.target.value)}/>
                    <span className="fa fa-user-tag"/>
                </div>
                    <h1 className="error mr-5 text-red-600 animate-pulse">{userError}</h1>
                <div className="mt-5">                    
                    <input type="number" required placeholder="Balance" onChange={(e)=>setBalance(e.target.value)}/>
                    <span className="fa fa-dollar"/>
                </div>
                    <h1 className="error mr-5 text-red-600 animate-pulse">{balanceError}</h1>
                <div className="mt-5">                    
                    <input type="password" required placeholder="Enter Your Password" onChange={(e)=>setPassword(e.target.value)}/>
                    <span className="fa fa-lock"/>
                </div>
                    <h1 className="error mr-5 text-red-600 animate-pulse">{passwordError}</h1>
                <button type="submit" className='mt-5 bg-green-600 text-white w-full h-12 rounded-xl text-2xl cursor-pointer border-2  hover:bg-green-700'>{isLoading ? <h1><span className='fa fa-spinner animate-[spin_2s_linear_infinite] mr-3'></span>Proccess...</h1> : ('Money Transfer')}</button>
            </form>
        </main>
    )
}
export default MoneyTransfer;