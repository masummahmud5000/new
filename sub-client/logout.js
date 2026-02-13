'use client'
import logoutAction from "@/_server-action/logout"

const Logout = () => {

    const logout = async () => {
        const sure = confirm('Are Your Sure Logout!')
        if (sure){
            const res = await logoutAction();
        }
    }
    
    return(
        <main className="text-end">
            <button onClick={logout} className="fa fa-sign-out text-2xl bg-red-600 text-white pr-10 pl-5 mb-3 py-3 rounded-full hover:bg-red-800 cursor-pointer"></button>
        </main>
    )
}
export default Logout;