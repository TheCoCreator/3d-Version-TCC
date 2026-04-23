
import React, { useState, useEffect } from 'react';
import { HomePage } from './components/HomePage';
import { LandingPage } from './components/LandingPage';
import { JoinPage } from './components/JoinPage';
import { PrivacyPage } from './components/PrivacyPage';
import { TermsPage } from './components/TermsPage';
import { SupportPage } from './components/SupportPage';
import { TalkItOutPage } from './components/TalkItOutPage';
import { LtcPage } from './components/LtcPage';

type ViewState = 'home' | 'landing' | 'checkout' | 'privacy' | 'terms' | 'support' | 'talkitout' | 'ltc';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');
  const [scrollToFooter, setScrollToFooter] = useState(false);

  // Helper to sync State + URL
  const navigate = (newView: ViewState, path: string) => {
    try {
      window.history.pushState(null, '', path);
    } catch (e) {
      console.warn('Navigation state update failed (expected in sandbox):', e);
    }
    setView(newView);
    window.scrollTo(0, 0);
  };

  // 1. Handle Initial Load based on URL
  useEffect(() => {
    const path = window.location.pathname;
    const normalizedPath = path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path;

    if (normalizedPath === '/landing') {
      setView('landing');
    } else if (normalizedPath === '/checkout' || normalizedPath === '/join') {
      setView('checkout');
    } else if (normalizedPath === '/privacy') {
      setView('privacy');
    } else if (normalizedPath === '/terms') {
      setView('terms');
    } else if (normalizedPath === '/support') {
      setView('support');
    } else if (normalizedPath === '/talkitout') {
      setView('talkitout');
    } else if (normalizedPath === '/ltc') {
      setView('ltc');
    } else {
      // Default to home if route not found
      if (path !== '/') {
        try {
          window.history.replaceState(null, '', '/');
        } catch (e) {
          console.warn('History replace failed (expected in sandbox):', e);
        }
      }
      setView('home');
    }
  }, []);

  // 2. Handle Browser "Back" Button (PopState)
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const normalizedPath = path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path;

      if (normalizedPath === '/') setView('home');
      else if (normalizedPath === '/landing') setView('landing');
      else if (normalizedPath === '/checkout' || normalizedPath === '/join') setView('checkout');
      else if (normalizedPath === '/privacy') setView('privacy');
      else if (normalizedPath === '/terms') setView('terms');
      else if (normalizedPath === '/support') setView('support');
      else if (normalizedPath === '/talkitout') setView('talkitout');
      else if (normalizedPath === '/ltc') setView('ltc');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Scroll Behavior Control
  useEffect(() => {
    if (scrollToFooter) {
      setTimeout(() => {
        const footer = document.getElementById('site-footer');
        if (footer) {
          footer.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      setScrollToFooter(false);
    }
  }, [view, scrollToFooter]);

  // Navigation Handlers
  const handleGoHome = () => navigate('home', '/');
  const handleGoToLanding = () => navigate('landing', '/landing');
  const handleStartCheckout = () => navigate('checkout', '/join');
  
  const renderView = () => {
    switch (view) {
      case 'home':
        return (
          <HomePage 
            onJoinReset={handleStartCheckout} 
          />
        );
      case 'landing':
        return (
          <LandingPage 
            onStartCheckout={handleStartCheckout} 
            onBackToHome={handleGoHome}
          />
        );
      case 'checkout':
        return <JoinPage />;
      case 'privacy':
        return <PrivacyPage onBack={handleGoHome} />;
      case 'terms':
        return <TermsPage onBack={handleGoHome} />;
      case 'support':
        return <SupportPage onBack={handleGoHome} />;
      case 'talkitout':
        return <TalkItOutPage onBackToHome={handleGoHome} />;
      case 'ltc':
        return <LtcPage onBackToHome={handleGoHome} />;
      default:
        return (
            <HomePage 
                onJoinReset={handleGoToLanding} 
            />
        );
    }
  };

  return (
    <div className="min-h-screen w-full text-foreground font-sans">
      {renderView()}
    </div>
  );
};

export default App;
