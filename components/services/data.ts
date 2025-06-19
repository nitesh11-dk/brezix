export interface Service {
  title: string;
  description: string;
  tagLine:string;
  image: string;
  bgColor: string;
  textColor: string;
  colSpan?: string;
}

export const servicesData: Service[] = [
  {
    title: "🖥️ FuturOS Portfolio",
    description:
      "Transform your portfolio into a futuristic OS-inspired site with 3D visuals.\nAn AI agent explains, interacts, and captures leads effortlessly.",
    tagLine: "Personal branding that actually converts.",
    image: "https://cdn.prod.website-files.com/620fd9a3a41c4eda8151cee6/6569bfbae912016a67364734_Icon%20(5).svg",
    bgColor: "bg-[#ECECFB]",
    textColor: "text-black",
  },
  {
    title: "🚀 SmartLaunch Page",
    description:
      "AI-powered landing pages that talk, sell, and close leads 24/7.\nOptimized for conversions with zero manual effort.",
    tagLine: "Launch. Speak. Convert — automatically.",
    image: "https://cdn.prod.website-files.com/620fd9a3a41c4eda8151cee6/6569bfbae912016a67364732_Icon%20(3).svg",
    bgColor: "bg-[#493EFF]",
    textColor: "text-white",
    colSpan: "lg:col-span-2",
  },
  {
    title: "🧱 3d Developnment",
    description:
      "Create immersive 3D walkthroughs for your space or product.\nAI guides your users while showcasing and selling for you.",
    tagLine: "Your space becomes an interactive experience.",
    image: "https://cdn.prod.website-files.com/620fd9a3a41c4eda8151cee6/6569bfbae912016a67364733_Icon%20(4).svg",
    bgColor: "bg-[#ECECFB]",
    textColor: "text-black",
  },
  {
    title: "🤖 GenAI Apps",
    description:
      "Add smart AI to your platform — chatbots, voice agents, lead tools, and more.\nPerfect for SaaS, clinics, or any smart business.",
    tagLine: "Build your AI-powered business engine.",
    image: "https://cdn.prod.website-files.com/620fd9a3a41c4eda8151cee6/6569bfbae912016a67364731_Icon%20(2).svg",
    bgColor: "bg-[#1E1D26]",
    textColor: "text-white",
    colSpan: "md:col-span-2 lg:col-span-1",
  },
  {
    title: "🧩 ThinkCustom™ Apps",
    description:
      "Have a unique idea? We’ll build it from scratch — fully tailored.\nWeb or mobile apps, internal tools, CRMs — you name it.",
    tagLine: "Solution milta hai yahan.",
    image: "https://cdn.prod.website-files.com/620fd9a3a41c4eda8151cee6/6569bfbae912016a67364730_Icon%20(1).svg",
    bgColor: "bg-[#ECECFB]",
    textColor: "text-black",
  },
  {
    title: "📱 AppPrime Development",
    description:
      "Build mobile apps that users love — sleek, useful, and guided by AI.\nGreat for booking, menus, real estate, and more.",
    tagLine: "Jo app download kare, woh customer ban jaaye.",
    image: "https://cdn.prod.website-files.com/620fd9a3a41c4eda8151cee6/6569bfbae912016a67364736_Icon%20(7).svg",
    bgColor: "bg-[#1E1D26]",
    textColor: "text-white",
  },
  {
    title: "🤖 Chatbots & Automation",
    description:
      "Deploy AI agents that handle chats, bookings, follow-ups, and more.\nYour all-in-one digital team, available 24/7.",
    tagLine: "Your AI-powered digital team.",
    image: "https://cdn.prod.website-files.com/620fd9a3a41c4eda8151cee6/6569bfbae912016a67364735_Icon%20(6).svg",
    bgColor: "bg-[#1E1D26]",
    textColor: "text-white",
  },
];
