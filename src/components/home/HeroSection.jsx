import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import heroImage from "@/images/hero-properties.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] flex items-end justify-start overflow-hidden">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Family enjoying community living"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      />
      {/* Green Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 via-green-900/60 to-transparent" style={{ zIndex: 1 }} />
      {/* Learn More Button */}
      <Link
        to={createPageUrl("AboutUs")}
        className="absolute top-6 left-20 bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-2 rounded transition-all text-sm shadow z-20"
      >
        LEARN MORE ABOUT US
      </Link>
      {/* Content */}
      <div className="relative z-10 w-full pl-20 pr-6 pb-8 md:pb-10 flex flex-col items-start text-left">
        <div className="mb-8 flex flex-col items-start">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Building Better <br />
            <span className="text-white inline-flex flex-wrap items-center gap-3">
              Communities for Filipinos
              <Link
                to={createPageUrl("Listings")}
                className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-2 rounded transition-all text-sm shadow"
              >
                INQUIRE NOW
              </Link>
            </span>
          </h1>
          <p className="text-white/90 text-base md:text-lg max-w-2xl">
            <span className="block whitespace-nowrap">Find your dream home with PHINMA Properties, a trusted real estate developer in the Philippines</span>
            <span className="block">that creates sustainable communities where tradition meets modern Filipino living.</span>
          </p>
        </div>
        {/* Stats Row */}
        <div className="absolute bottom-8 md:bottom-10 right-16 flex gap-8 items-stretch border border-green-400 bg-green-500/20 rounded-lg p-6">
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-3xl font-bold text-white">35+</span>
            <span className="text-white/80 text-xs md:text-sm">Years of Excellence</span>
          </div>
          <div className="border-l border-white/40"></div>
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-3xl font-bold text-white">32+</span>
            <span className="text-white/80 text-xs md:text-sm">Communities</span>
          </div>
          <div className="border-l border-white/40"></div>
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-3xl font-bold text-white">22K+</span>
            <span className="text-white/80 text-xs md:text-sm">Families Served</span>
          </div>
        </div>
      </div>
    </section>
  );
}