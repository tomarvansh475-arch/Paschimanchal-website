import React from "react";
import { CheckCircle2, Award, Heart, Trees } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-16 sm:py-24 bg-[#efe7d6]/40 text-stone-900 scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
          
          {/* Left Column: Image collage exactly as requested */}
          <div className="lg:col-span- così lg:col-span-6 relative w-full h-[520px] max-w-md md:max-w-lg mx-auto lg:mx-0" id="about-image-collage">
            
            {/* Main background organic shape blob */}
            <div className="absolute top-10 left-10 w-72 h-72 sm:w-80 sm:h-80 bg-ngo-forest/10 rounded-full blur-3xl -z-10" />

            {/* Main large image */}
            <div className="absolute top-4 left-4 w-[75%] h-[65%] rounded-2xl overflow-hidden shadow-2xl border-4 border-[#efe7d6] hover:scale-101 hover:z-20 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800"
                alt="Volunteers planting saplings in local soil of Paschimanchal"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Secondary overlapping image (Bottom right) */}
            <div className="absolute bottom-4 right-4 w-[65%] h-[55%] rounded-2xl overflow-hidden shadow-2xl border-4 border-[#efe7d6] hover:scale-101 hover:z-20 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=600"
                alt="Traditional organic food farming community"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Overlapping small detail image (Middle left / foreground) */}
            <div className="absolute top-[40%] -left-4 w-[40%] h-[35%] rounded-xl overflow-hidden shadow-xl border-4 border-[#efe7d6] hidden sm:block hover:scale-105 hover:z-20 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1464234471565-33a518eeae20?auto=format&fit=crop&q=80&w=400"
                alt="Water conservation pond site"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Small decorative badge floating */}
            <div className="absolute bottom-1/4 left-1/3 bg-[#0f4d24] text-[#efe7d6] p-4 rounded-2xl shadow-xl border border-ngo-forest flex items-center gap-3 animate-pulse select-none z-30">
              <Trees className="w-8 h-8 text-emerald-400" />
              <div className="flex flex-col">
                <span className="font-hindi text-lg font-black leading-none">25+ वर्ष</span>
                <span className="text-[10px] font-sans uppercase tracking-widest mt-1 opacity-80 font-semibold text-emerald-300">
                  Social Service
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Mission, Vision, and Highlights */}
          <div className="lg:col-span-6 flex flex-col justify-center" id="about-details-content">
            
            {/* Section Header */}
            <div className="text-left mb-6">
              <div className="font-hindi text-[#1f6b35] font-extrabold text-base tracking-wider flex items-center gap-1.5 select-none">
                🌱 राष्ट्रीय एकता की मिसाल 🌱
              </div>
              <h2 className="font-hindi text-3xl sm:text-4.5xl font-black text-stone-900 mt-2.5 leading-tight">
                पश्चिमांचल विकास परिषद <span className="text-ngo-forest">(भारत)</span> का परिचय
              </h2>
            </div>

            {/* Introduction paragraph */}
            <p className="font-hindi text-[#1c2e21] text-base sm:text-lg leading-relaxed font-semibold">
              पश्चिमांचल (पश्चिमी उत्तर प्रदेश, उत्तराखंड व हरियाणा सीमावर्ती क्षेत्र) की समृद्ध वन संपदा, प्राचीन जलस्रोतों और हमारी धरोहर 'कौरवी लोक विधा' को संरक्षित करने के पावन उद्देश्य से प्रेरित होकर, परिषद गाँव-गाँव जाकर पर्यावरण क्रांति का शंखनाद कर रही है।
            </p>

            {/* Premium green highlighted quote */}
            <div className="my-6 border-l-4 border-l-ngo-forest bg-ngo-beige/65 p-4 rounded-r-xl shadow-inner">
              <p className="font-hindi text-[#0f4d24] text-base italic leading-relaxed font-bold">
                “जिस प्रकार वृक्ष सभी जीवों को बिना भेदभाव के छाया और फल प्रदान करते हैं, उसी प्रकार हमारी संस्कृति भी वसुधैव कुटुम्बकम् के महावैश्विक विचार पर आधारित है।”
              </p>
              <div className="text-right font-hindi text-xs font-bold text-stone-600 mt-2">
                — हमारे पूर्वज एवं पर्यावरण प्रणेता
              </div>
            </div>

            {/* Mission & Vision Split Subsections */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
              
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-ngo-forest/10 flex items-center justify-center text-ngo-forest">
                  <CheckCircle2 className="w-5 h-5 text-ngo-dark" />
                </div>
                <div>
                  <h4 className="font-hindi text-lg font-extrabold text-[#0f4d24]">
                    हमारा उद्देश्य (Goal)
                  </h4>
                  <p className="font-hindi text-stone-700 text-sm mt-1 leading-relaxed">
                    प्रकृति संरक्षण (जल, वन, पशु-पक्षी) के माध्यम से गाँव के प्रत्येक नागरिक को आत्मनिर्भर व सुसंस्कृत बनाना।
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-800/10 flex items-center justify-center text-amber-800">
                  <CheckCircle2 className="w-5 h-5 " />
                </div>
                <div>
                  <h4 className="font-hindi text-lg font-extrabold text-amber-900">
                    हमारा महासंकल्प (Vision)
                  </h4>
                  <p className="font-hindi text-stone-700 text-sm mt-1 leading-relaxed">
                    हर गाँव में जल स्वावलंबन हो, जैविक अन्न हो, और हमारी मधुर पैतृक खड़ी बोली (कौरवी) का मान अक्षुण्ण रहे।
                  </p>
                </div>
              </div>

            </div>

            {/* Another quick mini highlighting note block */}
            <div className="mt-8 flex items-center gap-2 sm:gap-3 p-3 rounded-xl bg-orange-600/5 border border-orange-200 text-orange-950 font-hindi text-xs sm:text-sm font-semibold max-w-xl">
              <Award className="w-5 h-5 text-orange-600 flex-shrink-0 animate-pulse" />
              <span>
                "मिट्टी, पानी, बीज और संस्कार ही स्वतंत्र स्वावलंबी गाँव के चार मूल मंत्र हैं।"
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
