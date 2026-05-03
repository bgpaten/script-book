import React from 'react';

const ScrapbookPage = React.forwardRef(({ children, className = '', isLeft = false, pageNum }, ref) => {
  return (
    <div className={`h-full w-full relative book-page-texture overflow-hidden ${className}`} ref={ref}>
      {/* Page shadow/spine effect */}
      {isLeft ? (
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[rgba(0,0,0,0.08)] to-transparent pointer-events-none z-50"></div>
      ) : (
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[rgba(0,0,0,0.08)] to-transparent pointer-events-none z-50"></div>
      )}

      {/* Actual Content */}
      <div className={`h-full w-full p-8 relative flex flex-col ${isLeft ? 'pr-12' : 'pl-12'}`}>
        
        {/* Optional Washi Tape Corners */}
        {Math.random() > 0.5 && (
          <div className="absolute top-4 right-4 w-16 h-5 tape-edge rotate-45 opacity-70"></div>
        )}
        
        {children}
        
        {/* Page Number */}
        <div className={`absolute bottom-4 ${isLeft ? 'left-6' : 'right-6'} font-typewriter text-xs text-gray-400 opacity-60`}>
          - {pageNum} -
        </div>
      </div>
    </div>
  );
});

export default ScrapbookPage;
