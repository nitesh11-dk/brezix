'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { AiFillStar } from 'react-icons/ai'
import gsap from 'gsap'
import { testimonialData, testimonialCardTransforms } from '@/constants'

interface TestimonialCardProps {
    id: number
    name: string
    role: string
    image: string
    rating: number
    comment: string
    bgColor: string
}

interface CardTransform {
    x: number
    y: number
    z: number
    rotateX: number
    rotateY: number
    rotateZ: number
    scale: number
    zIndex: number
}

const StarRating = ({ rating, starColor }: { rating: number; starColor: string }) => (
    <div className="flex gap-1">
        {[...Array(rating)].map((_, i) => (
            <AiFillStar key={i} className={`w-6 h-6 ${starColor}`} />
        ))}
    </div>
)

const TestimonialCard = ({
    testimonial,
    transform,
    index
}: {
    testimonial: TestimonialCardProps
    transform: CardTransform
    index: number
}) => {
    const cardRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const card = cardRef.current
        if (!card) return

        // Store original transform values
        const originalTransform = {
            x: transform.x,
            y: transform.y,
            z: transform.z,
            rotateX: transform.rotateX,
            rotateY: transform.rotateY,
            rotateZ: transform.rotateZ,
            scale: transform.scale
        }

        // Create GSAP context for cleanup
        const ctx = gsap.context(() => {
            // Mouse enter animation
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    scale: 0.9,
                    rotation: 0,
                    zIndex: 50,
                    duration: 0.8,
                    ease: "power4"
                })
            })

            // Mouse leave animation
            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    scale: originalTransform.scale,
                    rotation: originalTransform.rotateZ,
                    zIndex: transform.zIndex,
                    duration: 0.8,
                    ease: "power4"
                })
            })
        })

        // Cleanup
        return () => ctx.revert()
    }, [transform])

    const getStarColor = (index: number) => {
        switch (index) {
            case 0: return 'text-[#2563EB]' // blue
            case 1: return 'text-white'      // white
            case 2: return 'text-yellow-400' // yellow
            case 3: return 'text-[#2563EB]' // blue
            case 4: return 'text-[#2563EB]' // blue
            default: return 'text-[#2563EB]'
        }
    }

    const getBgColor = (index: number) => {
        switch (index) {
            case 0: return 'bg-white'
            case 1: return 'bg-[#6366F1]'
            case 2: return 'bg-white'
            case 3: return 'bg-black'
            case 4: return 'bg-white'
            default: return 'bg-white'
        }
    }

    const isDark = getBgColor(index) === 'bg-black' || getBgColor(index) === 'bg-[#6366F1]'

    return (
        <div
            ref={cardRef}
            className={`${getBgColor(index)} rounded-3xl rounded-br-none p-10 shadow-md max-w-[350px] h-fit transition-colors duration-300 absolute cursor-pointer`}
            style={{
                transform: `
                    translate3d(${transform.x}px, ${transform.y}px, ${transform.z}px)
                    rotateX(${transform.rotateX}deg)
                    rotateY(${transform.rotateY}deg)
                    rotateZ(${transform.rotateZ}deg)
                    scale(${transform.scale})
                `,
                transformStyle: 'preserve-3d',
                perspective: '1000px',
                zIndex: transform.zIndex,
                willChange: 'transform, z-index'
            }}
        >
            <StarRating rating={testimonial.rating} starColor={getStarColor(index)} />

            <p className={`mt-6 text-lg ${isDark ? 'text-white' : 'text-[#111827]'}`}>
                {testimonial.comment}
            </p>

            <div className={`h-px ${isDark ? 'bg-gray-700' : 'bg-gray-200'} my-6`} />

            <div className="flex items-center gap-4">
                <div className="relative w-12 h-12">
                    <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="rounded-lg object-cover"
                    />
                </div>
                <div>
                    <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-[#111827]'}`}>
                        {testimonial.name}
                    </h3>
                    <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{testimonial.role}</p>
                </div>
            </div>
        </div>
    )
}

const Testimonial = () => {
    return (
        <div className="w-screen h-[45vh] lg:h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center perspective-1000">
            <div className="relative scale-50 md:scale-75 lg:scale-110 w-full h-full max-w-7xl mx-auto flex items-center justify-center  lg:translate-y-20">
                {testimonialData.map((testimonial, index) => (
                    <TestimonialCard
                        key={testimonial.id}
                        testimonial={testimonial}
                        transform={testimonialCardTransforms[index]}
                        index={index}
                    />
                ))}
            </div>
        </div>
    )
}

export default Testimonial

