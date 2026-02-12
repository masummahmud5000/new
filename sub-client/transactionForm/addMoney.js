'use client'

import AddMoneyAction from "@/_server-action/transactionForm/addMoney";
import { useState } from "react";
import { useRouter } from "next/navigation";

const AddMoney = (props) => {
    const router = useRouter()

    const [isLoading,setIsLoading] = useState(false);
    const [balance,setBalance] = useState('');
    const [balanceError,setBalanceError] = useState('');
    const [passwordError,setPasswordError] = useState('');
    const [password,setPassword] = useState('');

    const addMoneyHandle = async(e) => {
        e.preventDefault();
        setIsLoading(true)
        try{
            const res = await AddMoneyAction(balance,password);
            // console.log(res)
            if (res === 200){
                props.setAddMoneyForm(false);
            }

            if (res?.message === 'refreshTokenInvalid'){
                router.push('/login')            
            }else if (res?.password?.includes('passwordNotValid')){
                setPasswordError('Invalid Password , try again')
                setBalanceError('')
                setTimeout(()=>setPasswordError(''),4000)
                
            }else if(res?.balance?.includes('balanceLimit')){
                setBalanceError('Maximum Add 50,000 টাকা')
                setPasswordError('')
                setTimeout(()=>setBalanceError(''),4000)                
                
            }else if(res?.balance?.includes("balanceZero")){
                setBalanceError('Minimum Add 50 টাকা')
                setPasswordError('')
                setTimeout(()=> setBalanceError(''),4000)

            }
            
        }finally{
            setIsLoading(false)
        }
    }
    
    return(
        <main className="pt-15">
            <form onSubmit={addMoneyHandle} className="cashOutForm flex flex-col bg-green-600 px-10 lg:px-50 py-7 gap-2 rounded-xl border-2 border-red-800">
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
                <button type="submit" className='mt-5 bg-amber-600 text-white w-full h-12 rounded-xl text-2xl cursor-pointer border-2  hover:bg-green-700'>{isLoading ? <h1><span className='fa fa-spinner animate-[spin_2s_linear_infinite] mr-3'></span>Proccess...</h1> : ('Add Money')}</button>
            </form>
        </main>
    )
}
export default AddMoney;