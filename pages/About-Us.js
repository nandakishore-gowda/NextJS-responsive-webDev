import Head from "next/head";
import Link from "next/link";
import Footer from "../components/items/Footer";

function Aboutus() {
  return (
    <>
      <Head>
        <title>SandHut Studios | About Us</title>
      </Head>
      <div>
        <div className="bg-white">
          <div className="bg-sp">
            <div className="flex  justify-center pt-10">
              {/*  */}
              {/* <h1 className="font-Satisfy text-[50px] text-black pb-10 md:pb-0 md:text-[120px] ">
                SandHut <sub className="font-Poppins text-[40px]">Studios</sub>
              </h1> */}
              <img
                src="/logo/Studios.png"
                className="h-[140px] md:h-[200px]"
              />
            
              {/*  */}
            </div>
            <div className="flex justify-center pt-4 pb-4">
              <p className="text-base md:text-2xl text-black font-Poppins">Creative • innovative • Collaborative</p>
           
            </div>
          </div>

          <div className="mx-auto ">
            <div className="bg-gray-700 pb-10">
              <div className="flex justify-center items-center gap-3 pt-10">
                <div className="border-t-2 border-[#FFE600] w-[70px] md:w-[300px]"></div>
                <h1 className=" text-white font-normal text-lg md:text-2xl font-Poppins">
                  About SandHut Studios
                </h1>
                <div className="border-t-2 border-[#FFE600]  w-[70px] md:w-[300px]"></div>
              </div>
              <div className="pt-4 p-4 md:p-0 md:pt-4">
                <h1 className=" text-justify  md:text-center font-Poppins tracking-normal text-sm md:text-base leading-relaxed  max-w-3xl mx-auto flex justify-center text-white">
                  SandHut Studios is a world filled with creativity, innovation,
                  and collaboration. <br />
                  We are committed to growing our own proprietary brand and
                  producing multi-film franchises in order to deliver an
                  unparalleled cinematic experience.
                </h1>
                <br />
                <h1 className=" text-justify  md:text-center font-Poppins tracking-normal text-sm md:text-base leading-relaxed  max-w-3xl mx-auto flex justify-center text-white">
                  We are passionate about creating quality content that
                  entertains and engages audiences worldwide. We are dedicated
                  to developing and producing the highest quality of films, TV
                  shows and web series, as well as creating interactive
                  experiences for our fans. <br />
                  We strive to bring our stories to life through innovative
                  storytelling and cutting-edge technology.
                </h1>
              </div>
            </div>

            <div className="flex justify-center items-center gap-3 pt-10">
              <div className="border-t-2 border-[#FFE600] w-[70px] md:w-[300px]"></div>
              <h1 className=" text-black font-normal text-2xl font-Poppins">
                Our Vision
              </h1>
              <div className="border-t-2 border-[#FFE600] w-[70px] md:w-[300px]"></div>
            </div>

            <p className=" text-gray-800 text-center p-4 md:p-0 pt-4 md:pt-4 font-Poppins text-sm md:text-base tracking-normal leading-relaxed  max-w-3xl mx-auto flex justify-center ">
              To create a world of endless possibilities and opportunities
              through the power of imagination, invention, and teamwork.
            </p>

            <div className="flex justify-center items-center gap-3 pt-10">
              <div className="border-t-2 border-[#FFE600] w-[70px] md:w-[300px]"></div>
              <h1 className=" text-black font-normal text-2xl font-Poppins">
                Our Mission
              </h1>
              <div className="border-t-2 border-[#FFE600] w-[70px] md:w-[300px]"></div>
            </div>
            <p className=" text-gray-800 text-center p-4 md:p-0 pt-4 md:pt-4 font-Poppins tracking-normal text-sm md:text-base leading-relaxed  max-w-3xl mx-auto flex justify-center pb-10 md:pb-10">
              To foster a diverse and creative environment where people can come
              together to explore, create, and collaborate on projects that
              inspire and empower. <br />
              We strive to create a safe and welcoming space for all to express
              themselves and to make their dreams a reality.
            </p>

            <div className="bg-gray-700">
              <div className="flex justify-center items-center gap-3 pt-10">
                <div className="border-t-2 border-[#FFE600] w-[70px] md:w-[300px]"></div>
                <h1 className=" text-white font-normal text-2xl font-Poppins">
                  Why choose us?
                </h1>
                <div className="border-t-2 border-[#FFE600] w-[70px] md:w-[300px]"></div>
              </div>
              <p className=" text-white text-justify  md:text-center p-4 md:p-0 pt-4 md:pt-4 font-Poppins tracking-normal text-sm md:text-base leading-relaxed  max-w-3xl mx-auto flex justify-center pb-10 md:pb-10">
                Sandhut Studios is the perfect environment for artists looking
                to grow their identity. <br />
                Our world is filled with creativity, embrace innovation, and
                work together that allows artists to develop their own style and
                create something that is truly unique. We provide a safe and
                supportive space for artists to explore their creative potential
                and develop their skills. <br />
                <br />
                We offer personalized guidance and feedback from industry
                professionals, as well as access to a wide range of resources.
                <br />
                <br />
                With our support, artists can refine their craft and reach their
                full potential. <br />
                Our mission is to help artists reach the highest level of
                success and create art that stands out.
              </p>
            </div>
            <div className="bg-black pt-8 pb-5">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Aboutus;
