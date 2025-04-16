
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail, type EmailData } from '@/lib/emailClient';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";

// Define form validation schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Имя должно содержать не менее 2 символов",
  }),
  phone: z.string().min(5, {
    message: "Пожалуйста, введите корректный номер телефона",
  }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  const [formSubmitting, setFormSubmitting] = useState(false);

  // Initialize form with validation schema
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setFormSubmitting(true);
    
    try {
      console.log("Sending email data:", values);
      
      const emailData: EmailData = {
        name: values.name,
        phone: values.phone,
        message: values.message || "Без комментария"
      };
      
      const result = await sendEmail(emailData);
      
      if (result.success) {
        console.log("Сообщение отправлено успешно");
        
        toast({
          title: "Заявка отправлена!",
          description: result.message || "Сообщение успешно отправлено"
        });
        
        form.reset();
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
    } finally {
      setFormSubmitting(false);
    }
  };

  return (
    <div className="card-shadow rounded-xl p-6 md:p-8 bg-white border">
      <h3 className="text-xl md:text-2xl font-bold text-avancard-blue mb-6">Оставьте заявку</h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-avancard-darkGray">
                  Имя*
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Введите ваше имя"
                    disabled={formSubmitting}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-avancard-darkGray">
                  Телефон*
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="+7 (___) ___ __ __"
                    disabled={formSubmitting}
                    type="tel"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-avancard-darkGray">
                  Комментарий
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Опишите ваш запрос или задайте вопрос"
                    className="min-h-[120px]"
                    disabled={formSubmitting}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button
            type="submit"
            disabled={formSubmitting}
            className="w-full btn-primary mt-2"
          >
            {formSubmitting ? 'Отправка...' : 'Отправить заявку'}
          </Button>
          
          <p className="text-xs text-avancard-darkGray/70 text-center mt-2">
            Нажимая "Отправить заявку", вы соглашаетесь с политикой конфиденциальности
          </p>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
