// // components/SompuCustomDomainCard.tsx
// "use client";

// import { Globe, Twitter, Instagram, Music, Youtube, X } from "lucide-react";
// import { BsInstagram, BsSpotify, BsTiktok, BsTwitterX, BsYoutube } from "react-icons/bs";

// type Props = {
//   domain?: string;
//   name?: string;
//   role?: string;
//   avatarUrl?: string;
//   ctaText?: string;
// };

// export default function SompuCustomDomainCard({
//   domain = "sompu.yourname.com",
//   name = "Ama",
//   role = "Video creator",
//   avatarUrl = "/avatars/creator.png",
//   ctaText = "Follow me on Instagram",
// }: Props) {
//   return (
//     <div
//       className="bg-[#E9E9E9]/30 rounded-[32px] p-6 sm:p-10 h-[440px] relative overflow-visible
//                  shadow-[0_20px_60px_-10px_rgba(0,0,0,0.25)] max-sm:h-[360px]"
//       data-aos="fade-up"
//       data-aos-duration="1000"
//       data-aos-easing="ease-out-cubic"
//     >
//       {/* “Phone” shell */}
//       <div className="relative mx-auto w-full max-w-[420px] bg-white rounded-[32px] border border-black/5 shadow-2xl md:px-16 lg:px-20 pb-8 pt-7">
//         {/* Domain pill */}
//         <div className="mx-auto w-full max-w-[360px]">
//           <div className="rounded-full px-4 py-2 flex items-center gap-2
//                           bg-gradient-to-r from-[#00CEC9] to-[#6C5CE7] text-white
//                           shadow-[0_10px_24px_rgba(108,92,231,0.35)]">
//             <div className="bg-white/20 rounded-full p-1">
//               <Globe className="w-4 h-4" />
//             </div>
//             <span className="text-sm font-semibold truncate">{domain}</span>
//           </div>
//         </div>

//         {/* Avatar */}
//         <div className="mt-7 flex justify-center">
//           <div className="relative">
//             <img
//               src={avatarUrl}
//               alt={`${name} avatar`}
//               className="w-24 h-24 rounded-full object-cover ring-4 ring-white shadow-lg"
//             />
//             <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-[#00CEC9] ring-2 ring-white" />
//           </div>
//         </div>

//         {/* Name + role */}
//         <div className="mt-4 text-center">
//           <h4 className="text-xl font-bold text-[#2F3B91]">{name}</h4>
//           <p className="text-sm text-gray-600">{role}!</p>
//         </div>

//         {/* Socials */}
//         <div className="mt-5 flex items-center justify-center gap-4 text-[#2F3B91]">
//           {/* <Insta className="w-5 h-5" /> */}
//           <BsInstagram className="w-5 h-5" />
//           <BsTiktok className="w-5 h-5" /> {/* TikTok stand-in */}
//           {/* <Youtube className="w-5 h-5" /> */}
//           <BsYoutube className="w-5 h-5" />
//           <BsSpotify className="w-5 h-5" />
//         </div>

//         {/* CTA */}
//         <button
//           className="mt-7 w-full bg-gray-100 hover:bg-gray-200 text-gray-900
//                      rounded-2xl py-4 font-medium transition shadow-sm"
//           type="button"
//         >
//           {ctaText}
//         </button>
//       </div>

//       {/* Soft vignette / spotlight */}
//       <div className="pointer-events-none absolute -z-10 inset-0">
//         <div className="absolute inset-x-8 -top-6 h-32 rounded-full blur-3xl
//                         bg-gradient-to-r from-[#6C5CE7]/30 to-[#00CEC9]/30" />
//       </div>
//     </div>
//   );
// }



// components/SompuCustomDomainCard.tsx
"use client";

import { Globe, Music, X } from "lucide-react";
import { BsInstagram, BsSpotify, BsTwitterX } from "react-icons/bs";

type Props = {
  domain?: string;
  name?: string;
  role?: string;
  avatarUrl?: string;
  ctaText?: string;
};

export default function SompuCustomDomainCard({
  domain = "sompu.yourname.com",
  name = "Ama",
  role = "Video Creator",
  ctaText = "Follow me on Instagram",
}: Props) {
  return (
    <div
      className="bg-[#E9E9E9]/20 rounded-[32px] md:max-w-[500px] max-w-[350px] sm:max-w-[400px] mx-auto p-7 sm:p-10 sm:h-[360px] md:h-[460px] relative overflow-visible
                 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.25)] max-sm:h-[380px]"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-out-cubic"
    >
      {/* Phone shell */}
      <div className="relative mx-auto w-full max-w-[350px] sm:max-w-[420px] md:h-[454px] h-[400px] sm:h-[420px] bg-white rounded-[32px] border border-black/5 shadow-2xl md:px-14 lg:px-16 sm:px-10 px-6 pb-8 pt-7">
        
        {/* Domain pill */}
        <div className="mx-auto w-full max-w-[360px]">
          <div className="rounded-full px-5 py-2 flex items-center gap-2 bg-gradient-to-r from-[#1B3B6F] to-[#00CEC9] text-white shadow-[0_0_25px_rgba(108,92,231,0.6)] animate-pulse-slow">
            <div className="bg-white/20 rounded-full p-1">
              <Globe className="w-4 h-4" />
            </div>
            <span className="text-sm font-semibold truncate">{domain}</span>
          </div>
        </div>

        {/* Avatar with glow */}
        <div className="md:mt-8 sm:mt-5 flex justify-center relative">
          <div className="absolute w-32 h-32 bg-gradient-to-r from-[#6C5CE7]/40 to-[#00CEC9]/40 blur-3xl rounded-full" />
          <img
            src="https://randomuser.me/api/portraits/women/68.jpg"
            alt={`${name} avatar`}
            className="relative w-24 h-24 rounded-full object-cover ring-2 ring-white shadow-lg"
          />
        </div>

        {/* Name + role */}
        <div className="mt-5 text-center">
          <h4 className="text-xl font-bold text-[#2F3B91]">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>

        {/* Socials */}
        <div className="mt-6 flex items-center justify-center gap-4">
          {[
            { icon: <BsTwitterX className="w-5 h-5" />, color: "#000000" },
            { icon: <BsInstagram className="w-5 h-5" />, color: "#E1306C" },
            { 
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                  <path d="m10 15 5-3-5-3z"/>
                </svg>
              ),
              color: "#FF0000"
            },
            { icon: <BsSpotify className="w-5 h-5" />, color: "#1DB954" },
          ].map((social, i) => (
            <button
              key={i}
              className="p-3 rounded-full bg-white shadow-md hover:scale-110 transition"
              style={{ color: social.color }}
            >
              {social.icon}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <button
            className="mt-8 sm:px-0 px-4  sm:w-full bg-gradient-to-r from-[#1B3B6F] to-[#00CEC9]  text-white rounded-2xl py-3 md:py-4 font-semibold transition shadow-lg hover:shadow-xl hover:scale-[1.02]"
            type="button"
          >
            {ctaText}
          </button>
        </div>
      </div>

      {/* Background glow */}
      <div className="pointer-events-none absolute -z-10 inset-0">
        <div className="absolute inset-x-10 -top-6 h-32 rounded-full blur-3xl bg-gradient-to-r from-[#6C5CE7]/30 to-[#00CEC9]/30" />
      </div>
    </div>
  );
}
