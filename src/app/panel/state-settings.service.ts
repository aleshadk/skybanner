import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class StateSettingsService {
  public form = new FormGroup({
    class: new FormControl()
  });

  constructor() { }
}
