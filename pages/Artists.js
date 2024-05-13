import Head from 'next/head'

function Artists() {
  return (
    <div className='bg-white'>
    <Head>
      <title>SandHut Studios | Artists</title>
    </Head>
    <main>
      {/* Desktop view */}
      <div className=''>
      <div className='flex justify-center items-center h-screen gap-3'>
  <div className='border-t-2 border-[#FFE600] w-[300px]'></div>
  <h1 className=' text-black font-extrabold text-5xl font-Poppins'> Artists Comming Soon...</h1>
  <div className='border-t-2 border-[#FFE600]  w-[300px]'></div>
  </div>
      </div>
           {/* Desktop view */}
    </main>
  </div>
  );
}
export default Artists