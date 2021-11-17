import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  }

  public submit(): void {
    console.log(this.state.form.value);
  }
}
