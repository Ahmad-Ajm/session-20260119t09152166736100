# Tasks – FEAT-001

## 1. Overview
تنفيذ Baseline Angular UI: إعداد RTL + Layout shell + Routes + صفحات Placeholder + صفحة 404، مع Smoke test للتنقل.

## 2. Task List

### Phase 1: Setup & Skeleton (Frontend)
- [ ] T-FEAT-001-001 Verify Angular app structure and routing approach (standalone vs modules) (Target: `angular/src/app/*`)
- [ ] T-FEAT-001-002 Configure Arabic-first RTL globally (`lang="ar"`, `dir="rtl"`) (Target: `angular/src/index.html` and/or `angular/src/app/app.component.*`)
- [ ] T-FEAT-001-003 Add baseline global styles (neutral colors, basic typography) (Target: `angular/src/styles.*`)

### Phase 2: Layout Shell
- [ ] T-FEAT-001-004 Create `AppLayoutComponent` (header/nav + footer + `router-outlet`) (Target: `angular/src/app/layout/app-layout.component.*`)
- [ ] T-FEAT-001-005 Add navigation links with active-state styling (Target: `AppLayoutComponent` template/styles)

### Phase 3: Routing
- [ ] T-FEAT-001-006 Define app routes for baseline pages (Target: `angular/src/app/app.routes.ts` or `angular/src/app/app-routing.module.ts`)
- [ ] T-FEAT-001-007 Implement NotFound route (wildcard `**`) (Target: routing file + `angular/src/app/pages/not-found/*`)
- [ ] T-FEAT-001-008 Ensure route order handles `/cvs/:id/export` before `/cvs/:id` (Target: routing file)

### Phase 4: Placeholder Pages
- [ ] T-FEAT-001-009 Create Home page component (Target: `angular/src/app/pages/home/*`)
- [ ] T-FEAT-001-010 Create Login page component (Target: `angular/src/app/pages/auth/login/*`)
- [ ] T-FEAT-001-011 Create Register page component (Target: `angular/src/app/pages/auth/register/*`)
- [ ] T-FEAT-001-012 Create My CV page component (Target: `angular/src/app/pages/my-cv/*`)
- [ ] T-FEAT-001-013 Create Public CV List page component (Target: `angular/src/app/pages/cvs/cv-list/*`)
- [ ] T-FEAT-001-014 Create CV Details page component (read route param `id`) (Target: `angular/src/app/pages/cvs/cv-details/*`)
- [ ] T-FEAT-001-015 Create CV Export page component (read route param `id`) (Target: `angular/src/app/pages/cvs/cv-export/*`)

### Phase 5: Smoke Test & Polish
- [ ] T-FEAT-001-016 Manual smoke test: navigate to all routes, verify RTL and 404 (Target: running app)
- [ ] T-FEAT-001-017 Fix any lint/build errors and ensure `ng build` succeeds (Target: whole angular project)

## 3. Dependencies Graph
- T-FEAT-001-004 يعتمد على T-FEAT-001-001.
- T-FEAT-001-006 يعتمد على T-FEAT-001-004 و T-FEAT-001-009..015 (أو العكس حسب أسلوب الربط).
- T-FEAT-001-014 و T-FEAT-001-015 يعتمدان على T-FEAT-001-006 (توفر params في route definitions).
- T-FEAT-001-016 يعتمد على اكتمال T-FEAT-001-002..015.

## 4. Execution Notes
- إذا كان المشروع يستخدم Standalone:
  - استخدم `provideRouter(routes)` في `main.ts`.
- إذا كان Modules:
  - حدّث `AppRoutingModule` وأضف declarations/imports.
- لا تضف مكتبات UI جديدة إلا إذا كانت موجودة بالفعل لتقليل المخاطر.
- النصوص داخل الصفحات عربية، بينما الـ URLs بالإنجليزية حسب قرار DEC-FEAT-001-004.
