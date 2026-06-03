import type { Lang } from "./config";

/* ---------- Shape (every locale must match this) ---------- */
export interface Feature {
  title: string;
  desc: string;
}
export interface SampleCourse {
  id: string;
  title: string;
  desc: string;
  category: string;
  level: "beginner" | "intermediate" | "advanced";
  durationWeeks: number;
  priceUzs: number;
}
export interface Plan {
  id: string;
  name: string;
  price: string;
  features: string[];
  button: string;
  highlight: boolean;
}

export interface Dictionary {
  nav: {
    home: string;
    courses: string;
    pricing: string;
    signIn: string;
    signUp: string;
    openMenu: string;
    closeMenu: string;
    language: string;
  };
  home: {
    badge: string;
    heroTop: string;
    heroAccent: string;
    heroSubtitle: string;
    ctaStart: string;
    ctaCourses: string;
    statStudents: string;
    statCourses: string;
    statRating: string;
    featuresEyebrow: string;
    featuresTitle: string;
    features: Feature[];
    benefitsEyebrow: string;
    benefitsTitle: string;
    benefits: string[];
    benefitsCta: string;
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
  };
  courses: {
    eyebrow: string;
    title: string;
    subtitle: string;
    search: string;
    levelAll: string;
    levelBeginner: string;
    levelIntermediate: string;
    levelAdvanced: string;
    categoryAll: string;
    found: string;
    sort: string;
    weeks: string;
    details: string;
    priceOr: string;
    emptyTitle: string;
    emptyText: string;
    reset: string;
    samples: SampleCourse[];
  };
  pricing: {
    eyebrow: string;
    title: string;
    subtitle: string;
    period: string;
    popular: string;
    plans: Plan[];
  };
  payment: {
    title: string;
    subtitle: string;
    methodCard: string;
    methodUzcard: string;
    methodPayme: string;
    cardNumber: string;
    cardHolder: string;
    expiry: string;
    cvc: string;
    pay: string;
    redirectUzcard: string;
    redirectPayme: string;
    goToPayment: string;
    payViaPayme: string;
    secure: string;
    plan: string;
  };
  footer: {
    tagline: string;
    location: string;
    colCourses: string;
    colCompany: string;
    colSupport: string;
    courses: string[];
    company: string[];
    support: string[];
    rights: string;
  };
  login: {
    title: string;
    subtitle: string;
    email: string;
    emailPlaceholder: string;
    password: string;
    passwordPlaceholder: string;
    submit: string;
    back: string;
    noAccount: string;
    signUpLink: string;
  };
  register: {
    title: string;
    subtitle: string;
    fullName: string;
    fullNamePlaceholder: string;
    email: string;
    password: string;
    passwordPlaceholder: string;
    submit: string;
    back: string;
    haveAccount: string;
    signInLink: string;
    successTitle: string;
    successText: string;
  };
  dashboard: {
    eyebrow: string;
    title: string;
    subtitle: string;
    statCourses: string;
    statHours: string;
    statCerts: string;
    statStreak: string;
    streakUnit: string;
    continueTitle: string;
    progress: string;
    resume: string;
    browseTitle: string;
    browseText: string;
    browseCta: string;
    items: { title: string; progress: number }[];
  };
  courseDetail: {
    back: string;
    level: string;
    duration: string;
    weeks: string;
    enroll: string;
    overview: string;
    overviewText: string;
    learnTitle: string;
    learn: string[];
  };
}

