import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{Autoplay, Navigation, Pagination} from 'swiper'
import 'swiper/css/bundle';
import Image from 'next/image'

// ylink= Youtube link , iurl= image link url
const SliderMenu = [
  { ylink: "Home", iurl: "https://live.staticflickr.com/65535/52583450110_64c8e14470_k.jpg"},
  { ylink: "Home", iurl: "https://live.staticflickr.com/65535/52583152375_ee10d819ff_k.jpg" },
  { ylink: "Home", iurl: "https://live.staticflickr.com/65535/52583152275_8df61eac63_k.jpg" },
  { ylink: "Home", iurl: "https://live.staticflickr.com/65535/52582717426_de58cbea2f_k.jpg" },
  { ylink: "Home", iurl: "https://live.staticflickr.com/65535/52582717421_2099427d62_k.jpg" },
];


function HeroItems() {
SwiperCore.use([Autoplay,Navigation,Pagination])

  return (
    <>
     {/* Desktop View Slide */}
 <div className='hidden md:block max-w-5xl mx-auto'>
      <Swiper 
      spaceBetween={30}
      slidesPerView={3}
      grabCursor={true}
      autoplay={{delay:2000}}
      pagination
      centeredSlides={true}
      onSwiper={(swiper) => console.log(swiper)}
    > 
    
      {SliderMenu.map((item) => (
       
          <SwiperSlide>
   
            <Link href={item.ylink} >
              <a target="_blank">

                <img src={item.iurl} loading="lazy"  decoding="async" className='h-62 w-full rounded-lg hover:scale-110' />
              
              </a>
            </Link>
         
          </SwiperSlide>

       
                        ))}
   
 
    </Swiper>
      </div>
        {/* Desktop View Slide */}

      {/* Mobile View Slide */}
      <div className='md:hidden  max-w-5xl mx-auto relative'>
      <Swiper
      spaceBetween={10}
      slidesPerView={2}
      grabCursor={true}
      autoplay={{delay:2000}}
      pagination
      centeredSlides={true}
      onSwiper={(swiper) => console.log(swiper)}
    > 
      {SliderMenu.map((item) => (
                        <SwiperSlide>
                        <h1>{item.Stittle}</h1>
                          <img src={item.iurl} className='h-62 w-full rounded-lg'/>
                    </SwiperSlide>
                        ))}
 
    </Swiper>
      </div>
            {/* Mobile View Slide */}
  </>
  );
}
export default HeroItems