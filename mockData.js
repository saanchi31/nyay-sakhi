// Mock data for Nyay Sakhi prototype

// ─── SP Directory ───────────────────────────────────────────────────────────
export const mockSPDirectory = [
  { state: 'Delhi', district: 'New Delhi', spName: 'Superintendent of Police, New Delhi', office: 'PD Block, New Delhi Police HQ', email: 'sp.newdelhi@gov.in', phone: '011-24642600' },
  { state: 'Haryana', district: 'Gurugram', spName: 'Superintendent of Police, Gurugram', office: 'Sector 4, Gurugram Police HQ', email: 'sp.gurugram@gov.in', phone: '0124-2264000' },
  { state: 'Maharashtra', district: 'Mumbai', spName: 'Commissioner of Police, Mumbai', office: 'Crawford Market, Mumbai', email: 'cp.mumbai@mahapolice.gov.in', phone: '022-22621855' },
  { state: 'Karnataka', district: 'Bengaluru', spName: 'Commissioner of Police, Bengaluru', office: 'Infantry Road, Bengaluru', email: 'cp.bengaluru@ksp.gov.in', phone: '080-22942222' },
];

// ─── Police Stations (for map/nearest-station) ───────────────────────────────
export const mockStations = [
  { name: 'Rohini Police Station', state: 'Delhi', district: 'North West Delhi', lat: 28.7041, lng: 77.1025 },
  { name: 'Gurugram Police Station', state: 'Haryana', district: 'Gurugram', lat: 28.4595, lng: 77.0266 },
  { name: 'Lajpat Nagar PS', state: 'Delhi', district: 'South Delhi', lat: 28.5700, lng: 77.2362 },
  { name: 'Saket PS', state: 'Delhi', district: 'South Delhi', lat: 28.5244, lng: 77.2066 },
  { name: 'Dwarka PS', state: 'Delhi', district: 'West Delhi', lat: 28.5921, lng: 77.0460 },
];

// ─── Heatmap incident data (lat/lng based) ──────────────────────────────────
export const mockHeatmapIncidents = [
  { lat: 28.7041, lng: 77.1025, area: 'Rohini, Delhi', count: 12, level: 'Moderate', category: 'Workplace Harassment' },
  { lat: 28.5700, lng: 77.2362, area: 'Lajpat Nagar, Delhi', count: 18, level: 'High', category: 'Domestic Violence' },
  { lat: 28.5921, lng: 77.0460, area: 'Dwarka, Delhi', count: 6, level: 'Low', category: 'Cyber Crime' },
  { lat: 28.4595, lng: 77.0266, area: 'Gurugram, Haryana', count: 14, level: 'Moderate', category: 'POSH Violation' },
  { lat: 28.6139, lng: 77.2090, area: 'Connaught Place, Delhi', count: 9, level: 'Low', category: 'Street Harassment' },
  { lat: 28.6448, lng: 77.2167, area: 'Karol Bagh, Delhi', count: 21, level: 'High', category: 'Domestic Violence' },
  { lat: 28.5355, lng: 77.3910, area: 'Noida Sector 18', count: 11, level: 'Moderate', category: 'Workplace Harassment' },
  { lat: 28.4089, lng: 77.3178, area: 'Faridabad', count: 7, level: 'Low', category: 'Cyber Crime' },
  { lat: 28.6692, lng: 77.4538, area: 'Ghaziabad', count: 15, level: 'High', category: 'Domestic Violence' },
  { lat: 19.0760, lng: 72.8777, area: 'Mumbai, Maharashtra', count: 20, level: 'High', category: 'POSH Violation' },
  { lat: 12.9716, lng: 77.5946, area: 'Bengaluru, Karnataka', count: 10, level: 'Moderate', category: 'Street Harassment' },
  { lat: 17.3850, lng: 78.4867, area: 'Hyderabad, Telangana', count: 8, level: 'Low', category: 'Cyber Crime' },
  { lat: 22.5726, lng: 88.3639, area: 'Kolkata, West Bengal', count: 16, level: 'High', category: 'Domestic Violence' },
  { lat: 13.0827, lng: 80.2707, area: 'Chennai, Tamil Nadu', count: 5, level: 'Low', category: 'Workplace Harassment' },
];

