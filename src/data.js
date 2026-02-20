import tourImg1 from './images/tour-1.jpg';
import tourImg2 from './images/tour-2.jpg';
import tourImg3 from './images/tour-3.jpg';
import tourImg4 from './images/tour-4.jpg';
import tourImg5 from './images/tour-5.jpeg';
import tourImg6 from './images/tour-6.jpg';
import tourImg7 from './images/tour-7.jpg';
import tourImg8 from './images/tour-8.jpg';
import tourImg9 from './images/tour-9.jpg';
import tourImg10 from './images/tour-10.jpg';
import tourImg11 from './images/tour-11.jpg';
import tourImg12 from './images/tour-12.jpg';

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
  { id: 5, href: '#testimonials', text: 'testimonials' },
  { id: 6, href: '#gallery', text: 'gallery' },
];

export const socialLinks = [
  { id: 1, href: 'https://www.facebook.com', icon: 'fa-brands fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fa-brands fa-x-twitter' },
  { id: 3, href: 'https://www.squarespace.com', icon: 'fa-brands fa-squarespace' },
];

export const services = [
  {
    id: 1,
    icon: 'fa-solid fa-route fa-fw',
    serviceTitle: ' Guided Tours',
    info: `  Experience Ethiopia's rich heritage, breathtaking landscapes, and
              unforgettable cultural and nature-based adventures for every
              traveler today.`,
  },
  {
    id: 2,
    icon: 'fa-solid fa-hiking fa-fw',
    serviceTitle: ' Adventure Tours',
    info: `     Explore thrilling hikes, cultural encounters, and remote
              landscapes for unforgettable, active, authentic Ethiopian
              adventures today.`,
  },
  {
    id: 3,
    icon: 'fa-solid fa-landmark fa-fw',
    serviceTitle: 'Cultural Tours',
    info: `  Immerse in Ethiopia's rich heritage with guided tours to ancient
              sites, vibrant festivals, and authentic local experiences.`,
  },
];

export const tours = [
  {
    id: 1,
    img: tourImg1,
    tourDate: 'November 26th, 2025',
    tourTitle: 'lalibela',
    duration: '7',
    tourInfo: `Explore the ancient rock-hewn churches of Lalibela, a UNESCO World
            Heritage site, and immerse yourself in Ethiopia's rich religious
            history and stunning architecture.`,
    region: ' Amhara, Region',
    price: '1,200',
  },
  {
    id: 2,
    img: tourImg2,
    tourDate: 'january 20th, 2026',
    tourTitle: 'fasilides castle',
    duration: '10',
    tourInfo: `   Discover Fasilides Castle in Gondar, Ethiopia, a UNESCO World
              Heritage site known for its unique architecture and rich history
              dating back to the 17th century.`,
    region: ' Amhara, Region',
    price: '2200',
  },
  {
    id: 3,
    img: tourImg3,
    tourDate: 'october 1st, 2026',
    tourTitle: 'Axum',
    duration: '10',
    tourInfo: `  Visit Axum, the ancient city of Ethiopia, known for its towering
              obelisks, archaeological sites, and rich history as the center of
              the Aksumite Empire.`,
    region: ' Tigray, Region',
    price: '1,200',
  },
  {
    id: 4,
    img: tourImg4,
    tourDate: 'November 26th, 2025',
    tourTitle: 'SofOmar Caves',
    duration: '8',
    tourInfo: ` Explore the stunning SofOmar Caves in Ethiopia, known for their
              impressive limestone formations and rich biodiversity, offering a
              unique adventure for nature enthusiasts.`,
    region: ' Oromia, Region',
    price: '1,800',
  },
];

export const galleries = [
  {
    id: 1,
    img: tourImg5,
  },
  {
    id: 2,
    img: tourImg6,
  },
  {
    id: 3,
    img: tourImg7,
  },
  {
    id: 4,
    img: tourImg8,
  },
  {
    id: 5,
    img: tourImg9,
  },
  {
    id: 6,
    img: tourImg10,
  },
  {
    id: 7,
    img: tourImg11,
  },
  {
    id: 8,
    img: tourImg12,
  },
];


export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    country: 'United Kingdom',
    trip: 'Lalibela Heritage Tour',
    rating: 5,
    quote:
      'Every day felt special. Our guide explained the history so beautifully, and the hotels and transport were smooth from start to finish.',
  },
  {
    id: 2,
    name: 'Daniel R.',
    country: 'Canada',
    trip: 'Northern Ethiopia Discovery',
    rating: 5,
    quote:
      'EthioTours gave us an immersive local experience, not just sightseeing. The food, people, and landscapes were unforgettable.',
  },
  {
    id: 3,
    name: 'Amina K.',
    country: 'UAE',
    trip: 'Culture & Nature Escape',
    rating: 5,
    quote:
      'Professional team, flexible itinerary, and excellent communication. This was one of the best trips I have ever taken.',
  },
];
