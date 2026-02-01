import '@/app/globals.css'
import Link from 'next/link';

const Home = () => {
  return(
    <main className="flex flex-col items-center bg-blue-200 h-screen pt-15">
      <h1 className="bank text-6xl font-bold text-white">MT Bank</h1>
      <h1 className="text-4xl mt-5 text-blue-700">Limited Bangladesh</h1>
      <div className='mt-15 bg-red-300 px-8 py-3 text-lg rounded-xl text-blue-600'>সর্বনিম্ন ক্যাশ আউট চার্জ<span className='text-red-600 text-xl'> MT</span> টে</div>
      <div>
        <div className='flex text-white bg-green-600 text-6xl mt-8 py-3 px-6 rounded-xl'><p>মাত্র</p><h1 className='ml-5'>৭.৭০</h1></div>
      </div>
      <Link href={'/register'} className='mt-30 bg-red-500 text-white text-2xl px-10 py-3 rounded-xl font-bold animate-[bounce_2s_linear_infinite] '>Account Open Now</Link>
    </main>
  )
}
export default Home;