# Implementation Plan – FEAT-001

## 1. Executive Summary
تنفيذ واجهة Angular Baseline تشمل Layout + Routing + صفحات Placeholder عربية RTL. لا يوجد Backend ولا تكامل API ضمن هذه الميزة. الناتج المتوقع: تطبيق يعمل محليًا ويُظهر تنقلًا بين الصفحات الأساسية.

## 2. Architecture & Components

### Backend (.NET/ABP)
- **Domain Layer**:
  - Entities: لا شيء.
  - Managers: لا شيء.
- **Application Layer**:
  - Services: لا شيء.
  - DTOs: لا شيء.
- **EF Core**:
  - Repositories / Mappings / Migrations: لا شيء.
- **HTTP API**:
  - Controllers / Endpoints: لا شيء.

### Frontend (Angular)
- **Layout Components**:
  - `AppLayoutComponent` (Shell: header/nav + content + footer)
  - `NotFoundComponent`
- **Pages/Routes** (Placeholder):
  - `HomePageComponent` → `/`
  - `LoginPageComponent` → `/auth/login`
  - `RegisterPageComponent` → `/auth/register`
  - `MyCvPageComponent` → `/my-cv`
  - `CvListPageComponent` → `/cvs`
  - `CvDetailsPageComponent` → `/cvs/:id`
  - `CvExportPageComponent` → `/cvs/:id/export`
- **Shared UI**:
  - `NavLink` styling (active link)
  - `PageHeaderComponent` (اختياري) لتوحيد عنوان الصفحة

> ملاحظة: أسماء الملفات والمسارات الفعلية قد تختلف حسب scaffold الحالي؛ الهدف هو تحقيق نفس النتائج (Layout + Routing + Pages).

## 3. Data Model Definition
لا يوجد نموذج بيانات في هذه الميزة.

## 4. FR-to-Implementation Mapping
| FR ID | Backend Components | Frontend Components |
|-------|--------------------|---------------------|
| FR-FEAT-001-001 | N/A | App bootstrap + RTL setup (index/app root) |
| FR-FEAT-001-002 | N/A | AppLayoutComponent + navigation |
| FR-FEAT-001-003 | N/A | App routing + route definitions |
| FR-FEAT-001-004 | N/A | Placeholder pages components |
| FR-FEAT-001-005 | N/A | NotFoundComponent + wildcard route |

## 5. Implementation Phases

### Phase 1: UI Skeleton
1. إنشاء/تحديث Layout shell (header/main/footer).
2. إضافة إعداد RTL/Arabic-first (`dir="rtl"`, `lang="ar"`) + CSS أساسي.

### Phase 2: Routing
1. إنشاء ملف routes (AppRouting/Routes).
2. تعريف المسارات الأساسية وربطها بصفحات Placeholder.
3. إضافة wildcard route لصفحة 404.

### Phase 3: Pages Placeholders
1. إنشاء الصفحات (Home/Login/Register/My CV/CV List/CV Details/Export).
2. داخل كل صفحة: عنوان + نص يشرح الهدف + روابط سريعة (اختياري).

### Phase 4: Polish & Smoke Test
1. فحص التنقل بين المسارات.
2. التأكد من RTL بصريًا.
3. بناء المشروع وتشغيله محليًا.

## 6. Non-Functional Implementation
- **Security**: لا توجد مصادقة، لكن لا يجب إدخال أي منطق يقيّد الوصول.
- **Performance**: تحميل خفيف (صفحات بسيطة).
- **Testing**:
  - Smoke test يدوي (التنقل لكل Route بدون أخطاء)
  - (اختياري) Unit test بسيط لوجود routing.

## 7. Dependencies & Risks
- **Dependencies**: يعتمد على مشروع Angular الموجود (scaffold) داخل Build-App.
- **Risks**:
  - اختلاف هيكل المشروع (standalone vs module-based)؛ سيتم التكيّف حسب الموجود.
  - إعداد RTL قد يحتاج ضبط CSS إضافي إذا كانت هناك مكتبة UI.

## 8. Assumptions
- لا توجد مصادقة فعلية بعد.
- لا توجد تكاملات API.
- النصوص عربية افتراضيًا.
- مسارات URLs المعتمدة:
  - `/`
  - `/auth/login`
  - `/auth/register`
  - `/my-cv`
  - `/cvs`
  - `/cvs/:id`
  - `/cvs/:id/export`
