import { Component, inject, signal } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';

import {
  CreateStayRequest,
  StaysService
} from '../stays/stays.service';

import { urlValidator } from '../../validators/url-validator';
import { titleLocationValidator } from '../../validators/title-location-validator';

@Component({
  selector: 'app-host-new',
  imports: [ReactiveFormsModule],
  templateUrl: './host-new.html',
  styleUrl: './host-new.css'
})
export class HostNew {
  private formBuilder = inject(FormBuilder);
  private staysService = inject(StaysService);
  private router = inject(Router);

  submitting = signal(false);
  submitError = signal('');

  stayForm: FormGroup = this.formBuilder.group(
    {
      title: ['', [
        Validators.required,
        Validators.minLength(5)
      ]],

      location: ['', [
        Validators.required
      ]],

      pricePerNight: [null, [
        Validators.required,
        Validators.min(10),
        Validators.max(5000)
      ]],

      description: ['', [
        Validators.required,
        Validators.minLength(20)
      ]],

      superhost: [false],

      photos: this.formBuilder.array([
        this.formBuilder.control('', [
          Validators.required,
          urlValidator
        ])
      ])
    },
    {
      validators: [titleLocationValidator]
    }
  );

  get photos(): FormArray {
    return this.stayForm.get('photos') as FormArray;
  }

  addPhoto(): void {
    this.photos.push(
      this.formBuilder.control('', [
        Validators.required,
        urlValidator
      ])
    );
  }

  removePhoto(index: number): void {
    if (this.photos.length > 1) {
      this.photos.removeAt(index);
    }
  }

  onSubmit(): void {
    if (this.stayForm.invalid) {
      this.stayForm.markAllAsTouched();
      return;
    }

    this.submitting.set(true);
    this.submitError.set('');

    const formValue = this.stayForm.value;

    const newStay: CreateStayRequest = {
      title: formValue.title,
      location: formValue.location,
      pricePerNight: Number(formValue.pricePerNight),
      description: formValue.description,
      superhost: formValue.superhost,
      image: formValue.photos[0],
      rating: 0
    };

    this.staysService.createStay(newStay).subscribe({
      next: (createdStay) => {
        this.submitting.set(false);
        this.router.navigate(['/stays', createdStay.id]);
      },
      error: () => {
        this.submitting.set(false);
        this.submitError.set(
          'Something went wrong while creating the stay. Please try again.'
        );
      }
    });
  }
}