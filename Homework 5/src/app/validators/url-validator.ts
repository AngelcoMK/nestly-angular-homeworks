import {
  AbstractControl,
  ValidationErrors
} from '@angular/forms';

export function urlValidator(
  control: AbstractControl
): ValidationErrors | null {
  const value = control.value as string;

  if (!value) {
    return null;
  }

  const looksLikeUrl = /^https?:\/\/.+/.test(value);

  return looksLikeUrl
    ? null
    : { invalidUrl: true };
}