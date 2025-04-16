
import { useState } from 'react';
import { CreditCard, Phone } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { sendEmail, type EmailData } from '@/lib/emailClient';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define validation schema for request form
const requestFormSchema = z.object({
  name: z.string().min(2, { message: "Имя должно содержать не менее 2 символов" }),
  phone: z.string().min(5, { message: "Пожалуйста, введите корректный номер телефона" }),
  message: z.string().optional(),
});

// Define validation schema for call form
const callFormSchema = z.object({
  name: z.string().min(2, { message: "Имя должно содержать не менее 2 символов" }),
  phone: z.string().min(5, { message: "Пожалуйста, введите корректный номер телефона" }),
});

type RequestFormValues = z.infer<typeof requestFormSchema>;
type CallFormValues = z.infer<typeof callFormSchema>;

const HeroSection = () => {
  const { toast } = useToast();
  const [requestDialogOpen, setRequestDialogOpen] = useState(false);
  const [callDialogOpen, setCallDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize request form
  const requestForm = useForm<RequestFormValues>({
    resolver: zodResolver(requestFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      message: ""
    }
  });

  // Initialize call form
  const callForm = useForm<CallFormValues>({
    resolver: zodResolver(callFormSchema),
    defaultValues: {
      name: "",
      phone: ""
    }
  });

  const handleSendEmail = async (data: EmailData) => {
    setIsSubmitting(true);
    
    try {
      console.log("Sending data from HeroSection:", data);
      const result = await sendEmail(data);
      
      if (result.success) {
        console.log("Отправка данных успешна");
        
        toast({
          title: "Заявка отправлена!",
          description: result.message || "Сообщение успешно отправлено",
        });
        
        return true;
      } else {
        throw new Error(result.message || "Ошибка отправки");
      }
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

  const handleRequestSubmit = async (values: RequestFormValues) => {
    const data: EmailData = {
      name: values.name,
      phone: values.phone,
      message: values.message || "Без комментария",
    };
    
    const success = await handleSendEmail(data);
    if (success) {
      setRequestDialogOpen(false);
      requestForm.reset();
    }
  };

  const handleCallSubmit = async (values: CallFormValues) => {
    const data: EmailData = {
      name: values.name,
      phone: values.phone,
      message: "Запрос на обратный звонок",
    };
    
    const success = await handleSendEmail(data);
    if (success) {
      setCallDialogOpen(false);
      callForm.reset();
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
          <Form {...requestForm}>
            <form onSubmit={requestForm.handleSubmit(handleRequestSubmit)} className="space-y-4">
              <FormField
                control={requestForm.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Имя*</FormLabel>
                    <FormControl>
                      <Input placeholder="Введите имя" disabled={isSubmitting} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={requestForm.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Телефон*</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="+7 (___) ___ __ __" 
                        type="tel" 
                        disabled={isSubmitting} 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={requestForm.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Комментарий</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Опишите ваш запрос" 
                        disabled={isSubmitting} 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Отправка..." : "Отправить заявку"}
              </Button>
            </form>
          </Form>
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
          <Form {...callForm}>
            <form onSubmit={callForm.handleSubmit(handleCallSubmit)} className="space-y-4">
              <FormField
                control={callForm.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Имя*</FormLabel>
                    <FormControl>
                      <Input placeholder="Введите имя" disabled={isSubmitting} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={callForm.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Телефон*</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="+7 (___) ___ __ __" 
                        type="tel" 
                        disabled={isSubmitting} 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Отправка..." : "Заказать звонок"}
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSection;
