
import { useState } from 'react';
import { CreditCard, Phone } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const { toast } = useToast();
  const [requestDialogOpen, setRequestDialogOpen] = useState(false);
  const [callDialogOpen, setCallDialogOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      toast({
        title: "Пожалуйста, заполните обязательные поля",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    
    setRequestDialogOpen(false);
    setName("");
    setPhone("");
    setComment("");
  };

  const handleCallSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      toast({
        title: "Пожалуйста, заполните обязательные поля",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Запрос на звонок отправлен!",
      description: "Мы перезвоним вам в ближайшее время",
    });
    
    setCallDialogOpen(false);
    setName("");
    setPhone("");
  };

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-white to-avancard-gray/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-avancard-blue">
              Ваш партнёр в пластиковых решениях
            </h1>
            <p className="text-lg md:text-xl text-avancard-darkGray">
              Производим карты под любые задачи — чётко, в срок, с учётом особенностей вашего бизнеса. 
              Каждый заказ рассчитывается индивидуально.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
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
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-avancard-blue/10 rounded-full absolute -top-6 -right-6"></div>
              <img 
                src="https://images.unsplash.com/photo-1566125882500-87e10f726cdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80" 
                alt="Пластиковые карты AvanCard" 
                className="relative z-10 rounded-xl shadow-xl w-full max-w-md aspect-square object-cover"
              />
              <div className="w-32 h-32 md:w-48 md:h-48 bg-avancard-lightBlue/20 rounded-full absolute -bottom-4 -left-4"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Request Dialog */}
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
              />
            </div>
            <Button type="submit" className="w-full">Отправить заявку</Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Call Dialog */}
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
              />
            </div>
            <Button type="submit" className="w-full">Заказать звонок</Button>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSection;
