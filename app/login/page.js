'use client'
import LoginForm from '@/_server-action/formLogin';
import '@/app/globals.css'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

// export const metadata = {
//     title: "Login",
//     description: "যদি একাউন্ট থাকে তাহলে, লগইন করুন!"
// };

const Login = () => {
    const router = useRouter();

    const [isLoading,setIsLoading] = useState(false);
    const [Error,setError] = useState('');

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const loginSubmit = async(e) => {
        e.preventDefault();
        setIsLoading(true);
        try{
            const res = await LoginForm(username,password)
            if (res?.success == true){
                setUsername('');
                setPassword('');
                setError('');
                router.push('/dash')            
            }else if(res?.non_field_errors.includes('userNotFound')){
                setError('Incorret UserName & Password');
                setTimeout(()=>setError(''),4000);
            }
        }finally{
            setIsLoading(false);
        }
        
    }
    
    return(
        <main className="h-screen pt-30 lg:pt-15 px-7 lg:px-60 lg:h-150">
            <form onSubmit={loginSubmit} className="registerForm bg-green-300 text-blue-600 px-5 lg:px-25 py-10 lg:pb-7 lg:pt-2">
                <h1>Login</h1>
                <label>User Name</label>
                <div>
                    <input value={username} required onChange={(e)=>setUsername(e.target.value)} placeholder="Enter Your UserName"/>
                    <h3 className='fa fa-user-tag'/>
                    <h4 className='mt-5 text-red-600 animate-bounce'>{Error}</h4>
                </div>
                <label>Password</label>
                <div>
                    <input value={password} required onChange={(e)=>setPassword(e.target.value)} type='password' placeholder="Enter Your Password"/>
                    <h3 className='fa fa-lock'/>
                </div>
                <button type="submit" className='mt-5 bg-green-600 text-white w-full h-12 rounded-xl text-2xl cursor-pointer border-2  hover:bg-green-700'>{isLoading ? <h1><span className='fa fa-spinner  animate-[spin_2s_linear_infinite] mr-3'></span>Proccess...</h1> : ('Login')}</button>
            </form>
        </main>
    )
}
export default Login;