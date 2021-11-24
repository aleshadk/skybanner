import { Component, Input, OnInit } from '@angular/core';
import { AdglareService } from '../adglare.service';
import { AdglareCreative, IAdglareResponse } from '../banner.interface';

@Component({
  selector: 'app-rennab',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input() placementId: string;
  public data: AdglareCreative;

  constructor(private adglareService: AdglareService) { }

  async ngOnInit() {
    this.data = await this.adglareService.getCreativeByPlacement(this.placementId).toPromise();
  }

}
