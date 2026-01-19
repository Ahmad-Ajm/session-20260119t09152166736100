import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cv-list-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="card">
      <h1 class="page-title">السير الذاتية المتاحة</h1>
      <p class="page-desc">
        هذه صفحة Placeholder لعرض قائمة السير الذاتية العامة. لاحقاً سيتم إضافة البحث/الفلترة والتحميل من API.
      </p>

      <div class="quick-links">
        <a class="btn-link" routerLink="/cvs/demo">فتح تفاصيل CV (id=demo)</a>
        <a class="btn-link" routerLink="/cvs/demo/export">تجربة مسار التصدير (id=demo)</a>
      </div>
    </section>
  `
})
export class CvListPageComponent {}
