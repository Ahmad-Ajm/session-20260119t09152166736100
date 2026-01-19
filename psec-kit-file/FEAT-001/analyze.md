# FEAT-001 – Analysis

## Goal
تسليم Baseline UI في Angular: هيكل Layout + Routing + صفحات Placeholder عربية RTL، بدون منطق أعمال أو API.

## Route Map (contract)
المسارات المطلوبة (من features-map.md + قرارات هذه الميزة):
- `/` → Home
- `/auth/login` → Login (placeholder)
- `/auth/register` → Register (placeholder)
- `/my-cv` → My CV (placeholder)
- `/cvs` → Public CV List (placeholder)
- `/cvs/:id` → CV Details (placeholder; يعرض id)
- `/cvs/:id/export` → Export (placeholder; يعرض id)
- `**` → Not Found

## UI Composition
- **AppLayout (Shell)**
  - Header
    - Brand/Title (اسم المنصة)
    - Nav links
  - Main content: `router-outlet`
  - Footer: نص بسيط (مثلاً سنة/اسم)

## RTL / Arabic-first checklist
- `lang="ar"` على `html`.
- `dir="rtl"` على `html` أو wrapper أعلى التطبيق.
- خط عربي افتراضي (اختياري) + `text-align: right` للعناوين/المحتوى إذا لزم.
- التأكد من اتجاه الـ nav (يمين → يسار) بصريًا.

## Edge Cases
- Deep link refresh لأي route يجب أن يعمل (Angular dev server عادة يدعم، وفي النشر يحتاج server rewrite؛ خارج النطاق لكن نضمن عدم كسر routing).
- ترتيب routes: تفضيل تعريف `/cvs/:id/export` قبل `/cvs/:id` لتفادي الالتقاط الخاطئ.

## Minimal Placeholder Content
- كل صفحة:
  - عنوان (h1)
  - وصف سطرين
  - (اختياري) روابط للانتقال لمسارات ذات صلة
- تفاصيل/تصدير:
  - عرض `id` من route params (مثل: “المعرّف: 123”).

## Non-goals
- لا نماذج إدخال حقيقية.
- لا state management.
- لا HTTP services.
- لا حراسة routes.

## Verification Approach (Smoke)
- تشغيل التطبيق.
- زيارة جميع routes يدويًا عبر الروابط وعبر إدخال URL.
- التحقق من RTL.
- التحقق من صفحة 404.
