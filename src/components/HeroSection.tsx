
import { useState, useEffect } from 'react';
import { CreditCard, Phone } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const HeroSection = () => {
  const { toast } = useToast();
  
  // Initialize AmoCRM form
  useEffect(() => {
    // Define AmoCRM initialization function
    const initAmoCRM = () => {
      if (window.amo_forms_params && window.amo_forms_load && window.amo_forms_loaded) return;
      
      // @ts-ignore
      window.amo_forms_params = window.amo_forms_params || {setMeta: function(p) {this.params = (this.params || []).concat([p])}};
      // @ts-ignore
      window.amo_forms_load = window.amo_forms_load || function(f) {window.amo_forms_load.f = (window.amo_forms_load.f || []).concat([f])};
      // @ts-ignore
      window.amo_forms_load({id: "1523890", hash: "299c6067690a7b5f6005808bdb2b62e9", locale: "ru"});
      // @ts-ignore
      window.amo_forms_loaded = window.amo_forms_loaded || function(f, k) {window.amo_forms_loaded.f = (window.amo_forms_loaded.f || []).concat([[f, k]])};
      
      // Create and append the script element
      const script = document.createElement('script');
      script.id = "amoforms_script_1523890";
      script.async = true;
      script.charset = "utf-8";
      script.src = "https://forms.amocrm.ru/forms/assets/js/amoforms.js?1744628079";
      document.body.appendChild(script);
    };
    
    initAmoCRM();
    
    // Cleanup function to remove the script when component unmounts
    return () => {
      const script = document.getElementById("amoforms_script_1523890");
      if (script) {
        script.remove();
      }
    };
  }, []);

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
                onClick={openAmoForm} 
                className="btn-primary flex items-center justify-center gap-2"
              >
                <CreditCard size={20} />
                Оставить заявку
              </button>
              <button 
                onClick={openAmoForm}
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Заказать звонок
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hidden div for AmoCRM form initialization */}
      <div id="amoform-container" style={{ display: 'none' }}></div>
    </section>
  );
};

export default HeroSection;
