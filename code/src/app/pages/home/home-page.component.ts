import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="card">
      <h1 class="page-title">مرحباً بك</h1>
      <p class="page-desc">
        هذه واجهة أولية (Baseline) لتطبيق السير الذاتية. الهدف هو توفير هيكل تنقل وصفحات
        Placeholder لميزات لاحقة.
      </p>

      <div class="quick-links">
        <a class="btn-link" routerLink="/cvs">تصفح السير الذاتية المتاحة</a>
        <a class="btn-link" routerLink="/my-cv">الذهاب إلى سيرتي الذاتية</a>
        <a class="btn-link" routerLink="/auth/login">دخول</a>
        <a class="btn-link" routerLink="/auth/register">تسجيل</a>
      </div>
    </section>
  `
})
export class HomePageComponent {}
