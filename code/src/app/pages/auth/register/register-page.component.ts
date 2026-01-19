import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="card">
      <h1 class="page-title">إنشاء حساب</h1>
      <p class="page-desc">
        هذه صفحة Placeholder فقط. سيتم تنفيذ التسجيل الفعلي في ميزة لاحقة.
      </p>

      <div class="quick-links">
        <a class="btn-link" routerLink="/auth/login">لديك حساب؟ دخول</a>
        <a class="btn-link" routerLink="/">العودة للرئيسية</a>
      </div>
    </section>
  `
})
export class RegisterPageComponent {}
