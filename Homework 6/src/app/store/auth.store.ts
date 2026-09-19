import { computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { catchError, of, pipe, switchMap, tap } from 'rxjs';

import {
  Login,
  LoginResponse,
  Register,
  User
} from '../models/auth.model';
import { AuthService } from '../services/auth.service';

type AuthState = {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isLoading: boolean;
  error: string | null;
};

const initialState: AuthState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  isLoading: false,
  error: null
};

export const AuthStore = signalStore(
  { providedIn: 'root' },

  withState(initialState),

  withComputed((state) => ({
    isLoggedIn: computed(() => !!state.user()),
    isAdmin: computed(() => state.user()?.role === 'ADMIN')
  })),

  withMethods((store) => ({
    setTokens(data: LoginResponse): void {
      patchState(store, {
        user: data.user,
        accessToken: data.accessToken,
        refreshToken: data.refreshToken
      });

      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);
    },

    clearAuth(): void {
      patchState(store, initialState);

      localStorage.removeItem('user');
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    }
  })),

  withMethods((
    store,
    authService = inject(AuthService),
    router = inject(Router)
  ) => ({
    login: rxMethod<Login>(
      pipe(
        tap(() =>
          patchState(store, {
            isLoading: true,
            error: null
          })
        ),

        switchMap((credentials) =>
          authService.login(credentials).pipe(
            tap((response) => {
              store.setTokens(response);

              patchState(store, {
                isLoading: false,
                error: null
              });

              router.navigate(['/stays']);
            }),

            catchError((error) => {
              patchState(store, {
                isLoading: false,
                error:
                  error?.error?.message ??
                  'Login failed'
              });

              return of(null);
            })
          )
        )
      )
    ),

    register: rxMethod<Register>(
      pipe(
        tap(() =>
          patchState(store, {
            isLoading: true,
            error: null
          })
        ),

        switchMap((data) =>
          authService.register(data).pipe(
            tap((response) => {
              store.setTokens(response);

              patchState(store, {
                isLoading: false,
                error: null
              });

              router.navigate(['/stays']);
            }),

            catchError((error) => {
              patchState(store, {
                isLoading: false,
                error:
                  error?.error?.message ??
                  'Registration failed'
              });

              return of(null);
            })
          )
        )
      )
    ),

    logout(): void {
      authService.logout().pipe(
        catchError(() =>
          of({ success: false })
        )
      ).subscribe(() => {
        store.clearAuth();
        router.navigate(['/login']);
      });
    }
  })),

  withHooks({
    onInit(store) {
      const user = localStorage.getItem('user');
      const accessToken = localStorage.getItem('accessToken');
      const refreshToken = localStorage.getItem('refreshToken');

      if (user && accessToken && refreshToken) {
        try {
          patchState(store, {
            user: JSON.parse(user) as User,
            accessToken,
            refreshToken
          });
        } catch {
          store.clearAuth();
        }
      }
    }
  })
);