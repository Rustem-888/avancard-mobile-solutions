
import { useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

const ContactSection = () => {
  const { toast } = useToast();
  
  // Function to open AmoCRM form modal using their API
  const openAmoForm = () => {
    // @ts-ignore
    if (window.amo_forms_loaded) {
      try {
        // @ts-ignore
        window.amo_forms_loaded(1523890, 'show');
      } catch (error) {
        console.error("Error opening AmoCRM form:", error);
        toast({
          title: "Ошибка при открытии формы",
          variant: "destructive"
        });
      }
    } else {
      toast({
        title: "Форма загружается, пожалуйста, подождите",
        variant: "default"
      });
    }
  };

  return (
    <section id="contacts" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Свяжитесь с нами</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <div className="card-shadow rounded-xl p-6 md:p-8 bg-avancard-blue text-white">
            <h3 className="text-xl md:text-2xl font-bold mb-6">Контактная информация</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 rounded-full bg-white/10 p-2">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium mb-1">Адрес</p>
                  <p className="text-white/90">г. Астана, пр. Республики, 56/2, офис 24 (Технопарк)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 rounded-full bg-white/10 p-2">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium mb-1">Телефон / WhatsApp</p>
                  <a href="tel:+77758462682" className="text-white/90 hover:text-white transition-colors">+7 775 846 2682</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 rounded-full bg-white/10 p-2">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium mb-1">Email</p>
                  <a href="mailto:avancard.kz@gmail.com" className="text-white/90 hover:text-white transition-colors">avancard.kz@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 rounded-full bg-white/10 p-2">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium mb-1">Instagram</p>
                  <a href="https://instagram.com/avancard_kz" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors">
                    @avancard_kz
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/20">
              <h4 className="font-medium mb-3">Режим работы</h4>
              <p className="text-white/90">Пн-Пт: 9:00 - 18:00</p>
              <p className="text-white/90">Сб-Вс: Выходной</p>
            </div>
          </div>
          
          <div className="card-shadow rounded-xl p-6 md:p-8 bg-white border">
            <h3 className="text-xl md:text-2xl font-bold text-avancard-blue mb-6">Оставьте заявку</h3>
            <p className="text-avancard-darkGray mb-6">
              Заполните форму ниже, и мы свяжемся с вами в ближайшее время для обсуждения вашего проекта
            </p>
            
            <button
              onClick={openAmoForm}
              className="w-full btn-primary mt-2 flex justify-center items-center"
            >
              Открыть форму заявки
            </button>
              
            <p className="text-xs text-avancard-darkGray/70 text-center mt-4">
              Нажимая "Открыть форму заявки", вы соглашаетесь с политикой конфиденциальности
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
