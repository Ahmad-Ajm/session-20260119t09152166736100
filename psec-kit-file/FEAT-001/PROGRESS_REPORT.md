# PROGRESS_REPORT – FEAT-001

الحالة: **InProgress**

## ما تم تنفيذه
- تطبيق Angular Standalone يعمل داخل `code/`.
- ضبط Arabic-first على مستوى `index.html` (`lang="ar"` و `dir="rtl"`).
- إنشاء Layout (Header/Nav + Footer + router-outlet).
- تعريف Routes الأساسية حسب العقد:
  - `/`
  - `/auth/login`
  - `/auth/register`
  - `/my-cv`
  - `/cvs`
  - `/cvs/:id`
  - `/cvs/:id/export`
  - `**` (404)
- صفحات Placeholder عربية.

## المتبقي لإكمال الميزة
- تشغيل CI والتأكد من نجاح build/test.
- تحديث الحالة إلى Done بعد نجاح CI.
