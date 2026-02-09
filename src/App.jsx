import { useState } from 'react';
import LandingPage from './pages/LandingPage';
import LoveLetterPage from './pages/LoveLetterPage';
import MemoryGallery from './pages/MemoryGallery';
import Memories from './pages/Memories';
import ProposalPage from './pages/ProposalPage';
import './App.css';

/**
 * Main App Component
 * Handles navigation between different pages/sections
 */
function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const navigateToNext = () => {
    const pageOrder = ['landing', 'loveLetter', 'memories', 'memoryGallery', 'proposal'];
    const currentIndex = pageOrder.indexOf(currentPage);
    if (currentIndex < pageOrder.length - 1) {
      setCurrentPage(pageOrder[currentIndex + 1]);
    }
  };

  return (
    <div className="App">
      {currentPage === 'landing' && <LandingPage onNext={navigateToNext} />}
      {currentPage === 'loveLetter' && <LoveLetterPage onNext={navigateToNext} />}
      {currentPage === 'memories' && <Memories onNext={navigateToNext} />}
      {currentPage === 'memoryGallery' && <MemoryGallery onNext={navigateToNext} />}
      {currentPage === 'proposal' && <ProposalPage />}
    </div>
  );
}

export default App;
