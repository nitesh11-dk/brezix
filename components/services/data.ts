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
    title: "🖥️ FuturOS Portfolio™",
    description:
      "Turn your portfolio into a futuristic OS-style experience with 3D storytelling that feels alive. An AI agent talks, explains, and captures leads — this isn’t just a portfolio, it’s your personal brand’s power move.",
    tagLine: "Personal branding that actually converts.",
    image: "https://cdn.prod.website-files.com/620fd9a3a41c4eda8151cee6/6569bfbae912016a67364734_Icon%20(5).svg",
    bgColor: "bg-[#ECECFB]",
    textColor: "text-black",
  },
  {
    title: "🚀 SmartLaunch™ Page",
    description:
      "AI-powered landing pages that speak, sell, and support – 24x7. Designed for speed, action, and results, these pages don't just sit there – they close leads for you automatically.",
    tagLine: "Launch. Speak. Convert — automatically.",
    image: "https://cdn.prod.website-files.com/620fd9a3a41c4eda8151cee6/6569bfbae912016a67364732_Icon%20(3).svg",
    bgColor: "bg-[#493EFF]",
    textColor: "text-white",
    colSpan: "lg:col-span-2",
  },
  {
    title: "🏠 ImmersiView™",
    description:
      "Create jaw-dropping 3D product and space tours powered by AI. Let users walk through your store, restaurant, salon, or real estate virtually – and let the agent guide, explain, and sell instantly.",
    tagLine: "Your space becomes an interactive experience.",
    image: "https://cdn.prod.website-files.com/620fd9a3a41c4eda8151cee6/6569bfbae912016a67364733_Icon%20(4).svg",
    bgColor: "bg-[#ECECFB]",
    textColor: "text-black",
  },
  {
    title: "🤖 GenAI Apps™",
    description:
      "Go beyond static websites. Add AI brains to your digital products – chatbots, voice advisors, dashboards, lead systems – all smart, all automated. Perfect for SaaS, clinics, and smart businesses.",
    tagLine: "Build your AI-powered business engine.",
    image: "https://cdn.prod.website-files.com/620fd9a3a41c4eda8151cee6/6569bfbae912016a67364731_Icon%20(2).svg",
    bgColor: "bg-[#1E1D26]",
    textColor: "text-white",
    colSpan: "md:col-span-2 lg:col-span-1",
  },
  {
    title: "🧩 ThinkCustom™ Apps",
    description:
      "Got a custom idea or business need? We’ll design and build it – web or mobile. From internal tools to customer-facing apps, CRMs to dashboards – whatever you need, fully tailored.",
    tagLine: "Solution milta hai yahan.",
    image: "https://cdn.prod.website-files.com/620fd9a3a41c4eda8151cee6/6569bfbae912016a67364730_Icon%20(1).svg",
    bgColor: "bg-[#ECECFB]",
    textColor: "text-black",
  },
  {
    title: "📱 AppPrime™ Development",
    description:
      "Modern mobile apps built to get used – not ignored. From food menus to booking, salon to real estate – we design experiences that users love and AI agents that guide them.",
    tagLine: "Jo app download kare, woh customer ban jaaye.",
    image: "https://cdn.prod.website-files.com/620fd9a3a41c4eda8151cee6/6569bfbae912016a67364736_Icon%20(7).svg",
    bgColor: "bg-[#1E1D26]",
    textColor: "text-white",
  },
  {
    title: "🤖 Chatbots & Automation™",
    description:
      "Meet your digital staff – AI agents that chat, talk, explain, and even follow up. Sales, support, booking, lead gen, reminders – fully automated and always-on. One system, full automation.",
    tagLine: "Your AI-powered digital team.",
    image: "https://cdn.prod.website-files.com/620fd9a3a41c4eda8151cee6/6569bfbae912016a67364735_Icon%20(6).svg",
    bgColor: "bg-[#1E1D26]",
    textColor: "text-white",
  },
];
