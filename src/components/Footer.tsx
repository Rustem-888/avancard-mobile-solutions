
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-avancard-blue text-white">
      <div className="container mx-auto py-8 md:py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4 flex items-center gap-2">
              {/* Replace image with text logo */}
              <span className="bg-white text-avancard-blue px-2 py-1 rounded font-bold">AvanCard</span>
            </div>
            <p className="mb-4 text-white/80">
              Производство пластиковых карт для бизнеса в Казахстане. Качество, надежность и индивидуальный подход.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Услуги</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#products" className="hover:text-white transition-colors">Производство карт</a></li>
              <li><a href="#clients" className="hover:text-white transition-colors">Решения для бизнеса</a></li>
              <li><a href="#advantages" className="hover:text-white transition-colors">Наши преимущества</a></li>
              <li><a href="#examples" className="hover:text-white transition-colors">Портфолио</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 shrink-0 text-white/70" />
                <span className="text-white/80">г. Астана, пр. Республики, 56/2, офис 24</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 shrink-0 text-white/70" />
                <a href="tel:+77758462682" className="text-white/80 hover:text-white transition-colors">+7 775 846 2682</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 shrink-0 text-white/70" />
                <a href="mailto:avancard.kz@gmail.com" className="text-white/80 hover:text-white transition-colors">avancard.kz@gmail.com</a>
              </li>
              <li className="flex items-center">
                <Instagram className="w-5 h-5 mr-2 shrink-0 text-white/70" />
                <a href="https://instagram.com/avancard_kz" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                  @avancard_kz
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/10 text-center text-white/60 text-sm">
          <p>© {currentYear} AvanCard. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
