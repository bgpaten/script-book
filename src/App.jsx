import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Brain, HeartPulse, ShieldAlert } from 'lucide-react';
import { topics } from './data/content';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (currentIndex < topics.length - 1 && !isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0 && !isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 600); // Matches animation duration
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const currentTopic = topics[currentIndex];

  return (
    <div 
      className="app-container" 
      style={{ backgroundColor: currentTopic.color }}
    >
      <header className="header">
        <h1>Pendidikan Inklusif</h1>
        <p>Mengenal 8 Kebutuhan Khusus dalam Pembelajaran</p>
      </header>

      <main className="main-content">
        <button 
          className="nav-button prev" 
          onClick={handlePrev} 
          disabled={currentIndex === 0}
          aria-label="Previous Topic"
        >
          <ChevronLeft size={32} />
        </button>

        <div key={currentIndex} className="slide-container">
          <div className="slide-visuals">
            <div className="image-container">
              <img src={currentTopic.image} alt={currentTopic.title} />
            </div>
            <div className="topic-indicator">
              {topics.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`dot ${idx === currentIndex ? 'active' : ''}`}
                  style={{ backgroundColor: idx === currentIndex ? currentTopic.accent : undefined }}
                />
              ))}
            </div>
          </div>

          <div className="slide-details">
            <h2 className="topic-title" style={{ color: currentTopic.accent }}>
              {currentTopic.title}
            </h2>

            <div className="info-section">
              {/* Karakteristik */}
              <div 
                className="info-card" 
                style={{ '--accent': currentTopic.accent }}
              >
                <div className="info-header">
                  <Brain color={currentTopic.accent} size={24} />
                  <h3>Karakteristik</h3>
                </div>
                <ul className="info-list">
                  {currentTopic.karakteristik.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Penanganan */}
              <div 
                className="info-card" 
                style={{ '--accent': currentTopic.accent }}
              >
                <div className="info-header">
                  <HeartPulse color={currentTopic.accent} size={24} />
                  <h3>Penanganan</h3>
                </div>
                <ul className="info-list">
                  {currentTopic.penanganan.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Dampak */}
              <div 
                className="info-card" 
                style={{ '--accent': currentTopic.accent }}
              >
                <div className="info-header">
                  <ShieldAlert color={currentTopic.accent} size={24} />
                  <h3>Dampak</h3>
                </div>
                <ul className="info-list">
                  {currentTopic.dampak.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <button 
          className="nav-button next" 
          onClick={handleNext} 
          disabled={currentIndex === topics.length - 1}
          aria-label="Next Topic"
        >
          <ChevronRight size={32} />
        </button>
      </main>
    </div>
  );
}

export default App;
