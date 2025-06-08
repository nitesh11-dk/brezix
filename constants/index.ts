import { NavLink } from "@/types";

// Add Discord webhook URL
export const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1381145489918918666/Lp8ZHdR9wnRBmzoRE3xPGGPfchezmuCHV0kFX1VQ3wJkLJfY_gbp2uSz-zV3jSNpFWXd";

export const navLinks: NavLink[] = [
  { label: 'About us', href: '#aboutus', animated: true },
  { label: 'Cases', href: '#cases', animated: true },
  { label: 'Reviews', href: '#reviews', animated: true },
  { label: 'Contact Us', href: '#contact', animated: true },
];

export const menuItems: string[] = ["Home", "Services", "AboutUs", "Portfolio", "Reviews", "Contact Us"];

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

export const contactInfo = {
  email: "info@brezix.com",
  phones: {
    primary: "+91 9403080767",
    secondary: "+91 7414908496"
  },
  whatsapp: "https://wa.me/919403080767",
  telegram: "https://telegram.me/+919403080767",
  discord: "https://discord.gg/4kcbuCKs"
};

export interface Service {
  title: string;
  description: string;
  image: string;
  bgColor: string;
  textColor: string;
  colSpan: string;
}

export const servicesData: Service[] = [
  {
    title: "UI/UX Design",
    description:
      "Digital Alchemy - Transforming pixels into pure user delight. We fuse beauty and brains, sculpting interfaces that feel like second nature. Our creations aren't just eye candy - they're conversion machines.",
    image:
      "https://cdn.prod.website-files.com/620fd9a3a41c4eda8151cee6/6569bfbae912016a67364730_Icon%20(1).svg",
    bgColor: "bg-[#ECECFB]",
    textColor: "text-black",
    colSpan: "",
  },
  {
    title: "Product Design",
    description:
      "Innovation sculptors - Carving tomorrow's must-haves from raw inspiration. We fine-tune each element to tackle genuine pain points and wow your target audience.",
    image:
      "https://cdn.prod.website-files.com/620fd9a3a41c4eda8151cee6/6569bfbae912016a67364731_Icon%20(2).svg",
    bgColor: "bg-[#ECECFB]",
    textColor: "text-black",
    colSpan: "",
  },
  {
    title: "3D Design",
    description:
      "Constructing 3D universes. We blur the line between bits and atoms, crafting experiences that feel real enough to touch.",
    image:
      "https://cdn.prod.website-files.com/620fd9a3a41c4eda8151cee6/6569bfbae912016a67364733_Icon%20(4).svg",
    bgColor: "bg-[#ECECFB]",
    textColor: "text-black",
    colSpan: "",
  },
  {
    title: "Branding",
    description:
      "Distilling your soul into visual gold. We craft brand DNA that screams 'you' without saying a word.",
    image:
      "https://cdn.prod.website-files.com/620fd9a3a41c4eda8151cee6/6569bfbae912016a67364734_Icon%20(5).svg",
    bgColor: "bg-[#ECECFB]",
    textColor: "text-black",
    colSpan: "",
  },
  {
    title: "Webflow Development",
    description:
      "Making your website dreams come true, minus the coding nightmares. We take Webflow and turn it into your personal website factory.",
    image:
      "https://cdn.prod.website-files.com/620fd9a3a41c4eda8151cee6/6569bfbae912016a67364732_Icon%20(3).svg",
    bgColor: "bg-[#493EFF]",
    textColor: "text-white",
    colSpan: "lg:col-span-2",
  },
  {
    title: "Video Editing",
    description:
      "Bringing your message to life, one frame at a time. We create videos that make people stop and watch.",
    image:
      "https://cdn.prod.website-files.com/620fd9a3a41c4eda8151cee6/6569bfbae912016a67364736_Icon%20(7).svg",
    bgColor: "bg-[#1E1D26]",
    textColor: "text-white",
    colSpan: "",
  },
  {
    title: "Motion Ads",
    description:
      "Breathing life into your advertising with kinetic energy. We design motion ads that stop thumbs and start conversations.",
    image:
      "https://cdn.prod.website-files.com/620fd9a3a41c4eda8151cee6/6569bfbae912016a67364735_Icon%20(6).svg",
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
  },
  {
    id: 2,
    text: "OCHI",
    imageSrc: "https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png",
    imageAlt: "Project 2",
  },
  {
    id: 3,
    text: "NOVA",
    imageSrc: "https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png",
    imageAlt: "Project 3",
  },
  {
    id: 4,
    text: "APEX",
    imageSrc: "https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png",
    imageAlt: "Project 4",
  },
  {
    id: 5,
    text: "LUNA",
    imageSrc: "https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png",
    imageAlt: "Project 5",
  },
  {
    id: 6,
    text: "SPARK",
    imageSrc: "https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png",
    imageAlt: "Project 6",
  }
];