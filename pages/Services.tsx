import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { servicesData } from "@/constants/index";

const Services = () => {
    const baseBoxStyle =
        "rounded-3xl p-6 sm:py-10 md:py-14 lg:py-6 flex flex-col items-start gap-4 h-[42vh]";
    // Type useRef to HTMLElement for DOM elements
    const logosRef = useRef<(HTMLImageElement | null)[]>([]);
    const descRefs = useRef<(HTMLParagraphElement | null)[]>([]);

    useEffect(() => {
        const mm = gsap.matchMedia();

        mm.add(
            {
                isSmall: "(max-width: 1023px)",
                isLarge: "(min-width: 1024px)",
            },
            (context) => {
                const { isSmall, isLarge } = context.conditions;

                if (isSmall) {
                    logosRef.current.forEach((el) => {
                        if (el) { // Ensure el is not null
                            gsap.to(el, {
                                rotation: 360,
                                repeat: -1,
                                ease: "linear",
                                duration: 4,
                            });
                        }
                    });
                }

                if (isLarge) {
                    gsap.killTweensOf(logosRef.current);
                    gsap.set(logosRef.current, { rotation: 0 });

                    const cards = document.querySelectorAll(".service-card") as NodeListOf<HTMLElement>; // Cast to HTMLElement

                    cards.forEach((card, index) => {
                        const logo = logosRef.current[index];

                        const handleHover = () => {
                            if (logo) { // Ensure logo is not null
                                gsap.to(logo, {
                                    rotation: "+=360",
                                    duration: 1.2,
                                    ease: "power2.inOut",
                                });
                            }
                        };
                        const handleLeave = () => {
                            if (logo) { // Ensure logo is not null
                                gsap.to(logo, {
                                    rotation: "-=360",
                                    duration: 1.2,
                                    ease: "power3.inOut",
                                });
                            }
                        };

                        card.addEventListener("mouseenter", handleHover);
                        card.addEventListener("mouseleave", handleLeave);

                        // Clean up
                        // Store handlers on the card element itself for cleanup
                        (card as any)._gsapHandlers = { handleHover, handleLeave };
                    });

                    return () => {
                        // Remove event listeners
                        const cards = document.querySelectorAll(".service-card") as NodeListOf<HTMLElement>;
                        cards.forEach((card, index) => {
                            const { handleHover, handleLeave } = (card as any)._gsapHandlers || {};
                            if (handleHover) {
                                card.removeEventListener("mouseenter", handleHover);
                                card.removeEventListener("mouseleave", handleLeave);
                            }
                        });
                    };
                }
            }
        );

        return () => mm.revert();
    }, []);

    useEffect(() => {
        const mm = gsap.matchMedia();

        mm.add("(min-width: 1024px)", () => {
            const rowCards = document.querySelectorAll(
                "#first-row .service-card, #second-row .service-card"
            ) as NodeListOf<HTMLElement>; // Cast to HTMLElement

            rowCards.forEach((card) => {
                const description = card.querySelector("p");

                if (description) { // Ensure description is not null
                    // Ensure text is hidden initially
                    gsap.set(description, { opacity: 0, y: 20, visibility: "hidden" });

                    const handleEnter = () => {
                        // Animate flex resizing
                        rowCards.forEach((el) => {
                            gsap.to(el, {
                                flex: el === card ? 2 : 0.66,
                                ease: "power2.inOut",
                                duration: 0.4,
                            });
                        });

                        // Animate text appearance with 1s delay
                        gsap.killTweensOf(description); // Kill any old animation
                        gsap.set(description, { visibility: "visible" }); // make visible before fade
                        gsap.to(description, {
                            delay: 1,
                            opacity: 1,
                            y: 0,
                            duration: 0.4,
                            ease: "power2.out",
                        });
                    };

                    const handleLeave = () => {
                        // Reset flex
                        rowCards.forEach((el) => {
                            gsap.to(el, {
                                flex: 1,
                                ease: "power2.inOut",
                                duration: 0.4,
                            });
                        });

                        // Animate text disappearance
                        gsap.killTweensOf(description);
                        gsap.to(description, {
                            opacity: 0,
                            y: 20,
                            duration: 0.3,
                            ease: "power2.in",
                            onComplete: () => {
                                gsap.set(description, { visibility: "hidden" });
                            },
                        });
                    };

                    card.addEventListener("mouseenter", handleEnter);
                    card.addEventListener("mouseleave", handleLeave);
                    (card as any)._gsapHandlers = { handleEnter, handleLeave }; // Store handlers
                }
            });

            return () => {
                rowCards.forEach((card) => {
                    const { handleEnter, handleLeave } = (card as any)._gsapHandlers || {};
                    if (handleEnter) card.removeEventListener("mouseenter", handleEnter);
                    if (handleLeave) card.removeEventListener("mouseleave", handleLeave);
                });
            };
        });

        return () => mm.revert();
    }, []);

    return (
        <>
            <div id="services" className="container-new px-6 py-4 sm:px-8 sm:py-6 lg:px-40 lg:py-8 text-black w-full min-h-screen bg-white">
                <div className="section_top w-full mb-6">
                    <div className="heading flex items-center gap-4 border-b pb-2">
                        <img
                            src="https://cdn.prod.website-files.com/620fd9a3a41c4eda8151cee6/6569bfbae912016a6736473e_Icon.png"
                            alt="Logo"
                            className="w-8 h-8"
                        />
                        <h2 className="text-2xl font-semibold">Services</h2>
                    </div>
                </div>

                <div
                    id="first-row"
                    className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row gap-4 mb-4 w-full"
                >
                    {servicesData.slice(0, 4).map((service, index) => (
                        <div
                            key={index}
                            className={`service-card ${baseBoxStyle} ${service.bgColor} ${service.textColor} transition-all duration-500 ease-in-out overflow-hidden`}
                            data-index={index}
                            style={{ flex: "1 1 0%" }}
                        >
                            <div className="min-w-28 flex items-center justify-center bg-white/15 backdrop-blur-lg rounded-full py-0.5">
                                <img
                                    ref={(el) => (logosRef.current[index] = el)}
                                    src={service.image}
                                    alt={service.title}
                                    className="w-16 h-16 scale-110"
                                />
                            </div>
                            <div className="text-left text-3xl my-1 font-normal">
                                {service.title}
                            </div>
                            <p
                                // The descRefs are being used for the flex animation, not direct element access in the current setup for opacity/transform
                                // So, we'll keep the `ref` here but acknowledge it's not strictly necessary for the description's current animation trigger.
                                className="leading-tight font-normal text-justify md:mb-2 lg:block"
                                style={{
                                    opacity: window.innerWidth >= 1024 ? 0 : 1,
                                    transform:
                                        window.innerWidth >= 1024
                                            ? "translateY(20px)"
                                            : "translateY(0)",
                                    pointerEvents: window.innerWidth >= 1024 ? "none" : "auto",
                                    transition: "none", // prevent Tailwind from conflicting
                                }}
                            >
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div
                    id="second-row"
                    className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row gap-4 mb-4 w-full"
                >
                    {servicesData.slice(4).map((service, index) => (
                        <div
                            key={index + 4}
                            className={`service-card ${baseBoxStyle} ${service.bgColor} ${service.textColor
                                } transition-all duration-500 ease-in-out overflow-hidden ${index === servicesData.slice(4).length - 1
                                    ? "md:col-span-2"
                                    : ""
                                }
`}
                            data-index={index + 4}
                            style={{ flex: "1 1 0%" }}
                        >
                            <div className="min-w-28 flex items-center justify-center bg-white/15 backdrop-blur-lg rounded-full py-0.5">
                                <img
                                    ref={(el) => (logosRef.current[index + 4] = el)}
                                    src={service.image}
                                    alt={service.title}
                                    className="w-16 h-16 scale-110"
                                />
                            </div>
                            <div className="text-left text-3xl my-1 font-normal">
                                {service.title}
                            </div>
                            <p
                                // Similar to above, descRefs isn't strictly needed for the p element's direct access here.
                                className="leading-tight font-normal text-justify md:mb-2 lg:block"
                                style={{
                                    opacity: window.innerWidth >= 1024 ? 0 : 1,
                                    transform:
                                        window.innerWidth >= 1024
                                            ? "translateY(20px)"
                                            : "translateY(0)",
                                    pointerEvents: window.innerWidth >= 1024 ? "none" : "auto",
                                    transition: "none", // prevent Tailwind from conflicting
                                }}
                            >
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
};

export default Services;