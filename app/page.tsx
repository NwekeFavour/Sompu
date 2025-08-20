import Image from "next/image";
import { Header } from "@/components/header";
import Link from "next/link";
import SompuCustomDomainCard from "@/components/SompuCustomDomainCard";
import Profile from "@/public/images/profile.webp";

export default function Home() {
  return (
    <div>
      <div className="bg-[#1B3B6F] md:h-[600px] h-[400px]">
        <Header />
        <div>
          <div className=" md:ms-0 ms-5">
            <div className="lg:mt-20 md:mt-16 sm:mt-12 mt-8">
              <p className="m-0 text-[#fff] text-start md:text-center xl:text-[16px] md:text-[14px] lg:text-[15px] sm:text-[13px] text-[13px] ">One Link. Endless Possibilities</p>
              <p className="m-0 hero_p text-[#fff]  text-start md:text-center xl:text-[80px] md:text-[60px] lg:text-[70px] sm:text-[50px] text-[30px] lg:leading-[100px] md:leading-[60px] sm:leading-[40px] leading-[35px]">Not just links, <br/><span className="text-[#000000]">your world</span>, your way.</p>
              <p className="m-0  text-start md:text-center  text-[#fff] opacity-75 text-[13px] md:text-[18px]">Whatever you create, Sọmpụ helps you share it better.</p>
            </div>
            <div className="flex md:justify-center items-center gap-4 md:mt-5 mt-7">
              <div >
                <Link className="md:px-16 px-8 bg-blue-200 py-2 rounded-[40px]" href={"/login"}>Sọmpụ Now</Link>
              </div>
              <div>
                <Link className="underline text-[14px] text-white opacity-75" href={"/login"}>See How It Works</Link>
              </div>
            </div>
          </div>
        
        </div>
      </div>
      <div>
        {/* <!-- Section wrapper to center --> */}
      <section className="flex justify-center items-center py-16">
        <div>
          <div className="flex md:mb-7 sm:mb-5 mb-4 justify-center items-center flex-col gap-4">
            <p className="mt-6 xl:text-[34px] lg:text-[28px] md:text-[26px] sm:text-[24px] text-[20px] text-center text-gray-500 max-w-xl">
              Make your <span className="text-[#1B3B6F] font-[500]">Sọmpụ</span> page truly yours by connecting it to a custom domain.
            </p>
          </div>
          <div className="">
            <SompuCustomDomainCard/>
          </div>
        </div>
      </section>
      <section className="bg-[#F4F3FF] md:my-16 my-12 py-20 overflow-hidden">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-20 px-6 lg:px-12">
          
          {/* LEFT: Phone wireframe with profile */}
          <div
            data-aos="fade-up"
            className="max-w-md mx-auto bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100 rounded-3xl shadow-xl p-8 text-center border border-amber-200"
          >
            <div className="relative">
              <Image
                width={128}
                height={128}
                src={Profile}
                alt="Sompu Profile"
                className="w-32 h-32 rounded-full mx-auto ring-2 ring-white shadow-lg"
              />
              <div className="absolute top-0 right-6 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            
            <h2 className="mt-4 text-2xl font-bold text-amber-900 tracking-wide">
              Sọmpụ
            </h2>
            <p className="text-sm text-amber-700 mt-2 font-medium">
              A creator’s hub inspired by African roots 🌍✨
            </p>

            <div className="mt-4 flex justify-center gap-3 text-amber-900">
              <span className="px-3 py-1 text-xs bg-amber-200 rounded-full">Culture</span>
              <span className="px-3 py-1 text-xs bg-green-200 rounded-full">Creativity</span>
              <span className="px-3 py-1 text-xs bg-orange-200 rounded-full">Africa</span>
            </div>
          </div>

          {/* RIGHT: Heading, copy, CTA */}
          <div className="w-full lg:w-1/2 text-left flex flex-col gap-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold text-[#2F3B91] leading-tight">
                Create and customize your <span className="text-[#6C5CE7]">Sọmpụ</span> profile in minutes
              </h2>
              <p className="text-lg text-gray-600">
                Connect your TikTok, Instagram, YouTube, music, events and more —
                all in a beautiful bio page designed to grow your audience and convert fans.
              </p>
            </div>
            <a
              href="/register"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#00CEC9] to-[#6C5CE7] text-white rounded-full font-medium shadow-lg hover:opacity-90 transition"
            >
              Get started for free
            </a>
          </div>

        </div>
      </section>

      </div>
    </div>
  );
}
