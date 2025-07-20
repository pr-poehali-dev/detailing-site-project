import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [configTotal, setConfigTotal] = useState(0);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const services = [
    {
      id: 'wash',
      icon: 'Droplets',
      title: 'Мойка Premium',
      description: 'Бесконтактная мойка с применением профессиональной химии',
      price: 1500,
      duration: '45 мин'
    },
    {
      id: 'polish',
      icon: 'Sparkles',
      title: 'Полировка кузова',
      description: 'Устранение мелких царапин и придание блеска',
      price: 8500,
      duration: '4 часа'
    },
    {
      id: 'ceramic',
      icon: 'Shield',
      title: 'Керамическое покрытие',
      description: 'Долговременная защита лакокрасочного покрытия',
      price: 25000,
      duration: '1 день'
    },
    {
      id: 'interior',
      icon: 'Car',
      title: 'Химчистка салона',
      description: 'Глубокая очистка и защита всех поверхностей салона',
      price: 6500,
      duration: '3 часа'
    }
  ];

  const portfolio = [
    {
      image: '/img/3c1e1f69-6d59-482c-a3c7-a2432760ad98.jpg',
      title: 'Audi RS6 - Полная детализация',
      description: 'Керамическое покрытие + полировка'
    },
    {
      image: '/img/4a48dec4-3426-456a-a2c1-3246056b5c48.jpg',
      title: 'BMW X5 - Premium мойка',
      description: 'Защитное покрытие кузова'
    },
    {
      image: '/img/2407ce1b-f0a9-4a5a-9283-9a65f9749669.jpg',
      title: 'Mercedes E-Class - Восстановление',
      description: 'Коррекция лакокрасочного покрытия'
    }
  ];

  const toggleService = (serviceId: string) => {
    const service = services.find(s => s.id === serviceId);
    if (!service) return;

    if (selectedServices.includes(serviceId)) {
      setSelectedServices(prev => prev.filter(id => id !== serviceId));
      setConfigTotal(prev => prev - service.price);
    } else {
      setSelectedServices(prev => [...prev, serviceId]);
      setConfigTotal(prev => prev + service.price);
    }
  };

  return (
    <div className="min-h-screen bg-white font-roboto">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Icon name="Car" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-secondary">AutoPremium</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
              <a href="#portfolio" className="text-gray-700 hover:text-primary transition-colors">Портфолио</a>
              <a href="#configurator" className="text-gray-700 hover:text-primary transition-colors">Конфигуратор</a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors">О нас</a>
              <a href="#contacts" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={16} className="mr-2" />
              Записаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-secondary to-secondary/80 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Премиальный<br />
                <span className="text-primary">детейлинг</span><br />
                автомобилей
              </h1>
              <p className="text-xl mb-8 text-gray-200 font-open-sans">
                Профессиональная забота о вашем автомобиле. 
                Используем только премиальные материалы и современные технологии.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Записаться на услугу
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-secondary">
                  <Icon name="Play" size={20} className="mr-2" />
                  Посмотреть работы
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="/img/3c1e1f69-6d59-482c-a3c7-a2432760ad98.jpg" 
                alt="Детейлинг автомобиля" 
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-white p-4 rounded-lg">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm">довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 font-open-sans">Полный спектр услуг по детейлингу автомобилей</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={service.id} className="hover:shadow-lg transition-all duration-300 animate-fade-in border-0 bg-white">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-secondary">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 font-open-sans">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-primary">{service.price.toLocaleString('ru-RU')} ₽</span>
                    <div className="text-sm text-gray-500 mt-1">{service.duration}</div>
                  </div>
                  <Button className="w-full bg-secondary hover:bg-secondary/90">
                    Выбрать услугу
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Портфолио работ</h2>
            <p className="text-xl text-gray-600 font-open-sans">Результаты нашей работы говорят сами за себя</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((work, index) => (
              <div key={index} className="group cursor-pointer animate-fade-in">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold mb-1">{work.title}</h3>
                    <p className="text-sm text-gray-200">{work.description}</p>
                  </div>
                  <Badge className="absolute top-4 right-4 bg-primary">
                    <Icon name="Eye" size={14} className="mr-1" />
                    Посмотреть
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Configurator Section */}
      <section id="configurator" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Конфигуратор услуг</h2>
            <p className="text-xl text-gray-600 font-open-sans">Создайте индивидуальный пакет услуг</p>
          </div>

          <Card className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-secondary mb-6">Выберите услуги</h3>
                <div className="space-y-4">
                  {services.map((service) => (
                    <div key={service.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={selectedServices.includes(service.id)}
                          onChange={() => toggleService(service.id)}
                          className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                        />
                        <div>
                          <div className="font-semibold text-secondary">{service.title}</div>
                          <div className="text-sm text-gray-600">{service.duration}</div>
                        </div>
                      </div>
                      <div className="text-lg font-bold text-primary">
                        {service.price.toLocaleString('ru-RU')} ₽
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:border-l lg:pl-8">
                <h3 className="text-2xl font-bold text-secondary mb-6">Итого</h3>
                <div className="bg-secondary text-white p-6 rounded-lg">
                  <div className="space-y-3">
                    {selectedServices.map((serviceId) => {
                      const service = services.find(s => s.id === serviceId);
                      return service ? (
                        <div key={serviceId} className="flex justify-between text-sm">
                          <span>{service.title}</span>
                          <span>{service.price.toLocaleString('ru-RU')} ₽</span>
                        </div>
                      ) : null;
                    })}
                  </div>
                  
                  {selectedServices.length > 0 && (
                    <>
                      <Separator className="my-4 bg-white/20" />
                      <div className="flex justify-between text-lg font-bold">
                        <span>Общая стоимость:</span>
                        <span>{configTotal.toLocaleString('ru-RU')} ₽</span>
                      </div>
                      <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                        <Icon name="Calendar" size={16} className="mr-2" />
                        Записаться на {configTotal.toLocaleString('ru-RU')} ₽
                      </Button>
                    </>
                  )}

                  {selectedServices.length === 0 && (
                    <div className="text-center text-white/70 py-8">
                      Выберите услуги для расчета стоимости
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-secondary mb-6">О нашем центре</h2>
              <p className="text-lg text-gray-600 mb-6 font-open-sans">
                AutoPremium — это команда профессионалов с более чем 10-летним опытом в сфере автомобильного детейлинга. 
                Мы используем только сертифицированные материалы и современное оборудование.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-gray-600">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10</div>
                  <div className="text-gray-600">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-gray-600">Гарантия качества</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-gray-600">Поддержка</div>
                </div>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="quality">
                  <AccordionTrigger className="text-left">Почему мы гарантируем качество?</AccordionTrigger>
                  <AccordionContent className="text-gray-600 font-open-sans">
                    Используем только премиальные материалы от ведущих мировых производителей. 
                    Каждый мастер имеет международные сертификаты.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="materials">
                  <AccordionTrigger className="text-left">Какие материалы используем?</AccordionTrigger>
                  <AccordionContent className="text-gray-600 font-open-sans">
                    Работаем с брендами: Gtechniq, Ceramic Pro, XPEL, Koch Chemie, Meguiar's. 
                    Все материалы сертифицированы и имеют официальную гарантию.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="warranty">
                  <AccordionTrigger className="text-left">Какие гарантии предоставляем?</AccordionTrigger>
                  <AccordionContent className="text-gray-600 font-open-sans">
                    Гарантия на керамические покрытия до 5 лет, на полировку — 6 месяцев. 
                    При любых проблемах бесплатно устраняем недостатки.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="relative">
              <img 
                src="/img/4a48dec4-3426-456a-a2c1-3246056b5c48.jpg" 
                alt="Наша команда" 
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-gray-200 font-open-sans">Свяжитесь с нами удобным способом</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader className="text-center">
                <Icon name="MapPin" size={48} className="mx-auto mb-4 text-primary" />
                <CardTitle>Адрес</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="font-open-sans">г. Москва,<br />ул. Автомобильная, 25</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader className="text-center">
                <Icon name="Phone" size={48} className="mx-auto mb-4 text-primary" />
                <CardTitle>Телефон</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="font-open-sans">+7 (495) 123-45-67<br />+7 (909) 876-54-32</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader className="text-center">
                <Icon name="Clock" size={48} className="mx-auto mb-4 text-primary" />
                <CardTitle>Режим работы</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="font-open-sans">Пн-Вс: 08:00 - 22:00<br />Без выходных</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 mr-4">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить сейчас
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-secondary">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Car" size={24} className="text-primary" />
                <span className="text-xl font-bold text-white">AutoPremium</span>
              </div>
              <p className="text-sm font-open-sans">
                Премиальный детейлинг автомобилей с гарантией качества и индивидуальным подходом к каждому клиенту.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm font-open-sans">
                <li><a href="#" className="hover:text-primary transition-colors">Мойка Premium</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Полировка кузова</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Керамическое покрытие</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Химчистка салона</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Информация</h3>
              <ul className="space-y-2 text-sm font-open-sans">
                <li><a href="#" className="hover:text-primary transition-colors">О компании</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Наши работы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Отзывы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Социальные сети</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <Icon name="Instagram" size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <Icon name="Youtube" size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <Icon name="MessageCircle" size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-700" />
          
          <div className="text-center text-sm font-open-sans">
            <p>&copy; 2024 AutoPremium. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;