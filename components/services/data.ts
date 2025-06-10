export interface Service {
  title: string;
  description: string;
  image: string;
  bgColor: string;
  textColor: string;
  colSpan?: string;
}
export const servicesData: Service[] = [
  {
    title: "App Development",
    description:
      "Building intelligent mobile and desktop apps that combine sleek design with performance. AI-enhanced, user-focused, and future-ready.",
    image:
      "https://cdn.prod.website-files.com/620fd9a3a41c4eda8151cee6/6569bfbae912016a67364730_Icon%20(1).svg",
    bgColor: "bg-[#ECECFB]",
    textColor: "text-black",
    colSpan: "",
  },
  {
    title: "Web Development",
    description:
      "We craft dynamic, responsive websites and platforms—infused with AI when needed, and always optimized for performance and UX.",
    image:
      "https://cdn.prod.website-files.com/620fd9a3a41c4eda8151cee6/6569bfbae912016a67364732_Icon%20(3).svg",
    bgColor: "bg-[#493EFF]",
    textColor: "text-white",
    colSpan: "lg:col-span-2",
  },
  {
    title: "3D Design & Development",
    description:
      "Immersive 3D experiences for product showcases, real estate, and interactive storytelling—bringing your ideas into visual reality.",
    image:
      "https://cdn.prod.website-files.com/620fd9a3a41c4eda8151cee6/6569bfbae912016a67364733_Icon%20(4).svg",
    bgColor: "bg-[#ECECFB]",
    textColor: "text-black",
    colSpan: "",
  },
  {
    title: "AI Agents & Chatbots",
    description:
      "From lead-gen bots to autonomous workflows—we build conversational AI and agentic systems that work smarter and sell harder.",
    image:
      "https://cdn.prod.website-files.com/620fd9a3a41c4eda8151cee6/6569bfbae912016a67364735_Icon%20(6).svg",
    bgColor: "bg-[#1E1D26]",
    textColor: "text-white",
    colSpan: "md:col-span-2 lg:col-span-1",
  },
  {
    title: "Portfolio & Personal Branding",
    description:
      "We help individuals shine online. From sleek portfolios to personal brand storytelling—we shape your digital first impression.",
    image:
      "https://cdn.prod.website-files.com/620fd9a3a41c4eda8151cee6/6569bfbae912016a67364734_Icon%20(5).svg",
    bgColor: "bg-[#ECECFB]",
    textColor: "text-black",
    colSpan: "",
  },
  {
    title: "AI-Powered Applications",
    description:
      "Applications driven by GenAI—search, automation, recommendations, data enrichment, and beyond. We embed AI where it matters.",
    image:
      "https://cdn.prod.website-files.com/620fd9a3a41c4eda8151cee6/6569bfbae912016a67364731_Icon%20(2).svg",
    bgColor: "bg-[#1E1D26]",
    textColor: "text-white",
    colSpan: "",
  },
  {
    title: "Social Media Automation",
    description:
      "Let AI run the repetitive hustle—content scheduling, DM automation, engagement tools, and smart workflows to grow your brand hands-free.",
    image:
      "https://cdn.prod.website-files.com/620fd9a3a41c4eda8151cee6/6569bfbae912016a67364736_Icon%20(7).svg",
    bgColor: "bg-[#1E1D26]",
    textColor: "text-white",
    colSpan: "",
  },
];
