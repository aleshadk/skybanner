import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


export interface UserData {
  class?: number;
}

@Injectable({
  providedIn: 'root'
})
export class StateSettingsService {
  public form = new FormGroup({
    class: new FormControl()
  });

  public data = new BehaviorSubject<UserData>({
    class: undefined
  });

  constructor() {
    const moh = localStorage.getItem('moh');
    if (moh) {
      this.data.next(JSON.parse(moh));
    }

  }

  public refresh(): void {
    localStorage.setItem('moh', JSON.stringify(this.form.value));
    location.reload();
  }
}
