"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Scale, GraduationCap } from "lucide-react";
import { InfiniteMovingCards } from "../aceternity/infinite-moving-cards";

// Masked Data
const advocates = [
  {
    id: 1,
    name: "Senior Advocate",
    image: "/assets/advocate_1.png",
    specialty: "Civil & Property Law",
    experience: "15+ Years",
    languages: ["English", "Hindi"],
    city: "Bar Counsil No: XXXX ",
    verified: true,
  },
  {
    id: 2,
    name: "Verified Advocate",
    image: "/assets/advocate_2.png",
    specialty: "Family & Divorce Law",
    experience: "12+ Years",
    languages: ["English", "Hindi", "Punjabi"],
    city: "Bar Counsil No: XXXX",
    verified: true,
  },
  {
    id: 3,
    name: "Verified Advocate",
    image: "/assets/advocate_3.png",
    specialty: "Criminal & Cyber Law",
    experience: "8+ Years",
    languages: ["English", "Hindi"],
    city: "Bar Counsil No: XXXX",
    verified: true,
  },
  {
    id: 4,
    name: "Senior Advocate",
    image: "/assets/advocate_4.png",
    specialty: "Corporate Law",
    experience: "20+ Years",
    languages: ["English", "Hindi"],
    city: "Bar Counsil No: XXXX",
    verified: true,
  },
];

export function AdvocateShowcase() {
  return (
    <section className="py-12 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4" />
            Verified Bar Council Members
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Drafted by Senior Advocates
          </h2>
          <p className="text-gray-600">
            Your legal notice is crafted by experienced advocates.
          </p>
        </div>  

        {/* Scrolling Container */}
        <div className="relative w-full">
            <InfiniteMovingCards
                items={advocates}
                direction="left"
                speed="slow"
                pauseOnHover={false}
                className="py-0"
                renderItem={(advocate) => (
                    <div 
                        className="w-[280px] bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden group"
                    >
                        <div className="relative h-64 w-full bg-gray-100">
                            <Image 
                                src={advocate.image} 
                                alt={advocate.name}
                                fill
                                className="object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                            {/* Blur Overlay at bottom */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
                            
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                <h3 className="text-lg font-bold flex items-center gap-1">
                                    {advocate.name}
                                    <ShieldCheck className="w-4 h-4 text-blue-400 fill-blue-400/20" />
                                </h3>
                                <p className="text-xs text-gray-300 font-medium">{advocate.city}</p>
                            </div>
                        </div>
                        
                        <div className="p-4 space-y-3">
                                <div className="flex items-center gap-2 text-sm text-gray-700">
                                <Scale className="w-4 h-4 text-gray-400" />
                                <span className="font-semibold">{advocate.specialty}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-700">
                                <GraduationCap className="w-4 h-4 text-gray-400" />
                                <span>Exp: <span className="font-semibold text-gray-900">{advocate.experience}</span></span>
                                </div>
                                
                                <div className="pt-3 border-t border-gray-100 flex flex-wrap gap-2">
                                {advocate.languages.map(lang => (
                                    <span key={lang} className="text-[10px] font-medium px-2 py-1 bg-gray-50 text-gray-600 rounded-md border border-gray-100">
                                        {lang}
                                    </span>
                                ))}
                                </div>
                        </div>
                    </div>
                )}
            />
        </div>
        
        <p className="text-center text-xs text-gray-400 mt-6 md:mt-10 italic">
            * Identities verified. Names masked and faces blurred for privacy compliance.
        </p>
      </div>
    </section>
  );
}
