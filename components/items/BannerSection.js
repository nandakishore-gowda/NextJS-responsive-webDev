import React from "react";

function BannerSection() {
  return (
    <>
      {/* desktop view */}
      <div className="hidden md:block  h-[600px]">
        <div className="flex justify-between">
          <div className="pl-36 pt-24">
            <h1 className="text-6xl text-black font-Poppins font-bold pb-2">
              Now on
            </h1>
            <h1 className="text-6xl text-black font-Poppins font-bold pb-5 ">
              YouTube!
            </h1>
            <div className="border-t-2 border-black pb-5 w-[300px]"></div>
            <a
              href="https://www.youtube.com/watch?v=RCb7mYTNDME&ab_channel=SandHutStudios"
              target="_blank"
              rel="noreferrer"
            >
              <button className="rounded-full  bg-ss text-white px-10 py-3 font-Poppins font-semibold ">
                Watch Now!
              </button>
            </a>
            <p className="pt-5 text-black font-semibold">
              You Are The Reason -
            </p>
            <p className="text-black font-semibold">
              Calum Scott cover by Rishab Shirolkar
            </p>
          </div>
          <img
            src="https://farm66.staticflickr.com/65535/52583084995_4a65840171_b.jpg"
            className="h-[600px] w-[900px] rounded-tl-full"
          ></img>
        </div>
      </div>
      {/* desktop view */}

      {/* mobile view */}
      <div className="md:hidden  max-w-5xl mx-auto">
        <img
          src="https://farm66.staticflickr.com/65535/52583084995_4a65840171_b.jpg"
          className="h-[220px] w-full rounded-bl-full"
        ></img>

        <div className="flex flex-col justify-center items-center py-3">
          <h1 className="text-3xl text-black font-semibold">Now on YouTube!</h1>
          <p className="pt-5 text-black font-semibold">You Are The Reason -</p>
          <p className="text-black font-semibold pb-3">
            Calum Scott cover by Rishab Shirolkar
          </p>
          <div className="border-t-2 border-black pt-3 w-[180px]"></div>

          <a
            href="https://www.youtube.com/watch?v=RCb7mYTNDME&ab_channel=SandHutStudios"
            target="_blank"
            rel="noreferrer"
          >
            <button className="rounded-full bg-ss text-white px-5 py-3 font-Poppins font-medium text-light ">
              Watch Now!
            </button>
          </a>
        </div>
      </div>
      {/* mobile view */}
    </>
  );
}

export default BannerSection;
