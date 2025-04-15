
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="card-shadow rounded-xl p-6 md:p-8 bg-avancard-blue text-white">
      <h3 className="text-xl md:text-2xl font-bold mb-6">Контактная информация</h3>
      
      <div className="space-y-6">
        <ContactInfoItem 
          icon={<MapPin className="w-5 h-5" />}
          title="Адрес"
          content="г. Астана, пр. Республики, 56/2, офис 24 (Технопарк)"
        />
        
        <ContactInfoItem 
          icon={<Phone className="w-5 h-5" />}
          title="Телефон / WhatsApp"
          content={<a href="tel:+77758462682" className="text-white/90 hover:text-white transition-colors">+7 775 846 2682</a>}
        />
        
        <ContactInfoItem 
          icon={<Mail className="w-5 h-5" />}
          title="Email"
          content={<a href="mailto:avancard.kz@gmail.com" className="text-white/90 hover:text-white transition-colors">avancard.kz@gmail.com</a>}
        />
        
        <ContactInfoItem 
          icon={<Instagram className="w-5 h-5" />}
          title="Instagram"
          content={
            <a href="https://instagram.com/avancard_kz" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors">
              @avancard_kz
            </a>
          }
        />
      </div>
      
      <div className="mt-8 pt-6 border-t border-white/20">
        <h4 className="font-medium mb-3">Режим работы</h4>
        <p className="text-white/90">Пн-Пт: 9:00 - 18:00</p>
        <p className="text-white/90">Сб-Вс: Выходной</p>
      </div>
    </div>
  );
};

interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

const ContactInfoItem = ({ icon, title, content }: ContactInfoItemProps) => (
  <div className="flex items-start">
    <div className="mr-4 rounded-full bg-white/10 p-2">
      {icon}
    </div>
    <div>
      <p className="font-medium mb-1">{title}</p>
      {typeof content === 'string' ? <p className="text-white/90">{content}</p> : content}
    </div>
  </div>
);

export default ContactInfo;
