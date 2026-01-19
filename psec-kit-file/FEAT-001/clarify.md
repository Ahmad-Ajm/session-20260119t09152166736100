# Clarification & Decisions – FEAT-001

## 1. Executive Summary
هذه الميزة تؤسس واجهة Angular Baseline قابلة للتشغيل تشمل: Layout عربي RTL (هيدر/محتوى/فوتر) + Routing لمسارات أساسية + صفحات Placeholder بسيطة (بدون تفاعل عميق أو تكامل API). الهدف هو توفير “هيكل” UI جاهز تبني عليه الميزات اللاحقة (تسجيل، إنشاء CV، قائمة عامة، تفاصيل).

## 2. Scope Confirmation
- **Confirmed In-Scope**:
  - تطبيق Angular يعمل (build/run) مع:
    - Layout أساسي عربي RTL (Shell) يحتوي على هيدر تنقل + مخرج `router-outlet` + فوتر.
    - تعريف Routes أساسية (حسب Features Map) وربطها بصفحات Placeholder.
    - صفحة 404 و/أو Redirect افتراضي.
    - تصميم بسيط بألوان محايدة (CSS بسيط أو Angular Material إن كان ضمن القالب).
    - إعدادات i18n/RTL على مستوى الصفحة/التطبيق (اتجاه `dir="rtl"` وخط عربي افتراضي إن أمكن).
  - مكوّنات/صفحات “صامتة” (لا Forms كاملة، لا Services/API، لا مصادقة فعلية).

- **Confirmed Out-of-Scope**:
  - أي تكامل Backend/API أو ABP proxies.
  - تنفيذ مصادقة/تفويض حقيقي (Login/Register مجرد صفحات Placeholder).
  - CRUD فعلي للـ CV أو تحميل صورة فعلي.
  - تصدير PDF/Word أو إخفاء بيانات (سيأتي لاحقًا).
  - بحث/فلترة فعلي في القائمة العامة.

## 3. Ambiguity Resolution (Decisions Catalog)

| Decision ID | Topic | Uncertainty | Decision Taken | Rationale |
|-------------|-------|-------------|----------------|-----------|
| DEC-FEAT-001-001 | Framework | هل نستخدم Standalone Components أم NgModules؟ | استخدام Angular Standalone (إن كان المشروع مُهيأ بذلك)، وإلا استخدام AppModule/PagesModule حسب القالب الموجود. | Baseline يجب أن يتوافق مع هيكل المشروع الحالي ويقلل التغيير. | 
| DEC-FEAT-001-002 | RTL | أين نضبط RTL؟ | ضبط `dir="rtl"` و`lang="ar"` على مستوى `index.html` أو `app.component.html` حسب الأسهل، مع CSS يدعم RTL. | Arabic-first شرط أساسي ويجب أن يؤثر على كل الصفحات. |
| DEC-FEAT-001-003 | Route Set | ما هي المسارات “الأساسية” بالضبط؟ | اعتماد مجموعة مسارات توافق Summary في features-map.md: Home, Register, Login, My CV, Public CV List, CV Details, Export. | لتوفير Skeleton جاهز للميزات FEAT-002..FEAT-014. |
| DEC-FEAT-001-004 | URL Design | هل تكون أسماء المسارات عربية أم إنجليزية؟ | أسماء مسارات إنجليزية قصيرة: `/`, `/auth/login`, `/auth/register`, `/my-cv`, `/cvs`, `/cvs/:id`, `/cvs/:id/export`. | URLs معيارية وسهلة الربط لاحقًا، مع UI عربي. |
| DEC-FEAT-001-005 | Navigation Visibility | هل تظهر روابط “حسابي” بدون مصادقة؟ | إظهار الروابط كلها بشكل ثابت في الهيدر (بدون حراسة Guards). | لا مصادقة بعد؛ الهدف فقط إظهار التنقل. |
| DEC-FEAT-001-006 | Styling | هل نعتمد مكتبة UI؟ | استخدام CSS بسيط. إذا كان Angular Material مُثبتًا بالفعل يمكن استخدامه اختياريًا دون إضافة اعتماد ثقيل. | تقليل المخاطر وتسريع الوصول لنتيجة تعمل. |

## 4. Key Business Rules Identified
- الواجهة عربية أولاً: الاتجاه RTL، نصوص عربية افتراضيًا.
- لا توجد مصادقة فعلية في هذه المرحلة؛ كل الصفحات متاحة.
- صفحات الـ Placeholder تُظهر اسم الصفحة والغرض منها وروابط سريعة للمسارات الرئيسية.

## 5. Implementation Recommendations
- اعتماد “Shell Layout” (AppLayoutComponent) يحتوي على:
  - Header/Nav (روابط RouterLink)
  - Main content (router-outlet)
  - Footer
- إنشاء Pages components لكل Route بحد أدنى من HTML (عنوان + وصف).
- إضافة `NotFoundComponent` و route wildcard.
- إضافة `ActiveLink` styling بسيط.
- التأكد من RTL فعليًا عبر فحص محاذاة النصوص واتجاه القائمة.
