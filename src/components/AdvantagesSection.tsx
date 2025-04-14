
import { Award, Users, Map, BarChart } from 'lucide-react';

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: <Award className="w-8 h-8 md:w-10 md:h-10" />,
      value: "10+",
      description: "лет опыта"
    },
    {
      icon: <BarChart className="w-8 h-8 md:w-10 md:h-10" />,
      value: "10 000 000+",
      description: "карт изготовлено"
    },
    {
      icon: <Map className="w-8 h-8 md:w-10 md:h-10" />,
      value: "Производство",
      description: "в Казахстане"
    },
    {
      icon: <Users className="w-8 h-8 md:w-10 md:h-10" />,
      value: "80%",
      description: "повторных заказов клиентов"
    }
  ];

  return (
    <section id="advantages" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Нас выбирают, потому что мы делаем надёжно</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12">
          {advantages.map((advantage, index) => (
            <div 
              key={index} 
              className="bg-avancard-blue/5 hover:bg-avancard-blue/10 rounded-xl p-6 flex flex-col items-center text-center card-shadow transition-all"
            >
              <div className="text-avancard-blue mb-4">
                {advantage.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-avancard-blue mb-2">{advantage.value}</h3>
              <p className="text-avancard-darkGray">{advantage.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-avancard-blue rounded-xl overflow-hidden card-shadow">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1571867424488-4565932edb41?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
                alt="Команда AvanCard" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 p-6 md:p-10 text-white flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Почему клиенты выбирают нас?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 text-avancard-lightBlue">✓</span>
                  <span>Современное оборудование и качественные материалы</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-avancard-lightBlue">✓</span>
                  <span>Профессиональные дизайнеры и технические специалисты</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-avancard-lightBlue">✓</span>
                  <span>Строгий контроль качества на всех этапах производства</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-avancard-lightBlue">✓</span>
                  <span>Выполнение заказов точно в срок</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-avancard-lightBlue">✓</span>
                  <span>Индивидуальный подход к каждому клиенту</span>
                </li>
              </ul>
              <div className="mt-6 flex items-center">
                <div className="flex">
                  <span className="text-yellow-400 text-xl">★★★★★</span>
                </div>
                <span className="ml-2 text-sm">Отзывы в 2ГИС и Instagram</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
