
import { CheckCircle, Printer, Brush, Shield } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const ProductSection = () => {
  const benefits = [
    {
      icon: <Brush size={24} className="text-avancard-blue" />,
      title: "Работа по макету или с нуля",
      description: "Поможем с дизайном или реализуем ваш готовый макет с высокой точностью"
    },
    {
      icon: <Printer size={24} className="text-avancard-blue" />,
      title: "Разные технологии печати",
      description: "Офсетная или цифровая печать высокого разрешения с точной цветопередачей"
    },
    {
      icon: <Shield size={24} className="text-avancard-blue" />,
      title: "Надёжные материалы",
      description: "Используем сертифицированный пластик с длительным сроком службы"
    },
    {
      icon: <CheckCircle size={24} className="text-avancard-blue" />,
      title: "Гибкий подход",
      description: "Реализуем проекты любой сложности с учетом ваших пожеланий"
    }
  ];

  return (
    <section id="products" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Изготавливаем пластиковые карты любых форматов и задач</h2>
        <p className="section-subtitle text-center max-w-3xl mx-auto">
          Печатаем, кодируем, персонализируем — под ключ. Поддержка на всех этапах. Контроль качества и чёткая цветопередача.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border border-avancard-gray card-shadow hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-avancard-blue/10 flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-lg text-avancard-blue mb-2">{benefit.title}</h3>
                <p className="text-avancard-darkGray/80">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 p-4 md:p-8 bg-gradient-to-r from-avancard-blue to-avancard-lightBlue rounded-xl text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-6">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Нужна консультация по выбору карт?</h3>
              <p>Наши специалисты помогут подобрать оптимальное решение для ваших задач</p>
            </div>
            <a 
              href="#contacts" 
              className="py-3 px-6 bg-white text-avancard-blue font-medium rounded-lg hover:bg-opacity-90 transition-all whitespace-nowrap text-center w-full md:w-auto"
            >
              Получить консультацию
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
