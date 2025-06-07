"use client"
import React from 'react'

const ProjectPreview = () => {
  const projectImages = [
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
    // {
    //   left: [
    //     "/project-section/screen2-1.webp",
    //     "/project-section/screen2-2.webp"
    //   ],
    //   right: [
    //     "/project-section/screen2-3.webp",
    //     "/project-section/screen2-4.webp"
    //   ]
    // },
    // // Row 3
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

  const imageStyle = "rounded-3xl w-36 md:w-44 lg:w-72 lg:rounded-[3rem]"

  return (
    <div className='h-fit overflow-hidden'>
      <div className="w-screen relative overflow-hidden py-16 bg-black">
        <div className='w-full overflow-hidden'>
          {projectImages.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-row justify-between w-full mb-4 lg:mb-6">
              <div className="flex flex-row gap-4 md:gap-6 -ml-10 md:-ml-24">
                {row.left.map((imgSrc, imgIndex) => (
                  <img
                    key={`left-${rowIndex}-${imgIndex}`}
                    src={imgSrc}
                    alt={`Project Preview ${rowIndex + 1}.${imgIndex + 1}`}
                    className={`${imageStyle} ${imgIndex === 0 ? 'hidden sm:block' : ''}`}
                    data-scroll
                    data-scroll-speed={imgIndex === 0 ? 0.2 : 0.3}
                    data-scroll-direction="vertical"
                  />
                ))}
              </div>
              <div className="flex flex-row gap-4 md:gap-6 -mr-10 md:-mr-24">
                {row.right.map((imgSrc, imgIndex) => (
                  <img
                    key={`right-${rowIndex}-${imgIndex}`}
                    src={imgSrc}
                    alt={`Project Preview ${rowIndex + 1}.${imgIndex + 1}`}
                    className={`${imageStyle} ${imgIndex === 1 ? 'hidden sm:block' : ''}`}
                    data-scroll
                    data-scroll-speed={imgIndex === 0 ? 0.3 : 0.2}
                    data-scroll-direction="vertical"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className='absolute  bottom-10 md:scale-[0.60] md:-bottom-20 lg:-bottom-32 lg:right-24'>
          <div className='overflow-hidden w-[40%] h-[127%] absolute bottom-10 left-1/2 -translate-x-1/2 rounded-3xl md:bottom-24 md:h-[124%] lg:bottom-32 lg:-translate-x-[48%]'>
            <video
              className='object-cover'
              src="/project-section/phone.mp4"
              autoPlay
              loop
              muted
            />
          </div>
          <img className='scale-[2] z-20' src="/project-section/hand.webp" alt="Hand holding phone" />
        </div>
      </div>
    </div>
  )
}

export default ProjectPreview
