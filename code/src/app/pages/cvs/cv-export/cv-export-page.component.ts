import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-cv-export-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="card">
      <h1 class="page-title">تصدير السيرة الذاتية</h1>
      <p class="page-desc">
        صفحة Placeholder لمسار التصدير. لاحقاً سيتم توليد PDF/Word أو تنزيل ملف حسب متطلبات الميزة.
      </p>

      <div class="meta">
        <div><strong>المعرّف:</strong> {{ id$ | async }}</div>
      </div>

      <div class="quick-links">
        <a class="btn-link" [routerLink]="['/cvs', (id$ | async)]">العودة للتفاصيل</a>
        <a class="btn-link" routerLink="/cvs">العودة للقائمة</a>
      </div>
    </section>
  `
})
export class CvExportPageComponent {
  private readonly route = inject(ActivatedRoute);

  readonly id$ = this.route.paramMap.pipe(map((p) => p.get('id') ?? ''));
}
