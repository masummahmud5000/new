import "@fortawesome/fontawesome-free/css/all.min.css"
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import logo from '@/public/logo.png'
// import NavSlide from "@/sub-client/nav-slide";

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <nav className="bg-green-600 border-2 border-x-0 border-t-0 border-b-4 border-amber-600 text-white pl-7 py-5">
          <ul className="flex">
            <h1><Image src={logo} alt="Logo" height={40} width={40} className="bg-white p-1 rounded-full animate-[spin_5s_linear_infinite]"/></h1>
            <h1 className="text-3xl ml-3 font-bold"><span className="text-amber-400">M</span>asum <span className="text-fuchsia-300">M</span>ahmud</h1>
            <li className="dropdown relative lg:ml-[65%]">
              <h1 className="fa fa-bars text-4xl ml-10 cursor-pointer"></h1>
              <ul className="flex flex-col absolute text-white border-b-4 border-amber-600 px-3 py-3 gap-3 rounded-b-xl right-0 bg-green-600 top-full pt-10 z-50 transition-all duration-500">

                <Link href={'/'}>Home</Link>
                <Link href={'/dash'}>Dashboard</Link>
                <Link href={'/register'}>Register</Link>
                <Link href={'/login'}>Login</Link>
              </ul>
            </li>
          </ul>
        </nav>
        {children}
        <footer className="bg-green-900 py-7 border-t-8 border-blue-500 mt-20">
          <div className="flex pl-15 mb-3 gap-5 text-white">
            <h1 className="text-amber-300 text-xl">Admin : Masum Mahmud</h1>
          </div>
          <div className="flex pl-15 gap-5 text-white">
            <h1>Contact : </h1>
            <h1>mdmasumpresent@gmail.com</h1>
          </div>
          <div className="flex pl-15 mt-3 gap-5 text-white">
            <h1>Phone : </h1>
            <h1>01884885000</h1>
          </div>
        </footer>
      </body>
    </html>
  );
}
