import { Component, OnInit } from '@angular/core';
import { AdglareCreative } from 'src/app/core/banners/banner.interface';
import { StateSettingsService } from 'src/app/panel/state-settings.service';
import {AdglareService} from './../../core/banners/adglare.service'

interface IOlympiadBanner {
  text: string;
  button: string;
  imageUrl: string;
  redirectUrl: string;
  background: string;
}

@Component({
  selector: 'app-olympiad',
  templateUrl: './olympiad.component.html',
  styleUrls: ['./olympiad.component.scss']
})
export class OlympiadComponent implements OnInit {
  private zoneId = '340701058';
  public result = 0;
  public text = 'Ого, довольно неплохо';

  // null если креатив невалидный, undefined если его ещё не загрузили
  public creative: IOlympiadBanner | null | undefined = undefined;

  constructor(
    private adglare: AdglareService,
    private state: StateSettingsService
  ) { }

  async ngOnInit() {
    this.result = +this.state.form.controls.olympiadResult.value;

    this.text = this.result > 80
      ? `${this.result} из 100, ну просто один из лучших`
      : `Твой результат ${this.result} из 100`;

    this.adglare.params.olympiadResult = this.result;
    const data = await this.adglare.getCreativeByPlacement(this.zoneId).toPromise();
    this.creative = this.parseCreative(data);
  }

  private parseCreative(data: AdglareCreative): IOlympiadBanner | null {
    if (data.creative_type !== 'image') {
      return null;
    }
 
    if (!data.custom_fields) {
      return null;
    }

    if (!data.custom_fields.text || !data.custom_fields.button || !data.custom_fields.background) {
      return null;
    }

    return {
      button: data.custom_fields.button,
      text: data.custom_fields.text,
      imageUrl: data.creative_data.image_url,
      redirectUrl: data.creative_data.click_url,
      background: data.custom_fields.background
    }
  }

}
