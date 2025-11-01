# 🪑 אתר סדנת הנגרות ברנע

אתר מודרני רב-לשוני לסדנת נגרות משפחתית, נבנה עם Next.js 16, React 19 ו-Tailwind CSS 4.

## ✨ תכונות האתר

### 🌐 תמיכה רב-לשונית
- **עברית** - שפת המקור
- **English** - עבור לקוחות דוברי אנגלית
- **Русский** - עבור לקוחות דוברי רוסית
- מעבר בין שפות בלחיצה אחת

### 📱 תכונות עיקריות

#### 1. עמוד הבית (Hero)
- עיצוב אלגנטי עם תמונה ברקע של הסדנה
- כפתור הזמנת ייעוץ → WhatsApp
- כפתור צפייה בתיק העבודות

#### 2. אודות (About)
- היסטוריית הסדנה (מעל 20 שנות ניסיון)
- סטטיסטיקות אנימציה:
  - **20+ שנים** ניסיון
  - **500+ פרויקטים** הושלמו
  - **300+ לקוחות** מרוצים

#### 3. מה אומרים הלקוחות (Testimonials)
- קרוסלת עדויות של לקוחות אמיתיים
- דירוג כוכבים
- תמונות לקוחות
- אנימציית גלילה

#### 4. השירותים שלנו (Services)
- רהיטים בהזמנה אישית
- שיקום רהיטים
- פריטי פנים
- עבודות חשמל

#### 5. איך אנחנו עובדים (Process Timeline)
- **5 שלבים** מייעוץ ועד משלוח:
  1. ייעוץ
  2. עיצוב והצעת מחיר
  3. אישור
  4. ייצור
  5. משלוח
- הצגה חזותית עם אייקונים

#### 6. תיק העבודות (Portfolio)
- **גלריית Lightbox**:
  - צפייה במסך מלא
  - ניווט בין תמונות
  - מעברים יפים
- דוגמאות עבודות:
  - שולחן אוכל מעץ אלון
  - ספרייה בהזמנה אישית
  - סט מטבח

#### 7. צור קשר (Contact)
- **טופס יצירת קשר**:
  - שליחה באימייל (פותח תיבת דואר)
  - שליחה דרך WhatsApp
- **פרטי התקשרות**:
  - דניאל סרביאנסקי: 050-6905039
  - אייל ונטורה: 054-5758003
  - אימייל: barneawoodworking@gmail.com
- **שעות פעילות**:
  - א'-ה': 9:00-18:00
  - ו': 9:00-14:00
- **כתובת**: רחוב הנגרים 15, תל אביב
- **Google Maps** עם ניווט

#### 8. תחתית (Footer)
- קישורים מהירים לכל הסעיפים
- קישור לאינסטגרם
- פרטי התקשרות

#### 9. אייקון צ'אט WhatsApp צף
- כפתור ירוק בפינה הימנית התחתונה
- גלוי תמיד בגלילה
- גישה מהירה לצ'אט

## 🛠 סטק טכני

### Frontend
- **Framework**: Next.js 16.0.0
- **React**: 19.2.0
- **עיצוב**: Tailwind CSS 4
- **רכיבי UI**: Radix UI + shadcn/ui
- **גופנים**: Cormorant Garamond, Inter
- **אייקונים**: Lucide React
- **קרוסלה**: Embla Carousel

### Backend/DevOps
- **פרסום**: Vercel
- **אנליטיקה**: Vercel Analytics
- **Google Analytics**: מוכן לחיבור
- **אחסון**: Vercel CDN

## 🚀 התחלה מהירה

### דרישות מקדימות

- **Node.js**: 18 ומעלה
- **npm/yarn/pnpm**: מנהל חבילות

### התקנה

1. **שכפול המאגר**:
```bash
git clone https://github.com/vmfoberon-star/carpentry.git
cd carpentry-workshop/carpentry-workshop (2)
```

2. **התקנת תלויות**:
```bash
npm install
# או
yarn install
# או
pnpm install
```

