import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-cv-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="card">
      <h1 class="page-title">سيرتي الذاتية</h1>
      <p class="page-desc">
        هذه صفحة Placeholder لعرض/تعديل سيرتك الذاتية لاحقاً (بدون نماذج أو تكامل API في هذه المرحلة).
      </p>

      <div class="quick-links">
        <a class="btn-link" routerLink="/cvs">تصفح السير الذاتية العامة</a>
        <a class="btn-link" routerLink="/">العودة للرئيسية</a>
      </div>
    </section>
  `
})
export class MyCvPageComponent {}
