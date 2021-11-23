import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { StateSettingsService } from './state-settings.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  public controls: {[key: string]: FormControl}


  constructor(private state: StateSettingsService) {
    this.controls = state.form.controls as {[key: string]: FormControl};
  }

  ngOnInit(): void {
    this.onPageSelected(this.controls.page.value);
    this.controls.page.valueChanges.subscribe(value => this.onPageSelected(value));
  }

  public submit(): void {
    this.state.refresh();
  }

  public onPageSelected(value: string): void {
    if (value === '/olympiad') {
      this.controls.olympiadResult.enable();
    } else {
      this.controls.olympiadResult.disable();
      this.controls.olympiadResult.setValue(null);
    }

    if (value === '/poll') {
      this.controls.pollState.enable();
    } else {
      this.controls.pollState.disable();
    }
  }
}
