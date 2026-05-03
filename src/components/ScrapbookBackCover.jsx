import React from 'react';

const ScrapbookBackCover = React.forwardRef((props, ref) => {
  return (
    <div className="bg-[#5c4a3d] h-full w-full relative overflow-hidden" ref={ref} data-density="hard">
      {/* Book spine effect on the right for back cover */}
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-[#3d3128] shadow-[-2px_0_5px_rgba(0,0,0,0.5)] border-l border-[#7a6453] z-10"></div>
      
      <div className="p-12 pr-16 h-full flex flex-col items-center justify-center relative">
        <div className="bg-[#dcb99c] p-6 text-center scrapbook-shadow transform rotate-1 relative border border-[#c8a486]">
           <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 tape-edge rotate-2"></div>
           <p className="font-hand text-3xl text-[#4a3b32] mb-2">Terima Kasih</p>
           <p className="font-typewriter text-sm text-[#5c4a3d] opacity-80">
             "Setiap anak berhak mendapatkan<br/>pendidikan dan kasih sayang."
           </p>
        </div>
      </div>
    </div>
  );
});

export default ScrapbookBackCover;