/* ============================ RUSSIAN ============================ */
const ru: Dictionary = {
  nav: {
    home: "Главная",
    courses: "Курсы",
    pricing: "Цены",
    signIn: "Войти",
    signUp: "Регистрация",
    openMenu: "Открыть меню",
    closeMenu: "Закрыть меню",
    language: "Язык",
  },
  home: {
    badge: "NeuroSchool — нейронаука для жизни",
    heroTop: "Раскройте потенциал",
    heroAccent: "вашего мозга",
    heroSubtitle:
      "Научно обоснованные курсы по памяти, вниманию и когнитивному развитию для студентов Узбекистана.",
    ctaStart: "Начать обучение",
    ctaCourses: "Посмотреть курсы",
    statStudents: "Студентов",
    statCourses: "Курсов",
    statRating: "Рейтинг",
    featuresEyebrow: "Почему мы",
    featuresTitle: "Почему выбирают NeuroSchool",
    features: [
      {
        title: "Научный подход",
        desc: "Курсы основаны на последних исследованиях нейронауки и когнитивной психологии.",
      },
      {
        title: "Опытные преподаватели",
        desc: "Эксперты с практическим опытом обучения и исследований мозга.",
      },
      {
        title: "Сертификаты",
        desc: "Официальные сертификаты после успешного завершения обучения.",
      },
      {
        title: "Прогресс 24/7",
        desc: "Отслеживайте рост навыков в реальном времени на личной панели.",
      },
    ],
    benefitsEyebrow: "Что внутри",
    benefitsTitle: "Что вы получите",
    benefits: [
      "Доступ 24/7",
      "Интерактивные задания",
      "Поддержка кураторов",
      "Сообщество студентов",
      "Практические упражнения",
      "Дополнительные материалы",
    ],
    benefitsCta: "Присоединиться сейчас",
    ctaTitle: "Готовы начать?",
    ctaText: "Начните обучение сегодня и прокачайте свой мозг.",
    ctaButton: "Зарегистрироваться бесплатно",
  },
  courses: {
    eyebrow: "Каталог",
    title: "Каталог курсов",
    subtitle:
      "Выберите курс, который поможет развить когнитивные способности и достичь новых высот.",
    search: "Поиск курсов…",
    levelAll: "Все уровни",
    levelBeginner: "Начальный",
    levelIntermediate: "Средний",
    levelAdvanced: "Продвинутый",
    categoryAll: "Все категории",
    found: "Найдено: {{count}}",
    sort: "По дате",
    weeks: "{{count}} недель",
    details: "Подробнее",
    priceOr: "или",
    emptyTitle: "Ничего не найдено",
    emptyText: "Попробуйте изменить поиск или сбросить фильтры.",
    reset: "Сбросить фильтры",
    samples: [
      {
        id: "1",
        title: "Нейропластичность мозга",
        desc: "Как мозг меняется и как использовать это для обучения.",
        category: "Нейронаука",
        level: "beginner",
        durationWeeks: 6,
        priceUzs: 1200000,
      },
      {
        id: "2",
        title: "Память и внимание",
        desc: "Техники запоминания и управления концентрацией.",
        category: "Когнитивистика",
        level: "intermediate",
        durationWeeks: 8,
        priceUzs: 1500000,
      },
      {
        id: "3",
        title: "Когнитивная психология",
        desc: "Как мы думаем, принимаем решения и учимся.",
        category: "Психология",
        level: "advanced",
        durationWeeks: 10,
        priceUzs: 1800000,
      },
      {
        id: "4",
        title: "Скорочтение",
        desc: "Читайте быстрее, понимая и запоминая больше.",
        category: "Навыки",
        level: "beginner",
        durationWeeks: 4,
        priceUzs: 900000,
      },
    ],
  },
  pricing: {
    eyebrow: "Тарифы",
    title: "Тарифные планы",
    subtitle: "Выберите подходящий тариф и начните развиваться уже сегодня.",
    period: "мес",
    popular: "Популярный",
    plans: [
      {
        id: "free",
        name: "Бесплатный",
        price: "0 сум",
        features: [
          "Доступ к бесплатным курсам",
          "Базовая панель студента",
          "Поддержка сообщества",
        ],
        button: "Начать бесплатно",
        highlight: false,
      },
      {
        id: "basic",
        name: "Базовый",
        price: "99 000 сум",
        features: [
          "Все возможности бесплатного плана",
          "Доступ к премиум-курсам",
          "Отслеживание прогресса",
        ],
        button: "Выбрать",
        highlight: false,
      },
      {
        id: "pro",
        name: "Профессиональный",
        price: "249 000 сум",
        features: [
          "Все функции базового плана",
          "Сертификаты",
          "Персональный наставник",
          "Приоритетная поддержка",
        ],
        button: "Стать PRO",
        highlight: true,
      },
      {
        id: "team",
        name: "Корпоративный",
        price: "899 000 сум",
        features: [
          "Неограниченный доступ",
          "Командные аккаунты",
          "Админ-панель",
          "Персональный менеджер",
        ],
        button: "Связаться с нами",
        highlight: false,
      },
    ],
  },
  payment: {
    title: "Оплата подписки",
    subtitle: "Выберите удобный способ оплаты.",
    methodCard: "Банковская карта",
    methodUzcard: "Uzcard",
    methodPayme: "Payme",
    cardNumber: "Номер карты",
    cardHolder: "Имя владельца",
    expiry: "ММ/ГГ",
    cvc: "CVC",
    pay: "Оплатить",
    redirectUzcard: "Вы будете перенаправлены на Uzcard для завершения оплаты.",
    redirectPayme: "Оплатите быстро и безопасно через Payme.",
    goToPayment: "Перейти к оплате",
    payViaPayme: "Оплатить через Payme",
    secure: "Платёж защищён сквозным шифрованием.",
    plan: "Тариф",
  },
  footer: {
    tagline:
      "Образовательная платформа для развития когнитивных способностей.",
    location: "г. Ташкент, Узбекистан",
    colCourses: "Курсы",
    colCompany: "Компания",
    colSupport: "Поддержка",
    courses: [
      "Нейропластичность",
      "Когнитивная психология",
      "Память и внимание",
      "Все курсы",
    ],
    company: ["О нас", "Преподаватели", "Контакты", "Блог"],
    support: ["Помощь", "Оплата", "Конфиденциальность", "Условия"],
    rights: "© {{year}} NeuroSchool. Все права защищены.",
  },
  login: {
    title: "С возвращением",
    subtitle: "Войдите в свою учётную запись NeuroSchool.",
    email: "Email",
    emailPlaceholder: "email@neuroschool.uz",
    password: "Пароль",
    passwordPlaceholder: "Ваш пароль",
    submit: "Войти",
    back: "Назад",
    noAccount: "Нет аккаунта?",
    signUpLink: "Зарегистрироваться",
  },
  register: {
    title: "Создать аккаунт",
    subtitle: "Зарегистрируйтесь в NeuroSchool за минуту.",
    fullName: "Полное имя",
    fullNamePlaceholder: "Иван Иванов",
    email: "Email",
    password: "Пароль",
    passwordPlaceholder: "Минимум 6 символов",
    submit: "Зарегистрироваться",
    back: "Назад",
    haveAccount: "Уже есть аккаунт?",
    signInLink: "Войти",
    successTitle: "Регистрация успешна",
    successText: "Аккаунт создан. Перенаправляем вас на страницу входа…",
  },
  dashboard: {
    eyebrow: "Личный кабинет",
    title: "С возвращением 👋",
    subtitle: "Вот ваш прогресс за эту неделю.",
    statCourses: "Активных курсов",
    statHours: "Часов обучения",
    statCerts: "Сертификатов",
    statStreak: "Серия дней",
    streakUnit: "дней",
    continueTitle: "Продолжить обучение",
    progress: "Прогресс",
    resume: "Продолжить",
    browseTitle: "Хотите большего?",
    browseText: "Откройте новые курсы и расширьте свои навыки.",
    browseCta: "Смотреть курсы",
    items: [
      { title: "Нейропластичность мозга", progress: 72 },
      { title: "Память и внимание", progress: 40 },
      { title: "Скорочтение", progress: 15 },
    ],
  },
  courseDetail: {
    back: "К каталогу",
    level: "Уровень",
    duration: "Длительность",
    weeks: "{{count}} недель",
    enroll: "Записаться на курс",
    overview: "О курсе",
    overviewText:
      "Глубокое погружение в тему с практикой, обратной связью и поддержкой куратора на каждом шаге.",
    learnTitle: "Чему вы научитесь",
    learn: [
      "Понимать ключевые принципы темы",
      "Применять знания на практике",
      "Решать реальные задачи",
      "Закрепить навык упражнениями",
    ],
  },
};

