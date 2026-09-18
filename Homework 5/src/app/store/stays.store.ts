import { computed, inject } from '@angular/core';
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

import { Stay } from '../models/stay.model';
import { StaysService } from '../pages/stays/stays.service';

type StaysState = {
  stays: Stay[];
  isLoading: boolean;
  error: string | null;
  search: string;
  superhostOnly: boolean;
};

export const StaysStore = signalStore(
  { providedIn: 'root' },

  withState<StaysState>({
    stays: [],
    isLoading: false,
    error: null,
    search: '',
    superhostOnly: false
  }),

  withComputed((state) => ({
    count: computed(() => state.stays().length),

    hasResults: computed(() => state.stays().length > 0),

    query: computed(() => ({
      search: state.search(),
      superhostOnly: state.superhostOnly()
    }))
  })),

  // API loading method
  withMethods((store, staysService = inject(StaysService)) => ({
    loadStays: rxMethod<{
      search: string;
      superhostOnly: boolean;
    }>(
      pipe(
        tap(() =>
          patchState(store, {
            isLoading: true,
            error: null
          })
        ),

        switchMap(({ search, superhostOnly }) =>
          staysService
            .getStays({
              search,
              superhost: superhostOnly || undefined
            })
            .pipe(
              tap((stays) =>
                patchState(store, {
                  stays,
                  isLoading: false
                })
              ),

              catchError(() => {
                patchState(store, {
                  stays: [],
                  isLoading: false,
                  error: 'Could not load stays'
                });

                return of([]);
              })
            )
        )
      )
    )
  })),

  // State-changing methods
  withMethods((store) => ({
    setSearch(search: string): void {
      patchState(store, { search });

      store.loadStays({
        search,
        superhostOnly: store.superhostOnly()
      });
    },

    toggleSuperhostOnly(): void {
      const superhostOnly = !store.superhostOnly();

      patchState(store, {
        superhostOnly
      });

      store.loadStays({
        search: store.search(),
        superhostOnly
      });
    }
  })),

  withHooks({
    onInit(store) {
      store.loadStays(store.query);
    }
  })
);