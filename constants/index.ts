import { NavLink } from "@/types";


export const navLinks: NavLink[] = [
  { label: 'About us', href: '#', animated: true },
  { label: 'Cases', href: '#', animated: true },
  { label: 'Reviews', href: '#', animated: true },
  { label: 'Contact Us', href: '#', animated: true },
];

export const menuItems: string[] = ["Home", "Services", "About Us", "Portfolio", "Review", "Contact Us"];

export const testimonialCardTransforms = [
  {
    x: -185,
    y: -46,
    z: 0,
    rotateX: 0,
    rotateY: 0,
    rotateZ: -12,
    scale: 0.80,
    zIndex: 5
  },
  {
    x: -37,
    y: -184,
    z: 0,
    rotateX: 0,
    rotateY: 0,
    rotateZ: -16,
    scale: 0.81,
    zIndex: 5
  },
  {
    x: -34,
    y: 68,
    z: 0,
    rotateX: 0,
    rotateY: 0,
    rotateZ: -7,
    scale: 0.74,
    zIndex: 5
  },
  {
    x: 147,
    y: 19,
    z: 0,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 9,
    scale: 0.74,
    zIndex: 6
  },
  {
    x: 218,
    y: -144,
    z: 0,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 15,
    scale: 0.80,
    zIndex: 1
  }
]

export const testimonialData = [
  {
    id: 1,
    name: 'Barry W.',
    role: 'CEO of TechNest',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    comment: 'Really useful system. We got an amazing service for our company hotel bookings for our coming events.',
    bgColor: 'bg-white'
  },
  {
    id: 2,
    name: 'Devon R.',
    role: 'Product Lead',
    image: 'https://randomuser.me/api/portraits/men/41.jpg',
    rating: 5,
    comment: 'Nimbus lets us launch new features in hours, not days. Total game-changer.',
    bgColor: 'bg-[#6366F1]'
  },
  {
    id: 3,
    name: 'Thomas H.',
    role: 'Tech Lead',
    image: 'https://randomuser.me/api/portraits/men/44.jpg',
    rating: 5,
    comment: 'We evaluated eight platforms before landing on Nimbus. It was not just the feature set - it was the pace of updates.',
    bgColor: 'bg-white'
  },
  {
    id: 4,
    name: 'Thomas H.',
    role: 'Tech Lead',
    image: 'https://randomuser.me/api/portraits/men/44.jpg',
    rating: 5,
    comment: 'Nimbus took a huge load off our dev team. Integrations were quick, and the platform is so reliable that we hardly ever need to check in. Highly recommended.',
    bgColor: 'bg-black'
  },
  {
    id: 5,
    name: 'Sarah L.',
    role: 'Engineering Manager',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
    comment: 'Nimbus helped streamline our entire workflow in just a few weeks. The team loves how easy it is to navigate, and we have already seen a major boost in productivity.',
    bgColor: 'bg-white'
  }
]
