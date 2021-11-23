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
    class: new FormControl(),
    page: new FormControl(),
    olympiadResult: new FormControl(),
    pollState: new FormControl()
  });

  constructor(private router: Router) {
    const moh = localStorage.getItem('moh');
    if (moh) {
      const data = JSON.parse(moh);
      Object.entries(data).forEach(z => {
        if (this.form.controls[z[0]]) {
          this.form.controls[z[0]].setValue(z[1]);
        }
      })
    }

    this.form.valueChanges.subscribe(() => {
      localStorage.setItem('moh', JSON.stringify(this.form.value));
    });
  }

  public refresh(): void {
    this.router.navigate([this.form.controls.page.value]);
    localStorage.setItem('moh', JSON.stringify(this.form.value));
    //location.reload();
  }
}