/* ============================ UZBEK ============================ */
const uz: Dictionary = {
  nav: {
    home: "Bosh sahifa",
    courses: "Kurslar",
    pricing: "Narxlar",
    signIn: "Kirish",
    signUp: "Roʻyxatdan oʻtish",
    openMenu: "Menyuni ochish",
    closeMenu: "Menyuni yopish",
    language: "Til",
  },
  home: {
    badge: "NeuroSchool — hayot uchun neyrofan",
    heroTop: "Miyangiz salohiyatini",
    heroAccent: "ochib bering",
    heroSubtitle:
      "Oʻzbekiston talabalari uchun xotira, diqqat va kognitiv rivojlanish boʻyicha ilmiy asoslangan kurslar.",
    ctaStart: "Oʻqishni boshlash",
    ctaCourses: "Kurslarni koʻrish",
    statStudents: "Talaba",
    statCourses: "Kurs",
    statRating: "Reyting",
    featuresEyebrow: "Nega biz",
    featuresTitle: "Nega aynan NeuroSchool",
    features: [
      {
        title: "Ilmiy yondashuv",
        desc: "Kurslar neyrofan va kognitiv psixologiyaning soʻnggi tadqiqotlariga asoslangan.",
      },
      {
        title: "Tajribali oʻqituvchilar",
        desc: "Amaliy tajribaga ega va miya tadqiqotlari boʻyicha mutaxassislar.",
      },
      {
        title: "Sertifikatlar",
        desc: "Kursni muvaffaqiyatli tugatgach rasmiy sertifikat olasiz.",
      },
      {
        title: "24/7 monitoring",
        desc: "Shaxsiy panelda koʻnikmalaringiz oʻsishini real vaqtda kuzating.",
      },
    ],
    benefitsEyebrow: "Ichida nima bor",
    benefitsTitle: "Siz nimaga ega boʻlasiz",
    benefits: [
      "24/7 kirish",
      "Interaktiv topshiriqlar",
      "Kurator yordami",
      "Talabalar hamjamiyati",
      "Amaliy mashqlar",
      "Qoʻshimcha materiallar",
    ],
    benefitsCta: "Hoziroq qoʻshilish",
    ctaTitle: "Boshlashga tayyormisiz?",
    ctaText: "Bugun oʻqishni boshlang va miyangizni rivojlantiring.",
    ctaButton: "Bepul roʻyxatdan oʻtish",
  },
  courses: {
    eyebrow: "Katalog",
    title: "Kurslar katalogi",
    subtitle:
      "Kognitiv qobiliyatlaringizni rivojlantirib, yangi choʻqqilarga eltadigan kursni tanlang.",
    search: "Kurslarni qidirish…",
    levelAll: "Barcha darajalar",
    levelBeginner: "Boshlangʻich",
    levelIntermediate: "Oʻrta",
    levelAdvanced: "Yuqori",
    categoryAll: "Barcha turkumlar",
    found: "Topildi: {{count}}",
    sort: "Sana boʻyicha",
    weeks: "{{count}} hafta",
    details: "Batafsil",
    priceOr: "yoki",
    emptyTitle: "Hech narsa topilmadi",
    emptyText: "Qidiruvni oʻzgartiring yoki filtrlarni tozalang.",
    reset: "Filtrlarni tozalash",
    samples: [
      {
        id: "1",
        title: "Miya neyroplastikligi",
        desc: "Miya qanday oʻzgaradi va buni oʻqishda qanday ishlatish mumkin.",
        category: "Neyrofan",
        level: "beginner",
        durationWeeks: 6,
        priceUzs: 1200000,
      },
      {
        id: "2",
        title: "Xotira va diqqat",
        desc: "Yodlash texnikalari va diqqatni boshqarish.",
        category: "Kognitivistika",
        level: "intermediate",
        durationWeeks: 8,
        priceUzs: 1500000,
      },
      {
        id: "3",
        title: "Kognitiv psixologiya",
        desc: "Biz qanday fikrlaymiz, qaror qabul qilamiz va oʻrganamiz.",
        category: "Psixologiya",
        level: "advanced",
        durationWeeks: 10,
        priceUzs: 1800000,
      },
      {
        id: "4",
        title: "Tez oʻqish",
        desc: "Koʻproq tushunib va yodlab, tezroq oʻqing.",
        category: "Koʻnikmalar",
        level: "beginner",
        durationWeeks: 4,
        priceUzs: 900000,
      },
    ],
  },
  pricing: {
    eyebrow: "Tariflar",
    title: "Tarif rejalari",
    subtitle: "Mos tarifni tanlang va bugundan rivojlanishni boshlang.",
    period: "oy",
    popular: "Ommabop",
    plans: [
      {
        id: "free",
        name: "Bepul",
        price: "0 soʻm",
        features: [
          "Bepul kurslarga kirish",
          "Asosiy talaba paneli",
          "Hamjamiyat yordami",
        ],
        button: "Bepul boshlash",
        highlight: false,
      },
      {
        id: "basic",
        name: "Asosiy",
        price: "99 000 soʻm",
        features: [
          "Bepul rejaning barcha imkoniyatlari",
          "Premium kurslarga kirish",
          "Progressni kuzatish",
        ],
        button: "Tanlash",
        highlight: false,
      },
      {
        id: "pro",
        name: "Professional",
        price: "249 000 soʻm",
        features: [
          "Asosiy rejaning barcha funksiyalari",
          "Sertifikatlar",
          "Shaxsiy murabbiy",
          "Ustuvor qoʻllab-quvvatlash",
        ],
        button: "PRO boʻlish",
        highlight: true,
      },
      {
        id: "team",
        name: "Korporativ",
        price: "899 000 soʻm",
        features: [
          "Cheksiz kirish",
          "Jamoaviy hisoblar",
          "Admin panel",
          "Shaxsiy menejer",
        ],
        button: "Biz bilan bogʻlaning",
        highlight: false,
      },
    ],
  },
  payment: {
    title: "Obunani toʻlash",
    subtitle: "Qulay toʻlov usulini tanlang.",
    methodCard: "Bank kartasi",
    methodUzcard: "Uzcard",
    methodPayme: "Payme",
    cardNumber: "Karta raqami",
    cardHolder: "Karta egasi",
    expiry: "OO/YY",
    cvc: "CVC",
    pay: "Toʻlash",
    redirectUzcard: "Toʻlovni yakunlash uchun Uzcard sahifasiga yoʻnaltirilasiz.",
    redirectPayme: "Payme orqali tez va xavfsiz toʻlang.",
    goToPayment: "Toʻlovga oʻtish",
    payViaPayme: "Payme orqali toʻlash",
    secure: "Toʻlov uchdan-uchgacha shifrlash bilan himoyalangan.",
    plan: "Tarif",
  },
  footer: {
    tagline: "Kognitiv qobiliyatlarni rivojlantirish uchun taʼlim platformasi.",
    location: "Toshkent shahri, Oʻzbekiston",
    colCourses: "Kurslar",
    colCompany: "Kompaniya",
    colSupport: "Yordam",
    courses: [
      "Neyroplastiklik",
      "Kognitiv psixologiya",
      "Xotira va diqqat",
      "Barcha kurslar",
    ],
    company: ["Biz haqimizda", "Oʻqituvchilar", "Aloqa", "Blog"],
    support: ["Yordam", "Toʻlov", "Maxfiylik", "Shartlar"],
    rights: "© {{year}} NeuroSchool. Barcha huquqlar himoyalangan.",
  },
  login: {
    title: "Xush kelibsiz",
    subtitle: "NeuroSchool hisobingizga kiring.",
    email: "Email",
    emailPlaceholder: "email@neuroschool.uz",
    password: "Parol",
    passwordPlaceholder: "Parolingiz",
    submit: "Kirish",
    back: "Orqaga",
    noAccount: "Hisobingiz yoʻqmi?",
    signUpLink: "Roʻyxatdan oʻtish",
  },
  register: {
    title: "Hisob yaratish",
    subtitle: "NeuroSchoolda bir daqiqada roʻyxatdan oʻting.",
    fullName: "Toʻliq ism",
    fullNamePlaceholder: "Ali Valiyev",
    email: "Email",
    password: "Parol",
    passwordPlaceholder: "Kamida 6 ta belgi",
    submit: "Roʻyxatdan oʻtish",
    back: "Orqaga",
    haveAccount: "Hisobingiz bormi?",
    signInLink: "Kirish",
    successTitle: "Roʻyxatdan oʻtish muvaffaqiyatli",
    successText: "Hisob yaratildi. Kirish sahifasiga yoʻnaltiryapmiz…",
  },
  dashboard: {
    eyebrow: "Shaxsiy kabinet",
    title: "Xush kelibsiz 👋",
    subtitle: "Mana shu haftadagi progressingiz.",
    statCourses: "Faol kurslar",
    statHours: "Oʻqish soatlari",
    statCerts: "Sertifikatlar",
    statStreak: "Kunlar seriyasi",
    streakUnit: "kun",
    continueTitle: "Oʻqishni davom ettirish",
    progress: "Progress",
    resume: "Davom etish",
    browseTitle: "Koʻproq xohlaysizmi?",
    browseText: "Yangi kurslarni oching va koʻnikmalaringizni kengaytiring.",
    browseCta: "Kurslarni koʻrish",
    items: [
      { title: "Miya neyroplastikligi", progress: 72 },
      { title: "Xotira va diqqat", progress: 40 },
      { title: "Tez oʻqish", progress: 15 },
    ],
  },
  courseDetail: {
    back: "Katalogga",
    level: "Daraja",
    duration: "Davomiyligi",
    weeks: "{{count}} hafta",
    enroll: "Kursga yozilish",
    overview: "Kurs haqida",
    overviewText:
      "Har bir bosqichda amaliyot, fikr-mulohaza va kurator yordami bilan mavzuga chuqur kirib borish.",
    learnTitle: "Nimani oʻrganasiz",
    learn: [
      "Mavzuning asosiy tamoyillarini tushunish",
      "Bilimni amaliyotda qoʻllash",
      "Real masalalarni yechish",
      "Koʻnikmani mashqlar bilan mustahkamlash",
    ],
  },
};

