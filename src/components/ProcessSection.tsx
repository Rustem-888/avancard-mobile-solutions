
import { ClipboardList, PenTool, CheckCircle, Truck } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      icon: <ClipboardList size={36} className="text-white" />,
      title: "Оставляете заявку",
      description: "Заполните форму или позвоните нам, чтобы обсудить ваш проект"
    },
    {
      icon: <PenTool size={36} className="text-white" />,
      title: "Обсуждаем макет и задачу",
      description: "Согласовываем дизайн, технические характеристики и тираж"
    },
    {
      icon: <CheckCircle size={36} className="text-white" />,
      title: "Производим и проверяем",
      description: "Изготавливаем карты с соблюдением всех технических требований"
    },
    {
      icon: <Truck size={36} className="text-white" />,
      title: "Отправляем заказ",
      description: "Доставляем готовые карты по указанному адресу в оговоренный срок"
    }
  ];

  return (
    <section id="process" className="section-padding bg-avancard-gray/30">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Как проходит заказ</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative mb-8">
                <div className="w-16 h-16 rounded-full bg-avancard-blue flex items-center justify-center z-10 relative">
                  {step.icon}
                </div>
                <div className="text-2xl font-bold absolute -top-3 -right-3 w-8 h-8 rounded-full bg-avancard-lightBlue text-white flex items-center justify-center">
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-avancard-blue/30"></div>
                )}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-avancard-blue text-center mb-2">{step.title}</h3>
              <p className="text-avancard-darkGray/80 text-center text-sm md:text-base">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl md:text-2xl font-semibold text-avancard-blue mb-4">Готовы начать сотрудничество?</h3>
          <p className="text-lg text-avancard-darkGray/80 mb-6">Заполните форму, и мы свяжемся с вами для обсуждения деталей</p>
          <a 
            href="#contacts" 
            className="inline-block bg-avancard-blue hover:bg-avancard-blue/90 text-white font-medium py-4 px-8 rounded-lg transition-colors text-lg"
          >
            Оставить заявку
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
