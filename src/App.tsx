import { useState } from 'react';
import AryanKarmaPortfolio from './components/AryanKarmaPortfolio';
import BentoPage from './components/BentoPage';

export default function App() {
  const [view, setView] = useState<'developer' | 'bento'>('developer');

  if (view === 'bento') {
    return <BentoPage onSwitchToDeveloper={() => setView('developer')} />;
  }

  return <AryanKarmaPortfolio onSwitchToBento={() => setView('bento')} />;
}
