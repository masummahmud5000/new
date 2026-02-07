'use client'

const CashOut = () => {
    return(
        <main className="pt-15">
            <form className="cashOutForm flex flex-col bg-green-600 px-10 py-7 gap-5 rounded-xl">
                <div>                    
                    <input type="text" required placeholder="Enter Agent Account"/>
                    <span className="fa fa-user-tag"/>
                </div>
                <div>                    
                    <input type="nubmer" required placeholder="Balance"/>
                    <span className="fa fa-dollar"/>
                </div>
                <div>                    
                    <input type="text" required placeholder="Enter Your Password"/>
                    <span className="fa fa-lock"/>
                </div>
                <button className="bg-amber-700 text-white h-10 rounded-xl hover:bg-red-800 mt-8 text-xl">Send Money</button>
            </form>
        </main>
    )
}
export default CashOut;