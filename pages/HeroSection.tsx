import React from 'react'

const HeroSection = () => {
  return (
    <div>
    
<main className="relative h-screen flex items-center justify-between min-h-[calc(100vh-120px)] p-2">
  <div className="relative overflow-hidden h-full w-full rounded-[40px] bg-red-400 flex items-center px-8">
    
   
    <video
      muted
      autoPlay
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover rounded-[40px]"
      src="/hero.mp4"
    ></video>

    {/* Text content with higher z-index */}
    <div className="relative z-10 flex-1 max-w-2xl text-white">
      <p className='font-freigeist font-normal'>We Create</p>
   <p className='font-freigeist italic font-bold'><span>icon</span> Awesome</p>
   <p className='font-freigeist font-bold'>Design</p>
    </div>
    

  </div>
</main>

    </div>
  )
}

export default HeroSection
