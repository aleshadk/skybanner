import { Component, OnInit } from '@angular/core';
import { AdglareService } from 'src/app/core/banners/adglare.service';
import { AdglareCreative } from 'src/app/core/banners/banner.interface';
import { PollService } from 'src/app/core/poll/poll.service';
import { StateSettingsService } from 'src/app/panel/state-settings.service';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.scss']
})
export class PollComponent implements OnInit {
  private zoneId = '947352141';

  constructor(
    private pollService: PollService,
    private adglareService: AdglareService,
    private state: StateSettingsService,
  ) { }

  ngOnInit(): void {
    this.loadAd();
  }

  private async loadAd(): Promise<void> {
    if (+this.state.form.controls.pollState.value) {
      return;
    }

    try {
      const classNumber = this.state.form.controls.class.value;
      this.adglareService.params.userClass = +classNumber || undefined;
      const data = await this.adglareService.getCreativeByPlacement(this.zoneId).toPromise();
      this.tryShowPoll(data);
    } catch(e) {
      console.log(e);
    } 
  }

  private tryShowPoll(data: AdglareCreative): void {
    if (!data.custom_fields) {
      return;
    }

    if (data.custom_fields.text && data.custom_fields.title && data.custom_fields.url) {
      this.pollService.showPoll({
        text: data.custom_fields.text,
        title: data.custom_fields.title,
        url: data.custom_fields.url
      }).afterClosed().subscribe(() => {
        this.state.form.controls.pollState.setValue('1');
      });
    }
  }

}
