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
    title: "UI/UX Design",
    description:
      "Digital Alchemy - Transforming pixels into pure user delight...",
    image:
      "https://cdn.prod.website-files.com/620fd9a3a41c4eda8151cee6/6569bfbae912016a67364730_Icon%20(1).svg",
    bgColor: "bg-[#ECECFB]",
    textColor: "text-black",
    colSpan: "",
  },
  {
    title: "Product Design",
    description:
      "Innovation sculptors - Carving tomorrow’s must-haves from raw inspiration. We fine-tune each element to tackle genuine pain points and wow your target audience.",
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
      "Distilling your soul into visual gold. We craft brand DNA that screams ‘you’ without saying a word.",
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