3. **הפעלת שרת מקומי**:
```bash
npm run dev
# או
yarn dev
# או
pnpm dev
```

4. **פתיחה בדפדפן**: http://localhost:3000

### בנייה לפרודקשן

```bash
npm run build
npm start
```

## 📦 מבנה הפרויקט

```
carpentry-workshop (2)/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Layout שורש
│   ├── page.tsx             # עמוד הבית
│   └── globals.css          # סגנונות גלובליים
├── components/              # רכיבי React
│   ├── header.tsx           # כותרת האתר
│   ├── hero.tsx             # סעיף הבית
│   ├── about.tsx            # אודות
│   ├── testimonials.tsx     # עדויות
│   ├── services.tsx         # שירותים
│   ├── process.tsx          # תהליך עבודה
│   ├── portfolio.tsx        # תיק עבודות
│   ├── contact.tsx          # צור קשר
│   ├── footer.tsx           # תחתית
│   ├── whatsapp-float.tsx   # ווידג'ט WhatsApp
│   ├── google-analytics.tsx # Google Analytics
│   └── ui/                  # רכיבי UI
├── lib/                     # ספריות וכלי עזר
│   ├── i18n.ts             # תרגומים (3 שפות)
│   ├── locale-context.tsx  # הקשר שפה
│   └── utils.ts            # כלי עזר
├── SECURITY.md              # מידע אבטחה
├── DEPLOYMENT_INFO.md       # מידע פרסום
├── WHATSAPP_GUIDE.md        # מדריך WhatsApp
├── EMAIL_NOTIFICATIONS.md   # התראות דוא"ל
├── GOOGLE_ANALYTICS_SETUP.md # הגדרת אנליטיקה
├── VIDEO_INTEGRATION.md     # שילוב וידאו
└── README.md                # README ראשי
```

## 🎯 תכונות עיקריות

### רב-לשוניות
- כל הטקסטים מתורגמים ל-3 שפות
- זיהוי אוטומטי של RTL עבור עברית
- מעבר בין שפות בכותרת
- שמירת השפה הנבחרת

### עיצוב רספונסיבי
- **Mobile-first** גישה
- תמיכה בכל גדלי מסכים:
  - ניידים (320px+)
  - טאבלטים (768px+)
  - מחשבים (1024px+)
  - מסכים גדולים (1280px+)

