'use client'

import { useState, useEffect } from "react";
import dashboardAction from "@/_server-action/dashboard";

const Dashboard = () => {
    const [username, setUsername] = useState('');
    const [balance, setBalance] = useState('');

    useEffect(() => {
        const profileTriger = async() => {
            const res = await dashboardAction();
            if (res?.tokenError === 401){
                setUsername('User Not Found')
                setBalance('0.00')
            }else{
                setUsername(res.username);
                setBalance(res.balance);
            }
        }
        profileTriger();
    }, [])
    
    return(
        <main className="h-screen pt-5 px-5 justify-center">
            <div className="mainDash bg-blue-300 px-5 py-5 rounded-xl">
                <h1 className="text-xl">User: @<span className="text-amber-700 font-bold">{username}</span></h1>
                <h1 className="text-3xl font-bold text-blue-700">$ {balance}</h1>
            </div>
            <div className="dash2 bg-blue-300 rounded-lg mt-8 py-2 px-5 text-center">
                <button className="bg-red-800 hover:bg-red-900 px-5 py-1 rounded-lg text-white mr-10 w-35 lg:w-100 lg:h-10 cursor-pointer">Cash Out</button>
                <button className="bg-amber-700 hover:bg-amber-800 px-5 py-1 rounded-lg text-white w-35 lg:w-100 lg:h-10 cursor-pointer">Send Money</button>
            </div>
        </main>
    )
}
export default Dashboard;