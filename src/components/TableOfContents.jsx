import React from 'react';
import ScrapbookPage from './ScrapbookPage';
import { materiData } from '../data/materiData';

const TableOfContents = React.forwardRef(({ flipBookRef }, ref) => {
  const goToPage = (index) => {
    if (flipBookRef.current) {
      // Cover = 0, Blank = 1, TOC = 2 (left), Blank = 3 (right)
      // Materi 1 = 4 (left)
      flipBookRef.current.pageFlip().turnToPage(index * 2 + 4);
    }
  };

  return (
    <ScrapbookPage ref={ref} isLeft={false} pageNum={1}>
      <div className="h-full flex flex-col relative">
        
        {/* Torn paper header */}
        <div className="bg-[var(--color-kraft)] p-4 shadow-sm mb-6 transform -rotate-1 relative self-start z-10 w-3/4">
          <div className="absolute -top-3 right-4 w-12 h-5 tape-edge rotate-3"></div>
          <h2 className="font-hand text-4xl font-bold text-[#4a3b32] text-center">
            Daftar Isi
          </h2>
        </div>

        {/* Content list on lined paper effect */}
        <div className="flex-grow bg-white p-6 scrapbook-shadow relative">
          {/* Notebook lines effect */}
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(transparent 95%, #e5e7eb 95%)', backgroundSize: '100% 2rem' }}></div>
          
          <ul className="relative z-10 space-y-4 mt-2">
            {materiData.map((materi, index) => (
              <li 
                key={materi.id} 
                className="flex items-end gap-3 cursor-pointer group"
                onClick={() => goToPage(index)}
              >
                <span className="font-hand text-2xl text-[#8c7a6b] w-6">{index + 1}.</span>
                <span className="font-typewriter text-lg text-gray-800 group-hover:text-[#8c7a6b] border-b border-dashed border-transparent group-hover:border-[#8c7a6b] transition-colors pb-1">
                  {materi.title}
                </span>
                <span className="flex-grow border-b border-dotted border-gray-300 mb-2"></span>
                <span className="font-typewriter text-sm text-gray-500 mb-1">
                  hal {index * 2 + 2}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ScrapbookPage>
  );
});

export default TableOfContents;
