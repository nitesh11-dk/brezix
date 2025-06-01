import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaPlay } from "react-icons/fa6";

interface AnimatedCircleTextProps {
  text?: string;
}

const AnimatedCircleText: React.FC<AnimatedCircleTextProps> = ({
  text = "Some text - Animated circle text -",
}) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.innerHTML = text
        .split("")
        .map(
          (char, i) =>
            `<span style="transform:rotate(${i * 10.3}deg)" class="absolute left-1/2 text-[1.2em] origin-[0_100px] select-none">${char}</span>`
        )
        .join("");
      gsap.to(textRef.current, {
        rotation: 360,
        duration: 8,
        repeat: -1,
        ease: "linear",
        transformOrigin: "50% 50%",
      });
    }
  }, [text]);

  return (
    <div className="text-white relative scale-[0.4] w-48 h-48 rounded-full flex items-center justify-center">
      <div
        className="absolute w-36 scale-90 h-36 rounded-full bg-center bg-cover"
        style={{
          backgroundImage:
            'url("https://imgs.search.brave.com/8ckJbu4CulfX-sdQoC38rZge1iBO2X9khcSmW6uWfcw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8wOS82MC9w/bGF5LWJ1dHRvbi1p/Y29uLW9uLXdoaXRl/LWJhY2tncm91bmQt/dmVjdG9yLTQ5Nzkw/OTYwLmpwZw")',
        }}
      ></div>
      <div
        ref={textRef}
        className="absolute w-full h-full capitalize  text-[17px]"
      ></div>
    </div>
  );
};

export default AnimatedCircleText;
