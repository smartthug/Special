import { useState } from 'react';
import LandingPage from './pages/LandingPage';
import LoveLetterPage from './pages/LoveLetterPage';
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
    // Explicit page navigation mapping to ensure correct flow:
    // Landing → Love Letter → Memories → Proposal
    const nextPageMap = {
      'landing': 'loveLetter',
      'loveLetter': 'memories',
      'memories': 'proposal',
      'proposal': null // End of flow
    };

    const nextPage = nextPageMap[currentPage];
    if (nextPage) {
      setCurrentPage(nextPage);
    }
  };

  return (
    <div className="App">
      {currentPage === 'landing' && <LandingPage onNext={navigateToNext} />}
      {currentPage === 'loveLetter' && <LoveLetterPage onNext={navigateToNext} />}
      {currentPage === 'memories' && <Memories onNext={navigateToNext} />}
      {currentPage === 'proposal' && <ProposalPage />}
    </div>
  );
}

export default App;
