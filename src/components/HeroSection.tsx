
import { useState } from 'react';
import { CreditCard, Phone } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import emailjs from 'emailjs-com';

// EmailJS конфигурация
const EMAILJS_SERVICE_ID = "service_91fucbj"; 
const EMAILJS_TEMPLATE_ID = "template_ev9m8qk"; 
const EMAILJS_PUBLIC_KEY = "inLZxKxQHdmID6jKJ"; 

const HeroSection = () => {
  const { toast } = useToast();
  const [requestDialogOpen, setRequestDialogOpen] = useState(false);
  const [callDialogOpen, setCallDialogOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (templateParams: any) => {
    setIsSubmitting(true);
    
    try {
      // Initialize EmailJS before sending the email
      emailjs.init(EMAILJS_PUBLIC_KEY);
      
      // Sending the email with the correct parameters
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      
      console.log("Отправка данных:", templateParams);
      
      toast({
        title: "Заявка отправлена!",
        description: "Сообщение успешно доставлено на email avancard.kz@gmail.com",
      });
      
      return true;
    } catch (error) {
      console.error("Ошибка отправки:", error);
      toast({
        title: "Ошибка отправки!",
        description: "Пожалуйста, попробуйте позже или свяжитесь с нами по телефону",
        variant: "destructive"
      });
      
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRequestSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      toast({
        title: "Пожалуйста, заполните обязательные поля",
        variant: "destructive"
      });
      return;
    }
    
    const templateParams = {
      to_email: "avancard.kz@gmail.com",
      subject: "Заявка с сайта №1 avancard.kz",
      from_name: name,
      phone: phone,
      message: comment || "Без комментария",
    };
    
    const success = await sendEmail(templateParams);
    if (success) {
      setRequestDialogOpen(false);
      setName("");
      setPhone("");
      setComment("");
    }
  };

  const handleCallSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      toast({
        title: "Пожалуйста, заполните обязательные поля",
        variant: "destructive"
      });
      return;
    }
    
    const templateParams = {
      to_email: "avancard.kz@gmail.com",
      subject: "Заявка на звонок с сайта №1 avancard.kz",
      from_name: name,
      phone: phone,
      message: "Запрос на обратный звонок",
    };
    
    const success = await sendEmail(templateParams);
    if (success) {
      setCallDialogOpen(false);
      setName("");
      setPhone("");
    }
  };

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-white to-avancard-gray/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full text-center space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-avancard-blue text-center">
              Пластиковые карты для вашего бизнеса с доставкой по всему Казахстану
            </h1>
            <p className="text-lg md:text-xl text-avancard-darkGray text-center max-w-2xl mx-auto">
              Производим карты под любые задачи — чётко, в срок, с учетом особенностей вашего бизнеса. 
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <button 
                onClick={() => setRequestDialogOpen(true)} 
                className="btn-primary flex items-center justify-center gap-2"
              >
                <CreditCard size={20} />
                Оставить заявку
              </button>
              <button 
                onClick={() => setCallDialogOpen(true)}
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Заказать звонок
              </button>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={requestDialogOpen} onOpenChange={setRequestDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Оставить заявку</DialogTitle>
            <DialogDescription>
              Заполните форму, и мы свяжемся с вами для обсуждения деталей заказа
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleRequestSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Имя*
              </label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Введите имя"
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Телефон*
              </label>
              <Input
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+7 (___) ___ __ __"
                required
                type="tel"
                disabled={isSubmitting}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="comment" className="text-sm font-medium">
                Комментарий
              </label>
              <Input
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Опишите ваш запрос"
                disabled={isSubmitting}
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Отправка..." : "Отправить заявку"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={callDialogOpen} onOpenChange={setCallDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Заказать звонок</DialogTitle>
            <DialogDescription>
              Оставьте ваш номер, и мы перезвоним вам в ближайшее время
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleCallSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="callName" className="text-sm font-medium">
                Имя*
              </label>
              <Input
                id="callName"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Введите имя"
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="callPhone" className="text-sm font-medium">
                Телефон*
              </label>
              <Input
                id="callPhone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+7 (___) ___ __ __"
                required
                type="tel"
                disabled={isSubmitting}
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Отправка..." : "Заказать звонок"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSection;