// ─── Lawyers ─────────────────────────────────────────────────────────────────
export const mockLawyers = [
  { id: 1, name: 'Adv. Priya Singh', specialization: ['POSH', 'DV Act'], city: 'Delhi', fee: 'Free', rating: 4.8, reviews: 32, verified: true, barCouncil: 'Delhi Bar Council', languages: ['EN', 'HI'], bio: 'Specialist in workplace harassment and domestic violence protection orders. 10+ years experience.', phone: '+91-98100-00001', email: 'priya.adv@example.com', availability: 'Mon–Sat, 10am–6pm' },
  { id: 2, name: 'Adv. Meera Nair', specialization: ['Cyber Crime', 'IT Act', 'Deepfake'], city: 'Bengaluru', fee: '₹500/session', rating: 4.9, reviews: 47, verified: true, barCouncil: 'Karnataka Bar Council', languages: ['EN', 'KN', 'HI'], bio: 'Cyber law expert with strong track record in online harassment, deepfake and social media abuse cases.', phone: '+91-98400-00002', email: 'meera.adv@example.com', availability: 'Mon–Fri, 9am–5pm' },
  { id: 3, name: 'Adv. Sunita Rao', specialization: ['POSH', 'BNS', 'Workplace'], city: 'Mumbai', fee: 'Free (NGO Panel)', rating: 4.7, reviews: 28, verified: true, barCouncil: 'Maharashtra Bar Council', languages: ['EN', 'MR', 'HI'], bio: 'Panel lawyer at iCall NGO. Handles POSH complaints at IC level and labour court matters.', phone: '+91-99200-00003', email: 'sunita.adv@example.com', availability: 'Tue & Thu, 2pm–7pm' },
  { id: 4, name: 'Adv. Anjali Gupta', specialization: ['Domestic Violence', 'Protection Orders', 'Maintenance'], city: 'Delhi', fee: '₹1000/session', rating: 4.6, reviews: 61, verified: true, barCouncil: 'Delhi Bar Council', languages: ['EN', 'HI'], bio: 'Handles DV Act cases including protection orders, residence orders, custody disputes and maintenance.', phone: '+91-98300-00004', email: 'anjali.adv@example.com', availability: 'Mon–Sat, 11am–8pm' },
  { id: 5, name: 'Adv. Fatima Sheikh', specialization: ['Muslim Personal Law', 'DV Act', 'POCSO'], city: 'Hyderabad', fee: 'Sliding Scale', rating: 4.8, reviews: 39, verified: true, barCouncil: 'Telangana Bar Council', languages: ['EN', 'UR', 'HI', 'TE'], bio: 'Expert in personal law matters, child protection cases and domestic violence. Bilingual (Urdu/English) consultations.', phone: '+91-99000-00005', email: 'fatima.adv@example.com', availability: 'Mon–Fri, 10am–5pm' },
  { id: 6, name: 'Adv. Lakshmi Devi', specialization: ['BNS', 'Zero FIR', 'Stalking'], city: 'Chennai', fee: 'Free', rating: 4.5, reviews: 21, verified: false, barCouncil: 'Madras Bar Council', languages: ['EN', 'TA'], bio: 'Assists survivors in filing Zero FIR, anti-stalking orders and BNS-related harassment complaints.', phone: '+91-99400-00006', email: 'lakshmi.adv@example.com', availability: 'Mon, Wed, Fri, 10am–4pm' },
];

