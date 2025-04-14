
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const projects = [
    {
      image: "/lovable-uploads/f20732fa-ee8e-409b-8444-d2c4ca8708a9.png",
      title: "Дисконтные карты для сети магазинов",
      description: "Карты с напечатанной порядковой нумерацией"
    },
    {
      image: "/lovable-uploads/d4d0be92-3161-4d3a-b481-803e9bd5aa99.png",
      title: "Дисконтная карта для ресторана",
      description: "Карта с эмбоссированием, магнитной полосой"
    },
    {
      image: "/lovable-uploads/e3ada075-b680-4730-9f3f-63a6c756d9b7.png",
      title: "Клубные карты фитнес-центра",
      description: "Карты с RFID чипом для быстрой идентификации"
    },
    {
      image: "/lovable-uploads/e786e0e6-6eba-41e2-87ec-17355efd72c0.png",
      title: "Подарочная карта",
      description: "Карта на серебристом пластике с эмбоссированием"
    },
    {
      image: "/lovable-uploads/c4995d95-8e7e-4c4b-88e9-9fb2e60bc6e5.png",
      title: "Карта для паркинга ТРЦ",
      description: "Карта с RFID чипом для быстрой идентификации"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    
    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }
    
    touchStartX.current = null;
    touchEndX.current = null;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="examples" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Наши проекты</h2>
        
        <div className="mt-12 relative">
          <div 
            className="overflow-hidden rounded-xl card-shadow"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="min-w-full">
                  <div className="aspect-video md:aspect-[16/9] relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-contain" // Changed from object-cover to object-contain
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent py-4 md:py-8 px-4 md:px-8">
                      <h3 className="text-white text-lg md:text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-white/80 text-sm md:text-base">{project.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={prevSlide} 
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-avancard-blue rounded-full p-2 shadow-md z-10"
            aria-label="Предыдущий слайд"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide} 
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-avancard-blue rounded-full p-2 shadow-md z-10"
            aria-label="Следующий слайд"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center mt-4 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                  index === currentIndex ? 'bg-avancard-blue' : 'bg-avancard-blue/30'
                }`}
                aria-label={`Перейти к слайду ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-avancard-darkGray mb-6">
            Мы выполняем заказы любой сложности и масштаба. Свяжитесь с нами для обсуждения вашего проекта.
          </p>
          <a 
            href="#contacts" 
            className="inline-block bg-avancard-lightBlue hover:bg-avancard-lightBlue/90 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Заказать карты
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

