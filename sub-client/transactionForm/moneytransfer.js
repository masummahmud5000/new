'use client'

import { useState } from "react";

const MoneyTransfer = () => {
    const [isLoading,setIsLoading] = useState(false)

    const [userError,setUserError] = useState('')
    const [balanceError,setBalanceError] = useState('')
    const [passwordError,setPasswordError] = useState('')

    const [personalUser,setPersonalUser] = useState('')
    const [balance,setBalance] = useState('')
    const [password,setPassword] = useState('')

    const submitHandle = (e) => {
        e.preventDefault();
        
    }

    return(
        <main className="pt-15">
            <form onSubmit={submitHandle} className="cashOutForm flex flex-col bg-amber-600 px-10 lg:px-50 py-5 gap-1 rounded-xl border-2 border-red-800">
                <div className="mt-5">                    
                    <input type="text" required placeholder="Personal User ID" onChange={(e)=>setPersonalUser(e.target.value)}/>
                    <span className="fa fa-user-tag"/>
                </div>
                    <h1 className="mr-5 text-red-600 animate-pulse">{userError}</h1>
                <div className="mt-5">                    
                    <input type="number" required placeholder="Balance" onChange={(e)=>setBalance(e.target.value)}/>
                    <span className="fa fa-dollar"/>
                </div>
                    <h1 className="mr-5 text-red-600 animate-pulse">{balanceError}</h1>
                <div className="mt-5">                    
                    <input type="password" required placeholder="Enter Your Password" onChange={(e)=>setPassword(e.target.value)}/>
                    <span className="fa fa-lock"/>
                </div>
                    <h1 className="mr-5 text-red-600 animate-pulse">{passwordError}</h1>
                <button type="submit" className='mt-5 bg-green-600 text-white w-full h-12 rounded-xl text-2xl cursor-pointer border-2  hover:bg-green-700'>{isLoading ? <h1><span className='fa fa-spinner animate-[spin_2s_linear_infinite] mr-3'></span>Proccess...</h1> : ('Money Transfer')}</button>
            </form>
        </main>
    )
}
export default MoneyTransfer;