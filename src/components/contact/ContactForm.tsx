
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from 'emailjs-com';

// EmailJS configuration
const EMAILJS_SERVICE_ID = "service_91fucbj";
const EMAILJS_TEMPLATE_ID = "template_ev9m8qk";
const EMAILJS_PUBLIC_KEY = "inLZxKxQHdmID6jKJ";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
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
        message: formData.message || "Без комментария",
      };
      
      // Make sure to initialize EmailJS before sending the email
      emailjs.init(EMAILJS_PUBLIC_KEY);
      
      // Sending the email
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
        message: ""
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
          <label htmlFor="message" className="block text-sm font-medium text-avancard-darkGray mb-1">
            Комментарий
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
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
  );
};

export default ContactForm;
