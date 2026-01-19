import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="card">
      <h1 class="page-title">404 - الصفحة غير موجودة</h1>
      <p class="page-desc">
        عذراً، الرابط الذي فتحته غير صحيح أو أن الصفحة غير متاحة حالياً.
      </p>

      <div class="quick-links">
        <a class="btn-link" routerLink="/">العودة للرئيسية</a>
        <a class="btn-link" routerLink="/cvs">الذهاب لقائمة السير الذاتية</a>
      </div>
    </section>
  `
})
export class NotFoundPageComponent {}
