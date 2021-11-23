import { Component, Input, OnInit } from '@angular/core';
import { IAdglareImgCreative } from '../banner.interface';

@Component({
  selector: 'app-img-banner',
  templateUrl: './img-banner.component.html',
  styleUrls: ['./img-banner.component.scss']
})
export class ImgBannerComponent implements OnInit {

  @Input() data: IAdglareImgCreative;
  constructor() { }

  ngOnInit(): void {
  }

}
