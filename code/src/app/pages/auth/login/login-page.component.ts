import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="card">
      <h1 class="page-title">تسجيل الدخول</h1>
      <p class="page-desc">
        هذه صفحة Placeholder فقط. سيتم تنفيذ الدخول الفعلي وربطه بالخادم في ميزة لاحقة.
      </p>

      <div class="quick-links">
        <a class="btn-link" routerLink="/auth/register">ليس لديك حساب؟ سجّل الآن</a>
        <a class="btn-link" routerLink="/">العودة للرئيسية</a>
      </div>
    </section>
  `
})
export class LoginPageComponent {}
