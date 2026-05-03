import React from 'react';
import ScrapbookPage from './ScrapbookPage';

export const MateriPageLeft = React.forwardRef(({ materi, pageNum }, ref) => {
  // Randomize rotation for organic feel
  const rotatePhoto = Math.random() > 0.5 ? 'rotate-2' : '-rotate-2';
  const rotateTape = Math.random() > 0.5 ? 'rotate-6' : '-rotate-6';
  
  return (
    <ScrapbookPage ref={ref} isLeft={true} pageNum={pageNum}>
      <div className="h-full flex flex-col justify-center items-center relative">
        
        {/* Title Tag */}
        <div className="absolute top-4 left-4 bg-[var(--color-kraft-light)] border border-[#dcb99c] px-4 py-2 transform -rotate-3 z-10 scrapbook-shadow">
          <div className="w-3 h-3 rounded-full bg-[#8c7a6b] absolute top-1/2 -left-1.5 -translate-y-1/2"></div>
          <h2 className="font-hand text-3xl font-bold text-[#4a3b32]">{materi.title}</h2>
        </div>

        {/* Polaroid Photo */}
        <div className={`polaroid-frame mt-12 transform ${rotatePhoto} relative z-0 w-4/5 max-w-sm`}>
          {/* Tape holding photo */}
          <div className={`absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-6 tape-edge ${rotateTape}`}></div>
          
          <img 
            src={materi.imagePath} 
            alt={materi.title} 
            className="w-full aspect-square object-cover bg-gray-200"
          />
          <p className="font-hand text-xl text-center mt-4 text-gray-700">
            {materi.subtitle}
          </p>
        </div>

      </div>
    </ScrapbookPage>
  );
});

export const MateriPageRight = React.forwardRef(({ materi, pageNum }, ref) => {
  return (
    <ScrapbookPage ref={ref} isLeft={false} pageNum={pageNum}>
      <div className="h-full flex flex-col gap-6 relative pt-4">

        {/* Karakteristik - Torn Kraft Paper */}
        <div className="bg-[var(--color-kraft)] p-5 scrapbook-shadow transform rotate-1 relative">
          <div className="absolute -top-2 right-10 w-16 h-5 tape-edge -rotate-2"></div>
          <h3 className="font-typewriter text-xl font-bold mb-2 border-b border-[#8c7a6b] pb-1 inline-block">Karakteristik</h3>
          <ul className="font-hand text-xl leading-tight space-y-1">
            {materi.karakteristik.map((item, idx) => (
              <li key={idx} className="flex gap-2">
                <span>-</span> <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Penanganan - Sticky Note */}
        <div className={`${materi.themeColor} p-5 scrapbook-shadow transform -rotate-1 relative ml-4 w-11/12 self-end`}>
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-5 tape-edge rotate-1"></div>
          <h3 className="font-typewriter text-lg font-bold mb-2 text-gray-800">Penanganan:</h3>
          <ul className="font-sans text-sm text-gray-700 space-y-2">
            {materi.penanganan.map((item, idx) => (
              <li key={idx} className="flex gap-2 items-start">
                <span className="mt-1 text-xs">⭐</span> <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Dampak - Taped Note */}
        <div className="bg-white p-4 border-2 border-dashed border-gray-300 transform rotate-2 relative w-10/12">
           <div className="absolute -top-3 -left-3 w-10 h-10 tape-edge rotate-45"></div>
           <div className="absolute -bottom-3 -right-3 w-10 h-10 tape-edge rotate-45"></div>
           <h3 className="font-hand text-2xl font-bold text-gray-800 mb-1">Dampak</h3>
           <div className="font-typewriter text-sm text-gray-600 space-y-2">
             <p className="text-green-700">✓ {materi.dampak[0]}</p>
             <p className="text-red-700">✗ {materi.dampak[1]}</p>
           </div>
        </div>

      </div>
    </ScrapbookPage>
  );
});
