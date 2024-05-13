import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css/bundle";



const SliderAbout = [
  
  {img: "/assets/check/Creative.svg"},
  { img: "/assets/check/Collaborative.svg"},
  { img: "/assets/check/Networking.svg"},
  { img: "/assets/check/Art.svg"},
];



function About() {
  SwiperCore.use([Autoplay, Navigation, Pagination]);

  return (
    <div>
      {/* Desktop view */}
      <div className="hidden md:block max-w-5xl mx-auto">
        <div className="flex justify-center items-center gap-3">
          <div className="border-t-2 border-[#FFE600] w-[70px] md:w-[300px]"></div>
          <h1 className=" text-black font-normal text-2xl font-Poppins">
            We Provide
          </h1>
          <div className="border-t-2 border-[#FFE600]  w-[70px] md:w-[300px]"></div>
        </div>

        {/* #D6CF00   unDraw*/}

        <div className="flex gap-3 justify-evenly pt-10">
          <div className="h-[380px] w-[250px] shadow-lg rounded-lg border-2 border-sp flex flex-col justify-center">
            <div className="flex justify-center">
              <img
                src="/assets/We_Provide/creative.svg"
                className="h-[180px] w-[160px] "
              />
            </div>
            <h1 className="text-black text-base font-Poppins font-medium text-center">
              Creative Consultation
            </h1>
            <div className="flex justify-center pt-2">
              <div className="border-t-2 border-sp w-[200px]"></div>
            </div>
            <p className="text-center text-sm p-4">
              We provide one-on-one consultations to help artists hone their
              craft and create truly unique pieces of art.
            </p>
          </div>

          <div className="h-[380px] w-[250px] shadow-lg rounded-lg border-2 border-sp flex flex-col justify-center">
            <div className="flex justify-center">
              <img
                src="/assets/We_Provide/collaborative.svg"
                className="h-[180px] w-[160px] "
              />
            </div>
            <h1 className="text-black text-base font-Poppins font-medium text-center">
              Collaborative Workshop
            </h1>
            <div className="flex justify-center pt-2">
              <div className="border-t-2 border-sp w-[200px]"></div>
            </div>
            <p className="text-center text-sm p-4">
              We bring together a diverse range of creatives to collaborate and
              share ideas in a safe and supportive environment.
            </p>
          </div>

          <div className="h-[380px] w-[250px] shadow-lg rounded-lg border-2 border-sp flex flex-col justify-center">
            <div className="flex justify-center pl-4">
              <img
                src="/assets/We_Provide/event.svg"
                className="h-[180px] w-[160px] "
              />
            </div>
            <h1 className="text-black text-base font-Poppins font-medium text-center">
              Networking Events
            </h1>
            <div className="flex justify-center pt-2">
              <div className="border-t-2 border-sp w-[200px]"></div>
            </div>
            <p className="text-center text-sm p-4">
              Our networking events allow artists to connect with other
              creatives, learn from industry professionals.{" "}
            </p>
          </div>

          <div className="h-[380px] w-[250px] shadow-lg rounded-lg border-2 border-sp flex flex-col justify-center">
            <div className="flex justify-center pt-2">
              <img
                src="/assets/We_Provide/art.svg"
                className="h-[150px] w-[160px] "
              />
            </div>
            <h1 className="text-black text-base font-Poppins font-medium text-center pt-6">
              Art Exhibitions
            </h1>
            <div className="flex justify-center pt-2">
              <div className="border-t-2 border-sp w-[200px]"></div>
            </div>
            <p className="text-center text-sm p-4">
              We host art exhibitions to showcase the work of our clients and
              help them gain exposure in the industry.
            </p>
          </div>
        </div>

        <div className="flex justify-center pt-6">
          <a href="/About-Us">
            <button className="rounded-full px-4 py-2 font-Poppins text-gray-600 font-semibold text-sm border-2 border-gray-600">
              Know More
            </button>
          </a>
        </div>
      </div>
      {/* Desktop view */}

      {/* mobile view */}


      <div className='md:hidden  max-w-5xl mx-auto relative'>
      <div className="flex justify-center items-center gap-3 pb-4">
          <div className="border-t-2 border-[#FFE600] w-[70px] "></div>
          <h1 className=" text-black font-normal text-2xl font-Poppins">
            We Provide
          </h1>
          <div className="border-t-2 border-[#FFE600]  w-[70px] "></div>
        </div>
      <Swiper
      spaceBetween={10}
      slidesPerView={2}
      grabCursor={true}
      autoplay={{delay:2000}}
      pagination
      centeredSlides={true}
      onSwiper={(swiper) => console.log(swiper)}
    > 
      {SliderAbout.map((item) => (
                        <SwiperSlide>
                          <img src={item.img} className='h-62 w-full'/>
                    </SwiperSlide>
                        ))}
 
    </Swiper>

    <div className="flex justify-center pt-6">
          <a href="/About-Us">
            <button className="rounded-full px-4 py-2 font-Poppins text-gray-600 font-semibold text-sm border-2 border-gray-600">
              Know More
            </button>
          </a>
        </div>
      </div>



      {/* <div className="md:hidden mx-auto">
        <div className="flex justify-center items-center gap-3 pb-4">
          <div className="border-t-2 border-[#FFE600] w-[70px] "></div>
          <h1 className=" text-black font-normal text-2xl font-Poppins">
            We Provide
          </h1>
          <div className="border-t-2 border-[#FFE600]  w-[70px] "></div>
        </div>
        <Swiper
          spaceBetween={10}
          slidesPerView={2}
          grabCursor={true}
          autoplay={{ delay: 2000 }}
          pagination
          centeredSlides={true}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="h-[360px] w-[220px] shadow-lg rounded-lg border-2 border-sp flex flex-col justify-center">
              <div className="flex justify-center pt-2">
                <img
                  src="/assets/We_Provide/creative.svg"
                  className="h-[130px] w-[160px] "
                />
              </div>
              <h1 className="text-black text-base font-Poppins font-medium text-center pt-6">
                Creative Consultation
              </h1>
              <div className="flex justify-center pt-2">
                <div className="border-t-2 border-sp w-[200px]"></div>
              </div>
              <p className="text-center text-sm p-4">
                We provide one-on-one consultations to help artists hone their
                craft and create truly unique pieces of art.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[360px] w-[220px] shadow-lg rounded-lg border-2 border-sp flex flex-col justify-center">
              <div className="flex justify-center pt-2">
                <img
                  src="/assets/We_Provide/collaborative.svg"
                  className="h-[150px] w-[160px] "
                />
              </div>
              <h1 className="text-black text-base font-Poppins font-medium text-center pt-6">
                Collaborative Workshop
              </h1>
              <div className="flex justify-center pt-2">
                <div className="border-t-2 border-sp w-[200px]"></div>
              </div>
              <p className="text-center text-sm p-4">
                We bring together a diverse range of creatives to collaborate
                and share ideas in a safe and supportive environment.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[360px] w-[220px] shadow-lg rounded-lg border-2 border-sp flex flex-col justify-center">
              <div className="flex justify-center pt-10">
                <img
                  src="/assets/We_Provide/event.svg"
                  className="h-[130px] w-[140px] "
                />
              </div>
              <h1 className="text-black text-base font-Poppins font-medium text-center pt-8">
                Networking Events
              </h1>
              <div className="flex justify-center pt-2">
                <div className="border-t-2 border-sp w-[200px]"></div>
              </div>
              <p className="text-center text-sm p-4">
                Our networking events allow artists to connect with other
                creatives, learn from industry professionals, and gain valuable
                insight into the creative industry.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[360px] w-[220px] shadow-lg rounded-lg border-2 border-sp flex flex-col justify-center">
              <div className="flex justify-center pt-2">
                <img
                  src="/assets/We_Provide/art.svg"
                  className="h-[130px] w-[160px] "
                />
              </div>
              <h1 className="text-black text-base font-Poppins font-medium text-center pt-6">
                Art Exhibitions
              </h1>
              <div className="flex justify-center pt-2">
                <div className="border-t-2 border-sp w-[200px]"></div>
              </div>
              <p className="text-center text-sm p-4">
                We host art exhibitions to showcase the work of our clients and
                help them gain exposure in the industry.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div> */}
      {/* mobile view */}
    </div>
  );
}

export default About;
