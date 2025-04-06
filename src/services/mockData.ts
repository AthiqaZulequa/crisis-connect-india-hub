
export const mockAlerts = [
  {
    id: 'alert-1',
    type: 'Flood Alert',
    location: 'Yamuna River Basin, Delhi',
    severity: 'high' as 'high',
    description: 'Heavy rainfall causing water levels to rise. Expected to reach danger mark in 24 hours.',
    timestamp: Date.now() - 1800000, // 30 minutes ago
    recommendations: [
      'Move to higher ground immediately',
      'Do not walk or drive through flood waters',
      'Follow evacuation orders if given'
    ]
  },
  {
    id: 'alert-2',
    type: 'Wildfire Alert',
    location: 'Shimla Forest Area, Himachal Pradesh',
    severity: 'medium' as 'medium',
    description: 'Intense wildfires spreading. No immediate threat to residential areas.',
    timestamp: Date.now() - 3600000, // 1 hour ago
    recommendations: [
      'Keep windows closed to prevent smoke inhalation',
      'Prepare for possible evacuation',
      'Monitor local news for updates'
    ]
  },
  {
    id: 'alert-3',
    type: 'Missing Person Alert',
    location: 'Connaught Place, New Delhi',
    severity: 'high' as 'high',
    description: 'Elderly man, 70 years old, last seen wearing blue shirt and grey pants.',
    timestamp: Date.now() - 7200000, // 2 hours ago
    recommendations: [
      'Contact local authorities if spotted',
      'Share information on social media',
      'Check nearby hospitals'
    ]
  },
  {
    id: 'alert-4',
    type: 'Earthquake Warning',
    location: 'Northern India',
    severity: 'low' as 'low',
    description: 'Minor tremors detected. Magnitude 3.2 earthquake registered.',
    timestamp: Date.now() - 10800000, // 3 hours ago
    recommendations: [
      'No immediate action required',
      'Stay aware of surroundings',
      'Review earthquake safety procedures'
    ]
  }
];

export const mockWeatherData = {
  location: 'New Delhi, India',
  condition: 'cloudy' as 'cloudy',
  temperature: 32,
  humidity: 65,
  windSpeed: 12,
  forecast: [
    { day: 'Today', condition: 'cloudy' as 'cloudy', highTemp: 32, lowTemp: 26 },
    { day: 'Tue', condition: 'rainy' as 'rainy', highTemp: 30, lowTemp: 25 },
    { day: 'Wed', condition: 'rainy' as 'rainy', highTemp: 29, lowTemp: 24 },
    { day: 'Thu', condition: 'cloudy' as 'cloudy', highTemp: 31, lowTemp: 25 },
    { day: 'Fri', condition: 'sunny' as 'sunny', highTemp: 33, lowTemp: 26 }
  ]
};

export const mockDisasterPredictions = [
  {
    disasterType: 'Flood',
    probability: 0.75,
    area: 'Yamuna River Basin',
    riskFactors: [
      'Heavy rainfall in catchment area',
      'Dam release scheduled',
      'Saturated soil conditions'
    ]
  },
  {
    disasterType: 'Heatwave',
    probability: 0.68,
    area: 'Central Delhi',
    riskFactors: [
      'Temperature 5°C above normal',
      'High humidity levels',
      'Urban heat island effect'
    ]
  },
  {
    disasterType: 'Landslide',
    probability: 0.42,
    area: 'Himalayan Foothills',
    riskFactors: [
      'Recent heavy rainfall',
      'Deforestation in area',
      'Steep slope gradients'
    ]
  }
];

export const mockSentimentData = {
  positive: 35,
  neutral: 25,
  negative: 40
};

export const mockResourceData = [
  {
    id: 'shelter-1',
    name: 'Community Shelter',
    type: 'shelter',
    location: 'Nehru Nagar, Delhi',
    distance: 2.1,
    coordinates: { x: 30, y: 50 },
    status: 'available'
  },
  {
    id: 'medical-1',
    name: 'Medical Aid Center',
    type: 'medical',
    location: 'Gandhi Road, Delhi',
    distance: 3.5,
    coordinates: { x: 80, y: 40 },
    status: 'available'
  },
  {
    id: 'food-1',
    name: 'Food Distribution Point',
    type: 'food',
    location: 'Subhash Market, Delhi',
    distance: 4.9,
    coordinates: { x: 60, y: 80 },
    status: 'available'
  },
  {
    id: 'shelter-2',
    name: 'School Shelter',
    type: 'shelter',
    location: 'Rajiv Chowk, Delhi',
    distance: 5.2,
    coordinates: { x: 40, y: 70 },
    status: 'busy'
  },
  {
    id: 'medical-2',
    name: 'Emergency Hospital',
    type: 'medical',
    location: 'Civic Center, Delhi',
    distance: 6.3,
    coordinates: { x: 90, y: 20 },
    status: 'busy'
  }
];
