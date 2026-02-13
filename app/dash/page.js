'use client'

import { useState, useEffect } from "react";
import dashboardAction from "@/_server-action/dashboard";
import { useRouter } from "next/navigation";
import Logout from "@/sub-client/logout";
import CashOut from "@/sub-client/transactionForm/cashOut";
import SendMoney from "@/sub-client/transactionForm/sendMoney";
import AddMoney from "@/sub-client/transactionForm/addMoney";
import MoneyTransfer from "@/sub-client/transactionForm/moneytransfer";
import { serverApi } from "@/_server-action/axiosInstanse";
// import wsBalance from "@/sub-client/wsBalance";

const Dashboard = () => {
    const router = useRouter();

    const [username, setUsername] = useState('');
    const [balance, setBalance] = useState('');
    const [userStatus, setUserStatus] = useState(Boolean);
    ///////////////////////////////
    const [cashOutForm,setCashOutForm] = useState(false);
    const [sendMoneyForm,setSendMoneyForm] = useState(false);
    const [addMoneyForm,setAddMoneyForm] = useState(false);
    const [moneyTransferForm,setMoneyTransferForm] = useState(false);
    const [flash,setFlash] = useState(false)
    // const [skeliton,setSkeliton] = useState(false)
    ///////////////////////////////
    const handleForm = (type) => {
        setCashOutForm(prev => type === 'cashOut' ? !prev : false)
        setSendMoneyForm(prev => type === 'sendMoney' ? !prev : false)
        setAddMoneyForm(prev => type === 'addMoney' ? !prev : false)
        setMoneyTransferForm(prev => type === 'moneyTransfer' ? !prev : false)
    }
    
    useEffect(() => {
        setUsername('wait...')
        setBalance('wait...')
        let socket;
        const profileTriger = async() => {
            try{
                const res = await dashboardAction();
                
                if (res.message === 'refreshTokenInvalid'){
                    router.push('/login')
                }else{
                    // console.log(res)
                    setUsername(res?.user);
                    setUserStatus(res?.status);
                    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                    // console.log(res?.token)
                    socket = new WebSocket(`ws://127.0.0.1:8000/ws/some/?token=${res?.token}`);

                    socket.onmessage = (event) => {
                        const data = JSON.parse(event.data);
                        // console.log(data)
                        if(data.balance !== undefined){
                            let balanceStyle = parseFloat(data?.balance)
                            let formatStyle = balanceStyle.toLocaleString('en-IN', {minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            });
                            setFlash(true)
                            setTimeout(()=>setFlash(false),1000)
                            setBalance(formatStyle)
                        }else{
                            setBalance('Balance Not Found!')
                        }
                    };
                    ///////////////////////
                };
            }catch(err){
                
            }
        }
        
        profileTriger();
        return () => {
            if (socket){
                socket.close();
            }
        };
    }, [])
    
    return(
        <main className="h-screen pt-5 px-5 justify-center">
            <div className="mainDash bg-blue-300 px-5 lg:pl-10 pt-5 rounded-xl border-8 border-t border-r border-l border-red-800">
                <h1 className="text-xl lg:text-2xl">User: @<span className="text-[#af38ef] font-bold">{username}</span></h1>
                <span className="flex text-4xl font-bold mt-2"><p className="text-blue-700 pr-2">$</p><h1 className={flash ? "text-red-700 animate-pulse": "text-blue-700"}>{balance}</h1></span>
            <Logout/>
            </div>
            <div className=" flex gap-5 lg:gap-30 dash2 bg-blue-300 rounded-lg mt-8 py-2 px-5 text-center justify-center">
                {!userStatus && <button onClick={()=>handleForm('cashOut')} className="bg-red-800 hover:bg-red-900 px-5 py-1 rounded-lg text-white mr-10 w-40 lg:w-100 lg:h-10 cursor-pointer">Cash Out</button>}
                {!userStatus && <button onClick={()=>handleForm('sendMoney')} className="bg-amber-700 hover:bg-amber-800 px-5 py-1 rounded-lg text-white w-40 lg:w-100 lg:h-10 cursor-pointer">Send Money</button>}

                {userStatus && <button onClick={()=>handleForm('addMoney')} className="bg-green-700 hover:bg-green-800 px-5 py-1 rounded-lg text-white w-40 lg:w-100 lg:h-10 cursor-pointer">Add Money</button>}
                {userStatus && <button onClick={()=>handleForm('moneyTransfer')} className="bg-amber-600 hover:bg-amber-800 px-5 py-1 rounded-lg text-white w-40 lg:w-100 lg:h-10 cursor-pointer">Money Transfer</button>}
            </div>
            {cashOutForm && <CashOut/>}
            {sendMoneyForm && <SendMoney/>}
            {addMoneyForm && <AddMoney setAddMoneyForm={setAddMoneyForm}/>}
            {moneyTransferForm && <MoneyTransfer setMoneyTransfer={setMoneyTransferForm}/>}
        </main>
    )
}
export default Dashboard;