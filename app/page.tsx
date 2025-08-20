import Image from "next/image";
import { Header } from "@/components/header";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header />
      <div>
        <div>
          <div className="lg:mt-20 md:mt-16 sm:mt-12 mt-8">
            <p className="m-0 text-[#fff] text-center xl:text-[16px] md:text-[14px] lg:text-[15px] sm:text-[13px] text-[13px] ">One Link. Endless Possibilities</p>
            <p className="m-0 hero_p text-[#fff] text-center xl:text-[80px] md:text-[60px] lg:text-[70px] sm:text-[50px] text-[30px] lg:leading-[100px] md:leading-[60px] sm:leading-[40px] leading-[35px]">Not just links, <br/><span className="text-[#000000]">your world</span>, your way.</p>
            <p className="m-0 text-center mt-2 text-[#fff] opacity-75 text-[14px] md:text-[18px]">Whatever you create, Sompu helps you share it better.</p>
          </div>
          <div className="flex justify-center items-center gap-4 md:mt-4 mt-3">
            <div >
              <Link className="md:px-16 px-8 bg-blue-200 py-2 rounded-[40px]" href={"/login"}>Sọmpụ Now</Link>
            </div>
            <div>
              <Link className="underline text-white opacity-75" href={"/login"}>See How It Works</Link>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
}
