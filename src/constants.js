import React from "react";
import aboutSlider1440 from './images/about-slider.png';
import aboutSlider640 from './images/about-slider-640.png';
import aboutSlider320 from './images/about-slider-320.png';
import minimalism from './images/design/minimalism.png';
import panel from './images/design/panel.png';
import advantage1 from './images/advantages/active1.png';
import advantage2 from './images/advantages/active2.png';
import advantage3 from './images/advantages/active3.png';

import safety1 from './images/safety/active1.png';
import safety2 from './images/safety/active2.png';
import safety3 from './images/safety/active3.png';
import safety4 from './images/safety/active4.png';


export const QuestionsAnswersData = [
    {
        question: 'На него нужны права категории M?',
        answer: 'Продуманный угол рассеивания света позволяет сохранять хорошую видимость, не ослепляя других участников движения.',
    },
    {
        question: 'У меня вес 135 кг, выдержит ли этот самокат?',
        answer: 'Самокат определенно выдержит и будет ехать, но не с максимальной скоростью.',
    },
    {
        question: 'Есть ли влагозащита?',
        answer: 'Электросамокат имеет степень защиты IP54. Он защищен от попадания пыли и брызг, падающих в любом направлении. Погружение в воду может привести к поломке. ',
    },
    {
        question: 'Это версия для Китая или Европы?',
        answer: 'Это Европейская версия, со всеми обновлениями и евро-вилкой.',
    },
];

export const ReviewsData = [
    {
        name: 'Михаил Сафонов',
        text:
            <span>
                <p>
                   'Выбирал между двумя моделями: этим Mi Scooter Pro 2 и Ninebot Max 30P, в плюсах Макса -
                    десятидюймовая резина и дальность пробега на одном заряде, скорость зарядки. В плюсах Xiaomi -
                    Удобства переноски (вес аппарата, развесовка). '
                </p>
                <p>
                    В итоге купил Xiaomi и поставил 10 дюймовые шины - получил комфорт при небольшом весе самоката.
                </p>
            </span>
    },
    {
        name: '',
        text:
            <span>
                <p>
                    Владею также первой версией самоката (m365). В версии pro 2 исправлено множество недостатков m365:
                </p>
                <p>
                    - усилен узел складывания и язычок
                    <br/>
                    - батарея находится в отдельном жёстком алюминиевом корпусе, что исключает её поломку из-за тряски
                    <br/>
                    - установлена поддержка заднего крыла и защита провода заднего габарита.
                </p>
            </span>
    },
    {
        name: 'Алексей З.',
        text:
            <span>
                <p>
                   Мой вес 57кг, прошитый с максимальной 32км в час в режиме S по Москве у меня осилил - 25км и еще
                    оставалось 16% заряда.
                </p>
                <p>
                   ОБЯЗАТЕЛЬНО: следите за давлением в камерах. Прям очень советую купить электронный насос от Xiaomi,
                    и раз в неделю подкачивайте. С завода самокат приезжает с сильно недокачанными.
                </p>
            </span>
    },
];

export const ScooterSetData = [
    'Адаптер питания',
    'Шестигранный ключ',
    'Удлинитель для насоса',
    'Винты x 5 шт.',
    'Запасная шина',
    'Руководство пользователя',
    'Буклет с информацией',
];

export const ScooterAdvantagesData = [
    {
        title: 'Три режима скорости',
        text: 'Три режима езды позволяют почуствовать себя комфортно в любой ситуации. Режим «S» увеличитвает скорость, если опаздываете на работу. Во время прогулки по парку активируйте режим «D». Включите режим «Пешеход», когда двигаетесь по оживлённой улице.',
        image: advantage1
    },
    {
        title: 'Система восстановления энергии',
        text: 'Во время торможения и движения по инерции система преобразовывает кинетическую энергию в электрическую, позволяя увеличить общий запас хода самоката.',
        image: advantage2
    },
    {
        title: 'Мощная батарея',
        text: 'Самокат оснащен аккумулятором емкостью 12 800 мАч. Это позволяет преодолевать расстояния до 45 км без подзарядки.',
        image: advantage3
    }
];

export const ScooterDesignData = [
    {
        image: minimalism,
        title: 'Минималистичный дизайн',
        text: 'Рама, компоненты и аксессуары скутера выдержаны в едином стиле, где удобство пользователя выходит на первое место.  Одного прикосновения достаточно, чтобы запустить самокат.'
    },
    {
        image: panel,
        title: 'Удобная панель управления',
        text: 'Удобно расположенные элементы управления. Отображение 8 типов данных в реальном времени: скорость, режим, заряд аккумулятора, состояние блокировки и другая информация.'
    }
];

export const ScooterSafetyData = [
    {
        title: 'Яркие ходовые огни',
        text: 'Продуманный угол рассеивания света позволяет сохранять хорошую видимость, не ослепляя других участников движения.',
        image: safety1
    },
    {
        title: 'Двойная тормозная система',
        text: 'При нажатии наручку тормоза системы переднего и заднего колеса активируются последовательно, сокращая тормозной путь и обеспечивая безопасную и плавную остановку.',
        image: safety2
    },
    {
        title: 'Яркая задняя фара',
        text: 'При включении ходовых огней задняя фара включается автоматически. При нажатии на ручку тормоза она начинает мигать, предупреждая других участников движения.\n',
        image: safety3
    },
    {
        title: 'Отражатели спереди, сбоку и сзади',
        text: 'Улучшенные отражатели, размещенные с четырех сторон, делают вашу поездку в темное время суток безопаснее.',
        image: safety4
    },
];

export const ScooterAboutSliderData = [
    {
        image: [aboutSlider1440, aboutSlider640, aboutSlider320],
        title: 'О бренде Xiaomi',
        text:
            <span>
                <p>Компания Xiaomi была основана предпринимателем Лей Цзюнем в 2010 году под девизом - «Инновации для всех».</p>
                <p>Мы верим, что высококачественные продукты и передовые технологии должны быть доступны каждому.</p>
            </span>
    },
    {
        image: [aboutSlider1440, aboutSlider640,  aboutSlider320],
        title: 'О бренде Xiaomi',
        text:
            <span>
                <p>Компания Xiaomi была основана предпринимателем Лей Цзюнем в 2010 году под девизом - «Инновации для всех».</p>
                <p>Мы верим, что высококачественные продукты и передовые технологии должны быть доступны каждому.</p>
            </span>
    },
    {
        image: [aboutSlider1440, aboutSlider640, aboutSlider320],
        title: 'О бренде Xiaomi',
        text:
            <span>
                <p>Компания Xiaomi была основана предпринимателем Лей Цзюнем в 2010 году под девизом - «Инновации для всех».</p>
                <p>Мы верим, что высококачественные продукты и передовые технологии должны быть доступны каждому.</p>
            </span>
    },
];