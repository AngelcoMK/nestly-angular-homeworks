import { inject } from '@angular/core';
import {
  HttpErrorResponse,
  HttpInterceptorFn
} from '@angular/common/http';
import { Router } from '@angular/router';
import {
  catchError,
  switchMap,
  throwError
} from 'rxjs';

import { AuthService } from '../services/auth.service';
import { AuthStore } from '../store/auth.store';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const store = inject(AuthStore);
  const authService = inject(AuthService);
  const router = inject(Router);

  const isAuthRequest =
    req.url.includes('/auth/login') ||
    req.url.includes('/auth/register') ||
    req.url.includes('/auth/refresh');

  const accessToken = store.accessToken();

  const request =
    accessToken && !isAuthRequest
      ? req.clone({
          setHeaders: {
            Authorization: `Bearer ${accessToken}`
          }
        })
      : req;

  return next(request).pipe(
    catchError((error: HttpErrorResponse) => {
      if (
        error.status !== 401 ||
        isAuthRequest ||
        req.url.includes('/auth/logout')
      ) {
        return throwError(() => error);
      }

      const refreshToken = store.refreshToken();

      if (!refreshToken) {
        store.clearAuth();
        router.navigate(['/login']);

        return throwError(() => error);
      }

      return authService.refresh(refreshToken).pipe(
        switchMap((response) => {
          store.setTokens(response);

          const retryRequest = req.clone({
            setHeaders: {
              Authorization: `Bearer ${response.accessToken}`
            }
          });

          return next(retryRequest);
        }),

        catchError((refreshError) => {
          store.clearAuth();
          router.navigate(['/login']);

          return throwError(() => refreshError);
        })
      );
    })
  );
};