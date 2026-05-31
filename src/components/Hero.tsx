import React from "react";
import { Trees, Users, Heart, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 overflow-hidden"
    >
      {/* Dynamic Two-Image Blended Background Layer */}
      <div className="absolute inset-0 w-full h-full flex flex-col md:flex-row" id="hero-background-wrapper">
        
        {/* Left Side: Agriculture, Nature, Village Road */}
        <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
          <img
            src="https://images.unsplash.com/photo-1464234471565-33a518eeae20?auto=format&fit=crop&q=80&w=1200"
            alt="Rural village pathway and lush agriculture of Paschimanchal"
            className="w-full h-full object-cover"
            loading="eager"
          />
          {/* Subtle radial/linear green gradient overlay to match image branding */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/40 via-stone-900/10 to-transparent" />
        </div>

        {/* Right Side: River, Sunset, Volunteers near water */}
        <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
          <img
            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1200"
            alt="Beautiful river sunset with environmental volunteers"
            className="w-full h-full object-cover"
            loading="eager"
          />
          {/* Warm sunset orange/amber overlays */}
          <div className="absolute inset-0 bg-gradient-to-l from-stone-900/30 via-amber-900/10 to-transparent" />
        </div>

        {/* Central Mask to blend the left and right background photos smoothly */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f5f1e8]/80 via-transparent to-[#efe7d6]/90 block pointer-events-none" />
        <div className="absolute inset-0 bg-stone-950/20 mix-blend-multiply pointer-events-none" />
      </div>

      {/* Decorative Flying Birds Layer (as shown in reference image) */}
      <div className="absolute top-28 right-1/4 pointer-events-none select-none opacity-40 animate-pulse">
        <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 20 Q15 10 20 20 Q25 10 30 20" stroke="#0f4d24" strokeWidth="2" strokeLinecap="round" fill="none"/>
          <path d="M50 35 Q53 27 56 35 Q59 27 62 35" stroke="#1f6b35" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          <path d="M85 15 Q90 5 95 15 Q100 5 105 15" stroke="#0f4d24" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        </svg>
      </div>

      {/* Hero Content Container */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-12 sm:py-20 z-10 flex flex-col items-center">
        
        {/* Main Heading in Devanagari */}
        <h1 className="font-hindi text-4xl sm:text-6xl md:text-7xl font-black text-stone-900 tracking-tight leading-tight select-none">
          पश्चिमांचल विकास परिषद{" "}
          <span className="text-ngo-dark drop-shadow-sm font-semibold">(भारत)</span>
        </h1>

        {/* Highlighted Slogan */}
        <p className="font-hindi text-xl sm:text-3xl md:text-4.5xl text-stone-800 font-extrabold mt-6 bg-[#f5f1e8]/90 py-1.5 px-6 rounded-full border border-[#efe7d6] shadow-sm max-w-3xl">
          “पहला प्रयास–पश्चिमांचल का विकास”
        </p>

        {/* Leaf Ornament Sub-badge ("प्रकृति से संस्कृति की ओर") */}
        <div className="flex items-center gap-2 sm:gap-4 mt-6 text-ngo-forest font-bold font-hindi text-base sm:text-2xl select-none group">
          <span className="text-xl sm:text-2xl transition-transform duration-500 group-hover:-rotate-12">🌿</span>
          <span className="border-b-2 border-ngo-forest/30 pb-0.5 tracking-wider px-2">
            प्रकृति से संस्कृति की ओर
          </span>
          <span className="text-xl sm:text-2xl transition-transform duration-500 group-hover:rotate-12">🌿</span>
        </div>

        {/* Mission Statement Description Panel */}
        <div className="mt-8 max-w-3xl bg-[#f5f1e8]/95 border border-ngo-beige shadow-lg rounded-2xl p-6 sm:p-8 backdrop-blur-md">
          <p className="font-hindi text-lg sm:text-xl md:text-2xl text-stone-800 leading-relaxed font-semibold">
            जल, जंगल, ज़मीन, जीव और संस्कृति की रक्षा के लिए समर्पित एक जनांदोलन,
          </p>
          <p className="font-hindi text-base sm:text-lg md:text-xl text-stone-700 mt-2 font-medium">
            आइए मिलकर पश्चिमांचल के सुनहरे भविष्य का निर्माण करें।
          </p>
        </div>

        {/* Three Gradient Custom Buttons with interactive animations */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full max-w-2xl px-4">
          
          <a
            href="#campaigns"
            className="flex-1 inline-flex items-center justify-center gap-3 bg-gradient-to-r from-ngo-dark to-ngo-forest text-[#efe7d6] px-6 py-4 rounded-xl font-hindi text-lg font-bold shadow-md hover:shadow-xl hover:scale-103 transition-all duration-300 border border-[#efe7d6]/20 focus:outline-none focus:ring-4 focus:ring-ngo-forest/40"
          >
            <Trees className="w-5 h-5 text-emerald-300" />
             हमारे अभियान
          </a>

          <a
            href="#join"
            className="flex-1 inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-800 to-amber-700 text-[#f5f1e8] px-6 py-4 rounded-xl font-hindi text-lg font-bold shadow-md hover:shadow-xl hover:scale-103 transition-all duration-300 border border-amber-900/10 focus:outline-none focus:ring-4 focus:ring-amber-700/40"
          >
            <Users className="w-5 h-5 text-amber-200" />
            आंदोलन से जुड़ें
          </a>

          <a
            href="#donate"
            className="flex-1 inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-800 to-emerald-600 text-[#efe7d6] px-6 py-4 rounded-xl font-hindi text-lg font-bold shadow-md hover:shadow-xl hover:scale-103 transition-all duration-300 border border-emerald-950/25 focus:outline-none focus:ring-4 focus:ring-emerald-700/40"
          >
            <Heart className="w-5 h-5 text-red-300 fill-red-300/10" />
            सहयोग करें
          </a>

        </div>

      </div>

      {/* Decorative Wave/River Graphic bottom borders */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[30px] fill-[#efe7d6]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,1041.52,94c77.29,12.58,154.67,13.27,211.7,3H0V0C233.19,10,307.75,58.89,307.75,58.89Z" opacity=".5"></path>
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86C233.19,67.8,0,0,0,0V120H1200V12.19C1200,12.19,1064.67,113.66,985.66,92.83Z"></path>
        </svg>
      </div>

    </section>
  );
}
