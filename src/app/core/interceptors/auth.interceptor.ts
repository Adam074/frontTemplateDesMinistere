import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const token = authService.getToken();

  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        authService.logout();
        // Ne force la redirection que si on est sur une zone protégée.
        // Sinon un 401 déclenché par un appel public (ex: page d'accueil)
        // ne doit pas éjecter l'utilisateur vers /auth/login.
        if (router.url.startsWith('/admin')) {
          router.navigate(['/auth/login']);
        }
      }
      return throwError(() => error);
    })
  );
};