### ביצועים
- **Server-side rendering** (SSR)
- **Static generation** היכן שאפשר
- תמונות מותאמות
- קוד ממוזער
- טעינה מהירה (< 2 שנ')

### אופטימיזציה SEO
- HTML סמנטי
- תגי מטא לכל השפות
- Open Graph לרשתות חברתיות
- נתונים מובנים
- רינדור מהיר

### אבטחה
- HTTP Security Headers
- HSTS
- XSS Protection
- CSRF Protection
- Secure Cookies
- הגנת קישורים חיצוניים

## 📧 תקשורת

### WhatsApp
- **תכונות**:
  - כפתור צף בכל העמודים
  - הודעות מוכנות מראש
  - תמיכה ב-3 שפות
- **מספר**: 054-5758003 (אייל ונטורה)
- **מדריך**: ראה `WHATSAPP_GUIDE.md`

### אימייל
- **כתובת**: barneawoodworking@gmail.com
- **שליחה**:
  - דרך טופס באתר (פותח תיבת דואר)
  - מילוי אוטומטי של נושא וטקסט
- **מדריך**: ראה `EMAIL_NOTIFICATIONS.md`

## 📊 אנליטיקה

### Vercel Analytics
- **סטטוס**: ✅ פעיל
- **נתונים**: תנועה, צפיות עמודים

### Google Analytics 4
- **סטטוס**: 🔧 מוכן לחיבור
- **הדרכה**: ראה `GOOGLE_ANALYTICS_SETUP.md`
- **רכיב**: `components/google-analytics.tsx`

**כדי לחבר**:
1. קבל Measurement ID מ-analytics.google.com
2. הוסף ל-`app/layout.tsx`
3. נתונים יתחילו להיאסף מיידית

## 🎬 תוכן וידאו

### סטטוס
- **רכיבים**: מוכנים
- **מדריך**: ראה `VIDEO_INTEGRATION.md`

### תוכן מומלץ
1. **סיור בסדנה** (Hero)
2. **תהליך ייצור** (Timeline)
3. **עדויות לקוחות** (Testimonials)
4. **סרטונים חינוכיים** (Blog)

**תמיכה**: YouTube, Vimeo, העלאה ישירה

## 🔧 הגדרות

### משתני סביבה
צור קובץ `.env.local`:
```env
# Google Analytics (אופציונלי)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# משתנים נוספים לפי הצורך
```

### שינוי תוכן

#### טקסטים
- כל הטקסטים: `lib/i18n.ts`
- לכל שפה בלוק נפרד

#### תמונות
- העלאה ל-`/public/`
- שימוש ברכיבים

#### פרטי קשר
- מספרי טלפון: `lib/i18n.ts`
- אימייל: `lib/i18n.ts` ורכיבים

## 🚀 פרסום

### אוטומטי (Vercel)
- ✅ מוגדר דרך GitHub
- Push ל-main → פרסום אוטומטי
- **URL**: https://carpentry-workshop-website.vercel.app

### פרסום ידני
```bash
cd "F:\Users\vmfob\Desktop\Eyal\carpentry-workshop\carpentry-workshop (2)"
npx vercel --prod
```

### בדיקת סטטוס
```bash
npx vercel ls
```

## 📖 תיעוד

תיעוד מלא במאגר:

- **README.md** - ראשי (English)
- **README_RU.md** - רוסית
- **README_HE.md** - קובץ זה (עברית)
- **SECURITY.md** - אבטחה
- **DEPLOYMENT_INFO.md** - פרסום
- **WHATSAPP_GUIDE.md** - עבודה עם WhatsApp
- **EMAIL_NOTIFICATIONS.md** - אימייל
- **GOOGLE_ANALYTICS_SETUP.md** - אנליטיקה
- **VIDEO_INTEGRATION.md** - וידאו
- **FEATURE_RECOMMENDATIONS.md** - המלצות

## 🔄 עדכונים

### איך להוסיף תכונה חדשה

1. יצירת רכיב ב-`components/`
2. הוספת תרגומים ב-`lib/i18n.ts`
3. חיבור ב-`app/page.tsx`
4. בדיקה מקומית
5. Commit ו-push
6. פרסום אוטומטי

### עדכונים קבועים
- פרויקטים חדשים בתיק העבודות
- עדכון עדויות
- סטטיסטיקות חדשות
- הוספת וידאו

## 🆘 תמיכה

### בעיות פרסום?
- בדוק: `DEPLOYMENT_INFO.md`
- בדוק לוגים: Vercel Dashboard

### תרגומים לא עובדים?
- בדוק: `lib/i18n.ts`
- בדוק: זיכרון דפדפן (Ctrl+Shift+R)

### בעיות WhatsApp?
- בדוק: `WHATSAPP_GUIDE.md`
- בדוק מספר: 054-5758003

### צריך עזרה?
- פתיחת Issue ב-GitHub
- יצירת קשר עם מפתח

## 📞 יצירת קשר

**סדנת ברנע**:
- **דניאל סרביאנסקי**: 050-6905039
- **אייל ונטורה**: 054-5758003
- **אימייל**: barneawoodworking@gmail.com
- **כתובת**: רחוב הנגרים 15, תל אביב
- **שעות**: א'-ה' 9:00-18:00, ו' 9:00-14:00

## 📝 רישיון

הפרויקט פרטי בבעלות סדנת ברנע.

## 🙏 תודות

- **Next.js** למסגרת מעולה
- **Vercel** לאירוח חינמי
- **shadcn/ui** לרכיבי UI
- **Tailwind CSS** לעיצוב
- **Lucide** לאייקונים

---

**גרסה**: 1.0  
**עדכון אחרון**: דצמבר 2024  
**סטטוס**: ✅ פרודקשן

