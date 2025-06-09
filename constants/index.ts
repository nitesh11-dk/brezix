import { NavLink } from "@/types";

// Add Discord webhook URL
export const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1381145489918918666/Lp8ZHdR9wnRBmzoRE3xPGGPfchezmuCHV0kFX1VQ3wJkLJfY_gbp2uSz-zV3jSNpFWXd";

export const navLinks: NavLink[] = [
  { label: 'About us', href: '#aboutus', animated: true },
  { label: 'Projects', href: '#projects', animated: true },
  { label: 'Reviews', href: '#reviews', animated: true },
  { label: 'Contact Us', href: '#contact', animated: true },
];

export const menuItems: string[] = ["Home", "Services", "AboutUs", "Projects", "Reviews", "Contact Us"];

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
    name: 'Rohan Verma',
    role: 'Founder, Digitalyaar',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    rating: 5,
    comment: 'Brezix ne meri portfolio website ekdum next level bana di. Design aur performance – dono top class!',
    bgColor: 'bg-white'
  },
  {
    id: 2,
    name: 'Meera Iyer',
    role: 'Product Manager, HealthFi',
    image: 'https://randomuser.me/api/portraits/women/46.jpg',
    rating: 5,
    comment: 'The AI chatbot Brezix built for us has changed how we do customer support. Instant replies = happy users!',
    bgColor: 'bg-[#6366F1]'
  },
  {
    id: 3,
    name: 'Amit Sharma',
    role: 'Tech Lead, RealNest',
    image: 'https://randomuser.me/api/portraits/men/52.jpg',
    rating: 5,
    comment: 'WebXR ka real estate showcase dekh ke clients impressed ho jaate hain. Kudos to team Brezix!',
    bgColor: 'bg-white'
  },
  {
    id: 4,
    name: 'Nidhi Patel',
    role: 'Co-founder, Bliss Events',
    image: 'https://randomuser.me/api/portraits/women/50.jpg',
    rating: 5,
    comment: 'Brezix ki RSVP app ne hamara event planning super smooth kar diya. Bahut hi responsive team hai!',
    bgColor: 'bg-black'
  },
  {
    id: 5,
    name: 'Harshil Joshi',
    role: 'Marketing Head, Growzi',
    image: 'https://randomuser.me/api/portraits/men/60.jpg',
    rating: 5,
    comment: 'AI-based lead generation tool ne hamari conversion rate double kar di. Brezix is 🔥🔥🔥',
    bgColor: 'bg-white'
  }
];


export const contactInfo = {
  email: "info@brezix.com",
  phones: {
    primary: "+91 9403080767",
    secondary: "+91 7414908496"
  },
  whatsapp: "https://wa.me/919403080767",
  telegram: "https://telegram.me/+919403080767",
  discord: "https://discord.gg/DwQFsgYr"
};

