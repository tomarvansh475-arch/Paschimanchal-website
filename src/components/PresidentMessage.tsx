import React from "react";
import { Mail, Edit3, Award, Sparkles } from "lucide-react";

export default function PresidentMessage() {
  return (
    <section
      id="president-msg"
      className="py-16 sm:py-20 bg-[#efe7d6]/20 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="leaf-divider font-hindi text-ngo-forest font-bold text-lg select-none">
            🪶 अध्यक्षीय संदेश 🪶
          </div>
          <h2 className="font-hindi text-2xl sm:text-3xl font-black text-stone-900 mt-2.5">
            राष्ट्रीय अध्यक्ष जी का विचार प्रवाह
          </h2>
        </div>

        {/* Outer Parchment Styled Frame Card */}
        <div
          className="bg-[#f5f1e8] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border-2 border-ngo-beige/80 relative overflow-hidden grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
          id="president-card-frame"
        >
          {/* Decorative double border inside card */}
          <div className="absolute inset-2 border border-dashed border-ngo-forest/15 rounded-2xl pointer-events-none" />
          
          {/* Ambient organic patterns */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-ngo-forest/5 rounded-full blur-xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-800/5 rounded-full blur-xl" />

          {/* Left Column: Portrait & Title Badge */}
          <div className="md:col-span-4 flex flex-col items-center text-center z-10">
            <div className="relative group">
              {/* Outer Golden/Green Ring */}
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-tr from-ngo-dark via-ngo-forest to-amber-700 blur-sm opacity-60 group-hover:opacity-100 transition duration-500" />
              
              {/* Main Portrait Frame */}
              <div className="relative w-52 h-64 sm:w-56 sm:h-72 bg-stone-100 rounded-2xl overflow-hidden shadow-lg border-2 border-[#efe7d6]">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500"
                  alt="Dr. Satyavir Singh - National President, PVP NGO"
                  className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Verified Ribbon */}
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-amber-700 text-[#efe7d6] text-[10px] font-sans font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-md border border-[#efe7d6]">
                🎖️ Dr. Satyavir Singh
              </span>
            </div>

            {/* Official Designation Detail block */}
            <div className="mt-8 flex flex-col">
              <span className="font-hindi text-xl font-extrabold text-stone-900 leading-none">
                डॉ. सत्यवीर Singh
              </span>
              <span className="text-xs font-sans text-stone-500 font-bold uppercase tracking-wider mt-1.5">
                PhD, Environmental Science
              </span>
              <span className="font-hindi text-sm font-semibold text-[#1f6b35] bg-ngo-beige px-3 py-1 rounded-full border border-stone-300 mt-2">
                राष्ट्रीय अध्यक्ष, प.वि.प. (भारत)
              </span>
            </div>
          </div>

          {/* Right Column: Formal message and elegant signature */}
          <div className="md:col-span-8 flex flex-col justify-between h-full z-10 px-0 sm:px-4">
            
            {/* Top quote symbol graphic */}
            <div className="text-5xl font-serif text-ngo-forest/25 select-none leading-none -mb-2">
              “
            </div>

            {/* Main letter body text in Hindi */}
            <div className="font-hindi text-[#1a2d1d] text-base sm:text-lg leading-relaxed space-y-4 font-medium italic">
              <p>
                प्रिय सहयात्रियों और पर्यावरण सैनिकों,
              </p>
              <p>
                हमारा पश्चिमांचल क्षेत्र ऐतिहासिक रूप से वेदों, वीरों और महान कृषक संस्कृति की भूमि रहा है। परंतु बीते कुछ दशकों में औद्योगिकीकरण और प्रकृति के प्रति हमारी उदासीनता के कारण हमारी नदियाँ जैसे हिंडन प्रदूषित हुई हैं, और भूजल स्तर खतरे के निशान से नीचे चला गया है।
              </p>
              <p>
                पश्चिमांचल विकास परिषद केवल एक संस्था का नाम नहीं है, यह यहाँ के बच्चों, महिलाओं और समस्त किसानों के सम्मान, पानी और हरियाली की पुनर्स्थापना के संकल्प की साझी यात्रा है। हमारा ध्येय बहुत सरल और सुदृढ़ है—<strong>गाँव का पानी गाँव में, गाँव का पेड़ शामलात में, और गाँव के प्राचीन गौरवशाली संस्कार युवाओं के व्यवहार में।</strong>
              </p>
              <p>
                आप सभी से विनम्र आह्वान है कि इस लोक-आंदोलन का हिस्सा बनें। आपके द्वारा बोया गया एक पेड़ और संरक्षित किया गया पानी का एक-एक बूंद हमारी आने वाली पीढ़ियों के जीवन का आधार बनेगा।
              </p>
            </div>

            {/* Bottom Letter Detail Block: Sign out and Signature graphic */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between border-t border-stone-300/60 pt-6">
              
              <div className="flex items-center gap-2.5 text-xs text-stone-500 font-sans font-semibold italic">
                <Sparkles className="w-4 h-4 text-amber-700 animate-spin-slow" />
                <span>"प्रकृतिः रक्षति रक्षिता" — Nature protects those who protect it.</span>
              </div>

              {/* Signature Graphic Container */}
              <div className="flex flex-col items-center sm:items-end mt-4 sm:mt-0">
                {/* SVG Signature */}
                <span className="font-hindi text-xs text-stone-500 italic mb-1 uppercase font-bold tracking-tight">
                  हस्ताक्षर (Signature)
                </span>
                <svg
                  width="130"
                  height="45"
                  viewBox="0 0 130 45"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                  aria-hidden="true"
                >
                  {/* Digital handwriting style path */}
                  <path
                    d="M 12 32 C 30 14, 25 8, 48 20 C 65 32, 55 42, 75 14 C 95 -10, 101 22, 118 10 C 122 8, 125 15, 120 28"
                    fill="none"
                    stroke="#1e3a1e"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Accent loops */}
                  <path
                    d="M 25 22 C 45 28, 75 30, 110 26"
                    fill="none"
                    stroke="#0f4d24"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="font-hindi text-sm font-extrabold text-stone-800 mt-1">
                  (डॉ. सत्यवीर सिंह)
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
