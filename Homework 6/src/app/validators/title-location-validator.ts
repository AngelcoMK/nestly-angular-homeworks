import {
  AbstractControl,
  ValidationErrors
} from '@angular/forms';

export function titleLocationValidator(
  group: AbstractControl
): ValidationErrors | null {
  const title = group.get('title')?.value?.trim().toLowerCase();
  const location = group.get('location')?.value?.trim().toLowerCase();

  return title && location && title === location
    ? { sameAsTitle: true }
    : null;
}