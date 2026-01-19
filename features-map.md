# Features Map – Project Feature Inventory

هذه الخريطة هي مرجع الميزات (Features/Epics) للمشروع.

- **المصدر المعتمد للمواصفات عالية المستوى**: `conversation-summary.md` (ممنوع تعديلها).
- عند نقص تفاصيل: نعتمد افتراضات معقولة في SpecKit لكل ميزة.

---

## 1) جدول الميزات (Overview)

| FeatureId | FeatureName | FeatureType | Summary | Personas | Requirements | SpecFolders | Priority | Status |
|---|---|---|---|---|---|---|---|---|
| FEAT-001 | UX/UI (Baseline/System) | CRUD | هيكل واجهة أساسي يعمل (Routing/Layout) + صفحات Placeholder لتدفق CV بدون تفاعل عميق | User, Visitor | NFR-001 | 08-ui | P0 | Planned |
| FEAT-002 | تسجيل المستخدمين | Security | تسجيل/تسجيل دخول أساسي للمستخدمين لامتلاك CV | User |  | 04-domain,07-api,08-ui | P0 | Planned |
| FEAT-003 | إنشاء CV من نموذج إدخال | CRUD | إنشاء CV وربطه بالمستخدم | User |  | 04-domain,07-api,08-ui | P0 | Planned |
| FEAT-004 | تعديل CV للمستخدم | CRUD | تعديل CV الحالي للمستخدم | User |  | 07-api,08-ui | P1 | Planned |
| FEAT-005 | صفحة واحدة لإدخال بيانات CV | UX | صفحة واحدة تجمع أقسام CV (Wizard-less) | User | NFR-001 | 08-ui | P1 | Planned |
| FEAT-006 | رفع/إضافة صورة شخصية | CRUD | رفع صورة وتخزينها وربطها بـ CV | User |  | 04-domain,07-api,08-ui | P1 | Planned |
| FEAT-007 | إدخال الاسم | CRUD | حقل الاسم ضمن بيانات CV | User |  | 04-domain,08-ui | P0 | Planned |
| FEAT-008 | إدخال رقم الموبايل | CRUD | حقل رقم الموبايل ضمن بيانات CV مع قواعد تحقق | User |  | 04-domain,08-ui | P0 | Planned |
| FEAT-009 | إدخال الخبرات | CRUD | إدارة خبرات متعددة ضمن CV | User |  | 04-domain,07-api,08-ui | P1 | Planned |
| FEAT-010 | إدخال التعليم | CRUD | إدارة تعليم متعدد ضمن CV | User |  | 04-domain,07-api,08-ui | P1 | Planned |
| FEAT-011 | عرض جميع السير الذاتية المتاحة | Reporting | صفحة قائمة CVs قابلة للعرض للزوار حسب سياسة خصوصية افتراضية | Visitor |  | 07-api,08-ui | P0 | Planned |
| FEAT-012 | تصدير CV للزوار مع إخفاء البيانات الحساسة | Reporting | تصدير/طباعة CV بنسخة Public تخفي الحقول الحساسة (افتراضيًا: الموبايل) | Visitor |  | 07-api,08-ui | P1 | Planned |
| FEAT-013 | بحث سريع في السير الذاتية | Search | بحث نصي سريع في قائمة CVs (اسم/خبرات) | Visitor | NFR-001 | 07-api,08-ui | P1 | Planned |
| FEAT-014 | تصفية سريعة للسير الذاتية | Search | فلاتر بسيطة (مثلاً: تعليم/سنوات خبرة) | Visitor | NFR-001 | 07-api,08-ui | P2 | Planned |

---

## 2) تفاصيل الميزات (Feature Details)

### FEAT-001 – UX/UI (Baseline/System)
**Type:** CRUD  
**Summary:** تأسيس واجهة Angular مع Layout/Navigation + Routing وصفحات Placeholder لمسارات: Home, Register/Login, My CV, Public CV List, CV Details/Export.  
**Personas:** User, Visitor  
**Requirements:** NFR-001  
**Spec Folders / Files:**
- `specifications/08-ui/*`

**Dependencies / Relations:**
- تعتمد على: لا شيء (Baseline)
- تؤثر على: كل الميزات الأمامية

**KPI Template:** `specifications/12-testing/kpi-crud-template.md` (للبنية الأساسية: قابلية التشغيل/التحكم بالملاحة)  
**Notes / Open Questions:**
- سنعتمد Arabic-first و RTL افتراضيًا ما لم يُذكر خلاف ذلك.

---

### FEAT-002 – تسجيل المستخدمين
**Type:** Security  
**Summary:** تسجيل مستخدم جديد وتسجيل دخول وتسجيل خروج لإتاحة امتلاك CV.  
**Personas:** User  
**Spec Folders / Files:**
- `specifications/04-domain/*`, `specifications/07-api/*`, `specifications/08-ui/*`

**Dependencies / Relations:**
- تعتمد على: FEAT-001
- تؤثر على: FEAT-003/004/005/006

**KPI Template:** `specifications/12-testing/kpi-security-template.md`

