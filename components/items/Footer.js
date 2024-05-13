import Link from "next/link";
import React from "react";


function footer() {
  return (
    <div>
      {/* mobile view */}
      <div className="md:hidden  max-w-5xl mx-auto">
        <div className="pl-5 pt-5">
          <h1 className="text-2xl text-white font-Poppins">
            Let's keep in touch!
          </h1>
          <h2 className="text-white">
            Find us on any of these platforms, we respond 1-2 business days.
          </h2>

          <div className="flex gap-3 pt-8">
            <a
              href="https://twitter.com/sandhutstudios"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/icon/twitter.svg" className="h-8 w-8 bg-white "></img>
            </a>
            <a
              href="https://www.instagram.com/sandhut_studios/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/icon/instagram.svg" className="h-8 w-8 bg-white"></img>
            </a>
            <a
              href="https://www.linkedin.com/company/sandhut-studios/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/icon/linkedin.svg" className="h-8 w-8 bg-white"></img>
            </a>
            <a
              href="https://www.facebook.com/SandhutStudios"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/icon/facebook.svg" className="h-8 w-8 bg-white"></img>
            </a>
            <a
              href="https://www.youtube.com/@SandHutStudios/featured"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/icon/youtube.svg" className="h-8 w-8 bg-white"></img>
            </a>
            <a
              href="https://open.spotify.com/artist/3zdgOFaRUrA6cBVTJbcDjA?si=NnjtR9ebSLSZNYIAiz5evg"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/icon/spotify.svg" className="h-8 w-8 bg-white"></img>
            </a>
          </div>

          <h1 className="text-lg pt-3 text-black">USEFUL LINKS</h1>
          <h3 className="pt-2 text-white">About Us</h3>
          <h3 className="text-white">Videos</h3>
          <h3 className="text-white">Artists</h3>
          <h3 className="text-white">News</h3>
          <a href="https://www.linkedin.com/company/sandhut-studios/jobs/"target="_blank" rel="noreferrer">
          <h3 className="text-white  ">Career</h3>
          </a>
    
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdWdpivJF-vzDBJvfWlFeuipEtaUguBqudtrRRloP4uoFOi0A/formrestricted"target="_blank" rel="noreferrer">
          <h3 className="text-white ">Internship</h3>
          </a>
          
          <Link href='/PrivacyPolicy'>
           
           <h3 className="text-white ">Privacy Policy</h3></Link>
           <Link href='/Contactus'>
          <h3 className="text-white pt-3 ">Contact Us</h3>
          </Link>
          <h3 className="text-white  cursor-pointer font-Poppins">
            info@sandhut.in
          </h3>

          <div className=" flex justify-center border-t-2 border-gray-400  w-full   mt-4"></div>
          <h1 className=" text-white text-center pt-1 text-base">
            Copyright © sandhut india - 2022 All Rights Reserved
          </h1>
        </div>
      </div>
      {/* mobile view */}

      <div className="hidden md:block max-w-5xl mx-auto ">
        <div className="flex justify-between pt-4">
          <div className="">
            <h1 className="text-3xl text-white font-Poppins">
              Let's keep in touch!
            </h1>
            <h2 className="text-white text-lg">
              Find us on any of these platforms, we respond 1-2 business days.
            </h2>
            <div className="flex gap-3 pt-8">
              <a
                href="https://twitter.com/sandhutstudios"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/icon/twitter.svg"
                  className="h-8 w-8 bg-white "
                ></img>
              </a>
              <a
                href="https://www.instagram.com/sandhut_studios/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/icon/instagram.svg"
                  className="h-8 w-8 bg-white"
                ></img>
              </a>
              <a
                href="https://www.linkedin.com/company/sandhut-studios/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/icon/linkedin.svg"
                  className="h-8 w-8 bg-white"
                ></img>
              </a>
              <a
                href="https://www.facebook.com/SandhutStudios"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/icon/facebook.svg"
                  className="h-8 w-8 bg-white"
                ></img>
              </a>
              <a
                href="https://www.youtube.com/@SandHutStudios/featured"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/icon/youtube.svg" className="h-8 w-8 bg-white"></img>
              </a>
              <a
                href="https://open.spotify.com/artist/3zdgOFaRUrA6cBVTJbcDjA?si=NnjtR9ebSLSZNYIAiz5evg"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/icon/spotify.svg" className="h-8 w-8 bg-white"></img>
              </a>
            </div>
          </div>
          <div className="gap-3">
            <h1 className="text-lg font-medium text-white ">USEFUL LINKS</h1>

            <h2 className="text-white cursor-pointer hover:underline pt-2">About Us</h2>
            <h3 className="text-white cursor-pointer hover:underline pt-1">Videos</h3>
            <h3 className="text-white cursor-pointer hover:underline pt-1">Artists</h3>
            <h3 className="text-white cursor-pointer hover:underline pt-1">News</h3>
          </div>
          <div>
            <h1 className="text-lg font-medium text-white">OTHER RESOURCES</h1>
            <a href="https://www.linkedin.com/company/sandhut-studios/jobs/"target="_blank" rel="noreferrer">
          <h3 className="text-white hover:underline pt-2">Career</h3>
          </a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdWdpivJF-vzDBJvfWlFeuipEtaUguBqudtrRRloP4uoFOi0A/formrestricted"target="_blank" rel="noreferrer">
          <h3 className="text-white hover:underline ">Internship</h3>
          </a>
            <Link href='/PrivacyPolicy'>
           
            <h3 className="text-white  cursor-pointer pt-1 hover:underline">Privacy Policy</h3></Link>
            <Link href='/Contactus'>
            <h3 className="text-white  cursor-pointer hover:underline pt-1">Contact Us</h3>
            </Link>
            <h3 className="text-white  cursor-pointer pt-3 font-Poppins">
              info@sandhut.in
            </h3>
          </div>
        </div>
        <div className="border-t-2 border-gray-400  w-full mt-4"></div>
        <h1 className=" text-white text-center pt-1 text-base">
          Copyright © SandHut - 2023 All Rights Reserved
        </h1>
      </div>
    </div>
  );
}

export default footer;
