import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from 'emailjs-com';

// EmailJS конфигурация
const EMAILJS_SERVICE_ID = "service_91fucbj"; // Обновленный Service ID
const EMAILJS_TEMPLATE_ID = "template_emailjs"; // Потребуется обновить, когда у вас будет реальный Template ID
const EMAILJS_PUBLIC_KEY = "your_public_key"; // Потребуется обновить, когда у вас будет реальный Public Key

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    comment: ""
  });
  const [formSubmitting, setFormSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast({
        title: "Пожалуйста, заполните обязательные поля",
        variant: "destructive"
      });
      return;
    }
    
    setFormSubmitting(true);
    
    try {
      const templateParams = {
        to_email: "avancard.kz@gmail.com",
        subject: "Заявка с сайта №1 avancard.kz",
        from_name: formData.name,
        phone: formData.phone,
        message: formData.comment || "Без комментария",
      };
      
      // Раскомментировать и использовать реальные ключи EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      
      console.log("Сообщение отправлено:", templateParams);
      
      toast({
        title: "Заявка отправлена!",
        description: "Сообщение успешно доставлено на email avancard.kz@gmail.com"
      });
      
      setFormData({
        name: "",
        phone: "",
        comment: ""
      });
    } catch (error) {
      console.error("Ошибка отправки:", error);
      toast({
        title: "Ошибка отправки!",
        description: "Пожалуйста, попробуйте позже или свяжитесь с нами по телефону",
        variant: "destructive"
      });
    } finally {
      setFormSubmitting(false);
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
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-avancard-darkGray mb-1">
                  Имя*
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Введите ваше имя"
                  required
                  className="w-full"
                  disabled={formSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-avancard-darkGray mb-1">
                  Телефон*
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+7 (___) ___ __ __"
                  required
                  type="tel"
                  className="w-full"
                  disabled={formSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-avancard-darkGray mb-1">
                  Комментарий
                </label>
                <Textarea
                  id="comment"
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  placeholder="Опишите ваш запрос или задайте вопрос"
                  className="w-full min-h-[120px]"
                  disabled={formSubmitting}
                />
              </div>
              
              <button
                type="submit"
                disabled={formSubmitting}
                className="w-full btn-primary mt-2 flex justify-center items-center"
              >
                {formSubmitting ? 'Отправка...' : 'Отправить заявку'}
              </button>
              
              <p className="text-xs text-avancard-darkGray/70 text-center mt-2">
                Нажимая "Отправить заявку", вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
