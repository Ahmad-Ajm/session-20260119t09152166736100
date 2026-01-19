# Feature Specification – FEAT-001

## 1. Overview
- **Feature Name**: UX/UI (Baseline/System)
- **Short Summary**: تأسيس واجهة Angular عربية RTL تشمل Layout + Routing + صفحات Placeholder لمسارات رحلة CV الأساسية.
- **Primary Actors**: Visitor, User

## 2. Problem & Goals
- **Problem**: لا يوجد هيكل واجهة موحّد للتنقل والصفحات، مما يعيق بناء ميزات CV القادمة بشكل متسق.
- **Goals**:
  - توفير Layout أساسي عربي RTL.
  - توفير Routes ثابتة وواضحة للصفحات الأساسية.
  - توفير صفحات Placeholder قابلة للاستبدال لاحقًا عند تنفيذ الميزات التفصيلية.

## 3. Scope Boundaries
- **In Scope**:
  - Layout (Header/Nav + Footer + Content)
  - Routing لمسارات محددة
  - صفحات Placeholder تعمل بدون تكامل API
  - صفحة 404/Not Found
  - إعداد Arabic-first RTL
- **Out of Scope**:
  - تسجيل/دخول فعلي، Guards، Permissions
  - CRUD فعلي للسيرة الذاتية
  - بحث/فلترة فعلي
  - تصدير فعلي (PDF/Word)

## 4. User Stories

- **US-FEAT-001-001**: كـ زائر أريد فتح الصفحة الرئيسية ورؤية تنقل واضح لكي أستطيع الوصول لصفحة قائمة السير الذاتية.
  - *Priority*: P0
  - *Acceptance Criteria*:
    1. عند فتح `/` تظهر صفحة رئيسية بعنوان عربي.
    2. يظهر هيدر يحتوي روابط للمسارات الأساسية.

- **US-FEAT-001-002**: كـ زائر أريد تصفح قائمة السير الذاتية (صفحة Placeholder) لكي أعرف أن هناك مسارًا للقائمة العامة.
  - *Priority*: P0
  - *Acceptance Criteria*:
    1. عند فتح `/cvs` تظهر صفحة بعنوان “السير الذاتية المتاحة”.
    2. تحتوي الصفحة على رابط/زر Placeholder للانتقال لتفاصيل سيرة ذاتية مثال (مثل id=demo).

- **US-FEAT-001-003**: كـ زائر أريد فتح صفحة تفاصيل سيرة ذاتية (Placeholder) لكي أرى مسار التفاصيل جاهزًا.
  - *Priority*: P0
  - *Acceptance Criteria*:
    1. عند فتح `/cvs/123` تظهر صفحة تفاصيل وتعرض قيمة `id` من المسار.

- **US-FEAT-001-004**: كـ زائر أريد فتح صفحة تصدير (Placeholder) لكي أرى المسار جاهزًا لميزة التصدير لاحقًا.
  - *Priority*: P1
  - *Acceptance Criteria*:
    1. عند فتح `/cvs/123/export` تظهر صفحة تصدير وتعرض قيمة `id`.

- **US-FEAT-001-005**: كـ مستخدم أريد رؤية صفحة “سيرتي الذاتية” (Placeholder) لكي أعرف أين سأعدّل بياناتي لاحقًا.
  - *Priority*: P0
  - *Acceptance Criteria*:
    1. عند فتح `/my-cv` تظهر صفحة بعنوان “سيرتي الذاتية”.

- **US-FEAT-001-006**: كـ مستخدم أريد رؤية صفحات تسجيل/دخول (Placeholder) لكي أعرف مسارات المصادقة لاحقًا.
  - *Priority*: P1
  - *Acceptance Criteria*:
    1. عند فتح `/auth/login` تظهر صفحة دخول Placeholder.
    2. عند فتح `/auth/register` تظهر صفحة تسجيل Placeholder.

- **US-FEAT-001-007**: كـ أي مستخدم أريد رؤية صفحة 404 عند إدخال رابط خاطئ لكي تكون تجربة التصفح واضحة.
  - *Priority*: P0
  - *Acceptance Criteria*:
    1. عند فتح مسار غير معروف تظهر صفحة 404 عربية وبها رابط للعودة للرئيسية.

## 5. Functional Requirements

| Req ID | Description | Linked US |
|-------|-------------|-----------|
| FR-FEAT-001-001 | ضبط التطبيق ليعمل Arabic-first مع `lang=ar` و `dir=rtl` على مستوى التطبيق | US-FEAT-001-001 |
| FR-FEAT-001-002 | توفير Layout عام يحتوي Header/Nav و Footer و `router-outlet` | US-FEAT-001-001 |
| FR-FEAT-001-003 | تعريف Routes للمسارات الأساسية المذكورة (Home/Auth/MyCV/CVs/Details/Export) | US-FEAT-001-001, US-FEAT-001-002, US-FEAT-001-003, US-FEAT-001-004, US-FEAT-001-005, US-FEAT-001-006 |
| FR-FEAT-001-004 | لكل Route صفحة Placeholder تعرض عنوانًا ووصفًا بسيطًا | US-FEAT-001-001..007 |
| FR-FEAT-001-005 | توفير NotFound route (wildcard) لصفحة 404 عربية | US-FEAT-001-007 |
| FR-FEAT-001-006 | إظهار قائمة تنقل في الهيدر مع روابط RouterLink لجميع المسارات الأساسية | US-FEAT-001-001 |
| FR-FEAT-001-007 | صفحة تفاصيل/تصدير تعرض `id` من URL (route param) | US-FEAT-001-003, US-FEAT-001-004 |

## 6. Non-Functional Requirements (NFRs)
- **Performance**: تحميل صفحات خفيف (Placeholder) دون اعتماديات ثقيلة إضافية.
- **Security**: عدم تفعيل أي قيود وصول في هذه المرحلة (لا Guards إلزامية).
- **Availability**: التطبيق يعمل محليًا ويقبل مسارات deep links (Angular routing) عند إعادة التحميل.
- **Usability/Accessibility**: نص عربي واضح ومحاذاة RTL.

## 7. Business Rules
- **BR-001**: واجهة عربية RTL افتراضيًا في جميع الصفحات.
- **BR-002**: جميع الصفحات متاحة بدون تسجيل دخول ضمن هذه الميزة.

## 8. Domain Model Candidates (For Code Generation)
- **Entities**: لا يوجد.
- **Enums**: لا يوجد.
- **Domain Events**: لا يوجد.

## 9. Success Criteria
- التطبيق يبني ويعمل بدون أخطاء.
- التنقل يعمل بين جميع المسارات المحددة.
- صفحة 404 تعمل.
- RTL مُطبق (اتجاه الصفحة RTL فعليًا).

## 10. Assumptions & Decisions
- **DEC-001**: لا مصادقة فعلية بعد.
- **DEC-002**: اعتماد URLs الإنجليزية التالية: `/`, `/auth/login`, `/auth/register`, `/my-cv`, `/cvs`, `/cvs/:id`, `/cvs/:id/export`.
- **DEC-003**: صفحات Placeholder فقط (لا تكامل Backend/API).
