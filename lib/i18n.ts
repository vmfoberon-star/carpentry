export type Locale = "he" | "en" | "ru" // Updated phone number to 054-5758003

export const locales: Locale[] = ["he", "en", "ru"]

export const defaultLocale: Locale = "he"

export const localeNames: Record<Locale, string> = {
  he: "עברית",
  en: "English",
  ru: "Русский",
}

export const isRTL = (locale: Locale) => locale === "he"

export const translations = {
  he: {
    // Header
    workshop: "ברנע",
    about: "אודות",
    services: "שירותים",
    portfolio: "תיק עבודות",
    contact: "צור קשר",
    consultation: "הזמן ייעוץ",

    // Hero
    heroTitle: "החיים הם אמנות. אנחנו יוצרים אותה",
    heroSubtitle: "סדנת נגרות משפחתית המתמחה ביצירת רהיטים ייחודיים ומוצרי עץ בעבודת יד. כל פרויקט הוא יצירת אמנות.",
    viewWork: "צפה בעבודות",

    // About
    aboutTitle: "אודות הסדנה",
    aboutText1:
      "אנו סדנת נגרות משפחתית עם מסורת של למעלה מ-20 שנה. התמחותנו היא יצירת רהיטים ייחודיים ומוצרי עץ בהתאמה אישית.",
    aboutText2:
      "אנו עובדים רק עם עץ טבעי איכותי, תוך שימוש בטכניקות מסורתיות ומודרניות. כל פרויקט הוא ייחודי ונוצר בקפידה רבה לפרטים.",
    experience: "שנות ניסיון",
    projects: "פרויקטים שהושלמו",
    clients: "לקוחות מרוצים",

    // Testimonials
    testimonialsTitle: "מה הלקוחות שלנו אומרים",
    testimonial1Name: "שרה כהן",
    testimonial1Role: "לקוחה פרטית",
    testimonial1Text: "הזמנתי ארונית מהסדנה והיא יצאה מדהימה! איכות גבוהה, תשומת לב לפרטים, ומקצועיות בכל שלב. ממליצה בחום!",
    testimonial2Name: "דוד לוי",
    testimonial2Role: "בעל בית",
    testimonial2Text: "הם שיקמו לי שולחן ישן של סבתא. עכשיו הוא נראה כמו חדש אבל עם כל הקסם של הישן. פשוט מושלם!",
    testimonial3Name: "מיכל אברהם",
    testimonial3Role: "לקוחה מרוצה",
    testimonial3Text: "סט מטבח מותאם אישית - חלום שהתגשם! המקצועיות, הזמינות, והתוצאה הסופית עולים על כל הציפיות.",
    viewAllReviews: "צפה בכל הביקורות",

    // Services
    servicesTitle: "השירותים שלנו",
    customFurniture: "רהיטים בהזמנה אישית",
    customFurnitureDesc: "אנו יוצרים רהיטים ייחודיים לפי הדרישות והטעם שלך: שולחנות, כיסאות, ארונות, מדפים ועוד.",
    restoration: "שיקום רהיטים",
    restorationDesc: "שיקום מקצועי של רהיטי עץ עתיקים ומודרניים. אנו מחזירים לחיים את הרהיטים האהובים עליך.",
    interiorItems: "פריטי פנים",
    interiorItemsDesc: "יצירת פריטי עץ דקורטיביים: מסגרות, קופסאות, אביזרים ופריטים ייחודיים אחרים.",
    electricalWork: "עבודות חשמל",
    electricalWorkDesc: "התקנת תאורה, נקודות חשמל, תיקוני חשמל ועבודות חשמל נלוות לרהיטים ופרויקטים.",

    // Portfolio
    portfolioTitle: "העבודות שלנו",
    filterAll: "הכל",
    filterKitchen: "מטבח",
    filterBedroom: "שינה",
    filterBathroom: "אמבטיה",
    filterStorage: "אחסון",
    filterAccessories: "אביזרים",
    walkInCloset: "חדר הלבשה",
    walkInClosetDesc: "חדר הלבשה מרווח עם דלפק מגולף מעץ אלון.",
    kidsBunkBed: "מיטה דו-קומתית",
    kidsBunkBedDesc: "מיטה דו-קומתית בטוחה לילדים מעץ מלא.",
    kitchenCabinets: "ארונות מטבח",
    kitchenCabinetsDesc: "ארונות מטבח בעיצוב מינימלי בעץ.",
    bathroomVanity: "כיור אמבטיה",
    bathroomVanityDesc: "כיור אמבטיה מותאם אישית עם ארונות סטנדרטיים.",
    bedStorage: "מיטה עם אחסון",
    bedStorageDesc: "מיטה עם מגירות אחסון מוסתרות.",
    tallWardrobe: "ארון גבוה",
    tallWardrobeDesc: "ארון גבוה עם מדפים ומגירות.",
    cuttingBoards: "קרשי חיתוך",
    cuttingBoardsDesc: "קרשי חיתוך מעץ טבעי בעבודת יד.",
    kitchenDrawers: "מגירות מטבח",
    kitchenDrawersDesc: "מגירות מטבח חלקות ונוחות.",
    bunkBedWhite: "מיטה דו-קומתית לבנה",
    bunkBedWhiteDesc: "מיטה דו-קומתית לבנה מעוצבת לילדים.",

    // Contact
    contactTitle: "צור קשר",
    contactSubtitle: "מוכנים להתחיל בפרויקט? צור איתנו קשר ונדון בהזמנה שלך.",
    name: "שם",
    email: "אימייל",
    phone: "טלפון",
    message: "הודעה",
    projectType: "סוג פרויקט",
    projectTypePlaceholder: "בחרו סוג פרויקט",
    projectTypeCustom: "רהיטים בהזמנה אישית",
    projectTypeRestoration: "שיקום רהיטים",
    projectTypeElectrical: "עבודות חשמל",
    projectTypeAccessories: "אביזרים",
    budgetRange: "טווח תקציב משוער",
    budgetRangePlaceholder: "בחרו טווח תקציב",
    budgetRangeUnder: "עד 5,000 ₪",
    budgetRange5_10: "5,000-10,000 ₪",
    budgetRange10_20: "10,000-20,000 ₪",
    budgetRange20_50: "20,000-50,000 ₪",
    budgetRangeOver: "מעל 50,000 ₪",
    send: "שלח",
    sendWhatsApp: "שלח ב-WhatsApp",
    address: "כתובת",
    addressValue: "א.ת סלעית",
    phoneValue: "050-6905039 — דניאל סרביאנסקי\n054-5758003 — אייל ונטורה",
    emailValue: "barneawoodworking@gmail.com",
    hours: "שעות פעילות",
    hoursValue: "א׳-ה׳: 9:00-18:00, ו׳: 9:00-14:00",
    mapTitle: "איך להגיע",
    getDirections: "נווט",

    // Booking
    bookingTitle: "הזמינו ייעוץ",
    bookingSubtitle: "בחרו תאריך ושעה מתאימים לכם, ונתאם פגישה",
    selectDate: "בחרו תאריך",
    selectTime: "בחרו שעה",
    pickDate: "לחצו לבחירת תאריך",
    confirmBooking: "אישור הזמנה",
    bookingNote: "אחרי האישור תועברו ל-WhatsApp לפרטים נוספים",

    // Process Timeline
    processTitle: "איך אנחנו עובדים",
    processSubtitle: "מפגישה ראשונה עד מוצר סופי מושלם",
    step1Title: "ייעוץ",
    step1Desc: "פגישה וירטואלית או פנים אל פנים, הבנת הצרכים וההעדפות שלך",
    step2Title: "עיצוב והצעת מחיר",
    step2Desc: "עיצוב מותאם אישית, חומרים וצבעים - הכל לפי הטעם שלך",
    step3Title: "אישור",
    step3Desc: "סקירה ואישור הסופי של העיצוב והמחיר",
    step4Title: "ייצור",
    step4Desc: "תקופת בנייה עם עדכונים שוטפים על התקדמות הפרויקט",
    step5Title: "משלוח",
    step5Desc: "התקנה והסברים על תחזוקה וטיפול",

    // Trust Badges
    badgeYearsBusiness: "20+ שנים",
    badgeExperienced: "ניסיון",
    badgeQuality: "100% איכות",
    badgeGuaranteed: "מאומת",
    badgeSatisfaction: "300+ לקוחות",
    badgeHappyClients: "מרוצים",
    badgeProfessionalism: "100% מקצועי",
    badgeCertified: "מוסמך",

    // Pricing Calculator
    calculatorTitle: "הערכת מחיר מהירה",
    calculatorSubtitle: "קבלו הערכה ראשונית עבור הפרויקט שלכם",
    selectFurnitureType: "סוג רהיט",
    selectMaterial: "סוג עץ",
    enterDimensions: "מידות (ס\"מ)",
    length: "אורך",
    width: "רוחב",
    height: "גובה",
    estimatedPrice: "הערכת מחיר משוערת",
    disclaimer: "המחיר הינו הערכה ראשונית בלבד. לקבלת הצעת מחיר מדויקת, צרו קשר לקביעת פגישת ייעוץ.",
    calculate: "חשב מחיר",

    // Footer
    footerText: "ברנע - סדנת נגרות משפחתית. החיים הם אמנות, אנחנו יוצרים אותה.",
    quickLinks: "קישורים מהירים",
    followUs: "עקוב אחרינו",
    rights: "כל הזכויות שמורות",
  },
  en: {
    // Header
    workshop: "Barnea",
    about: "About",
    services: "Services",
    portfolio: "Portfolio",
    contact: "Contact",
    consultation: "Book Consultation",

    // Hero
    heroTitle: "Life is art. We make it",
    heroSubtitle:
      "Family carpentry workshop specializing in creating unique handcrafted furniture and wooden products. Every project is a work of art.",
    viewWork: "View Our Work",

    // About
    aboutTitle: "About Our Workshop",
    aboutText1:
      "We are a family carpentry workshop with a tradition of over 20 years. We specialize in creating unique custom furniture and wooden products.",
    aboutText2:
      "We work only with quality natural wood, using traditional and modern techniques. Each project is unique and crafted with great attention to detail.",
    experience: "Years of Experience",
    projects: "Completed Projects",
    clients: "Satisfied Clients",

    // Testimonials
    testimonialsTitle: "What Our Customers Say",
    testimonial1Name: "Sarah Cohen",
    testimonial1Role: "Private Client",
    testimonial1Text: "I ordered a wardrobe from the workshop and it came out amazing! High quality, attention to detail, and professionalism at every step. Highly recommend!",
    testimonial2Name: "David Levi",
    testimonial2Role: "Homeowner",
    testimonial2Text: "They restored my grandmother's old table. Now it looks like new but with all the charm of the old one. Simply perfect!",
    testimonial3Name: "Michal Avraham",
    testimonial3Role: "Happy Customer",
    testimonial3Text: "Custom kitchen set - a dream come true! The professionalism, availability, and final result exceed all expectations.",
    viewAllReviews: "View All Reviews",

    // Services
    servicesTitle: "Our Services",
    customFurniture: "Custom Furniture",
    customFurnitureDesc:
      "We create unique furniture according to your requirements and taste: tables, chairs, cabinets, shelves, and more.",
    restoration: "Furniture Restoration",
    restorationDesc:
      "Professional restoration of antique and modern wooden furniture. We bring your beloved furniture back to life.",
    interiorItems: "Interior Items",
    interiorItemsDesc: "Creation of decorative wooden items: frames, boxes, accessories, and other unique pieces.",
    electricalWork: "Electrical Work",
    electricalWorkDesc:
      "Lighting installation, electrical outlets, electrical repairs, and electrical work related to furniture and projects.",

    // Portfolio
    portfolioTitle: "Our Work",
    filterAll: "All",
    filterKitchen: "Kitchen",
    filterBedroom: "Bedroom",
    filterBathroom: "Bathroom",
    filterStorage: "Storage",
    filterAccessories: "Accessories",
    walkInCloset: "Walk-In Closet",
    walkInClosetDesc: "Spacious walk-in closet with carved oak vanity.",
    kidsBunkBed: "Kids Bunk Bed",
    kidsBunkBedDesc: "Safe bunk bed for children made of solid wood.",
    kitchenCabinets: "Kitchen Cabinets",
    kitchenCabinetsDesc: "Minimalist kitchen cabinets in wood.",
    bathroomVanity: "Bathroom Vanity",
    bathroomVanityDesc: "Custom bathroom vanity with standard cabinets.",
    bedStorage: "Bed with Storage",
    bedStorageDesc: "Bed with hidden storage drawers.",
    tallWardrobe: "Tall Wardrobe",
    tallWardrobeDesc: "Tall wardrobe with shelves and drawers.",
    cuttingBoards: "Cutting Boards",
    cuttingBoardsDesc: "Handcrafted cutting boards from natural wood.",
    kitchenDrawers: "Kitchen Drawers",
    kitchenDrawersDesc: "Smooth and comfortable kitchen drawers.",
    bunkBedWhite: "White Bunk Bed",
    bunkBedWhiteDesc: "White bunk bed designed for children.",

    // Contact
    contactTitle: "Contact Us",
    contactSubtitle: "Ready to start your project? Get in touch and let's discuss your order.",
    name: "Name",
    email: "Email",
    phone: "Phone",
    message: "Message",
    projectType: "Project Type",
    projectTypePlaceholder: "Select project type",
    projectTypeCustom: "Custom Furniture",
    projectTypeRestoration: "Furniture Restoration",
    projectTypeElectrical: "Electrical Work",
    projectTypeAccessories: "Accessories",
    budgetRange: "Estimated Budget Range",
    budgetRangePlaceholder: "Select budget range",
    budgetRangeUnder: "Up to 5,000 ₪",
    budgetRange5_10: "5,000-10,000 ₪",
    budgetRange10_20: "10,000-20,000 ₪",
    budgetRange20_50: "20,000-50,000 ₪",
    budgetRangeOver: "Over 50,000 ₪",
    send: "Send",
    sendWhatsApp: "Send via WhatsApp",
    address: "Address",
    addressValue: "Sla'it Industrial Zone",
    phoneValue: "050-6905039 — Daniel Srebiansky\n054-5758003 — Eyal Ventura",
    emailValue: "barneawoodworking@gmail.com",
    hours: "Working Hours",
    hoursValue: "Mon-Thu: 9:00-18:00, Fri: 9:00-14:00",
    mapTitle: "Find Us",
    getDirections: "Get Directions",

    // Booking
    bookingTitle: "Book a Consultation",
    bookingSubtitle: "Select a convenient date and time for your appointment",
    selectDate: "Select Date",
    selectTime: "Select Time",
    pickDate: "Click to pick a date",
    confirmBooking: "Confirm Booking",
    bookingNote: "After confirmation, you'll be redirected to WhatsApp for details",

    // Process Timeline
    processTitle: "How We Work",
    processSubtitle: "From first meeting to perfect final product",
    step1Title: "Consultation",
    step1Desc: "Virtual or in-person meeting, understanding your needs and preferences",
    step2Title: "Design & Quote",
    step2Desc: "Custom design, materials, and colors - everything to your taste",
    step3Title: "Approval",
    step3Desc: "Review and final approval of design and pricing",
    step4Title: "Crafting",
    step4Desc: "Build period with regular updates on project progress",
    step5Title: "Delivery",
    step5Desc: "Installation and care instructions",

    // Trust Badges
    badgeYearsBusiness: "20+ Years",
    badgeExperienced: "Experience",
    badgeQuality: "100% Quality",
    badgeGuaranteed: "Guaranteed",
    badgeSatisfaction: "300+ Clients",
    badgeHappyClients: "Satisfied",
    badgeProfessionalism: "100% Professional",
    badgeCertified: "Certified",

    // Pricing Calculator
    calculatorTitle: "Quick Price Estimate",
    calculatorSubtitle: "Get an initial estimate for your project",
    selectFurnitureType: "Furniture Type",
    selectMaterial: "Wood Type",
    enterDimensions: "Dimensions (cm)",
    length: "Length",
    width: "Width",
    height: "Height",
    estimatedPrice: "Estimated Price",
    disclaimer: "This is a preliminary estimate only. Contact us for a detailed quote and consultation.",
    calculate: "Calculate Price",

    // Footer
    footerText: "Barnea - Family carpentry workshop. Life is art, we make it.",
    quickLinks: "Quick Links",
    followUs: "Follow Us",
    rights: "All rights reserved",
  },
  ru: {
    // Header
    workshop: "Барнеа",
    about: "О нас",
    services: "Услуги",
    portfolio: "Портфолио",
    contact: "Контакты",
    consultation: "Заказать консультацию",

    // Hero
    heroTitle: "Жизнь — это искусство. Мы его создаём",
    heroSubtitle:
      "Семейная столярная мастерская, специализирующаяся на создании уникальной мебели и изделий из дерева ручной работы. Каждый проект — произведение искусства.",
    viewWork: "Наши работы",

    // About
    aboutTitle: "О нашей мастерской",
    aboutText1:
      "Мы — семейная столярная мастерская с традициями более 20 лет. Специализируемся на создании уникальной мебели и изделий из дерева на заказ.",
    aboutText2:
      "Работаем только с качественным натуральным деревом, используя традиционные и современные техники. Каждый проект уникален и выполнен с большим вниманием к деталям.",
    experience: "Лет опыта",
    projects: "Завершённых проектов",
    clients: "Довольных клиентов",

    // Testimonials
    testimonialsTitle: "Что говорят наши клиенты",
    testimonial1Name: "Сара Коэн",
    testimonial1Role: "Частный клиент",
    testimonial1Text: "Заказала шкаф в мастерской — получилось потрясающе! Высокое качество, внимание к деталям и профессионализм на каждом этапе. Очень рекомендую!",
    testimonial2Name: "Давид Леви",
    testimonial2Role: "Владелец дома",
    testimonial2Text: "Они восстановили старый стол моей бабушки. Теперь он выглядит как новый, но со всем очарованием старого. Просто идеально!",
    testimonial3Name: "Михаэль Авраам",
    testimonial3Role: "Довольный клиент",
    testimonial3Text: "Кухонный гарнитур по индивидуальному заказу — мечта сбылась! Профессионализм, доступность и конечный результат превзошли все ожидания.",
    viewAllReviews: "Все отзывы",

    // Services
    servicesTitle: "Наши услуги",
    customFurniture: "Мебель на заказ",
    customFurnitureDesc:
      "Создаём уникальную мебель по вашим требованиям и вкусу: столы, стулья, шкафы, полки и многое другое.",
    restoration: "Реставрация мебели",
    restorationDesc:
      "Профессиональная реставрация антикварной и современной деревянной мебели. Возвращаем к жизни вашу любимую мебель.",
    interiorItems: "Предметы интерьера",
    interiorItemsDesc:
      "Создание декоративных деревянных изделий: рамки, шкатулки, аксессуары и другие уникальные предметы.",
    electricalWork: "Электромонтажные работы",
    electricalWorkDesc:
      "Установка освещения, электрических розеток, ремонт электрики и электромонтажные работы для мебели и проектов.",

    // Portfolio
    portfolioTitle: "Наши работы",
    filterAll: "Все",
    filterKitchen: "Кухня",
    filterBedroom: "Спальня",
    filterBathroom: "Ванная",
    filterStorage: "Хранение",
    filterAccessories: "Аксессуары",
    walkInCloset: "Гардеробная комната",
    walkInClosetDesc: "Просторная гардеробная с резной дубовой тумбой.",
    kidsBunkBed: "Двухъярусная кровать",
    kidsBunkBedDesc: "Безопасная двухъярусная кровать для детей из массива дерева.",
    kitchenCabinets: "Кухонные шкафы",
    kitchenCabinetsDesc: "Минималистичные кухонные шкафы из дерева.",
    bathroomVanity: "Тумба для ванной",
    bathroomVanityDesc: "Индивидуальная тумба для ванной со стандартными шкафами.",
    bedStorage: "Кровать с хранением",
    bedStorageDesc: "Кровать со скрытыми ящиками для хранения.",
    tallWardrobe: "Высокий шкаф",
    tallWardrobeDesc: "Высокий шкаф с полками и ящиками.",
    cuttingBoards: "Разделочные доски",
    cuttingBoardsDesc: "Ручной работы разделочные доски из натурального дерева.",
    kitchenDrawers: "Кухонные ящики",
    kitchenDrawersDesc: "Гладкие и удобные кухонные ящики.",
    bunkBedWhite: "Белая двухъярусная кровать",
    bunkBedWhiteDesc: "Белая двухъярусная кровать для детей.",

    // Contact
    contactTitle: "Свяжитесь с нами",
    contactSubtitle: "Готовы начать проект? Свяжитесь с нами, и мы обсудим ваш заказ.",
    name: "Имя",
    email: "Email",
    phone: "Телефон",
    message: "Сообщение",
    projectType: "Тип проекта",
    projectTypePlaceholder: "Выберите тип проекта",
    projectTypeCustom: "Мебель на заказ",
    projectTypeRestoration: "Реставрация мебели",
    projectTypeElectrical: "Электромонтажные работы",
    projectTypeAccessories: "Аксессуары",
    budgetRange: "Предполагаемый бюджет",
    budgetRangePlaceholder: "Выберите диапазон бюджета",
    budgetRangeUnder: "До 5,000 ₪",
    budgetRange5_10: "5,000-10,000 ₪",
    budgetRange10_20: "10,000-20,000 ₪",
    budgetRange20_50: "20,000-50,000 ₪",
    budgetRangeOver: "Свыше 50,000 ₪",
    send: "Отправить",
    sendWhatsApp: "Отправить через WhatsApp",
    address: "Адрес",
    addressValue: "Промышленная зона Слаит",
    phoneValue: "050-6905039 — Даниэль Сребянски\n054-5758003 — Эяль Вентура",
    emailValue: "barneawoodworking@gmail.com",
    hours: "Часы работы",
    hoursValue: "Пн-Чт: 9:00-18:00, Пт: 9:00-14:00",
    mapTitle: "Как нас найти",
    getDirections: "Проложить маршрут",

    // Booking
    bookingTitle: "Записаться на консультацию",
    bookingSubtitle: "Выберите удобные дату и время для встречи",
    selectDate: "Выберите дату",
    selectTime: "Выберите время",
    pickDate: "Нажмите для выбора даты",
    confirmBooking: "Подтвердить запись",
    bookingNote: "После подтверждения вы будете перенаправлены в WhatsApp для уточнения деталей",

    // Process Timeline
    processTitle: "Как мы работаем",
    processSubtitle: "От первой встречи до идеального результата",
    step1Title: "Консультация",
    step1Desc: "Виртуальная или личная встреча, понимание ваших потребностей",
    step2Title: "Дизайн и смета",
    step2Desc: "Индивидуальный дизайн, материалы и цвета - всё по вашему вкусу",
    step3Title: "Утверждение",
    step3Desc: "Просмотр и окончательное утверждение дизайна и стоимости",
    step4Title: "Изготовление",
    step4Desc: "Период создания с регулярными обновлениями о прогрессе",
    step5Title: "Доставка",
    step5Desc: "Установка и инструкции по уходу",

    // Trust Badges
    badgeYearsBusiness: "20+ лет",
    badgeExperienced: "Опыта",
    badgeQuality: "100% Качество",
    badgeGuaranteed: "Гарантировано",
    badgeSatisfaction: "300+ Клиентов",
    badgeHappyClients: "Довольных",
    badgeProfessionalism: "100% Профессионализм",
    badgeCertified: "Сертифицировано",

    // Pricing Calculator
    calculatorTitle: "Быстрая оценка стоимости",
    calculatorSubtitle: "Получите предварительную оценку для вашего проекта",
    selectFurnitureType: "Тип мебели",
    selectMaterial: "Вид дерева",
    enterDimensions: "Размеры (см)",
    length: "Длина",
    width: "Ширина",
    height: "Высота",
    estimatedPrice: "Предварительная стоимость",
    disclaimer: "Это только предварительная оценка. Свяжитесь с нами для получения детального коммерческого предложения и консультации.",
    calculate: "Рассчитать стоимость",

    // Footer
    footerText: "Барнеа - Семейная столярная мастерская. Жизнь — это искусство, мы его создаём.",
    quickLinks: "Быстрые ссылки",
    followUs: "Следите за нами",
    rights: "Все права защищены",
  },
}

export function getTranslation(locale: Locale) {
  return translations[locale] || translations[defaultLocale]
}
