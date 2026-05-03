import React, { useRef, useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { materiData } from './data/materiData';
import ScrapbookCover from './components/ScrapbookCover';
import TableOfContents from './components/TableOfContents';
import { MateriPageLeft, MateriPageRight } from './components/MateriScrapbook';
import ScrapbookBackCover from './components/ScrapbookBackCover';
import ScrapbookPage from './components/ScrapbookPage';

function App() {
  const flipBookRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = materiData.length * 2 + 4;

  const onPage = (e) => {
    setCurrentPage(e.data);
  };

  const nextButtonClick = () => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipNext();
    }
  };

  const prevButtonClick = () => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipPrev();
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center w-full bg-[#0f172a] relative"
      style={{
        minHeight: '100vh',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      {/* Side Navigation Arrows */}
      <button 
        className="absolute left-4 sm:left-12 top-1/2 -translate-y-1/2 text-white/40 hover:text-white disabled:opacity-10 disabled:cursor-not-allowed transition-colors z-20" 
        onClick={prevButtonClick}
        disabled={currentPage === 0}
      >
        <ChevronLeft size={64} strokeWidth={1} />
      </button>

      <button 
        className="absolute right-4 sm:right-12 top-1/2 -translate-y-1/2 text-white/40 hover:text-white disabled:opacity-10 disabled:cursor-not-allowed transition-colors z-20" 
        onClick={nextButtonClick}
        disabled={currentPage === totalPages - 1}
      >
        <ChevronRight size={64} strokeWidth={1} />
      </button>

      {/* Container for the book to add shadow to the whole object */}
      <div className="relative shadow-2xl drop-shadow-2xl flex-shrink-0 w-[90%] max-w-[1200px] h-[80%] max-h-[800px] flex items-center justify-center">
        <HTMLFlipBook
          width={550}
          height={750}
          size="stretch"
          minWidth={315}
          maxWidth={600}
          minHeight={400}
          maxHeight={800}
          maxShadowOpacity={0.6}
          showCover={true}
          mobileScrollSupport={true}
          flippingTime={1000}
          className="flip-book-scrapbook"
          ref={flipBookRef}
          onFlip={onPage}
        >
          <ScrapbookCover />
          
          {/* Blank inner cover page (left) */}
          <ScrapbookPage isLeft={true} pageNum={""}>
             <div className="h-full w-full flex items-center justify-center opacity-30">
                <div className="w-16 h-16 border-4 border-dashed border-gray-400 rounded-full transform -rotate-12"></div>
             </div>
          </ScrapbookPage>
          
          <TableOfContents flipBookRef={flipBookRef} />

          {/* Blank page opposite TOC (right) */}
          <ScrapbookPage isLeft={false} pageNum={""}>
            <div className="h-full flex flex-col items-center justify-center">
               <div className="font-hand text-2xl text-gray-400 transform rotate-[-15deg] opacity-60">
                 Notes:
               </div>
            </div>
          </ScrapbookPage>

          {materiData.flatMap((materi, index) => {
            const leftPageNum = (index * 2) + 2;
            const rightPageNum = leftPageNum + 1;
            
            return [
              <MateriPageLeft key={`left-${materi.id}`} materi={materi} pageNum={leftPageNum} />,
              <MateriPageRight key={`right-${materi.id}`} materi={materi} pageNum={rightPageNum} />
            ];
          })}

          {/* Halaman kosong kiri sebelum back cover */}
          <ScrapbookPage isLeft={true} pageNum={""}>
             <div className="h-full flex items-center justify-center">
                <p className="font-hand text-xl text-gray-400 transform -rotate-6">End of notes...</p>
             </div>
          </ScrapbookPage>

          <ScrapbookBackCover />
        </HTMLFlipBook>
      </div>

      {/* Bottom Progress Bar */}
      <div className="absolute bottom-0 w-full h-12 bg-[#0b1120] border-t border-white/5 flex items-center px-4 sm:px-8 z-20">
        <div className="flex gap-4 text-white/40 mr-6">
           <div className="w-4 h-4 border border-current rounded-[2px] opacity-70"></div>
           <div className="w-4 h-4 border border-current rounded-full opacity-70"></div>
        </div>
        
        <span className="font-sans text-xs text-white/60 min-w-[60px]">
          {currentPage === 0 ? "1" : currentPage + 1} / {totalPages}
        </span>
        
        {/* Progress Line */}
        <div className="flex-1 mx-4 h-1 bg-white/10 rounded-full relative overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full bg-blue-500 rounded-full transition-all duration-300"
            style={{ width: `${((currentPage + 1) / totalPages) * 100}%` }}
          ></div>
        </div>
        
        <div className="flex items-center gap-4 text-white/40 ml-4">
           <div className="w-4 h-4 border-2 border-current opacity-70"></div>
           <div className="w-4 h-4 border border-current rounded-sm opacity-70"></div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
