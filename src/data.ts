import { Pillar, Campaign, Achievement, NewsItem, TeamMember, GalleryImage, DonationOption } from "./types";

export const PILLARS_DATA: Pillar[] = [
  {
    id: "p1",
    number: "01",
    title: "जल संवर्धन और तालाब पुनरुद्धार",
    titleEn: "Water Conservation & Pond Revival",
    description: "पारंपरिक तालाबों, जौहड़ों और नदियों (जैसे हिंडन) को दोबारा जीवित करना, जल स्तर को सुधारने के लिए वर्षा जल संचयन को बढ़ावा देना।",
    iconName: "Droplet"
  },
  {
    id: "p2",
    number: "02",
    title: "सघन वृक्षारोपण और वन संरक्षण",
    titleEn: "Afforestation & Forest Protection",
    description: "लाखों औषधीय और फलदार पेड़ लगाना, हमारी प्राचीन परंपरा के 'देवरानी-जेठानी' और 'पंचवटी' वनों को पुनर्जीवित करना।",
    iconName: "Trees"
  },
  {
    id: "p3",
    number: "03",
    title: "कौरवी बोली और सांस्कृतिक धरोहर",
    titleEn: "Local Diaspora & Kaurvi Dialect",
    description: "पश्चिमांचल की लोक संस्कृति, रागनी, लोकगीत और गौरवशाली प्राचीन बोली 'कौरवी' (खड़ी बोली) का संरक्षण एवं संवर्धन।",
    iconName: "BookOpen"
  },
  {
    id: "p4",
    number: "04",
    title: "प्राकृतिक और जैविक कृषि",
    titleEn: "Organic & Regenerative Farming",
    description: "रसायन मुक्त खेती को बढ़ावा देना, भूमि की उर्वरता बढ़ाना और किसानों को समृद्ध व स्वावलंबी बनाना।",
    iconName: "Leaf"
  },
  {
    id: "p5",
    number: "05",
    title: "गौसेवा और जीव संरक्षण",
    titleEn: "Cow Service & Animal Protection",
    description: "बेसहारा गोवंश की देखरेख, प्राकृतिक जैविक खाद का निर्माण, और पक्षियों/वन्यजीवों के अनुकूल वातावरण बनाना।",
    iconName: "Heart"
  },
  {
    id: "p6",
    number: "06",
    title: "युवा नेतृत्व और ग्रामीण स्वावलंबन",
    titleEn: "Youth Leadership & Rural Autonomy",
    description: "गाँवों के युवाओं को कौशल प्रशिक्षण देना, पर्यावरण सैनिक के रूप में तैयार करना तथा गाँव में ही रोज़गार के अवसर लाना।",
    iconName: "Users"
  },
  {
    id: "p7",
    number: "07",
    title: "संस्कारशील और व्यसनमुक्त समाज",
    titleEn: "Addiction-free Cultured Society",
    description: "नशा विरोधी आंदोलन चलाना, प्राचीन भारतीय संस्कारों को पुनर्स्थापित करना और स्वस्थ जीवन शैली को प्रेरित करना।",
    iconName: "Award"
  }
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    id: "ach1",
    count: "07",
    titleHindi: "मुख्य स्तंभ",
    titleEnglish: "Main Pillars",
    icon: "Shield"
  },
  {
    id: "ach2",
    count: "10K+",
    titleHindi: "सक्रिय स्वयंसेवक",
    titleEnglish: "Active Volunteers",
    icon: "Users"
  },
  {
    id: "ach3",
    count: "5 Lakh+",
    titleHindi: "वृक्षारोपण का संकल्प",
    titleEnglish: "Trees Plantation Target",
    icon: "Trees"
  },
  {
    id: "ach4",
    count: "150+",
    titleHindi: "तालाब पुनरुद्धार",
    titleEnglish: "Ponds Restored",
    icon: "Droplet"
  },
  {
    id: "ach5",
    count: "100%",
    titleHindi: "लोक संस्कृति के प्रति समर्पण",
    titleEnglish: "Dedicated to Folk Culture",
    icon: "Flame"
  }
];

