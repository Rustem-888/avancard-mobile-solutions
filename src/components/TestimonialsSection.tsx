
import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      text: "Быстро, чётко, спасибо! Не первый раз обращаемся, всегда остаемся довольны качеством и сроками. Рекомендую!",
      name: "Алия Нурланова",
      company: "Сеть ресторанов"
    },
    {
      text: "Качество на высоте, всегда заказываем здесь. Карты для наших клиентов делают быстро и аккуратно, без нареканий.",
      name: "Руслан Казиев",
      company: "Торговый центр"
    },
    {
      text: "Очень довольны сотрудничеством. Команда профессионалов, всегда идут навстречу и предлагают лучшие решения.",
      name: "Марина Ким",
      company: "Фитнес-клуб"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  return (
    <section className="section-padding bg-avancard-gray/30">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Нас рекомендуют</h2>
        
        <div className="mt-12 relative">
          <div className="max-w-3xl mx-auto">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="min-w-full px-4">
                    <div className="bg-white p-6 md:p-8 rounded-xl card-shadow">
                      <div className="flex text-yellow-400 mb-4">
                        <Star size={20} fill="currentColor" />
                        <Star size={20} fill="currentColor" />
                        <Star size={20} fill="currentColor" />
                        <Star size={20} fill="currentColor" />
                        <Star size={20} fill="currentColor" />
                      </div>
                      <blockquote className="text-lg md:text-xl italic text-avancard-darkGray mb-6">
                        "{testimonial.text}"
                      </blockquote>
                      <div>
                        <p className="font-bold text-avancard-blue">{testimonial.name}</p>
                        <p className="text-sm text-avancard-darkGray/70">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-6 gap-4">
              <button 
                onClick={prevTestimonial} 
                className="bg-white hover:bg-avancard-gray/50 text-avancard-blue rounded-full p-2 shadow-md"
                aria-label="Предыдущий отзыв"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button 
                onClick={nextTestimonial} 
                className="bg-white hover:bg-avancard-gray/50 text-avancard-blue rounded-full p-2 shadow-md"
                aria-label="Следующий отзыв"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="text-center mt-6">
            <p className="text-sm text-avancard-darkGray/70">
              Отзывы взяты с <span className="font-medium">2ГИС</span> и <span className="font-medium">Instagram</span>
            </p>
          </div>
        </div>

        <div className="mt-12 p-6 md:p-8 bg-gradient-to-r from-avancard-blue to-avancard-lightBlue rounded-xl text-white text-center">
          <h3 className="text-xl md:text-2xl font-bold mb-4">Хотите присоединиться к нашим довольным клиентам?</h3>
          <p className="mb-6">Оставьте заявку сейчас и получите персональное предложение</p>
          <a 
            href="#contacts" 
            className="inline-block bg-white text-avancard-blue font-medium py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all"
          >
            Оставить заявку
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
