import React from 'react';

const ScrapbookCover = React.forwardRef((props, ref) => {
  return (
    <div className="bg-[#5c4a3d] h-full w-full relative overflow-hidden" ref={ref} data-density="hard">
      {/* Book spine effect */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-[#3d3128] shadow-[2px_0_5px_rgba(0,0,0,0.5)] border-r border-[#7a6453] z-10"></div>
      
      <div className="p-12 pl-16 h-full flex flex-col items-center justify-center relative">
        {/* Decorative torn paper / label */}
        <div className="bg-[#f4ebd0] p-8 pb-10 w-4/5 text-center scrapbook-shadow transform -rotate-2 relative">
          
          {/* Tape on top */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 tape-edge rotate-1"></div>
          
          <h1 className="font-hand text-5xl font-bold text-[#4a3b32] mb-4">
            Script Book
          </h1>
          <div className="h-px w-3/4 mx-auto bg-[#8c7a6b] mb-4"></div>
          <p className="font-typewriter text-lg text-[#5c4a3d]">
            Mengenal 8 Jenis<br/>Anak Berkebutuhan Khusus
          </p>
          
          {/* Polaroid accent */}
          <div className="absolute -bottom-16 -right-6 polaroid-frame bg-white transform rotate-12 scale-75 shadow-lg">
            <div className="w-24 h-24 bg-[#dcb99c] flex items-center justify-center">
              <span className="font-hand text-4xl text-[#5c4a3d]">ABK</span>
            </div>
            <div className="absolute -top-3 right-4 w-12 h-6 tape-edge -rotate-6"></div>
          </div>
          
        </div>
      </div>
    </div>
  );
});

export default ScrapbookCover;
