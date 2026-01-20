export interface CityData {
  id: string;
  name: string;
  slug: string;
  state: string;
  stateCode: string;
  
  // Geographic
  district?: string;
  region: 'North' | 'South' | 'East' | 'West' | 'Central' | 'Northeast';
  
  // Legal Infrastructure
  courts: {
    district: string[];
    highCourt: string;
    location?: string;
  };
  
  // Service Stats (can be approximate)
  stats: {
    noticesSent: number;
    lawyersAvailable: number;
    avgResponseTime: string; // "24 hours"
  };
  
  // Popular notice types for this city
  popularNoticeTypes: string[]; // slugs
  
  // Local information
  localInfo?: {
    legalAidCenters?: string[];
    consumerForums?: string[];
    barAssociation?: string;
  };
  
  // SEO
  metaDescription: string;
  keywords: string[];
}

export const cities: Record<string, CityData> = {
  'bangalore': {
    id: 'bangalore',
    name: 'Bangalore',
    slug: 'bangalore',
    state: 'Karnataka',
    stateCode: 'KA',
    region: 'South',
    
    courts: {
      district: [
        'City Civil Court, Bangalore',
        'Additional City Civil Court',
        'Small Causes Court, Bangalore'
      ],
      highCourt: 'High Court of Karnataka',
      location: 'Ambedkar Veedhi, Bangalore'
    },
    
    stats: {
      noticesSent: 1250,
      lawyersAvailable: 45,
      avgResponseTime: '24 hours'
    },
    
    popularNoticeTypes: [
      'legal-notice-to-tenant',
      'cheque-bounce-legal-notice',
      'legal-notice-for-money-recovery',
      'wrongful-termination-legal-notice'
    ],
    
    localInfo: {
      legalAidCenters: [
        'Karnataka State Legal Services Authority',
        'District Legal Services Authority, Bangalore'
      ],
      consumerForums: [
        'State Consumer Disputes Redressal Commission, Karnataka',
        'District Consumer Forum, Bangalore'
      ],
      barAssociation: 'Bangalore Bar Association'
    },
    
    metaDescription: 'Send legal notice in Bangalore through expert advocates. 24-hour drafting, local court-ready format. 1250+ notices sent. ₹299 onwards.',
    keywords: [
      'legal notice in bangalore',
      'bangalore legal notice',
      'legal notice services bangalore',
      'advocate bangalore',
      'legal notice karnataka'
    ]
  },
  
  'mumbai': {
    id: 'mumbai',
    name: 'Mumbai',
    slug: 'mumbai',
    state: 'Maharashtra',
    stateCode: 'MH',
    region: 'West',
    
    courts: {
      district: [
        'City Civil Court, Mumbai',
        'Small Causes Court, Mumbai',
        'Magistrate Court, Mazgaon'
      ],
      highCourt: 'Bombay High Court',
      location: 'Fort, Mumbai'
    },
    
    stats: {
      noticesSent: 1800,
      lawyersAvailable: 68,
      avgResponseTime: '24 hours'
    },
    
    popularNoticeTypes: [
      'cheque-bounce-legal-notice',
      'legal-notice-for-money-recovery',
      'legal-notice-to-builder',
      'consumer-complaint-legal-notice'
    ],
    
    localInfo: {
      legalAidCenters: [
        'Maharashtra State Legal Services Authority',
        'Mumbai District Legal Services Authority'
      ],
      consumerForums: [
        'State Consumer Commission, Maharashtra',
        'Mumbai District Consumer Forum'
      ],
      barAssociation: 'Mumbai Bar Association'
    },
    
    metaDescription: 'Legal notice drafting in Mumbai by Bombay High Court advocates. 24hr delivery, court-ready format. 1800+ notices sent. ₹299 onwards.',
    keywords: [
      'legal notice mumbai',
      'mumbai legal notice',
      'advocate mumbai',
      'legal services mumbai',
      'bombay high court notice'
    ]
  },

  'delhi': {
    id: 'delhi',
    name: 'Delhi',
    slug: 'delhi',
    state: 'Delhi',
    stateCode: 'DL',
    region: 'North',
    courts: {
      district: [
        'Tis Hazari Courts',
        'Patiala House Courts',
        'Saket District Court',
        'Karkardooma Courts',
        'Rohini Courts',
        'Dwarka Courts'
      ],
      highCourt: 'Delhi High Court',
      location: 'Sher Shah Road, New Delhi'
    },
    stats: {
      noticesSent: 2100,
      lawyersAvailable: 82,
      avgResponseTime: '24 hours'
    },
    popularNoticeTypes: [
      'legal-notice-to-tenant',
      'cheque-bounce-legal-notice',
      'divorce-legal-notice',
      'consumer-complaint-legal-notice'
    ],
    localInfo: {
      legalAidCenters: [
        'Delhi State Legal Services Authority',
        'New Delhi District Legal Services Authority'
      ],
      consumerForums: [
        'Delhi State Consumer Disputes Redressal Commission',
        'District Consumer Disputes Redressal Forum'
      ],
      barAssociation: 'Delhi High Court Bar Association'
    },
    metaDescription: 'Send legal notice in Delhi through expert advocates. 24-hour drafting, Tis Hazari & High Court compliant. 2100+ notices sent. ₹299 onwards.',
    keywords: [
      'legal notice in delhi',
      'delhi legal notice',
      'legal notice services delhi',
      'advocate delhi',
      'legal notice delhi ncr'
    ]
  },

  'hyderabad': {
    id: 'hyderabad',
    name: 'Hyderabad',
    slug: 'hyderabad',
    state: 'Telangana',
    stateCode: 'TS',
    region: 'South',
    courts: {
      district: [
        'City Civil Court, Hyderabad',
        'Metropolitan Criminal Courts, Nampally',
        'Ranga Reddy District Court'
      ],
      highCourt: 'High Court for the State of Telangana',
      location: 'Near Madina Circle, Hyderabad'
    },
    stats: {
      noticesSent: 950,
      lawyersAvailable: 38,
      avgResponseTime: '24 hours'
    },
    popularNoticeTypes: [
      'legal-notice-for-money-recovery',
      'cheque-bounce-legal-notice',
      'legal-notice-to-tenant',
      'cyber-crime-legal-notice'
    ],
    localInfo: {
      legalAidCenters: [
        'Telangana State Legal Services Authority',
        'City Civil Court Legal Services Authority'
      ],
      consumerForums: [
        'Telangana State Consumer Disputes Redressal Commission',
        'Hyderabad District Consumer Forum'
      ],
      barAssociation: 'Telangana High Court Advocates Association'
    },
    metaDescription: 'Legal notice drafting in Hyderabad by expert advocates. 24hr delivery, Telangana High Court compliant format. 950+ notices sent.',
    keywords: [
      'legal notice hyderabad',
      'hyderabad legal notice',
      'advocate hyderabad',
      'legal services hyderabad',
      'telangana high court notice'
    ]
  },

  'chennai': {
    id: 'chennai',
    name: 'Chennai',
    slug: 'chennai',
    state: 'Tamil Nadu',
    stateCode: 'TN',
    region: 'South',
    courts: {
      district: [
        'City Civil Court, Chennai',
        'Small Causes Court, Chennai',
        'Egmore Court'
      ],
      highCourt: 'Madras High Court',
      location: 'Parrys Corner, Chennai'
    },
    stats: {
      noticesSent: 1100,
      lawyersAvailable: 52,
      avgResponseTime: '24 hours'
    },
    popularNoticeTypes: [
      'legal-notice-to-tenant',
      'cheque-bounce-legal-notice',
      'legal-notice-for-property-dispute',
      'consumer-complaint-legal-notice'
    ],
    localInfo: {
      legalAidCenters: [
        'Tamil Nadu State Legal Services Authority',
        'District Legal Services Authority, Chennai'
      ],
      consumerForums: [
        'State Consumer Disputes Redressal Commission, Chennai',
        'District Consumer Disputes Redressal Forum, Chennai'
      ],
      barAssociation: 'Madras High Court Advocates Association'
    },
    metaDescription: 'Send legal notice in Chennai through expert advocates. 24-hour drafting, Madras High Court compliant. 1100+ notices sent. ₹299 onwards.',
    keywords: [
      'legal notice in chennai',
      'chennai legal notice',
      'legal notice services chennai',
      'advocate chennai',
      'madras high court notice'
    ]
  },

  'kolkata': {
    id: 'kolkata',
    name: 'Kolkata',
    slug: 'kolkata',
    state: 'West Bengal',
    stateCode: 'WB',
    region: 'East',
    courts: {
      district: [
        'City Civil Court, Kolkata',
        'Alipore Judges Court',
        'Sealdah Court'
      ],
      highCourt: 'Calcutta High Court',
      location: 'Esplanade Row, Kolkata'
    },
    stats: {
      noticesSent: 880,
      lawyersAvailable: 40,
      avgResponseTime: '24 hours'
    },
    popularNoticeTypes: [
      'legal-notice-to-tenant',
      'cheque-bounce-legal-notice',
      'legal-notice-for-money-recovery',
      'employment-legal-notice'
    ],
    localInfo: {
      legalAidCenters: [
        'West Bengal State Legal Services Authority',
        'District Legal Services Authority, Kolkata'
      ],
      consumerForums: [
        'West Bengal State Consumer Disputes Redressal Commission',
        'Kolkata District Consumer Disputes Redressal Forum'
      ],
      barAssociation: 'Calcutta High Court Bar Association'
    },
    metaDescription: 'Legal notice drafting in Kolkata by expert advocates. 24hr delivery, Calcutta High Court compliant format. 880+ notices sent.',
    keywords: [
      'legal notice kolkata',
      'kolkata legal notice',
      'advocate kolkata',
      'legal services kolkata',
      'calcutta high court notice'
    ]
  },

  'pune': {
    id: 'pune',
    name: 'Pune',
    slug: 'pune',
    state: 'Maharashtra',
    stateCode: 'MH',
    region: 'West',
    courts: {
      district: [
        'Pune District Court (Shivajinagar)',
        'Civil Court Senior Division',
        'Small Causes Court, Pune'
      ],
      highCourt: 'Bombay High Court',
      location: 'Mumbai'
    },
    stats: {
      noticesSent: 720,
      lawyersAvailable: 35,
      avgResponseTime: '24 hours'
    },
    popularNoticeTypes: [
      'legal-notice-to-tenant',
      'cheque-bounce-legal-notice',
      'legal-notice-to-builder',
      'it-company-legal-notice'
    ],
    localInfo: {
      legalAidCenters: [
        'Pune District Legal Services Authority'
      ],
      consumerForums: [
        'Pune District Consumer Disputes Redressal Forum'
      ],
      barAssociation: 'Pune Bar Association'
    },
    metaDescription: 'Send legal notice in Pune through expert advocates. 24-hour drafting, District Court Shivajinagar compliant. 720+ notices sent. ₹299 onwards.',
    keywords: [
      'legal notice in pune',
      'pune legal notice',
      'legal notice services pune',
      'advocate pune',
      'legal notice maharashtra'
    ]
  },
  
  'ahmedabad': {
    id: 'ahmedabad',
    name: 'Ahmedabad',
    slug: 'ahmedabad',
    state: 'Gujarat',
    stateCode: 'GJ',
    region: 'West',
    courts: {
      district: [
        'City Civil & Sessions Court, Ahmedabad',
        'Metropolitan Court, Gheekanta',
        'Rural Court, Mirzapur'
      ],
      highCourt: 'Gujarat High Court',
      location: 'Sola, Ahmedabad'
    },
    stats: {
      noticesSent: 650,
      lawyersAvailable: 28,
      avgResponseTime: '24 hours'
    },
    popularNoticeTypes: [
      'cheque-bounce-legal-notice',
      'legal-notice-for-money-recovery',
      'legal-notice-for-business-dispute',
      'consumer-complaint-legal-notice'
    ],
    localInfo: {
      legalAidCenters: [
        'Gujarat State Legal Services Authority',
        'Ahmedabad Local Legal Services Committee'
      ],
      consumerForums: [
        'Gujarat State Consumer Disputes Redressal Commission',
        'Ahmedabad District Consumer Forum'
      ],
      barAssociation: 'Gujarat High Court Advocates Association'
    },
    metaDescription: 'Legal notice drafting in Ahmedabad by expert advocates. 24hr delivery, Gujarat High Court compliant format. 650+ notices sent.',
    keywords: [
      'legal notice ahmedabad',
      'ahmedabad legal notice',
      'advocate ahmedabad',
      'legal services ahmedabad',
      'gujarat high court notice'
    ]
  },

  'jaipur': {
    id: 'jaipur',
    name: 'Jaipur',
    slug: 'jaipur',
    state: 'Rajasthan',
    stateCode: 'RJ',
    region: 'North',
    courts: {
      district: [
        'District & Sessions Court, Jaipur',
        'Jaipur Metropolitan Court'
      ],
      highCourt: 'Rajasthan High Court (Jaipur Bench)',
      location: 'Jaipur'
    },
    stats: {
      noticesSent: 420,
      lawyersAvailable: 22,
      avgResponseTime: '24 hours'
    },
    popularNoticeTypes: [
      'legal-notice-for-money-recovery',
      'cheque-bounce-legal-notice',
      'legal-notice-to-tenant',
      'family-dispute-legal-notice'
    ],
    localInfo: {
      legalAidCenters: [
        'Rajasthan State Legal Services Authority',
        'District Legal Services Authority, Jaipur'
      ],
      consumerForums: [
        'Rajasthan State Consumer Disputes Redressal Commission',
        'District Consumer Forum, Jaipur'
      ],
      barAssociation: 'The Bar Association Jaipur'
    },
    metaDescription: 'Send legal notice in Jaipur through expert advocates. 24-hour drafting, Rajasthan High Court compliant. 400+ notices sent. ₹299 onwards.',
    keywords: [
      'legal notice in jaipur',
      'jaipur legal notice',
      'legal notice services jaipur',
      'advocate jaipur',
      'legal notice rajasthan'
    ]
  },

  'lucknow': {
    id: 'lucknow',
    name: 'Lucknow',
    slug: 'lucknow',
    state: 'Uttar Pradesh',
    stateCode: 'UP',
    region: 'North',
    courts: {
      district: [
        'District & Sessions Court, Lucknow',
        'Central Bar Association Court'
      ],
      highCourt: 'Allahabad High Court (Lucknow Bench)',
      location: 'Gomti Nagar, Lucknow'
    },
    stats: {
      noticesSent: 380,
      lawyersAvailable: 18,
      avgResponseTime: '24 hours'
    },
    popularNoticeTypes: [
      'legal-notice-for-property-dispute',
      'cheque-bounce-legal-notice',
      'legal-notice-to-tenant',
      'divorce-legal-notice'
    ],
    localInfo: {
      legalAidCenters: [
        'UP State Legal Services Authority',
        'District Legal Services Authority, Lucknow'
      ],
      consumerForums: [
        'UP State Consumer Disputes Redressal Commission',
        'District Consumer Forum, Lucknow'
      ],
      barAssociation: 'Oudh Bar Association'
    },
    metaDescription: 'Legal notice drafting in Lucknow by expert advocates. 24hr delivery, High Court (Lucknow Bench) compliant format. 380+ notices sent.',
    keywords: [
      'legal notice lucknow',
      'lucknow legal notice',
      'advocate lucknow',
      'legal services lucknow',
      'allahabad high court lucknow bench notice'
    ]
  }
};

export function getCityData(slug: string): CityData | null {
  return cities[slug.toLowerCase()] || null;
}

export function getAllCities(): CityData[] {
  return Object.values(cities);
}

export function getCitiesByRegion(region: string): CityData[] {
  return Object.values(cities).filter(city => city.region === region);
}

export function getCitiesByState(stateCode: string): CityData[] {
  return Object.values(cities).filter(city => city.stateCode === stateCode);
}