---

### FEAT-003 – إنشاء CV من نموذج إدخال
**Type:** CRUD  
**Summary:** إنشاء CV (واحد لكل مستخدم افتراضيًا) عبر نموذج إدخال وتخزينه في DB.  
**Personas:** User  
**Dependencies / Relations:**
- تعتمد على: FEAT-001, FEAT-002
- تؤثر على: FEAT-004..010

**KPI Template:** `specifications/12-testing/kpi-crud-template.md`

**Assumption:** افتراضيًا لكل مستخدم CV واحدة (يمكن تغييرها لاحقًا).

---

### FEAT-004 – تعديل CV للمستخدم
**Type:** CRUD  
**Summary:** تعديل بيانات CV للمستخدم المسجل.  
**Personas:** User  
**Dependencies / Relations:**
- تعتمد على: FEAT-003

**KPI Template:** `specifications/12-testing/kpi-crud-template.md`

---

### FEAT-005 – صفحة واحدة لإدخال بيانات CV
**Type:** UX  
**Summary:** صفحة واحدة تجمع الأقسام الأساسية: الاسم/الموبايل/الصورة/الخبرات/التعليم (بدون Wizard).  
**Personas:** User  
**Dependencies / Relations:**
- تعتمد على: FEAT-001, FEAT-003

**KPI Template:** `specifications/12-testing/kpi-crud-template.md` (مؤقتًا)

---

### FEAT-006 – رفع/إضافة صورة شخصية
**Type:** CRUD  
**Summary:** رفع صورة شخصية وتخزينها (مع حجم أقصى افتراضي) وربطها بـ CV.  
**Personas:** User  
**Dependencies / Relations:**
- تعتمد على: FEAT-003

**KPI Template:** `specifications/12-testing/kpi-crud-template.md`

---

### FEAT-007 – إدخال الاسم
**Type:** CRUD  
**Summary:** حقل الاسم ضمن CV مع تحقق بسيط.  
**Personas:** User  
**Dependencies / Relations:**
- تعتمد على: FEAT-003

**KPI Template:** `specifications/12-testing/kpi-crud-template.md`

---

### FEAT-008 – إدخال رقم الموبايل
**Type:** CRUD  
**Summary:** رقم موبايل ضمن CV مع قواعد تحقق (تنسيق دولي مبسط).  
**Personas:** User  
**Dependencies / Relations:**
- تعتمد على: FEAT-003

**KPI Template:** `specifications/12-testing/kpi-crud-template.md`

---

### FEAT-009 – إدخال الخبرات
**Type:** CRUD  
**Summary:** إدارة عناصر خبرة متعددة (Company/Role/From/To/Description افتراضيًا).  
**Personas:** User  
**Dependencies / Relations:**
- تعتمد على: FEAT-003

**KPI Template:** `specifications/12-testing/kpi-crud-template.md`

---

### FEAT-010 – إدخال التعليم
**Type:** CRUD  
**Summary:** إدارة عناصر تعليم متعددة (Institution/Degree/From/To/Notes افتراضيًا).  
**Personas:** User  
**Dependencies / Relations:**
- تعتمد على: FEAT-003

**KPI Template:** `specifications/12-testing/kpi-crud-template.md`

---

### FEAT-011 – عرض جميع السير الذاتية المتاحة
**Type:** Reporting  
**Summary:** قائمة بالسير الذاتية المتاحة للعرض العام مع تفاصيل مختصرة وربط لصفحة تفاصيل.  
**Personas:** Visitor  
**Dependencies / Relations:**
- تعتمد على: FEAT-001
- تؤثر على: FEAT-013/014/012

**KPI Template:** `specifications/12-testing/kpi-reporting-template.md`

**Assumption:** افتراضيًا تعرض القائمة فقط السير الذاتية التي وافق صاحبها على الإتاحة (حقل IsPublic افتراضي false).

---

### FEAT-012 – تصدير CV للزوار مع إخفاء البيانات الحساسة
**Type:** Reporting  
**Summary:** تصدير/طباعة نسخة Public من CV تخفي البيانات الحساسة (افتراضيًا: رقم الموبايل).  
**Personas:** Visitor  
**Dependencies / Relations:**
- تعتمد على: FEAT-011

**KPI Template:** `specifications/12-testing/kpi-reporting-template.md`

---

### FEAT-013 – بحث سريع في السير الذاتية
**Type:** Search  
**Summary:** بحث سريع نصي في قائمة CVs (الاسم + مسميات الخبرات).  
**Personas:** Visitor  
**Dependencies / Relations:**
- تعتمد على: FEAT-011

**KPI Template:** `specifications/12-testing/kpi-search-template.md`

---

### FEAT-014 – تصفية سريعة للسير الذاتية
**Type:** Search  
**Summary:** فلاتر بسيطة (مثال: حد أدنى سنوات خبرة، مجال/درجة تعليم).  
**Personas:** Visitor  
**Dependencies / Relations:**
- تعتمد على: FEAT-011

**KPI Template:** `specifications/12-testing/kpi-search-template.md`
