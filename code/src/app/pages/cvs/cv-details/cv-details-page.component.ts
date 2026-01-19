import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-cv-details-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="card">
      <h1 class="page-title">تفاصيل السيرة الذاتية</h1>
      <p class="page-desc">
        صفحة Placeholder لعرض تفاصيل سيرة ذاتية عامة. لاحقاً سيتم تحميل البيانات من API.
      </p>

      <div class="meta">
        <div><strong>المعرّف:</strong> {{ id$ | async }}</div>
      </div>

      <div class="quick-links">
        <a class="btn-link" [routerLink]="['/cvs', (id$ | async)]">إعادة فتح نفس الصفحة</a>
        <a class="btn-link" [routerLink]="['/cvs', (id$ | async), 'export']">الانتقال للتصدير</a>
        <a class="btn-link" routerLink="/cvs">العودة للقائمة</a>
      </div>
    </section>
  `
})
export class CvDetailsPageComponent {
  private readonly route = inject(ActivatedRoute);

  readonly id$ = this.route.paramMap.pipe(map((p) => p.get('id') ?? ''));
}
