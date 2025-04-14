import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/a9f3100e-ecb9-4c74-9bc4-59285540b0a0.png" 
            alt="AvanCard Logo" 
            className="h-10 object-contain"
          />
        </a>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-avancard-darkGray p-2"
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <a href="#products" className="text-avancard-darkGray hover:text-avancard-blue transition-colors">
            Продукция
          </a>
          <a href="#clients" className="text-avancard-darkGray hover:text-avancard-blue transition-colors">
            Клиенты
          </a>
          <a href="#advantages" className="text-avancard-darkGray hover:text-avancard-blue transition-colors">
            Преимущества
          </a>
          <a href="#process" className="text-avancard-darkGray hover:text-avancard-blue transition-colors">
            Процесс
          </a>
          <a href="#examples" className="text-avancard-darkGray hover:text-avancard-blue transition-colors">
            Примеры
          </a>
          <a href="#contacts" className="bg-avancard-lightBlue hover:bg-avancard-lightBlue/90 text-white px-4 py-2 rounded-md transition-colors">
            Связаться
          </a>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t animate-fade-in">
          <div className="flex flex-col p-4 space-y-3">
            <a 
              href="#products" 
              className="text-avancard-darkGray py-2 px-3 hover:bg-avancard-gray rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Продукция
            </a>
            <a 
              href="#clients" 
              className="text-avancard-darkGray py-2 px-3 hover:bg-avancard-gray rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Клиенты
            </a>
            <a 
              href="#advantages" 
              className="text-avancard-darkGray py-2 px-3 hover:bg-avancard-gray rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Преимущества
            </a>
            <a 
              href="#process" 
              className="text-avancard-darkGray py-2 px-3 hover:bg-avancard-gray rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Процесс
            </a>
            <a 
              href="#examples" 
              className="text-avancard-darkGray py-2 px-3 hover:bg-avancard-gray rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Примеры
            </a>
            <a 
              href="#contacts" 
              className="bg-avancard-lightBlue text-white py-3 px-4 rounded-md text-center mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Связаться с нами
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
