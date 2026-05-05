// ===== CGSP LANGUAGE SYSTEM =====

const TRANSLATIONS = {

  en: {
    // NAV
    nav_home: 'Home',
    nav_schemes: 'Schemes',
    nav_eligibility: 'Eligibility Check',
    nav_about: 'About Us',
    nav_contact: 'Contact',
    nav_admin: 'Admin Login',

    // HOME HERO
    hero_title: "India's Centralized Government Schemes Portal",
    hero_subtitle: 'Find, check eligibility and apply for 100+ government schemes across education, agriculture, health and empowerment — all in one place.',
    hero_search_placeholder: 'Search for schemes...',
    hero_btn_eligibility: 'Check Eligibility',
    hero_btn_explore: 'Explore Schemes',

    // CATEGORIES
    cat_heading: 'Explore by Category',
    cat_subheading: 'Browse schemes by your specific needs',
    cat_student: 'Student',
    cat_student_desc: 'Scholarships, Fee Reimbursement, Skill Development & more',
    cat_agriculture: 'Agriculture',
    cat_agriculture_desc: 'Financial aid, Equipment support, Training & more',
    cat_disabled: 'Physically Challenged',
    cat_disabled_desc: 'Assistance, Aids & Appliances, Education & more',
    cat_health: 'Health & Wellness',
    cat_health_desc: 'Health insurance, Treatment aid, Wellness programs & more',
    cat_explore: 'Explore →',

    // STATS
    stat_schemes: 'Schemes Available',
    stat_departments: 'Departments',
    stat_benefited: 'Students Benefited',
    stat_support: 'Support',

    // SCHEMES PAGE
    schemes_title: 'All Government Schemes',
    schemes_subtitle: 'Browse all available schemes across different categories',
    schemes_search_placeholder: 'Search schemes...',
    schemes_all: 'All Categories',
    schemes_filter_dept: 'All Departments',
    schemes_filter_state: 'All States',
    schemes_reset: 'Reset Filters',
    schemes_view_details: 'View Details',
    schemes_loading: 'Loading schemes...',
    schemes_not_found: 'No schemes found.',

    // SCHEME DETAIL
    detail_back: '← Back to Schemes',
    detail_about: 'About the Scheme',
    detail_who: 'Who Can Apply?',
    detail_benefits: 'Key Benefits',
    detail_documents: 'Required Documents',
    detail_overview: 'Overview',
    detail_eligibility: 'Eligibility',
    detail_apply: 'Apply Now',
    detail_official: 'Visit Official Website',
    detail_note: 'Clicking Apply Now will take you to the official government website.',
    detail_income: 'Income Limit',
    detail_benefit: 'Benefit',
    detail_mode: 'Mode',
    detail_loading: 'Loading scheme details...',

    // ELIGIBILITY
    elig_title: 'Check Your Eligibility',
    elig_subtitle: 'Fill in your details to find schemes you are eligible for.',
    elig_select_cat: 'Select Category',
    elig_required: 'Required',
    elig_personal: 'Personal Information',
    elig_financial: 'Financial Information',
    elig_additional: 'Additional Information',
    elig_name: 'Full Name',
    elig_age: 'Age',
    elig_gender: 'Gender',
    elig_mobile: 'Mobile Number',
    elig_state: 'State',
    elig_district: 'District',
    elig_income: 'Annual Family Income',
    elig_category: 'Category',
    elig_occupation: 'Occupation',
    elig_course: 'Course/Stream',
    elig_land: 'Land Holding',
    elig_disability: 'Disability Type',
    elig_check_btn: 'Check Eligibility',
    elig_reset: 'Reset',
    elig_note: 'Information provided will be used only to find relevant schemes.',
    elig_male: 'Male',
    elig_female: 'Female',
    elig_other: 'Other',
    elig_select_gender: 'Select Gender',
    elig_select_state: 'Select State',
    elig_select_income: 'Select income range',
    elig_select_cat2: 'Select category',
    elig_select_occ: 'Select occupation',
    elig_student_occ: 'Student',
    elig_farmer_occ: 'Farmer',

    // RESULTS
    result_title: 'Eligibility Results',
    result_eligible: 'Great! You are eligible for',
    result_schemes: 'scheme(s)',
    result_view: 'View Details →',
    result_note: 'Eligibility is based on information provided. Check official guidelines before applying.',

    // ABOUT
    about_title: 'About CGSP Portal',
    about_subtitle: 'We are a team of passionate developers who built this platform to help every Indian citizen easily discover and access government schemes.',
    about_mission: 'Our Mission',
    about_team: 'Meet Our Team',
    about_project: 'Project Details',

    // CONTACT
    contact_title: 'Contact Us',
    contact_subtitle: 'Have questions about government schemes? We are here to help.',
    contact_phone: 'Phone / WhatsApp',
    contact_email: 'Email Support',
    contact_dev_by: 'Developed By',
    contact_hours: 'Support Hours',
  },
  te: {
    // NAV
    nav_home: 'హోమ్',
    nav_schemes: 'పథకాలు',
    nav_eligibility: 'అర్హత తనిఖీ',
    nav_about: 'మా గురించి',
    nav_contact: 'సంప్రదించండి',
    nav_admin: 'అడ్మిన్ లాగిన్',

    // HOME HERO
    hero_title: 'భారతదేశ కేంద్రీకృత ప్రభుత్వ పథకాల పోర్టల్',
    hero_subtitle: '100+ ప్రభుత్వ పథకాల కోసం అర్హత తనిఖీ చేయండి మరియు దరఖాస్తు చేయండి — అన్నీ ఒకే చోట.',
    hero_search_placeholder: 'పథకాల కోసం శోధించండి...',
    hero_btn_eligibility: 'అర్హత తనిఖీ',
    hero_btn_explore: 'పథకాలు చూడండి',

    // CATEGORIES
    cat_heading: 'వర్గం ద్వారా అన్వేషించండి',
    cat_subheading: 'మీ అవసరాల ప్రకారం పథకాలు చూడండి',
    cat_student: 'విద్యార్థి',
    cat_student_desc: 'స్కాలర్‌షిప్‌లు, ఫీజు రీయింబర్స్‌మెంట్, నైపుణ్య అభివృద్ధి',
    cat_agriculture: 'వ్యవసాయం',
    cat_agriculture_desc: 'ఆర్థిక సహాయం, పరికరాల మద్దతు, శిక్షణ',
    cat_disabled: 'వికలాంగులు',
    cat_disabled_desc: 'సహాయం, సాధనాలు, విద్య మరియు మరిన్ని',
    cat_health: 'ఆరోగ్యం & శ్రేయస్సు',
    cat_health_desc: 'ఆరోగ్య బీమా, చికిత్స సహాయం, వెల్నెస్ కార్యక్రమాలు',
    cat_explore: 'అన్వేషించండి →',

    // STATS
    stat_schemes: 'పథకాలు అందుబాటులో',
    stat_departments: 'విభాగాలు',
    stat_benefited: 'లబ్ధిదారులు',
    stat_support: 'మద్దతు',

    // SCHEMES PAGE
    schemes_title: 'అన్ని ప్రభుత్వ పథకాలు',
    schemes_subtitle: 'అన్ని వర్గాలలో అందుబాటులో ఉన్న పథకాలు చూడండి',
    schemes_search_placeholder: 'పథకాలు శోధించండి...',
    schemes_all: 'అన్ని వర్గాలు',
    schemes_filter_dept: 'అన్ని విభాగాలు',
    schemes_filter_state: 'అన్ని రాష్ట్రాలు',
    schemes_reset: 'ఫిల్టర్లు రీసెట్',
    schemes_view_details: 'వివరాలు చూడండి',
    schemes_loading: 'పథకాలు లోడ్ అవుతున్నాయి...',
    schemes_not_found: 'పథకాలు కనుగొనబడలేదు.',

    // SCHEME DETAIL
    detail_back: '← పథకాలకు తిరిగి వెళ్ళండి',
    detail_about: 'పథకం గురించి',
    detail_who: 'ఎవరు దరఖాస్తు చేయవచ్చు?',
    detail_benefits: 'ముఖ్య ప్రయోజనాలు',
    detail_documents: 'అవసరమైన పత్రాలు',
    detail_overview: 'అవలోకనం',
    detail_eligibility: 'అర్హత',
    detail_apply: 'ఇప్పుడు దరఖాస్తు చేయండి',
    detail_official: 'అధికారిక వెబ్‌సైట్ సందర్శించండి',
    detail_note: 'దరఖాస్తు చేయడానికి అధికారిక ప్రభుత్వ వెబ్‌సైట్‌కు వెళ్తారు.',
    detail_income: 'ఆదాయ పరిమితి',
    detail_benefit: 'ప్రయోజనం',
    detail_mode: 'విధానం',
    detail_loading: 'పథకం వివరాలు లోడ్ అవుతున్నాయి...',

    // ELIGIBILITY
    elig_title: 'మీ అర్హత తనిఖీ చేయండి',
    elig_subtitle: 'మీరు అర్హులైన పథకాలు కనుగొనడానికి మీ వివరాలు నమోదు చేయండి.',
    elig_select_cat: 'వర్గం ఎంచుకోండి',
    elig_required: 'అవసరం',
    elig_personal: 'వ్యక్తిగత సమాచారం',
    elig_financial: 'ఆర్థిక సమాచారం',
    elig_additional: 'అదనపు సమాచారం',
    elig_name: 'పూర్తి పేరు',
    elig_age: 'వయస్సు',
    elig_gender: 'లింగం',
    elig_mobile: 'మొబైల్ నంబర్',
    elig_state: 'రాష్ట్రం',
    elig_district: 'జిల్లా',
    elig_income: 'వార్షిక కుటుంబ ఆదాయం',
    elig_category: 'వర్గం',
    elig_occupation: 'వృత్తి',
    elig_course: 'కోర్సు/స్ట్రీమ్',
    elig_land: 'భూమి కలిగి ఉన్న విస్తీర్ణం',
    elig_disability: 'వికలాంగత రకం',
    elig_check_btn: 'అర్హత తనిఖీ',
    elig_reset: 'రీసెట్',
    elig_note: 'అందించిన సమాచారం సంబంధిత పథకాలు కనుగొనడానికి మాత్రమే ఉపయోగించబడుతుంది.',
    elig_male: 'పురుషుడు',
    elig_female: 'స్త్రీ',
    elig_other: 'ఇతర',
    elig_select_gender: 'లింగం ఎంచుకోండి',
    elig_select_state: 'రాష్ట్రం ఎంచుకోండి',
    elig_select_income: 'ఆదాయ పరిధి ఎంచుకోండి',
    elig_select_cat2: 'వర్గం ఎంచుకోండి',
    elig_select_occ: 'వృత్తి ఎంచుకోండి',
    elig_student_occ: 'విద్యార్థి',
    elig_farmer_occ: 'రైతు',

    // RESULTS
    result_title: 'అర్హత ఫలితాలు',
    result_eligible: 'అభినందనలు! మీరు',
    result_schemes: 'పథకాలకు అర్హులు',
    result_view: 'వివరాలు చూడండి →',
    result_note: 'అందించిన సమాచారం ఆధారంగా అర్హత నిర్ణయించబడింది. దరఖాస్తు చేయడానికి ముందు అధికారిక మార్గదర్శకాలు చూడండి.',

    // ABOUT
    about_title: 'CGSP పోర్టల్ గురించి',
    about_subtitle: 'మేము ప్రతి భారతీయ పౌరుడికి ప్రభుత్వ పథకాలు సులభంగా కనుగొనడానికి సహాయపడటానికి ఈ వేదికను నిర్మించాము.',
    about_mission: 'మా లక్ష్యం',
    about_team: 'మా బృందం',
    about_project: 'ప్రాజెక్ట్ వివరాలు',

    // CONTACT
    contact_title: 'సంప్రదించండి',
    contact_subtitle: 'ప్రభుత్వ పథకాల గురించి సందేహాలు ఉన్నాయా? మేము సహాయపడతాము.',
    contact_phone: 'ఫోన్ / వాట్సాప్',
    contact_email: 'ఇమెయిల్ మద్దతు',
    contact_dev_by: 'అభివృద్ధి చేసిన వారు',
    contact_hours: 'మద్దతు సమయాలు',
  },
  hi: {
    // NAV
    nav_home: 'होम',
    nav_schemes: 'योजनाएं',
    nav_eligibility: 'पात्रता जांच',
    nav_about: 'हमारे बारे में',
    nav_contact: 'संपर्क करें',
    nav_admin: 'एडमिन लॉगिन',

    // HOME HERO
    hero_title: 'भारत का केंद्रीकृत सरकारी योजना पोर्टल',
    hero_subtitle: '100+ सरकारी योजनाओं के लिए पात्रता जांचें और आवेदन करें — सब एक ही जगह।',
    hero_search_placeholder: 'योजनाएं खोजें...',
    hero_btn_eligibility: 'पात्रता जांचें',
    hero_btn_explore: 'योजनाएं देखें',

    // CATEGORIES
    cat_heading: 'श्रेणी के अनुसार खोजें',
    cat_subheading: 'अपनी जरूरत के अनुसार योजनाएं देखें',
    cat_student: 'छात्र',
    cat_student_desc: 'छात्रवृत्ति, शुल्क प्रतिपूर्ति, कौशल विकास',
    cat_agriculture: 'कृषि',
    cat_agriculture_desc: 'वित्तीय सहायता, उपकरण सहायता, प्रशिक्षण',
    cat_disabled: 'दिव्यांग',
    cat_disabled_desc: 'सहायता, उपकरण, शिक्षा और अधिक',
    cat_health: 'स्वास्थ्य और कल्याण',
    cat_health_desc: 'स्वास्थ्य बीमा, उपचार सहायता, कल्याण कार्यक्रम',
    cat_explore: 'देखें →',

    // STATS
    stat_schemes: 'उपलब्ध योजनाएं',
    stat_departments: 'विभाग',
    stat_benefited: 'लाभार्थी',
    stat_support: 'सहायता',

    // SCHEMES PAGE
    schemes_title: 'सभी सरकारी योजनाएं',
    schemes_subtitle: 'सभी श्रेणियों में उपलब्ध योजनाएं देखें',
    schemes_search_placeholder: 'योजनाएं खोजें...',
    schemes_all: 'सभी श्रेणियां',
    schemes_filter_dept: 'सभी विभाग',
    schemes_filter_state: 'सभी राज्य',
    schemes_reset: 'फिल्टर रीसेट करें',
    schemes_view_details: 'विवरण देखें',
    schemes_loading: 'योजनाएं लोड हो रही हैं...',
    schemes_not_found: 'कोई योजना नहीं मिली।',

    // SCHEME DETAIL
    detail_back: '← योजनाओं पर वापस जाएं',
    detail_about: 'योजना के बारे में',
    detail_who: 'कौन आवेदन कर सकता है?',
    detail_benefits: 'मुख्य लाभ',
    detail_documents: 'आवश्यक दस्तावेज',
    detail_overview: 'अवलोकन',
    detail_eligibility: 'पात्रता',
    detail_apply: 'अभी आवेदन करें',
    detail_official: 'आधिकारिक वेबसाइट देखें',
    detail_note: 'आवेदन के लिए आधिकारिक सरकारी वेबसाइट पर जाएंगे।',
    detail_income: 'आय सीमा',
    detail_benefit: 'लाभ',
    detail_mode: 'माध्यम',
    detail_loading: 'योजना विवरण लोड हो रहा है...',

    // ELIGIBILITY
    elig_title: 'अपनी पात्रता जांचें',
    elig_subtitle: 'योजनाएं खोजने के लिए अपनी जानकारी भरें।',
    elig_select_cat: 'श्रेणी चुनें',
    elig_required: 'आवश्यक',
    elig_personal: 'व्यक्तिगत जानकारी',
    elig_financial: 'वित्तीय जानकारी',
    elig_additional: 'अतिरिक्त जानकारी',
    elig_name: 'पूरा नाम',
    elig_age: 'आयु',
    elig_gender: 'लिंग',
    elig_mobile: 'मोबाइल नंबर',
    elig_state: 'राज्य',
    elig_district: 'जिला',
    elig_income: 'वार्षिक पारिवारिक आय',
    elig_category: 'श्रेणी',
    elig_occupation: 'व्यवसाय',
    elig_course: 'कोर्स/स्ट्रीम',
    elig_land: 'भूमि जोत',
    elig_disability: 'दिव्यांगता का प्रकार',
    elig_check_btn: 'पात्रता जांचें',
    elig_reset: 'रीसेट',
    elig_note: 'दी गई जानकारी केवल संबंधित योजनाएं खोजने के लिए उपयोग की जाएगी।',
    elig_male: 'पुरुष',
    elig_female: 'महिला',
    elig_other: 'अन्य',
    elig_select_gender: 'लिंग चुनें',
    elig_select_state: 'राज्य चुनें',
    elig_select_income: 'आय सीमा चुनें',
    elig_select_cat2: 'श्रेणी चुनें',
    elig_select_occ: 'व्यवसाय चुनें',
    elig_student_occ: 'छात्र',
    elig_farmer_occ: 'किसान',

    // RESULTS
    result_title: 'पात्रता परिणाम',
    result_eligible: 'बधाई! आप',
    result_schemes: 'योजनाओं के पात्र हैं',
    result_view: 'विवरण देखें →',
    result_note: 'पात्रता दी गई जानकारी पर आधारित है। आवेदन से पहले आधिकारिक दिशानिर्देश देखें।',

    // ABOUT
    about_title: 'CGSP पोर्टल के बारे में',
    about_subtitle: 'हम एक टीम हैं जिसने हर भारतीय नागरिक को सरकारी योजनाएं आसानी से खोजने में मदद करने के लिए यह प्लेटफॉर्म बनाया।',
    about_mission: 'हमारा मिशन',
    about_team: 'हमारी टीम',
    about_project: 'प्रोजेक्ट विवरण',

    // CONTACT
    contact_title: 'संपर्क करें',
    contact_subtitle: 'सरकारी योजनाओं के बारे में सवाल हैं? हम मदद करेंगे।',
    contact_phone: 'फोन / व्हाट्सएप',
    contact_email: 'ईमेल सहायता',
    contact_dev_by: 'विकसित किया गया',
    contact_hours: 'सहायता समय',
  }
};

// Apply language to page
function applyLanguage(lang) {
  localStorage.setItem('cgsp_lang', lang);
  const t = TRANSLATIONS[lang] || TRANSLATIONS['en'];

  // Update all elements with data-lang attribute
  document.querySelectorAll('[data-lang]').forEach(el => {
    const key = el.getAttribute('data-lang');
    if (t[key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });

  // Update language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-language') === lang) {
      btn.classList.add('active');
    }
  });
}

// Get saved language
function getSavedLang() {
  return localStorage.getItem('cgsp_lang') || 'en';
}

// Initialize on page load
function initLanguage() {
  const lang = getSavedLang();
  applyLanguage(lang);
}