// ─── NGOs ─────────────────────────────────────────────────────────────────────
export const mockNGOs = [
  {
    id: 1, name: 'Sakshi Foundation', type: 'Legal Aid', city: 'Delhi', state: 'Delhi',
    contact: 'sakshi@example.com', phone: '011-26841680', website: 'https://sakshi.org',
    services: ['Free legal aid', 'Counselling', 'FIR assistance', 'Shelter referral'],
    helpline: '011-26841680', verified: true,
    description: 'Works with survivors of domestic and sexual violence. Provides free legal aid, psychological counselling and police station accompaniment.',
    timings: 'Mon–Sat, 9am–6pm',
  },
  {
    id: 2, name: 'iCall – TISS', type: 'Mental Health & Legal', city: 'Mumbai', state: 'Maharashtra',
    contact: 'icall@tiss.edu', phone: '9152987821', website: 'https://icallhelpline.org',
    services: ['Psychosocial counselling', 'POSH legal guidance', 'Crisis intervention'],
    helpline: '9152987821', verified: true,
    description: 'Free counselling and psychological first aid. Special expertise in workplace harassment (POSH) matters with panel lawyers.',
    timings: 'Mon–Sat, 8am–10pm',
  },
  {
    id: 3, name: 'Majlis Legal Centre', type: 'Legal Aid', city: 'Mumbai', state: 'Maharashtra',
    contact: 'majlislegal@gmail.com', phone: '022-23724102', website: 'https://majlispro.org',
    services: ['DV Act cases', 'Muslim personal law', 'POCSO', 'Court representation'],
    helpline: '022-23724102', verified: true,
    description: 'Advocates for rights of women and children in courts. Specialises in domestic violence, Muslim personal law and child protection cases.',
    timings: 'Mon–Fri, 10am–5pm',
  },
  {
    id: 4, name: 'Swayam', type: 'Crisis Support & Shelter', city: 'Kolkata', state: 'West Bengal',
    contact: 'swayam@swayam.info', phone: '033-24601580', website: 'https://swayam.info',
    services: ['Shelter', 'Legal counselling', 'Crisis helpline', 'Survivor training'],
    helpline: '033-24601580', verified: true,
    description: 'Runs crisis shelters and a 24×7 helpline for women in distress. Also provides legal literacy training and livelihood support.',
    timings: '24×7 helpline; office Mon–Sat 9am–7pm',
  },
  {
    id: 5, name: 'Jagori', type: 'Awareness & Legal Aid', city: 'Delhi', state: 'Delhi',
    contact: 'jagori@jagori.org', phone: '011-26922667', website: 'https://jagori.org',
    services: ['Helpline', 'Legal aid', 'Safety audit', 'Gender training'],
    helpline: '011-26922667', verified: true,
    description: "Works on women's safety in public spaces. Runs a helpline, provides legal referrals, and conducts safety audits of urban areas.",
    timings: 'Mon–Sat, 9:30am–5:30pm',
  },
];

// ─── Community posts seed data ────────────────────────────────────────────────
export const mockCommunityPosts = [
  { id: 1, type: 'success', text: 'I filed a Zero FIR against my stalker using the Nyay Sakhi app. The officer initially refused but I showed him the BNS section — he had to register it. It took courage but it worked! 💜', textHi: 'मैंने Nyay Sakhi की मदद से अपने पीछा करने वाले के खिलाफ Zero FIR दर्ज करवाई।', likes: 47, replies: 12, time: '2h ago', tag: 'FIR Success', verified: true },
  { id: 2, type: 'question', text: 'My manager keeps making uncomfortable comments at work. Is there a way to complain without losing my job? Very scared right now.', textHi: 'मेरे मैनेजर बुरे कमेंट करते हैं। नौकरी जाए बिना शिकायत कैसे करें?', likes: 23, replies: 8, time: '5h ago', tag: 'POSH Help', verified: false },
  { id: 3, type: 'tip', text: '🔒 Safety tip: Screenshot every threatening message immediately and email it to yourself. Even if the app deletes it, you have a timestamped copy that counts as digital evidence in court.', textHi: 'हर धमकी वाले मैसेज का स्क्रीनशॉट लेकर खुद को ईमेल करें।', likes: 89, replies: 5, time: '1d ago', tag: 'Safety Tip', verified: true },
  { id: 4, type: 'success', text: 'After 6 months of fighting, I got a protection order under DV Act. The lawyer listed on this platform helped me for free. I cannot believe this worked. Never give up sisters.', textHi: 'DV Act के तहत सुरक्षा आदेश मिला। इस ऐप पर listed वकील ने मुफ्त में मदद की।', likes: 134, replies: 21, time: '2d ago', tag: 'DV Victory', verified: true },
  { id: 5, type: 'question', text: 'Someone morphed my photos and is spreading them on social media. I am completely devastated. What do I do first?', textHi: 'किसी ने मेरी फोटो morphed करके सोशल मीडिया पर फैलाई। पहले क्या करूँ?', likes: 61, replies: 18, time: '3d ago', tag: 'Cyber Help', verified: false },
  { id: 6, type: 'tip', text: 'Know your rights at school: Section 12 of POCSO covers non-contact abuse. If a teacher or senior is making you uncomfortable, it IS legally wrong and you CAN report it. You are not overreacting.', textHi: 'POCSO की धारा 12 में non-contact abuse भी शामिल है।', likes: 72, replies: 9, time: '4d ago', tag: 'Know Your Rights', verified: true },
  { id: 7, type: 'success', text: 'College senior was sending me repeated messages after I said no. Filed complaint under BNS Section 78 (stalking). College administration had to act. Report it, do not stay silent!', textHi: 'कॉलेज सीनियर की शिकायत BNS Section 78 के तहत की। कॉलेज ने action लिया।', likes: 95, replies: 14, time: '5d ago', tag: 'FIR Success', verified: true },
];

