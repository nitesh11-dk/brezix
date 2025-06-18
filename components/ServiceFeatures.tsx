import React, { useRef } from 'react';
import { Feature } from '@/types/services';

interface ServiceFeaturesProps {
  features: Feature[];
}

const ServiceFeatures = ({ features }: ServiceFeaturesProps) => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-indigo-600">Features</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Everything you need to stand out
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="group relative flex flex-col bg-white/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/80 transition-all duration-300">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <svg className="h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                {feature.title}
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">{feature.description}</p>
                
                {/* Video Preview Card */}
                <div className="mt-6 relative h-64 rounded-xl overflow-hidden bg-gray-100">
                  <video
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    className="w-full h-full object-cover cursor-pointer"
                    autoPlay
                    muted
                    loop
                    playsInline
                    src={feature.videoUrl || "https://servd-made-byshape.b-cdn.net/production/uploads/videos/shape-showreel-2024_looping-v3.mp4"}
                  />
                </div>
              </dd>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 group-hover:ring-gray-900/20 transition-all duration-300" />
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default ServiceFeatures; 