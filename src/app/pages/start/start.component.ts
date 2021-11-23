import { Component, OnInit } from '@angular/core';
import { StateSettingsService } from 'src/app/panel/state-settings.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  public class: number | undefined = undefined;
  public data = ''

  constructor(private state: StateSettingsService) {
  }

  ngOnInit(): void {
    console.log('ngOnInit of start');
  }

}
