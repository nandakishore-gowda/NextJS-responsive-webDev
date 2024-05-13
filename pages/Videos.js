import Head from "next/head";
import Footer from '../components/items/Footer';
function Videos() {
  return (
    <>
      <Head>
        <title>SandHut Studios | Videos</title>
      </Head>
      <main className="bg-white">
        <div className="hidden md:block max-w-5xl mx-auto pb-10">
          <div className="flex justify-between pt-5">
            <div className="">
              <iframe
                width="690"
                height="409"
                src="https://www.youtube.com/embed/RCb7mYTNDME"
                title="You Are The Reason - Calum Scott cover by Rishab Shirolkar"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <h1 className="text-black text-xl font-Poppins font-medium pt-3">
                You Are The Reason - Calum Scott cover by Rishab Shirolkar
              </h1>
            </div>
            <div className="pl-12 ">
              <div>
                <iframe
                  width="280"
                  height="170"
                  className="rounded-lg"
                  src="https://www.youtube.com/embed/vclMWYWrcO0"
                  title="Samajavaragamana | Kannada Version | Endhu kaanada hasiru | Ala-Vaikuntapuramulo | #sandhutstudios"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <h1 className="text-black text-xs font-Poppins  font-light pt-3">
                  Samajavaragamana | Kannada Version |
                  Ala-Vaikuntapuramulo | #sandhutstudios
                </h1>
              </div>
              <div className="pt-2">
                <iframe
                  width="280"
                  height="170"
                  className="rounded-lg"
                  src="https://www.youtube.com/embed/S_3vBNTNJhs"
                  title="#SandHutStudios | SandHut Cinematic Universe| Creative World"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <h1 className="text-black text-xs font-Poppins  font-light pt-3">
                  SandHut Cinematic Universe| Creative World| #sandhutstudios
                </h1>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-3 pt-5">
            <div className="border-t-2 border-[#FFE600] w-[300px]"></div>
            <h1 className=" text-black font-normal text-2xl font-Poppins">
              Featured videos
            </h1>
            <div className="border-t-2 border-[#FFE600]  w-[300px]"></div>
          </div>

          <div className="flex gap-3 pt-3">
            <div>
              <iframe
                width="330"
                height="200"
                className="rounded-lg"
                src="https://www.youtube.com/embed/c_Au8XQ1YBs"
                title="Lo Maan Liya | Raaz Reboot | Cover Song By Rishab Shirolkar | #SandHutStudios"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <h1 className="text-black text-sm font-Poppins  font-medium pt-3">
                Lo Maan Liya 
                Cover Song By Rishab Shirolkar <br />| #sandhutstudios
              </h1>
            </div>

            <div>
              <iframe
                width="330"
                height="200"
                className="rounded-lg"
                src="https://www.youtube.com/embed/0tKc13Kv4-M"
                title="How to make USB Bootable windows 10 [GPT/MBR]- 2020"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <h1 className="text-black text-sm font-Poppins  font-medium pt-3">
                How to make USB Bootable windows 10 <br /> [GPT/MBR]- 2020
              </h1>
            </div>
            <div>
              <iframe
                width="330"
                height="200"
                className="rounded-lg"
                src="https://www.youtube.com/embed/kw3aI1NABXo"
                title="#SandHutStudios | Let's Go Now (Official) | Music Audio | Captions - English"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <h1 className="text-black text-sm font-Poppins  font-medium pt-3">
                Let's Go Now (Official) | Captions - English
                <br />| #sandhutstudios
              </h1>
            </div>
          </div>
        </div>

        {/* mobile view */}
        <div className="md:hidden mx-auto pb-10">
          <div className="justify-center items-center">
            <iframe
              width="100%"
              height="270"
              src="https://www.youtube.com/embed/RCb7mYTNDME"
              title="You Are The Reason - Calum Scott cover by Rishab Shirolkar"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <h1 className="text-black text-sm font-Poppins font-light pt-3 pl-2">
              You Are The Reason - Calum Scott cover by Rishab Shirolkar
            </h1>
            <div className="pl-10 pt-2">
              <iframe
                width="280"
                height="170"
                className="rounded-lg"
                src="https://www.youtube.com/embed/vclMWYWrcO0"
                title="Samajavaragamana | Kannada Version | Endhu kaanada hasiru | Ala-Vaikuntapuramulo | #sandhutstudios"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <h1 className="text-black text-sm font-Poppins  font-light pt-3">
                Samajavaragamana | Kannada Version | <br/>
                Ala-Vaikuntapuramulo | #sandhutstudios
              </h1>
              <iframe
                width="280"
                height="170"
                className="rounded-lg"
                src="https://www.youtube.com/embed/S_3vBNTNJhs"
                title="#SandHutStudios | SandHut Cinematic Universe| Creative World"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <h1 className="text-black text-sm font-Poppins  font-light pt-3">
                SandHut Cinematic Universe| <br/>Creative World| #sandhutstudios
              </h1>
              <iframe
                width="280"
                height="170"
                className="rounded-lg"
                src="https://www.youtube.com/embed/c_Au8XQ1YBs"
                title="Lo Maan Liya | Raaz Reboot | Cover Song By Rishab Shirolkar | #SandHutStudios"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <h1 className="text-black text-sm font-Poppins  font-medium pt-3">
                Lo Maan Liya |
                Cover Song By<br /> Rishab Shirolkar | #sandhutstudios
              </h1>
              <iframe
                width="280"
                height="170"
                className="rounded-lg"
                src="https://www.youtube.com/embed/0tKc13Kv4-M"
                title="How to make USB Bootable windows 10 [GPT/MBR]- 2020"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <h1 className="text-black text-sm font-Poppins  font-medium pt-3">
                How to make USB Bootable windows 10 <br /> [GPT/MBR]- 2020
              </h1>
              <iframe
                width="280"
                height="170"
                className="rounded-lg"
                src="https://www.youtube.com/embed/kw3aI1NABXo"
                title="#SandHutStudios | Let's Go Now (Official) | Music Audio | Captions - English"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <h1 className="text-black text-sm font-Poppins  font-medium pt-3">
                Let's Go Now (Official) | Music Audio <br />| Captions - English{" "}
                | #sandhutstudios
              </h1>
            </div>
          </div>
        </div>
        {/* mobile view */}
      </main>
      <div className='bg-black pt-8 pb-5'>
<Footer/>
</div>
    </>
  );
}
export default Videos;
