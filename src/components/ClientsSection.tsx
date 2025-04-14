
import { 
  ShoppingBag, 
  UtensilsCrossed, 
  Dumbbell, 
  Gamepad, 
  Fuel, 
  Hotel, 
  Building, 
  BadgePercent
} from 'lucide-react';

const ClientsSection = () => {
  const industries = [
    {
      icon: <ShoppingBag className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Торговые сети и бутики",
      description: "Подарочные и дисконтные карты для увеличения повторных продаж"
    },
    {
      icon: <UtensilsCrossed className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Рестораны и кафе",
      description: "Системы лояльности для привлечения постоянных клиентов"
    },
    {
      icon: <Dumbbell className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Фитнес-клубы и wellness-центры",
      description: "Клубные карты с современным дизайном и функционалом"
    },
    {
      icon: <Gamepad className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Развлекательные центры и клубы",
      description: "Карты доступа, подарочные сертификаты и бонусные системы"
    },
    {
      icon: <Fuel className="w-6 h-6 md:w-8 md:h-8" />,
      title: "АЗС и сетевые сервисы",
      description: "Топливные карты с защитой от подделок, дисконтные программы"
    },
    {
      icon: <Hotel className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Отели и хостелы",
      description: "Карты-ключи, привилегированные системы для гостей"
    },
    {
      icon: <Building className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Офисы и бизнес-центры",
      description: "Пропуска, ID-карты для сотрудников, карты доступа"
    },
    {
      icon: <BadgePercent className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Программы лояльности",
      description: "Комплексные решения для бизнеса любого масштаба"
    }
  ];

  return (
    <section id="clients" className="section-padding bg-avancard-gray/30">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Решения для любых сфер и задач</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-12">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-5 flex flex-col items-center text-center card-shadow hover:shadow-lg transition-all hover:translate-y-[-5px] duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-avancard-blue/10 flex items-center justify-center mb-4 text-avancard-blue">
                {industry.icon}
              </div>
              <h3 className="font-bold text-lg text-avancard-blue mb-2">{industry.title}</h3>
              <p className="text-sm text-avancard-darkGray/80">{industry.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg font-medium text-avancard-darkGray mb-6">
            Не нашли свою сферу? У нас есть решения для любого бизнеса!
          </p>
          <a 
            href="#contacts" 
            className="inline-block bg-avancard-blue hover:bg-avancard-blue/90 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Обсудить ваш проект
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
