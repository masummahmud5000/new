'use client'
import logoutAction from "@/_server-action/logout"

const Logout = () => {

    const logout = async () => {
        const res = await logoutAction();
        // if(res === 'done'){
        //     window.location.href='/login'
        // }
    }
    
    return(
        <main className="text-end pr-10 pb-10">
            <button onClick={logout} className="fa fa-sign-out text-4xl bg-red-600 text-white pr-10 pl-3 py-2 rounded-full hover:bg-red-800 cursor-pointer"></button>
        </main>
    )
}
export default Logout;