export const CAMPAIGNS_DATA: Campaign[] = [
  {
    id: "c1",
    titleHindi: "हिन्दन बचाओ पश्चिमांचल बचाओ",
    titleEnglish: "Save Hindon River Movement",
    subtitleHindi: "नदी नहीं, यह हमारी जीवनरेखा है",
    subtitleEnglish: "Save our historic lifeline",
    imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800",
    description: "हिंडन नदी व उसकी सहायक नदियों को प्रदूषण मुक्त करने और उनमें स्वच्छ जल का नियमित प्रवाह सुनिश्चित करने के लिए व्यापक जन-जागरण तथा जलशुद्धि अभियान।",
    pledgedCount: 12450
  },
  {
    id: "c2",
    titleHindi: "जल पंचायत अभियान",
    titleEnglish: "Water Panchayat Initiative",
    subtitleHindi: "जल है तो कल है",
    subtitleEnglish: "Water is life's future",
    imageUrl: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&q=80&w=800",
    description: "हर ग्राम पंचायत में जल संसद और जल चौपालों का आयोजन, पारंपरिक जलस्रोतों (जौहड़/तालाब) का सीमांकन व अतिक्रमण हटाकर गहरीकरण कार्य।",
    pledgedCount: 8430
  },
  {
    id: "c3",
    titleHindi: "कौरवी बोली बचाओ",
    titleEnglish: "Preserve Kaurvi Language",
    subtitleHindi: "अपनी संस्कृति, अपनी पहचान",
    subtitleEnglish: "Our dialect, our identity",
    imageUrl: "https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?auto=format&fit=crop&q=80&w=800",
    description: "पश्चिमांचल की मूल मातृबोली 'कौरवी' को उचित सम्मान दिलाने, इसके लोक साहित्य का दस्तावेज़ीकरण करने और बच्चों/युवाओं में गर्व की भावना जगाने का विशेष मुहिम।",
    pledgedCount: 5120
  },
  {
    id: "c4",
    titleHindi: "वृक्षारोपण एवं पंचवटी निर्माण",
    titleEnglish: "Afforestation & Sacred Groves",
    subtitleHindi: "एक पेड़, माँ के नाम",
    subtitleEnglish: "Plant for Mother Earth",
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
    description: "गाँवों की शामलात भूमि पर वनपट्टिका, औषधीय पौधों से सुसज्जित पंचवटी का निर्माण, और प्रत्येक परिवार द्वारा कम से कम 5 महत्वपूर्ण पेड़ लगाने का संकल्प।",
    pledgedCount: 18900
  }
];

export const NEWS_DATA: NewsItem[] = [
  {
    id: "n1",
    title: "पश्चिमांचल विकास परिषद द्वारा हिंडन नदी के तट पर महा-सफाई और जनजागरण रैली का सफल आयोजन",
    date: "2026-05-15",
    category: "जल अभियान",
    summary: "नदी के किनारे 500 से अधिक पर्यावरण प्रेमियों, ग्रामीणों ने मिलकर श्रमदान अभियान में भाग लिया।",
    content: "मेरठ और बागपत क्षेत्र में हिंडन नदी के संरक्षण के लिए परिषद के मार्गदर्शकों और युवाओं के सहयोग से विशाल पदयात्रा और श्रमदान आयोजन किया गया। अभियान के दौरान लगभग 2 टन प्लास्टिक कचरे को नदी तट से हटाकर पुनर्चक्रण हेतु भेजा गया।",
    imageUrl: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&q=80&w=600",
    views: 1240
  },
  {
    id: "n2",
    title: "गायों की सुरक्षा और जैविक खेती को प्रमोट करने के लिए 10 गाँवों में 'गौकृषि गोष्ठी' संपन्न",
    date: "2026-04-28",
    category: "प्राकृतिक खेती",
    summary: "किसानों को जीवामृत, बीजामृत और प्राकृतिक कीटनाशक तैयार करने की विधि का प्रायोगिक प्रशिक्षण दिया गया।",
    content: "मुजफ्फरनगर के शाहपुर ब्लॉक में 'जैविक स्वावलंबन' विषय पर कार्यशाला आयोजित की गई। कृषि विशेषज्ञों ने मिट्टी की उपजाऊ शक्ति बढ़ाने व विषमुक्त अन्न उपजाने का आह्वान किया।",
    imageUrl: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=600",
    views: 950
  },
  {
    id: "n3",
    title: "सांस्कृतिक महोत्सव: रागनी और लोक विधाओं के माध्यम से गूंजी 'कौरवी बोली' की मिठास",
    date: "2026-03-12",
    category: "सांस्कृतिक विधा",
    summary: "स्थानीय कलाकारों ने पश्चिमांचल के इतिहास और वीरों की गाथाओं को प्रस्तुत कर जनमानस को भावविभोर किया।",
    content: "परिषद द्वारा आयोजित पारंपरिक कौरवी लोक महोत्सव में 30 से अधिक कलाकारों और लोक गायकों ने प्राचीन भजनों, रागनियों की मनमोहक प्रस्तुतियां दीं, जिसका उद्देश्य युवा पीढ़ी को अपनी मूल बोली से जोड़ना है।",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
    views: 1530
  }
];

