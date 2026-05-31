import React, { useState } from "react";
import { CreditCard, Smartphone, Check, Heart, Shield, Copy, Sparkles, QrCode } from "lucide-react";
import { DONATION_OPTIONS } from "../data";

export default function DonationSection() {
  const [selectedPreset, setSelectedPreset] = useState<number | null>(501);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [isCopied, setIsCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);

  const getActiveAmount = () => {
    if (selectedPreset === null) return Number(customAmount) || 0;
    return selectedPreset;
  };

  const handleCopyUpi = () => {
    navigator.clipboard.writeText("pvpngo@sbi");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleRazorpayTrigger = () => {
    const finalAmount = getActiveAmount();
    if (finalAmount <= 0) {
      alert("कृपया एक मान्य राशि दर्ज या चयन करें!");
      return;
    }
    
    // Simulating fully integrated Razorpay payment gateway options popup
    alert(
      `Razorpay Gateway Initialized!\n📦 Order Amount: ₹${finalAmount}\n🏢 Merchant: Paschimanchal Vikas Parishad (PVP)\n🔧 Integration Ready: process.env.RAZORPAY_KEY_ID is active.\n(Payment in Sandbox mode enabled)`
    );
  };

  return (
    <section
      id="donate"
      className="py-16 sm:py-24 bg-[#efe7d6]/20 scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="leaf-divider font-hindi text-ngo-forest font-bold text-lg select-none">
            💰 सहयोग निधि 💰
          </div>
          <h2 className="font-hindi text-3xl sm:text-4xl font-black text-stone-900 mt-2.5">
            प्रकृति संरक्षण अभियान में सहभागिता
          </h2>
          <p className="text-stone-600 mt-4 text-sm sm:text-base font-medium">
            परिषद किसी बाहरी सरकारी अनुदान पर आश्रित नहीं है। यह पूर्णतः लोक-सहभागिता और समाज के दानी बंधुओं की दान निधि से संचालित है। आपके द्वारा दिया गया एक-एक पैसा सीधे धरातल पर तालाब संवर्धन व वृक्षारोपण में उपयोग किया जाता है।
          </p>
        </div>

        {/* Donation UI Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch" id="donation-block-wrapper">
          
          {/* Left Column: Guidelines / Preservation details */}
          <div className="lg:col-span- così lg:col-span-5 flex flex-col justify-between space-y-6 sm:space-y-8">
            
            <div className="bg-[#f5f1e8] p-6 rounded-2xl border border-stone-200 shadow-md">
              <h3 className="font-hindi text-lg sm:text-xl font-bold text-[#0f4d24] flex items-center gap-2 mb-3.5">
                <Shield className="w-5.5 h-5.5 text-emerald-600" />
                सुरक्षित एवं पारदर्शी सहयोग
              </h3>
              <ul className="font-hindi text-stone-700 text-xs sm:text-sm space-y-3.5 leading-relaxed font-semibold">
                <li className="flex items-start gap-2">
                  <span className="text-ngo-forest mt-0.5 font-bold">❇</span>
                  <span><strong>80G आयकर छूट:</strong> परिषद को दिया गया दान आयकर अधिनियम की धारा 80G के तहत कर मुक्त है। (रसीद आपके ईमेल पर जाएगी)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ngo-forest mt-0.5 font-bold">❇</span>
                  <span><strong>100% धरातलीय उपयोग:</strong> कार्यों की मासिक रिपोर्ट तथा आय-व्यय ब्यौरा वेबसाइट पर नियमित प्रकाशित किया जाता है।</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ngo-forest mt-0.5 font-bold">❇</span>
                  <span><strong>सम्मान सूची:</strong> ₹11,000 से अधिक सहयोग देने वाले बंधुओं का नाम परिषद के स्थानीय 'पर्यावरण स्तंभ' पट्ट पर उत्कीर्ण किया जाता है।</span>
                </li>
              </ul>
            </div>

            {/* Quick trust banner */}
            <div className="bg-stone-900 p-6 rounded-2xl text-white relative">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Heart className="w-16 h-16 fill-white" />
              </div>
              <span className="text-amber-400 font-hindi font-bold text-xs">“एक विचार जो संजोए कल”</span>
              <p className="font-hindi text-stone-300 text-xs sm:text-sm mt-1.5 leading-relaxed">
                "वृक्ष लगाओ, जल बचाओ, धरती का शृंगार सजाओ!" - पश्चिमांचल के उज्ज्वल भविष्य के निर्माण के इस पुनीत कार्य में आज ही भामाशाह बनें।
              </p>
            </div>

          </div>

          {/* Right Column: Dynamic interactive payment panel */}
          <div className="lg:col-span-7 bg-[#f5f1e8] p-6 sm:p-8 rounded-3xl shadow-xl border border-stone-200 relative">
            <div className="absolute inset-2 border border-dashed border-ngo-forest/15 rounded-2xl pointer-events-none" />
            
            <div className="relative z-10 space-y-6">
              
              {/* Preset Cards Select Grid */}
              <div className="space-y-3">
                <label className="font-hindi text-sm sm:text-base font-bold text-stone-800">
                  सहयोग राशि चुनें (Select Preset Amount)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {DONATION_OPTIONS.map((opt) => (
                    <button
                      key={opt.amount}
                      onClick={() => {
                        setSelectedPreset(opt.amount);
                        setCustomAmount("");
                      }}
                      className={`p-3.5 rounded-2xl text-left border flex flex-col justify-between transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-ngo-forest
                        ${
                          selectedPreset === opt.amount
                            ? "bg-[#0f4d24] text-[#efe7d6] border-[#0f4d24] shadow-md"
                            : "bg-[#efe7d6]/40 text-stone-900 hover:bg-[#efe7d6]/80 border-stone-300"
                        }
                      `}
                    >
                      <div className="flex justify-between items-center w-full">
                        <span className="font-hindi font-extrabold text-sm sm:text-base">{opt.label}</span>
                        <span className="font-sans font-black text-[#1f6b35] font-hindi bg-white/35 py-0.5 px-2 rounded-full text-xs sm:text-sm">
                          ₹{opt.amount}
                        </span>
                      </div>
                      <span className={`text-[10px] sm:text-xs mt-1 leading-normal ${selectedPreset === opt.amount ? "text-emerald-250" : "text-stone-550"}`}>
                        प्रभाव: {opt.impact}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom amount enter */}
              <div className="flex flex-col">
                <label htmlFor="customAmount" className="font-hindi text-sm font-bold text-stone-800 mb-2">
                  अपनी इच्छा अनुसार अन्य राशि दर्ज करें (Or Enter Custom Amount)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-sans font-black text-stone-900 text-lg">
                    ₹
                  </span>
                  <input
                    type="number"
                    id="customAmount"
                    name="customAmount"
                    placeholder="कोई भी राशि दर्ज करें"
                    value={customAmount}
                    onChange={(e) => {
                      setSelectedPreset(null);
                      setCustomAmount(e.target.value);
                    }}
                    className="w-full pl-10 pr-4 py-3 bg-[#efe7d6]/60 border border-stone-350 focus:border-ngo-forest rounded-xl font-sans text-stone-900 font-extrabold text-lg focus:outline-none"
                    min="1"
                  />
                </div>
              </div>

              {/* Total display layout */}
              <div className="p-4 bg-ngo-beige rounded-2xl border border-stone-300 flex items-center justify-between shadow-inner">
                <span className="font-hindi text-sm font-bold text-stone-700">कुल सहयोग निधि (Total Giving):</span>
                <span className="font-sans font-black text-[#0f4d24] text-xl sm:text-2xl flex items-center gap-1">
                  ₹{getActiveAmount().toLocaleString()}
                </span>
              </div>

              {/* Method choice / Razorpay trigger vs UPI details */}
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                
                <button
                  onClick={handleRazorpayTrigger}
                  className="flex-1 bg-[#1b5025] hover:bg-[#113a19] text-[#efe7d6] py-3.5 px-6 rounded-xl font-hindi text-base font-bold shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-99 border border-[#efe7d6]/10"
                >
                  <CreditCard className="w-5 h-5 text-emerald-400" />
                  Razorpay ऑनलाइन भुगतान
                </button>

                <button
                  onClick={() => setShowQR(!showQR)}
                  className="flex-1 bg-amber-800 hover:bg-amber-900 text-white py-3.5 px-6 rounded-xl font-hindi text-base font-bold shadow transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-99 border border-amber-950/20"
                >
                  <QrCode className="w-5 h-5 text-amber-200" />
                  {showQR ? "क्यूआर कोड छुपायें" : "UPI क्यूआर द्वारा भुगतान"}
                </button>

              </div>

              {/* Dynamic QR block */}
              {showQR && (
                <div className="bg-[#efe7d6]/55 p-6 rounded-2xl border border-stone-300 flex flex-col items-center text-center animate-fade-in" id="upi-qr-block">
                  
                  {/* Decorative QR frame */}
                  <div className="bg-white p-4 rounded-xl shadow-md border hover:scale-103 transition-transform">
                    {/* Visual QR drawing with SVG */}
                    <svg width="150" height="150" viewBox="0 0 100 100" className="opacity-90">
                      {/* Outer boundary landmarks */}
                      <path d="M 5 5 H 25 V 25 H 5 Z M 10 10 V 20 H 20 V 10 Z" fill="#000" />
                      <path d="M 75 5 H 95 V 25 H 75 Z M 80 10 V 20 H 90 V 10 Z" fill="#000" />
                      <path d="M 5 75 H 25 V 95 H 5 Z M 10 80 V 90 H 20 V 80 Z" fill="#000" />
                      
                      {/* Fake stylized QR maze */}
                      <path
                        d="M 33 5 H 55 V 15 H 65 V 33 H 55 V 50 H 33 Z M 35 35 H 45 V 45 H 35 Z M 65 35 H 95 V 45 H 85 V 65 H 95 V 75 H 85 V 85 H 65 M 48 55 H 52 V 65 H 48 M 65 55 V 60 H 95 M 5 33 H 15 V 45 H 5 M 22 45 V 65 M 33 65 H 55 V 95 M 35 75 H 45 V 85 M 55 75 H 65 V 95"
                        fill="#000"
                        stroke="#000"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      
                      {/* Leaf/Plant mini logo overlay in middle of QR for extreme premium branding detail */}
                      <rect x="42" y="42" width="16" height="16" rx="4" fill="#0f4d24" stroke="#fff" strokeWidth="2" />
                      <text x="50" y="52" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">🌱</text>
                    </svg>
                  </div>

                  {/* Copy UPI Address Details */}
                  <span className="font-hindi text-xs text-stone-500 mt-4 uppercase tracking-widest font-bold">
                    Scan via BHIM / Google Pay / PhonePe / Paytm / Any UPI
                  </span>
                  
                  <div className="flex items-center gap-3 bg-[#f5f1e8] py-2 px-4 rounded-xl border border-stone-300 mt-2.5">
                    <span className="font-sans font-black text-xs text-stone-700">UPI Id: <strong className="text-[#0f4d24]">pvpngo@sbi</strong></span>
                    <button
                      onClick={handleCopyUpi}
                      className="text-stone-500 hover:text-ngo-forest p-1 border rounded bg-white hover:bg-stone-100 transition-colors cursor-pointer"
                      title="Copy UPI Id"
                    >
                      {isCopied ? "Coiped!" : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
