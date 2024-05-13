import Link from 'next/link';

function s2Featuredchannels() {
  return (
    <>
    {/* Desktop view */}
 <div className='hidden md:block max-w-5xl mx-auto mt-10'>
 
  <div className='flex justify-center items-center gap-3'>
  <div className='border-t-2 border-[#FFE600] w-[300px]'></div>
  <h1 className=' text-black font-normal text-2xl font-Poppins'>Featured channels</h1>
  <div className='border-t-2 border-[#FFE600]  w-[300px]'></div>
  </div>

<div className='flex justify-between mt-5'>

<div className='flex flex-col justify-center items-center'>
<img src='https://yt3.ggpht.com/dniar_9MeGyY62E1UiMGPyGS6yF3BjVS5WOqHBr41a3I3X-4RNCgt9ojPhhvlr1SEeE5Kmyq=s88-c-k-c0x00ffffff-no-rj'className='h-[100px] w-[100px] rounded-full'></img>
<h2 className='text-black text-base mt-3 font-Poppins'>SandHut Studios</h2>
<a href='https://www.youtube.com/@SandHutStudios/featured'target="_blank" rel="noreferrer">
<button className='bg-black text-white rounded-full w-[100px] h-[30px] font-semibold mt-3 '>Subscribe</button>
</a>
</div>

<div className='flex flex-col justify-center items-center'>
<img src='https://yt3.googleusercontent.com/TqiXOHNL4LSgCosJLyduwwdG0kzIDbJXhbhs07qentOrYUbF4lHTo2u71uwR5ZNzPux9kepRQV8=s176-c-k-c0x00ffffff-no-rj-mo'className='h-[100px] w-[100px] rounded-full'></img>
<h2 className='text-black text-base mt-3 font-Poppins '>SandHut DigiByte</h2>
<a href='https://www.youtube.com/channel/UCMptDstyFuag1Mdh0PuQDTA'target="_blank" rel="noreferrer">
<button className='bg-black text-white rounded-full w-[100px] h-[30px] font-semibold mt-3 '>Subscribe</button>
</a>
</div>

<div className='flex flex-col justify-center items-center'>
<img src='https://yt3.ggpht.com/AX2LQGQoUxywWKC5aftpjt7Mfiz4d3kSUr9PuRdkAFe3xkHHWddkvKrehSMmCa-Yvj6PunDPhVo=s88-c-k-c0x00ffffff-no-rj'className='h-[100px] w-[100px] rounded-full'></img>
<h2 className='text-black text-base mt-3 font-Poppins'>SandHut Sports</h2>
<a href='https://www.youtube.com/channel/UC8rFYe5WC1AZbkt7NAdxaAQ'target="_blank" rel="noreferrer">
<button className='bg-black text-white rounded-full w-[100px] h-[30px] font-semibold mt-3 '>Subscribe</button>
</a>
</div>

</div>
 </div>
 {/* Desktop view */}

  {/* Mobile view */}
  <div className='md:hidden  max-w-5xl mx-auto'>

  <div className='flex justify-center items-center gap-3 mt-2'>
  <div className='border-t-2 border-gray-400 w-[60px]'></div>
  <h1 className=' text-black font-normal text-2xl font-Poppins'>Featured channels</h1>
  <div className='border-t-2 border-gray-400  w-[60px]'></div>
</div>

<div className='flex justify-between m-4'>
<div className='flex flex-col justify-center items-center pl-5 pt-4'>
  <img src='https://yt3.ggpht.com/dniar_9MeGyY62E1UiMGPyGS6yF3BjVS5WOqHBr41a3I3X-4RNCgt9ojPhhvlr1SEeE5Kmyq=s88-c-k-c0x00ffffff-no-rj'className='h-[70px] w-[70px] rounded-full'></img>
<h2 className='text-black text-sm mt-2 font-Poppins'>SandHut Studios</h2>
<a href='https://www.youtube.com/@SandHutStudios/featured'target="_blank" rel="noreferrer">
<button className='bg-black text-white rounded-full w-[100px] h-[30px] font-light text-sm mt-1 '>Subscribe</button>
</a>
</div>
<div className='flex flex-col justify-center items-center pr-5 pt-4'>
<img src='https://yt3.googleusercontent.com/TqiXOHNL4LSgCosJLyduwwdG0kzIDbJXhbhs07qentOrYUbF4lHTo2u71uwR5ZNzPux9kepRQV8=s176-c-k-c0x00ffffff-no-rj-mo'className='h-[70px] w-[70px] rounded-full'></img>
<h2 className='text-black text-sm mt-2 font-Poppins '>SandHut DigiByte</h2>
<a href='https://www.youtube.com/channel/UCMptDstyFuag1Mdh0PuQDTA'target="_blank" rel="noreferrer">
<button className='bg-black text-white rounded-full w-[100px] h-[30px] font-light text-sm mt-1 '>Subscribe</button>
</a>
</div>
</div>

<div className='flex justify-center'>
<div className='flex flex-col justify-center items-center'>
<img src='https://yt3.ggpht.com/AX2LQGQoUxywWKC5aftpjt7Mfiz4d3kSUr9PuRdkAFe3xkHHWddkvKrehSMmCa-Yvj6PunDPhVo=s88-c-k-c0x00ffffff-no-rj'className='h-[70px] w-[70px] rounded-full'></img>
<h2 className='text-black text-sm mt-2 font-Poppins'>SandHut Sports</h2>
<a href='https://www.youtube.com/channel/UC8rFYe5WC1AZbkt7NAdxaAQ'target="_blank" rel="noreferrer">
<button className='bg-black text-white rounded-full w-[100px] h-[30px] font-light text-sm mt-1 '>Subscribe</button>
</a>
</div>
</div>
  </div>
   {/* Mobile view */}

  </>
  );
}
export default s2Featuredchannels