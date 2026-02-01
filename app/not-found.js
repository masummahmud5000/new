import './globals.css'

const notFount = () => {

    return(
        <main className="not-found h-screen bg-[#bdb76b] text-shadow-1xs flex flex-col justify-center items-center">
            <h1 className="text-8xl text-red-600">404</h1>
            <h1 className="text-5xl text-amber-600 mb-50">Page Not Found</h1>
        </main>
    )
}
export default notFount;