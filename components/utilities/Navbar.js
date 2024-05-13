import Head from 'next/head'
import Link from 'next/link'
import NvMenuItems from '../items/NvMenuItems'
import { useRouter } from 'next/router';
import {useState , useRef , useEffect} from "react"



function Nav() {


  const [themeMenuOpened, setThemeMenuOpened] = useState(false);
  const themeMenu = useRef(null);
  useEffect(() => {
    if (!themeMenuOpened) {
      document.activeElement.blur();
    } else if (
      themeMenuOpened &&
      !themeMenu.current.contains(document.activeElement)
    ) {
      setThemeMenuOpened(false);
    }
  }, [themeMenuOpened]);

  return (
    <>
<div className='bg-sp '>
  <div className='px-5 lg:px-0 md:max-w-5xl mx-auto'>
    <div className='flex justify-between items-center h-[56px] text-black'>
      {/*  Inside Nav Content*/}


      {/* Logo Section */}
      <Link href='/'>
    <div className='flex cursor-pointer  flex-shrink-0'>
      {/*  */}
      {/* <h1 className='font-Satisfy text-[32px]'>SandHut <sub className='font-Poppins text-[14px]'>Studios</sub></h1> */}
      <img src='/logo/Studios.png' className='h-[50px]'></img>
    
      {/*  */}
    </div>
    </Link>
       {/* Logo Section */}


       {/* Nav Section */}
  <div className=' '>
    {/*  */}
    {/* Desktop */}
    <div className='hidden md:block '>
      <div className='flex gap-5'>
      {/*NvMenuItems Imported form items Components */}
      <NvMenuItems title="Home" nlink="/"/>
      <NvMenuItems title="Videos" nlink="/Videos"/>
      <NvMenuItems title="About Us" nlink="/About-Us"/>
      <NvMenuItems title="Artists" nlink="/Artists"/>
      <NvMenuItems title="News" nlink="/News"/>
      {/* Drop Down */}
      <div className="dropdown cursor-pointer">
  <ul tabindex="0" className='font-Poppins '>More</ul>
  <ul tabindex="0" className="font-Poppins dropdown-content menu p-2 shadow  bg-yellow-300 rounded-box w-36">
 
      <a href='https://www.linkedin.com/company/sandhut-studios/jobs/' target="_blank" rel="noreferrer">
    <li><a target="_blank">Career</a></li>
    </a>
  </ul>
 
</div>
 {/* Drop Down */}
      {/*NvMenuItems Imported form items Components */}
      </div>
    </div>
  {/* Desktop */}
    {/*  */}
  </div>
    {/* Nav Section */}


    {/* Button Section */}
      <div className=''>
      {/* Desktop */}
    <div className='hidden md:block'>
    <Link href='/Contactus'>
    <button className="rounded-full bg-ss text-white px-5 py-2 font-Poppins font-semibold ">Contact Us</button>
    </Link>
    </div>
    {/* Desktop */}
    {/* Mobile */}
    <div className='md:hidden'>

  {/*Mobile nav Dropdown */}

  <div ref={themeMenu}  tabIndex="0" className="dropdown  dropdown-end "
  
  onClick={(e) => {
    if (themeMenuOpened) {
      setThemeMenuOpened(false);
    } else {
      setThemeMenuOpened(true);
    }
  }}
  
  >

  <ul tabindex="0" className='font-Poppins '>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
  </ul>

  <ul tabindex="0" className="font-Poppins dropdown-content menu p-2 shadow  bg-yellow-300 rounded-box w-40"
  
              onFocus={(e) => {
                setThemeMenuOpened(true);
              }}
  >
      <NvMenuItems title="Home" nlink="/"/>
      <NvMenuItems title="Videos" nlink="/Videos"/>
      <NvMenuItems title="About Us" nlink="/About-Us"/>
      <NvMenuItems title="Artists" nlink="/Artists"/>
      <NvMenuItems title="News" nlink="/News"/>
      <NvMenuItems title="Contact Us" nlink="/Contactus"/>


      <a href='https://www.linkedin.com/company/sandhut-studios/jobs/' target="_blank" rel="noreferrer">
    <li><a target="_blank">Career</a></li>
    </a>


  </ul>
 
</div>
{/*Mobile nav Dropdown */}
</div>
 {/* Mobile */}
    
  </div>
   {/* Button Section */} 
  {/*  Inside Nav Content*/}
    </div>
 
  </div>


</div>
  </>
  );
}
export default Nav