// ─── Evidence Vault items ─────────────────────────────────────────────────────
export const mockEvidenceItems = [];

// ─── Counsellors & Therapists (Therapy & Counselling) ────────────────────────
export const mockCounsellors = [
  {
    id: 1,
    name: 'Dr. Kavita Sharma',
    qualification: 'M.Phil Clinical Psychology • RCI Licensed',
    domains: ['Trauma & PTSD', 'Domestic Violence'],
    city: 'Delhi',
    mode: 'Video / Audio / In-Person',
    fee: 'Free (NGO Supported)',
    rating: 4.9,
    reviews: 64,
    verified: true,
    experience: '11 yrs',
    languages: ['EN', 'HI'],
    availability: 'Mon–Sat, 10am–7pm',
    bio: 'Trauma-informed clinical psychologist specializing in EMDR, PTSD recovery, and emotional safety planning for survivors of domestic abuse.',
  },
  {
    id: 2,
    name: 'Rhea Deshmukh',
    qualification: 'MA Counselling Psychology • POSH Certified',
    domains: ['Workplace / POSH', 'Anxiety & Burnout'],
    city: 'Mumbai',
    mode: 'Online (Video / Anonymous Audio)',
    fee: '₹500/session',
    rating: 4.8,
    reviews: 49,
    verified: true,
    experience: '8 yrs',
    languages: ['EN', 'HI', 'MR'],
    availability: 'Mon–Fri, 11am–8pm',
    bio: 'Helps working women cope with workplace harassment trauma, retaliation anxiety, boundary setting, and career confidence rebuilding.',
  },
  {
    id: 3,
    name: 'Dr. Nandini Iyer',
    qualification: 'PhD Psychology • Cyber Trauma Specialist',
    domains: ['Cyber Abuse', 'Trauma & PTSD'],
    city: 'Bengaluru',
    mode: 'Online (Video / Chat)',
    fee: 'Sliding Scale (₹0–₹600)',
    rating: 4.9,
    reviews: 53,
    verified: true,
    experience: '9 yrs',
    languages: ['EN', 'TA', 'KN', 'HI'],
    availability: 'Tue–Sun, 12pm–9pm',
    bio: 'Supports survivors of online stalking, deepfake harassment, and digital blackmail with panic management and shame-resilience therapy.',
  },
  {
    id: 4,
    name: 'Sana Siddiqui',
    qualification: 'MSc Counselling & Family Therapy',
    domains: ['Domestic Violence', 'Family & Relationship'],
    city: 'Hyderabad',
    mode: 'Video / Audio / In-Person',
    fee: 'Free (Pro Bono Panel)',
    rating: 4.7,
    reviews: 38,
    verified: true,
    experience: '7 yrs',
    languages: ['EN', 'HI', 'UR', 'TE'],
    availability: 'Mon–Sat, 9am–5pm',
    bio: 'Provides compassionate, culturally sensitive counselling for women navigating abusive marriages, separation, and rebuilding independence.',
  },
  {
    id: 5,
    name: 'Ananya Chatterjee',
    qualification: 'MA Applied Psychology • Youth Specialist',
    domains: ['Student & Youth', 'Cyber Abuse'],
    city: 'Kolkata',
    mode: 'Online (Chat / Audio / Video)',
    fee: '₹300/session (Free for students)',
    rating: 4.8,
    reviews: 41,
    verified: true,
    experience: '6 yrs',
    languages: ['EN', 'BN', 'HI'],
    availability: 'Mon–Sat, 2pm–9pm',
    bio: 'Works with school and college students facing ragging, stalking, academic pressure, and peer harassment in a safe, judgment-free space.',
  },
  {
    id: 6,
    name: 'Meenakshi Pillai',
    qualification: 'MSW Medical & Psychiatric Social Work',
    domains: ['Crisis Support', 'Trauma & PTSD', 'Workplace / POSH'],
    city: 'Chennai',
    mode: '24x7 Crisis Audio / Video',
    fee: 'Free',
    rating: 4.9,
    reviews: 72,
    verified: true,
    experience: '12 yrs',
    languages: ['EN', 'ML', 'TA'],
    availability: 'Daily, Flexible Slots',
    bio: 'Immediate psychological first aid, grounding techniques for panic attacks, and ongoing emotional support during police/court proceedings.',
  },
];

