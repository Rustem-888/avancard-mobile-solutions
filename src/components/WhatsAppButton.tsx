
import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const [showButton, setShowButton] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed right-4 bottom-4 z-40 transition-opacity duration-300 ${showButton ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <a
        href="https://wa.me/77758462682"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-avancard-green text-white rounded-full shadow-lg hover:shadow-xl transition-all group"
      >
        <span className="absolute right-full mr-2 bg-white text-avancard-darkGray py-2 px-3 rounded-lg shadow-md whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity text-sm">
          Написать в WhatsApp
        </span>
        <div className="p-3 sm:p-4 animate-pulse">
          <MessageCircle size={28} fill="white" />
        </div>
      </a>
    </div>
  );
};

export default WhatsAppButton;