/* ============================ ENGLISH ============================ */
const en: Dictionary = {
  nav: {
    home: "Home",
    courses: "Courses",
    pricing: "Pricing",
    signIn: "Sign in",
    signUp: "Sign up",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
  },
  home: {
    badge: "NeuroSchool — neuroscience for life",
    heroTop: "Unlock the potential",
    heroAccent: "of your brain",
    heroSubtitle:
      "Science-based courses on memory, attention and cognitive development for students in Uzbekistan.",
    ctaStart: "Start learning",
    ctaCourses: "Browse courses",
    statStudents: "Students",
    statCourses: "Courses",
    statRating: "Rating",
    featuresEyebrow: "Why us",
    featuresTitle: "Why choose NeuroSchool",
    features: [
      {
        title: "Science-backed",
        desc: "Courses grounded in the latest neuroscience and cognitive psychology research.",
      },
      {
        title: "Expert instructors",
        desc: "Experts with hands-on teaching experience and brain research.",
      },
      {
        title: "Certificates",
        desc: "Official certificates after you successfully complete a course.",
      },
      {
        title: "Progress 24/7",
        desc: "Track your skill growth in real time from a personal dashboard.",
      },
    ],
    benefitsEyebrow: "What's inside",
    benefitsTitle: "What you get",
    benefits: [
      "24/7 access",
      "Interactive assignments",
      "Mentor support",
      "Student community",
      "Practical exercises",
      "Extra materials",
    ],
    benefitsCta: "Join now",
    ctaTitle: "Ready to begin?",
    ctaText: "Start learning today and level up your brain.",
    ctaButton: "Sign up for free",
  },
  courses: {
    eyebrow: "Catalog",
    title: "Course catalog",
    subtitle:
      "Pick a course that helps you grow your cognitive abilities and reach new heights.",
    search: "Search courses…",
    levelAll: "All levels",
    levelBeginner: "Beginner",
    levelIntermediate: "Intermediate",
    levelAdvanced: "Advanced",
    categoryAll: "All categories",
    found: "Found: {{count}}",
    sort: "By date",
    weeks: "{{count}} weeks",
    details: "View details",
    priceOr: "or",
    emptyTitle: "Nothing found",
    emptyText: "Try a different search or reset the filters.",
    reset: "Reset filters",
    samples: [
      {
        id: "1",
        title: "Brain Neuroplasticity",
        desc: "How the brain changes and how to use it for learning.",
        category: "Neuroscience",
        level: "beginner",
        durationWeeks: 6,
        priceUzs: 1200000,
      },
      {
        id: "2",
        title: "Memory & Attention",
        desc: "Memorization techniques and managing your focus.",
        category: "Cognition",
        level: "intermediate",
        durationWeeks: 8,
        priceUzs: 1500000,
      },
      {
        id: "3",
        title: "Cognitive Psychology",
        desc: "How we think, decide and learn.",
        category: "Psychology",
        level: "advanced",
        durationWeeks: 10,
        priceUzs: 1800000,
      },
      {
        id: "4",
        title: "Speed Reading",
        desc: "Read faster while understanding and remembering more.",
        category: "Skills",
        level: "beginner",
        durationWeeks: 4,
        priceUzs: 900000,
      },
    ],
  },
  pricing: {
    eyebrow: "Plans",
    title: "Pricing plans",
    subtitle: "Choose the plan that fits and start growing today.",
    period: "mo",
    popular: "Popular",
    plans: [
      {
        id: "free",
        name: "Free",
        price: "0 UZS",
        features: [
          "Access to free courses",
          "Basic student dashboard",
          "Community support",
        ],
        button: "Start free",
        highlight: false,
      },
      {
        id: "basic",
        name: "Basic",
        price: "99,000 UZS",
        features: [
          "Everything in Free",
          "Access to premium courses",
          "Progress tracking",
        ],
        button: "Choose",
        highlight: false,
      },
      {
        id: "pro",
        name: "Professional",
        price: "249,000 UZS",
        features: [
          "Everything in Basic",
          "Certificates",
          "Personal mentor",
          "Priority support",
        ],
        button: "Go PRO",
        highlight: true,
      },
      {
        id: "team",
        name: "Enterprise",
        price: "899,000 UZS",
        features: [
          "Unlimited access",
          "Team accounts",
          "Admin panel",
          "Dedicated manager",
        ],
        button: "Contact us",
        highlight: false,
      },
    ],
  },
  payment: {
    title: "Pay your subscription",
    subtitle: "Choose a convenient payment method.",
    methodCard: "Bank card",
    methodUzcard: "Uzcard",
    methodPayme: "Payme",
    cardNumber: "Card number",
    cardHolder: "Cardholder name",
    expiry: "MM/YY",
    cvc: "CVC",
    pay: "Pay",
    redirectUzcard: "You will be redirected to Uzcard to complete the payment.",
    redirectPayme: "Pay quickly and securely via Payme.",
    goToPayment: "Go to payment",
    payViaPayme: "Pay with Payme",
    secure: "Your payment is protected with end-to-end encryption.",
    plan: "Plan",
  },
  footer: {
    tagline: "An education platform for developing cognitive abilities.",
    location: "Tashkent, Uzbekistan",
    colCourses: "Courses",
    colCompany: "Company",
    colSupport: "Support",
    courses: [
      "Neuroplasticity",
      "Cognitive psychology",
      "Memory & attention",
      "All courses",
    ],
    company: ["About", "Instructors", "Contact", "Blog"],
    support: ["Help", "Payment", "Privacy", "Terms"],
    rights: "© {{year}} NeuroSchool. All rights reserved.",
  },
  login: {
    title: "Welcome back",
    subtitle: "Sign in to your NeuroSchool account.",
    email: "Email",
    emailPlaceholder: "email@neuroschool.uz",
    password: "Password",
    passwordPlaceholder: "Your password",
    submit: "Sign in",
    back: "Back",
    noAccount: "No account?",
    signUpLink: "Sign up",
  },
  register: {
    title: "Create account",
    subtitle: "Sign up for NeuroSchool in a minute.",
    fullName: "Full name",
    fullNamePlaceholder: "John Doe",
    email: "Email",
    password: "Password",
    passwordPlaceholder: "At least 6 characters",
    submit: "Sign up",
    back: "Back",
    haveAccount: "Already have an account?",
    signInLink: "Sign in",
    successTitle: "Registration successful",
    successText: "Your account is created. Redirecting you to sign in…",
  },
  dashboard: {
    eyebrow: "Dashboard",
    title: "Welcome back 👋",
    subtitle: "Here's your progress for this week.",
    statCourses: "Active courses",
    statHours: "Hours learned",
    statCerts: "Certificates",
    statStreak: "Day streak",
    streakUnit: "days",
    continueTitle: "Continue learning",
    progress: "Progress",
    resume: "Resume",
    browseTitle: "Want more?",
    browseText: "Discover new courses and expand your skills.",
    browseCta: "Browse courses",
    items: [
      { title: "Brain Neuroplasticity", progress: 72 },
      { title: "Memory & Attention", progress: 40 },
      { title: "Speed Reading", progress: 15 },
    ],
  },
  courseDetail: {
    back: "Back to catalog",
    level: "Level",
    duration: "Duration",
    weeks: "{{count}} weeks",
    enroll: "Enroll in course",
    overview: "Overview",
    overviewText:
      "A deep dive into the topic with practice, feedback and mentor support at every step.",
    learnTitle: "What you'll learn",
    learn: [
      "Understand the core principles of the topic",
      "Apply knowledge in practice",
      "Solve real-world problems",
      "Reinforce the skill with exercises",
    ],
  },
};

export const dictionaries: Record<Lang, Dictionary> = { ru, uz, en };
