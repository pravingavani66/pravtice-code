import { Injectable } from '@angular/core';
import { Notyf } from 'notyf';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  private notyf = new Notyf();

  constructor() {}

  showSuccess(message: string) {
    this.notyf.success(message);
  }
  showError(message: string) {
    this.notyf.error(message);
  }
}