// ─── Laws used by UnderstandPage ─────────────────────────────────────────────
// Keys: POSH | DV | IT | BNS | BNSS
export const mockLaws = {
  POSH: {
    title: 'POSH Act, 2013',
    fullName: 'The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013',
    summary: 'Mandates every employer (10+ employees) to constitute an Internal Committee (IC). You can file a written complaint within 3 months of the incident. The IC must complete inquiry within 90 days. Employer is liable if no IC exists.',
    summaryHi: 'हर नियोक्ता (10+ कर्मचारी) को आंतरिक समिति बनानी होती है। घटना के 3 महीने के भीतर लिखित शिकायत करें। समिति 90 दिन में जांच पूरी करे।',
    options: ['File written complaint to IC', 'Approach Local Complaints Committee (LCC) if no IC', 'Seek interim relief (transfer/leave)', 'File police FIR in parallel'],
    keySections: ['Sec 2(n) – Definition of sexual harassment', 'Sec 4 – Internal Committee', 'Sec 11 – Inquiry process', 'Sec 13 – Action on findings', 'Sec 26 – Employer penalty'],
  },
  DV: {
    title: 'Protection of Women from DV Act, 2005',
    fullName: 'Protection of Women from Domestic Violence Act, 2005',
    summary: 'Covers physical, emotional, economic and sexual abuse by family members or live-in partners. You can apply for Protection Orders, Residence Orders, Custody Orders and Monetary Relief within 24 hours through a Protection Officer or directly to a Magistrate.',
    summaryHi: 'परिवार या लिव-इन पार्टनर द्वारा शारीरिक, भावनात्मक, आर्थिक और यौन हिंसा को कवर करती है। 24 घंटे में राहत मिल सकती है।',
    options: ['Apply for Protection Order', 'Apply for Residence Order', 'Seek Emergency Monetary Relief', 'Contact Protection Officer (free)', 'File FIR under BNS Sec 115'],
    keySections: ['Sec 3 – Definition of domestic violence', 'Sec 12 – Application to Magistrate', 'Sec 18 – Protection Order', 'Sec 19 – Residence Order', 'Sec 23 – Interim relief'],
  },
  IT: {
    title: 'IT Act + BNS Cyber Provisions',
    fullName: 'Information Technology (Amendment) Act 2008 + Bharatiya Nyaya Sanhita cyber sections',
    summary: 'Covers online stalking, morphed images, deepfakes, non-consensual intimate images, cyberbullying and sextortion. Report to your state Cyber Crime cell or at cybercrime.gov.in. Platforms (Instagram, WhatsApp) are legally required to remove content within 24 hours of notice.',
    summaryHi: 'ऑनलाइन स्टॉकिंग, morphed images, deepfakes और सेक्सटॉर्शन को कवर करती है। cybercrime.gov.in पर रिपोर्ट करें।',
    options: ['Report at cybercrime.gov.in', 'File complaint at nearest Cyber Cell', 'Report content to platform (24h removal)', 'Preserve screenshots as evidence', 'Seek anticipatory bail if threatened'],
    keySections: ['IT Act Sec 66C – Identity theft', 'IT Act Sec 66E – Privacy violation', 'IT Act Sec 67A – Obscene material', 'BNS Sec 77 – Stalking', 'BNS Sec 79 – Voyeurism'],
  },
  BNS: {
    title: 'Bharatiya Nyaya Sanhita (BNS), 2023',
    fullName: 'Bharatiya Nyaya Sanhita, 2023 (replaces IPC)',
    summary: 'The new criminal code covering assault, harassment, stalking, voyeurism and sexual offences. Key change: stalking is now a cognizable offence (police must register FIR). Zero FIR can be filed at ANY police station regardless of jurisdiction.',
    summaryHi: 'नई आपराधिक संहिता। पीछा करना अब संज्ञेय अपराध है (FIR दर्ज करनी होगी)। किसी भी थाने में Zero FIR दर्ज होगी।',
    options: ['File Zero FIR at nearest station', 'Demand FIR registration (cognizable offence)', 'Seek Protection Order from Magistrate', 'Collect digital + witness evidence'],
    keySections: ['BNS Sec 74 – Assault or use of criminal force', 'BNS Sec 75 – Sexual harassment', 'BNS Sec 77 – Stalking', 'BNS Sec 78 – Voyeurism', 'BNS Sec 65–71 – Rape & sexual offences'],
  },
  BNSS: {
    title: 'Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023',
    fullName: 'Bharatiya Nagarik Suraksha Sanhita, 2023 (replaces CrPC)',
    summary: 'Governs the procedure for filing FIRs, arrests, bail and trial. Introduces Zero FIR (file anywhere), 90-day trial for rape cases, and mandatory video-recording of survivor statements. Police MUST register FIR for cognizable offences within 3 days.',
    summaryHi: 'FIR, गिरफ्तारी, जमानत और मुकदमे की प्रक्रिया। Zero FIR कहीं भी दर्ज होगी। संज्ञेय अपराध में 3 दिन में FIR अनिवार्य।',
    options: ['File Zero FIR at any police station', 'Demand written acknowledgement of complaint', 'Request female police officer', 'Demand video-recorded statement'],
    keySections: ['BNSS Sec 173 – FIR and Zero FIR', 'BNSS Sec 176 – Medical examination', 'BNSS Sec 183 – Confession/statement recording', 'BNSS Sec 530 – Trial-in-absentia'],
  },
};

