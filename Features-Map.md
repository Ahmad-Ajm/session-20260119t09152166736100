# Features Map – Project Feature Inventory

## Overview
هذه الخريطة تجمع الميزات الأساسية للمشروع. تم إنشاؤها مبدئيًا يدويًا لأن فلو `update Features-map.md` فشل في عمل upsert (سيتم إصلاح الفلو لاحقًا).

## 1) Feature Types & KPI Templates
(كما في القالب القياسي)

- CRUD → `specifications/12-testing/kpi-crud-template.md`
- Reporting → `specifications/12-testing/kpi-reporting-template.md`
- Search → `specifications/12-testing/kpi-search-template.md`
- Workflow → `specifications/12-testing/kpi-workflow-template.md`
- Notifications → `specifications/12-testing/kpi-notifications-template.md`
- Integration → `specifications/12-testing/kpi-integration-template.md`
- AI → `specifications/12-testing/kpi-ai-template.md`
- Security → `specifications/12-testing/kpi-security-template.md`

---

## 2) Features Table

> ملاحظة: لم يصلنا محتوى `conversation-summary.md` ضمن هذا الاستدعاء، لذا تم افتراض ميزات أساسية منطقية كبداية. سيتم إعادة ضبط الخريطة فور توفر الملخص/أو عند أول تنفيذ ناجح للفلو.

| FeatureId  | FeatureName                 | FeatureType | Summary                                              | Personas              | Requirements | SpecFolders                     | Priority | Status   |
|-----------|------------------------------|-------------|------------------------------------------------------|----------------------|--------------|----------------------------------|----------|----------|
| FEAT-001  | UX/UI Baseline (System)      | Workflow    | واجهة تطبيق أساسية تعمل (تخطيط + تنقل) بدون تفاعلات | User, Admin          |              | 08-ui                           | P0       | Planned  |
| FEAT-002  | Auth & Roles                 | Security    | تسجيل دخول/خروج وإدارة أدوار وصلاحيات أساسية        | User, Admin          |              | 06-security, 07-api, 08-ui      | P0       | Planned  |
| FEAT-003  | Core CRUD (Primary Entity)   | CRUD        | CRUD لكيان أساسي (سيحدد لاحقًا)                      | User, Admin          |              | 04-domain, 07-api, 08-ui        | P1       | Planned  |
| FEAT-004  | Search & Filters             | Search      | بحث وفلاتر على القوائم الأساسية                      | User, Admin          |              | 07-api, 08-ui                   | P1       | Planned  |
| FEAT-005  | Notifications (In-App/Email) | Notifications | إشعارات داخل التطبيق وبريد (أساسيات)               | User, Admin          |              | 09-notifications                | P2       | Planned  |
| FEAT-006  | Reporting Dashboard          | Reporting   | لوحة تقارير مبدئية                                 | Admin               |              | 10-reporting, 08-ui             | P2       | Planned  |

---

## 3) Feature Details

### FEAT-001 – UX/UI Baseline (System)
**Type:** Workflow  
**Summary:** تجهيز واجهة تعمل (صفحات/تنقل/تخطيط) بدون منطق أعمال متقدم؛ هدفها إظهار تطبيق قابل للاستخدام بصريًا مبكرًا.  
**Personas:** User, Admin  
**Spec Folders / Files:**
- `specifications/08-ui/*`

**Dependencies / Relations:**
- يعتمد على: لا شيء (أساس النظام)
- يؤثر على: كل ميزات الواجهة

**KPI Template:** `specifications/12-testing/kpi-workflow-template.md`

**Notes / Open Questions:**
- ستاك الواجهة (React/Next/Vue/Angular) غير مؤكد بعد؛ سيتم استنتاجه من المستودع أو ضبطه عند إنشاء SpecKit.

### FEAT-002 – Auth & Roles
**Type:** Security  
**Summary:** تسجيل الدخول والخروج وحماية الصفحات وإعداد أدوار/صلاحيات أولية.  
**Personas:** User, Admin

### FEAT-003 – Core CRUD (Primary Entity)
**Type:** CRUD  
**Summary:** CRUD لكيان رئيسي واحد كبداية (اسم الكيان يُحدد لاحقًا من الملخص).  
**Personas:** User, Admin

### FEAT-004 – Search & Filters
**Type:** Search  
**Summary:** بحث/فلترة/ترتيب في القوائم الأساسية.  
**Personas:** User, Admin

### FEAT-005 – Notifications
**Type:** Notifications  
**Summary:** إشعارات أساسية داخل التطبيق وربما Email.  
**Personas:** User, Admin

### FEAT-006 – Reporting Dashboard
**Type:** Reporting  
**Summary:** لوحة تقارير أولية للمشرف.  
**Personas:** Admin