export type Service = {
  title: string;
  description: string;
  image: string;
  bgColor: string;
  textColor: string;
  colSpan: string;
};

 export const servicesData: Service[] = [
  {
    title: "UI/UX Design",
    description:
      "Digital Alchemy - Transforming pixels into pure user delight. We fuse beauty and brains, sculpting interfaces that feel like second nature. Our creations aren’t just eye candy - they’re conversion machines.",
    image: "https://images.unsplash.com/photo-1549642055-32e6b216962f", // Updated Unsplash link for UI/UX
    bgColor: "bg-[#ECECFB]",
    textColor: "text-black",
    colSpan: "",
  },
  {
    title: "Product Design",
    description:
      "Innovation sculptors - Carving tomorrow’s must-haves from raw inspiration. We fine-tune each element to tackle genuine pain points and wow your target audience.",
    image: "https://images.unsplash.com/photo-1621609764095-b040e3f05b0c", // Updated Unsplash link for Product Design
    bgColor: "bg-[#ECECFB]",
    textColor: "text-black",
    colSpan: "",
  },
  {
    title: "3D Design",
    description:
      "Constructing 3D universes. We blur the line between bits and atoms, crafting experiences that feel real enough to touch.",
    image: "https://images.unsplash.com/photo-1629904863339-a78b548c772c", // Updated Unsplash link for 3D Design
    bgColor: "bg-[#ECECFB]",
    textColor: "text-black",
    colSpan: "",
  },
  {
    title: "Branding",
    description:
      "Distilling your soul into visual gold. We craft brand DNA that screams ‘you’ without saying a word.",
    image: "https://images.unsplash.com/photo-1517486804-d450974b76c8", // Updated Unsplash link for Branding
    bgColor: "bg-[#ECECFB]",
    textColor: "text-black",
    colSpan: "",
  },
  {
    title: "Webflow Development",
    description:
      "Making your website dreams come true, minus the coding nightmares. We take Webflow and turn it into your personal website factory.",
    image: "https://images.unsplash.com/photo-1600861111620-30589a19c7f7", // Updated Unsplash link for Webflow Development
    bgColor: "bg-[#493EFF]",
    textColor: "text-white",
    colSpan: "lg:col-span-2",
  },
  {
    title: "Video Editing",
    description:
      "Bringing your message to life, one frame at a time. We create videos that make people stop and watch.",
    image: "https://images.unsplash.com/photo-1582236166453-625406085a8a", // Updated Unsplash link for Video Editing
    bgColor: "bg-[#1E1D26]",
    textColor: "text-white",
    colSpan: "",
  },
  {
    title: "Motion Ads",
    description:
      "Breathing life into your advertising with kinetic energy. We design motion ads that stop thumbs and start conversations.",
    image: "https://images.unsplash.com/photo-1616400619175-5be7286bcc80", // Updated Unsplash link for Motion Ads
    bgColor: "bg-[#1E1D26]",
    textColor: "text-white",
    colSpan: "md:col-span-2 lg:col-span-1",
  },
];
export const projectImages = [
  // // Row 1
  // {
  //   left: [
  //     "/project-section/screen1-1.webp",
  //     "/project-section/screen1-2.webp"
  //   ],
  //   right: [
  //     "/project-section/screen1-3.webp",
  //     "/project-section/screen1-4.webp"
  //   ]
  // },
  // // Row 2
  {
    left: [
      "/project-section/screen2-1.webp",
      "/project-section/screen2-2.webp"
    ],
    right: [
      "/project-section/screen2-3.webp",
      "/project-section/screen2-4.webp"
    ]
  },
  // Row 3
  {
    left: [
      "/project-section/screen3-1.webp",
      "/project-section/screen3-2.webp"
    ],
    right: [
      "/project-section/screen3-3.webp",
      "/project-section/screen3-4.webp"
    ]
  }
]

export const projects = [
  {
    id: 1,
    text: "VYSE",
    imageSrc: "https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png",
    imageAlt: "Project 1",
    projectName: "VYSE Creative Studio",
    projectDescription: "A branding and visual identity project for a modern design studio focused on immersive digital experiences.",
  },
  {
    id: 2,
    text: "OCHI",
    imageSrc: "https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png",
    imageAlt: "Project 2",
    projectName: "OCHI Portfolio",
    projectDescription: "A portfolio website showcasing a collection of visual storytelling and user-focused design solutions.",
  },
  {
    id: 3,
    text: "NOVA",
    imageSrc: "https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png",
    imageAlt: "Project 3",
    projectName: "NOVA Platform",
    projectDescription: "An innovative web platform designed for creators to collaborate, share, and grow their communities.",
  },
  {
    id: 4,
    text: "APEX",
    imageSrc: "https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png",
    imageAlt: "Project 4",
    projectName: "APEX Analytics",
    projectDescription: "A data visualization and business intelligence dashboard built for enterprise performance monitoring.",
  },
  {
    id: 5,
    text: "LUNA",
    imageSrc: "https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png",
    imageAlt: "Project 5",
    projectName: "LUNA App",
    projectDescription: "A sleek mobile-first app aimed at promoting mindfulness, meditation, and daily well-being habits.",
  },
  {
    id: 6,
    text: "SPARK",
    imageSrc: "https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png",
    imageAlt: "Project 6",
    projectName: "SPARK Campaign",
    projectDescription: "A social media marketing campaign that boosted engagement and visibility for a lifestyle brand.",
  }
];
