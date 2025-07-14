import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Icon name="Droplets" className="text-blue-600" size={32} />
            <h1 className="text-2xl font-bold text-gray-900">Ваш-источник</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Услуги</a>
            <a href="#process" className="text-gray-600 hover:text-blue-600 transition-colors">Этапы работ</a>
            <a href="#portfolio" className="text-gray-600 hover:text-blue-600 transition-colors">Примеры работ</a>
            <a href="#reviews" className="text-gray-600 hover:text-blue-600 transition-colors">Отзывы</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Контакты</a>
          </nav>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Icon name="Phone" size={16} className="mr-2" />
            Заказать звонок
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  <Icon name="Award" size={14} className="mr-1" />
                  Более 10 лет опыта
                </Badge>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  <Icon name="CheckCircle" size={14} className="mr-1" />
                  1000+ скважин
                </Badge>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Бурение скважин 
                <span className="text-blue-600">под ключ</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Качественное бурение артезианских скважин и скважин на песок с гарантией 2 года. 
                Собственная техника, работа по ГОСТ и СНиП.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
                <Button variant="outline" size="lg">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Бесплатный выезд
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/5ab667a2-bb1d-4db9-ab76-0c38b752b121.jpg" 
                alt="Бурение скважин"
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <Icon name="Shield" className="text-green-600" size={24} />
                  <div>
                    <p className="font-semibold text-gray-900">Гарантия 2 года</p>
                    <p className="text-sm text-gray-600">Паспорт скважины</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Наши услуги</h3>
            <p className="text-lg text-gray-600">Полный спектр услуг по бурению и обустройству скважин</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Icon name="Droplets" className="text-blue-600" size={32} />
                  <div>
                    <CardTitle>Скважины на песок</CardTitle>
                    <CardDescription>Быстрое бурение за 1-2 дня</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <Icon name="Check" className="text-green-600 mr-2" size={16} />
                    Глубина до 30 метров
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-green-600 mr-2" size={16} />
                    Срок выполнения 1-2 дня
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-green-600 mr-2" size={16} />
                    Обсадные трубы ПВХ СЕМКОР
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-green-600 mr-2" size={16} />
                    Дебет до 1 м³/час
                  </li>
                </ul>
                <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                  Заказать бурение
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Icon name="Zap" className="text-blue-600" size={32} />
                  <div>
                    <CardTitle>Артезианские скважины</CardTitle>
                    <CardDescription>Надежный источник воды на 50+ лет</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <Icon name="Check" className="text-green-600 mr-2" size={16} />
                    Глубина до 150 метров
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-green-600 mr-2" size={16} />
                    Срок выполнения 3-4 дня
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-green-600 mr-2" size={16} />
                    Качественная питьевая вода
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-green-600 mr-2" size={16} />
                    Дебет до 5 м³/час
                  </li>
                </ul>
                <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                  Заказать бурение
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Наши преимущества</h3>
            <p className="text-lg text-gray-600">Почему выбирают нас</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" className="text-blue-600" size={32} />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Быстрый выезд</h4>
              <p className="text-gray-600">Выезд инженера день в день для оценки работ. Бесплатная консультация.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" className="text-green-600" size={32} />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Гарантия качества</h4>
              <p className="text-gray-600">2 года гарантии на все работы. Паспорт скважины и договор.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" className="text-purple-600" size={32} />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Опытная команда</h4>
              <p className="text-gray-600">Более 10 лет опыта, 1000+ пробуренных скважин. Собственная техника.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Часто задаваемые вопросы</h3>
            <p className="text-lg text-gray-600">Ответы на самые популярные вопросы</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left">
                  Сколько времени занимает бурение скважины?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Скважины на песок бурятся за 1-2 дня, артезианские скважины - за 3-4 дня. 
                  Точные сроки зависят от глубины и геологических условий участка.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left">
                  Какая гарантия на скважину?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Мы даем гарантию 2 года на все работы по бурению и обустройству скважины. 
                  Каждая скважина комплектуется паспортом и договором.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left">
                  Есть ли у вас собственная техника?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Да, у нас есть собственная буровая техника и все необходимое оборудование. 
                  Работаем только качественными обсадными трубами ПВХ СЕМКОР.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left">
                  Сколько лет прослужит скважина?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  При правильном обустройстве и обслуживании скважина прослужит от 50 лет. 
                  Мы также предоставляем услуги по обслуживанию и ремонту скважин.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section id="process" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Этапы работ</h3>
            <p className="text-lg text-gray-600">Как мы работаем от заявки до готовой скважины</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                <Icon name="Phone" className="text-blue-600" size={24} />
                <div className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Заявка</h4>
              <p className="text-gray-600 text-sm">Вы оставляете заявку на сайте или звоните нам</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                <Icon name="MapPin" className="text-green-600" size={24} />
                <div className="absolute -top-2 -right-2 bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Выезд инженера</h4>
              <p className="text-gray-600 text-sm">Бесплатный выезд инженера для оценки участка</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                <Icon name="Hammer" className="text-purple-600" size={24} />
                <div className="absolute -top-2 -right-2 bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Бурение</h4>
              <p className="text-gray-600 text-sm">Работы по бурению скважины согласно ГОСТ</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                <Icon name="CheckCircle" className="text-orange-600" size={24} />
                <div className="absolute -top-2 -right-2 bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</div>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Сдача объекта</h4>
              <p className="text-gray-600 text-sm">Обустройство, паспорт скважины, гарантия</p>
            </div>
          </div>
          <div className="mt-12 bg-gray-50 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Наш процесс работы</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <Icon name="CheckCircle" className="text-green-600 mr-3 mt-0.5" size={16} />
                    <span>Предварительная оценка участка и геологические изыскания</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircle" className="text-green-600 mr-3 mt-0.5" size={16} />
                    <span>Бурение с использованием качественных обсадных труб ПВХ СЕМКОР</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircle" className="text-green-600 mr-3 mt-0.5" size={16} />
                    <span>Анализ воды и установка фильтрационного оборудования</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircle" className="text-green-600 mr-3 mt-0.5" size={16} />
                    <span>Обустройство скважины и подключение к системе водоснабжения</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircle" className="text-green-600 mr-3 mt-0.5" size={16} />
                    <span>Выдача паспорта скважины и оформление гарантии</span>
                  </li>
                </ul>
              </div>
              <div>
                <img 
                  src="/img/8a90d3e5-50a9-4d59-b262-99975a8a4ad7.jpg" 
                  alt="Процесс бурения скважины"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Примеры наших работ</h3>
            <p className="text-lg text-gray-600">Более 1000 успешно выполненных проектов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src="/img/5e41e81c-1797-41fe-a1d0-7c898f14a125.jpg" 
                  alt="Артезианская скважина"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Badge className="absolute top-2 left-2 bg-blue-600">Артезианская</Badge>
              </div>
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-2">Скважина в Подмосковье</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="flex items-center">
                    <Icon name="Ruler" className="mr-2" size={14} />
                    Глубина: 85 метров
                  </p>
                  <p className="flex items-center">
                    <Icon name="Droplets" className="mr-2" size={14} />
                    Дебет: 3.5 м³/час
                  </p>
                  <p className="flex items-center">
                    <Icon name="Calendar" className="mr-2" size={14} />
                    Срок: 3 дня
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src="/img/c41e2a32-3deb-4b21-9da5-5bda5fa4f185.jpg" 
                  alt="Скважина на песок"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Badge className="absolute top-2 left-2 bg-green-600">На песок</Badge>
              </div>
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-2">Скважина в Тульской области</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="flex items-center">
                    <Icon name="Ruler" className="mr-2" size={14} />
                    Глубина: 25 метров
                  </p>
                  <p className="flex items-center">
                    <Icon name="Droplets" className="mr-2" size={14} />
                    Дебет: 1.2 м³/час
                  </p>
                  <p className="flex items-center">
                    <Icon name="Calendar" className="mr-2" size={14} />
                    Срок: 1 день
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src="/img/445d7cff-7308-4746-b8ca-2958e05e03b0.jpg" 
                  alt="Обустройство скважины"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Badge className="absolute top-2 left-2 bg-purple-600">Обустройство</Badge>
              </div>
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-2">Полное обустройство скважины</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="flex items-center">
                    <Icon name="Ruler" className="mr-2" size={14} />
                    Глубина: 120 метров
                  </p>
                  <p className="flex items-center">
                    <Icon name="Droplets" className="mr-2" size={14} />
                    Дебет: 4.8 м³/час
                  </p>
                  <p className="flex items-center">
                    <Icon name="Calendar" className="mr-2" size={14} />
                    Срок: 4 дня
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              <Icon name="Image" size={20} className="mr-2" />
              Смотреть все проекты
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Отзывы наших клиентов</h3>
            <p className="text-lg text-gray-600">Что говорят о нас наши клиенты</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Icon name="User" className="text-blue-600" size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Александр Петров</h4>
                  <p className="text-sm text-gray-600">Домовладелец</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>
              <p className="text-gray-700">
                "Отличная работа! Пробурили артезианскую скважину за 3 дня. Качество воды превосходное, 
                дебет как и обещали. Все работы выполнены аккуратно, получили паспорт скважины."
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Icon name="User" className="text-green-600" size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Мария Сидорова</h4>
                  <p className="text-sm text-gray-600">Дачница</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>
              <p className="text-gray-700">
                "Нужна была скважина на песок для дачи. Ребята приехали день в день, 
                работали быстро и чисто. Цены адекватные, гарантию дали. Рекомендую!"
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Icon name="User" className="text-purple-600" size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Игорь Волков</h4>
                  <p className="text-sm text-gray-600">Строитель</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>
              <p className="text-gray-700">
                "Сотрудничаем уже 2 года. Заказывали бурение для нескольких объектов. 
                Всегда качественно, в срок, с гарантией. Профессиональная команда!"
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Icon name="User" className="text-orange-600" size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Елена Козлова</h4>
                  <p className="text-sm text-gray-600">Домовладелец</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>
              <p className="text-gray-700">
                "Очень довольна работой! Инженер бесплатно приехал, всё объяснил, 
                дал рекомендации. Скважина работает отлично уже год. Спасибо за качество!"
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Icon name="User" className="text-red-600" size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Сергей Михайлов</h4>
                  <p className="text-sm text-gray-600">Фермер</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>
              <p className="text-gray-700">
                "Заказывал скважину для полива. Нужен был большой дебет. Команда справилась на отлично - 
                пробурили глубоко, вода идёт хорошо. Все документы в порядке."
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Icon name="User" className="text-indigo-600" size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Анна Крылова</h4>
                  <p className="text-sm text-gray-600">Дизайнер</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>
              <p className="text-gray-700">
                "Искала надёжную компанию для бурения скважины. Выбрала по отзывам. 
                Не пожалела - работают профессионально, качественно, с гарантией. Рекомендую!"
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Связаться с нами</h3>
            <p className="text-lg text-gray-600">Получите бесплатную консультацию и расчет стоимости</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Заказать звонок</CardTitle>
                <CardDescription>Оставьте заявку и мы перезвоним в течение 15 минут</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Имя
                    </label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Телефон
                    </label>
                    <Input placeholder="+7 (999) 123-45-67" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Адрес участка
                    </label>
                    <Input placeholder="Город, район, населенный пункт" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Дополнительная информация
                    </label>
                    <Textarea placeholder="Расскажите о ваших потребностях..." />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Droplets" className="text-blue-400" size={32} />
                <h4 className="text-xl font-bold">Ваш-источник</h4>
              </div>
              <p className="text-gray-400 mb-4">
                Бурение скважин под ключ с гарантией качества и многолетним опытом работы.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Услуги</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Бурение артезианских скважин</li>
                <li>Скважины на песок</li>
                <li>Обустройство скважин</li>
                <li>Ремонт и обслуживание</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (999) 123-45-67
                </p>
                <p className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@vash-istochnik.ru
                </p>
                <p className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  Московская область
                </p>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Работаем</h5>
              <div className="space-y-2 text-gray-400">
                <p>Понедельник - Пятница: 8:00 - 20:00</p>
                <p>Суббота - Воскресенье: 9:00 - 18:00</p>
                <p className="text-green-400 font-medium">Аварийная служба: 24/7</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Ваш-источник. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;