export const TEAM_DATA: TeamMember[] = [
  {
    id: "t1",
    name: "Dr. Satyavir Singh",
    nameHindi: "डॉ. सत्यवीर सिंह",
    role: "National President",
    roleHindi: "राष्ट्रीय अध्यक्ष",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    bio: "कृषि वैज्ञानिक एवं प्रख्यात सामाजिक कार्यकर्ता, पिछले 25 वर्षों से गंगा-यमुना दोआब के प्राकृतिक पुनरुद्धार और जैविक कृषि के लिए प्रयासरत हैं।",
    socials: {
      twitter: "#",
      facebook: "#",
      linkedin: "#"
    }
  },
  {
    id: "t2",
    name: "Acharya Devavrat Shastri",
    nameHindi: "आचार्य देवव्रत शास्त्री",
    role: "General Secretary & Cultural Advisor",
    roleHindi: "महामंत्री एवं सांस्कृतिक प्रणेता",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    bio: "कौरवी बोली और प्राचीन वेदों के मर्मज्ञ विद्वान, जो क्षेत्रीय लोक कलाओं के दस्तावेजीकरण और युवा जागृति के प्रणेता हैं।",
    socials: {
      facebook: "#",
      instagram: "#"
    }
  },
  {
    id: "t3",
    name: "Dr. Ranjana Malik",
    nameHindi: "डॉ. रंजना मलिक",
    role: "Women Wing Director & River Expert",
    roleHindi: "महिला विंग निदेशिका व नदी संरक्षण विशेषज्ञ",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    bio: "भूजल वैज्ञानिक, जिन्होंने जल पंचायतों के माध्यम से सैकड़ों गाँवों की महिलाओं को तालाब पुनरुद्धार अभियान से जोड़ा है।",
    socials: {
      twitter: "#",
      linkedin: "#",
      instagram: "#"
    }
  },
  {
    id: "t4",
    name: "Er. Vivek Shishodia",
    nameHindi: "इंजी. विवेक शिशोदिया",
    role: "Youth Mobilizer & IT Head",
    roleHindi: "युवा संयोजक एवं तकनीकी प्रमुख",
    imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400",
    bio: "सॉफ्टवेयर इंजीनियर, जो अपनी कॉर्पोरेट नौकरी को छोड़कर गाँवों के डिजिटल कौशल और 'पर्यावरण सेना' के निर्माण में पूर्णकालिक जुटे हैं।",
    socials: {
      twitter: "#",
      linkedin: "#"
    }
  }
];

export const GALLERY_DATA: GalleryImage[] = [
  {
    id: "g1",
    url: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=600",
    title: "तालाब पुनरुद्धार श्रमदान अभियान",
    category: "जल चेतना"
  },
  {
    id: "g2",
    url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=600",
    title: "युवा स्वयंसेवकों द्वारा वृक्षारोपण",
    category: "वन संरक्षण"
  },
  {
    id: "g3",
    url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=600",
    title: "ग्रामीण बच्चों के साथ पर्यावरण पाठशाला",
    category: "युवा चेतना"
  },
  {
    id: "g4",
    url: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=600",
    title: "गौमूत्र और गोबर से जीवामृत निर्माण प्रशिक्षण",
    category: "गौकृषि"
  },
  {
    id: "g5",
    url: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=600",
    title: "परिषद की अपनी पहली 'देववन' पर्यावरण नर्सरी",
    category: "वन संरक्षण"
  },
  {
    id: "g6",
    url: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&q=80&w=600",
    title: "स्वावलंबी जैविक कृषि उपज प्रदर्शन",
    category: "गौकृषि"
  },
  {
    id: "g7",
    url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
    title: "महिला मंडल जल चौपाल",
    category: "जल चेतना"
  },
  {
    id: "g8",
    url: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=600",
    title: "सूर्योदय कालीन हिंडन आरती व शपथ",
    category: "जल चेतना"
  }
];

export const DONATION_OPTIONS: DonationOption[] = [
  { amount: 501, label: "💧 जल पात्र निधि", impact: "1 जल पंचायत चौपाल और तालाब निरीक्षण सामग्री का खर्च" },
  { amount: 1100, label: "🌱 तरुवर संरक्षण", impact: "10 फलदार और छायादार आयुर्वेदिक पौधों की सुरक्षा घेरा सहित रोपाई" },
  { amount: 2100, label: "🐂 गौ सेवा सहायक", impact: "बेसहारा गौवंश के चारे व प्राथमिक उपचार के लिए 1 सप्ताह की सहायता" },
  { amount: 5100, label: "🎓 संस्कृति वाहक", impact: "1 गाँव में बच्चों के लिए 'कौरवी लोक कला पाठशाला' का 1 माह संचालन" },
  { amount: 11000, label: "🏞️ तालाब संजीवन", impact: "श्रमदान शिविर के लिए औज़ार, अल्पाहार तथा गहरीकरण कार्य में सहयोग" }
];

export const PARTNERS_LOGOS = [
  { name: "राष्ट्रीय जल मिशन", logoText: "💧" },
  { name: "गंगा विचार मंच", logoText: "🌊" },
  { name: "खादी एवं ग्रामोद्योग", logoText: "🌾" },
  { name: "पतंजलि योगपीठ", logoText: "🕉️" },
  { name: "पश्चिमांचल कृषक संगठन", logoText: "🚜" },
  { name: "वेद विद्या प्रतिष्ठान", logoText: "📖" },
  { name: "पर्यावरण वाहिनी", logoText: "☘️" },
  { name: "भूजल प्रहरी संघ", logoText: "🏞️" }
];
