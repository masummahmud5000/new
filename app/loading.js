const Loading = () => {
    return(
        <main className="h-screen flex flex-col items-center pt-20">
            <h1 className="text-4xl lg:text-7xl text-red-600">Page Loadin...</h1>
            <div className="fa fa-spinner text-9xl text-blue-500 animate-spin mt-30"></div>
        </main>
    )
}
export default Loading;