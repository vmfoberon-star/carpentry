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
    diningTable: "שולחן אוכל מעץ אלון",
    diningTableDesc: "שולחן אוכל מסיבי מעץ אלון טבעי עם גימור שמן. גודל 2.5x1.2 מטר.",
    bookshelf: "ספרייה בהזמנה אישית",
    bookshelfDesc: "ספרייה גבוהה מעץ אגוז עם מדפים מתכווננים ומגירות.",
    kitchenSet: "סט מטבח",
    kitchenSetDesc: "סט מטבח שלם מעץ אפר עם משטחי עבודה מעץ מלא.",

    // Contact
    contactTitle: "צור קשר",
    contactSubtitle: "מוכנים להתחיל בפרויקט? צור איתנו קשר ונדון בהזמנה שלך.",
    name: "שם",
    email: "אימייל",
    phone: "טלפון",
    message: "הודעה",
    send: "שלח",
    sendWhatsApp: "שלח ב-WhatsApp",
    address: "כתובת",
    addressValue: "רחוב הנגרים 15, תל אביב",
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
    diningTable: "Oak Dining Table",
    diningTableDesc: "Massive dining table made of natural oak with oil finish. Size 2.5x1.2 meters.",
    bookshelf: "Custom Bookshelf",
    bookshelfDesc: "Tall walnut bookshelf with adjustable shelves and drawers.",
    kitchenSet: "Kitchen Set",
    kitchenSetDesc: "Complete kitchen set made of ash wood with solid wood countertops.",

    // Contact
    contactTitle: "Contact Us",
    contactSubtitle: "Ready to start your project? Get in touch and let's discuss your order.",
    name: "Name",
    email: "Email",
    phone: "Phone",
    message: "Message",
    send: "Send",
    sendWhatsApp: "Send via WhatsApp",
    address: "Address",
    addressValue: "15 Carpentry Street, Tel Aviv",
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
    diningTable: "Обеденный стол из дуба",
    diningTableDesc: "Массивный обеденный стол из натурального дуба с масляной отделкой. Размер 2.5x1.2 метра.",
    bookshelf: "Книжный шкаф на заказ",
    bookshelfDesc: "Высокий книжный шкаф из ореха с регулируемыми полками и ящиками.",
    kitchenSet: "Кухонный гарнитур",
    kitchenSetDesc: "Полный кухонный гарнитур из ясеня со столешницами из массива дерева.",

    // Contact
    contactTitle: "Свяжитесь с нами",
    contactSubtitle: "Готовы начать проект? Свяжитесь с нами, и мы обсудим ваш заказ.",
    name: "Имя",
    email: "Email",
    phone: "Телефон",
    message: "Сообщение",
    send: "Отправить",
    sendWhatsApp: "Отправить через WhatsApp",
    address: "Адрес",
    addressValue: "ул. Столярная 15, Тель-Авив",
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