// ─── Women's Laws (for Laws page, replaces Quiz) ──────────────────────────────
export const mockWomenLaws = [
  { id: 1, title: 'Protection of Women from Domestic Violence Act, 2005', shortTitle: 'DV Act', category: 'Domestic', emoji: '🏠', summary: 'Protects women from physical, emotional, sexual and economic abuse within home. Provides Protection Orders, Residence Orders, Custody & Monetary Relief.', keySections: ['Sec 3 – Domestic violence definition', 'Sec 18 – Protection Orders', 'Sec 19 – Residence Orders', 'Sec 22 – Compensation'], helpline: '181' },
  { id: 2, title: 'Sexual Harassment of Women at Workplace Act, 2013', shortTitle: 'POSH Act', category: 'Workplace', emoji: '🏢', summary: 'Mandates Internal Committees in workplaces. Covers physical contact, demand for favours, showing pornography, hostile work environment.', keySections: ['Sec 2(n) – Sexual harassment', 'Sec 4 – Internal Committee', 'Sec 11 – Inquiry', 'Sec 26 – Employer penalty'], helpline: '14422' },
  { id: 3, title: 'Bharatiya Nyaya Sanhita – Stalking (Sec 77)', shortTitle: 'BNS Stalking', category: 'Cyber / Street', emoji: '📱', summary: 'Stalking is now a cognizable offence. Covers physical following, online monitoring, contacting despite clear disinterest. First offence: 1–3 years; repeat: up to 5 years.', keySections: ['Sec 77 – Stalking', 'Sec 75 – Sexual harassment', 'Sec 78 – Voyeurism'], helpline: '1930' },
  { id: 4, title: 'Protection of Children from Sexual Offences Act, 2012', shortTitle: 'POCSO', category: 'Child Safety', emoji: '🧒', summary: 'Protects persons under 18 from sexual assault, harassment and pornography. Covers non-contact offences (gestures, flashing). Schools and institutions have mandatory reporting duty.', keySections: ['Sec 3 – Penetrative assault', 'Sec 7 – Sexual assault', 'Sec 11 – Sexual harassment', 'Sec 12 – Non-contact offences'], helpline: '1098' },
  { id: 5, title: 'Dowry Prohibition Act, 1961', shortTitle: 'Dowry Act', category: 'Domestic', emoji: '💍', summary: 'Prohibits giving/taking dowry. Demands before or after marriage are punishable. Dowry death (Sec 304B IPC → BNS) carries minimum 7 years imprisonment.', keySections: ['Sec 3 – Giving/taking dowry', 'Sec 4 – Demanding dowry', 'BNS Sec 80 – Dowry death'], helpline: '181' },
  { id: 6, title: 'Maternity Benefit Act, 1961 (Amended 2017)', shortTitle: 'Maternity Act', category: 'Workplace', emoji: '🤱', summary: 'Entitles women to 26 weeks paid maternity leave (up to 2 children). Prohibits dismissal during maternity. Establishments with 50+ employees must provide crèche facility.', keySections: ['Sec 5 – Maternity benefit (26 weeks)', 'Sec 11A – Crèche facility', 'Sec 12 – No dismissal protection'], helpline: '14422' },
  { id: 7, title: 'Information Technology Act – Privacy & Cyber Sections', shortTitle: 'IT Act', category: 'Cyber / Street', emoji: '💻', summary: 'Covers non-consensual sharing of intimate images (Sec 66E), identity theft (Sec 66C), online obscenity (Sec 67A) and cyberstalking.', keySections: ['Sec 66C – Identity theft', 'Sec 66E – Privacy violation', 'Sec 67A – Obscene content', 'Sec 72 – Breach of confidentiality'], helpline: '1930' },
  { id: 8, title: 'Prohibition of Child Marriage Act, 2006', shortTitle: 'PCMA', category: 'Child Safety', emoji: '📜', summary: 'Prohibits marriage below 18 (girls) and 21 (boys). Child marriages are voidable on petition by the child. Violations punishable with 2 years imprisonment.', keySections: ['Sec 3 – Child marriage void/voidable', 'Sec 9 – Punishment for adult male', 'Sec 13 – Injunctions'], helpline: '1098' },
  { id: 9, title: 'Equal Remuneration Act, 1976', shortTitle: 'Equal Pay', category: 'Workplace', emoji: '⚖️', summary: 'Mandates equal pay for equal work regardless of gender. Prohibits gender-based discrimination in recruitment, training and promotions.', keySections: ['Sec 4 – Equal remuneration', 'Sec 5 – No discrimination in recruitment'], helpline: '14422' },
  { id: 10, title: 'Medical Termination of Pregnancy Act, 1971 (Amended 2021)', shortTitle: 'MTP Act', category: 'Health Rights', emoji: '🏥', summary: 'Permits abortion up to 20 weeks (24 weeks for rape survivors, minors and women with foetal anomalies). Rape survivors can terminate pregnancy with approval of one registered medical practitioner.', keySections: ['Sec 3 – When termination permitted', 'Sec 3B – Special categories up to 24 weeks'], helpline: '104' },
];
