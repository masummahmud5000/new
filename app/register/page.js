import '@/app/globals.css'

const Register = () => {
    return(
        <main className="h-screen pt-30 px-7 lg:h-200">
            <form className="registerForm bg-green-300 text-red-600 px-5 py-10">
                <h1>Register</h1>
                <label>Name</label>
                <div>
                    <input required placeholder="Enter Your Name"/>
                    <h3 className='fa fa-user'/>
                </div>
                <label>User Name</label>
                <div>
                    <input required placeholder="Type Uniqeu UserName"/>
                    <h3 className='fa fa-user-tag'/>
                </div>
                <label>Password</label>
                <div>
                    <input required placeholder="Type 8 Digit Password"/>
                    <h3 className='fa fa-lock'/>
                </div>
                <button type="submit" className='mt-5 bg-green-600 text-white w-full h-12 rounded-xl text-2xl hover:bg-green-700'>Register</button>
            </form>
        </main>
    )
}
export default Register;