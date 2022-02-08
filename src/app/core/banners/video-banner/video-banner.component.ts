import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { IAdglareVideoCreative } from '../banner.interface';

@Component({
  selector: 'app-video-rennab',
  templateUrl: './video-banner.component.html',
  styleUrls: ['./video-banner.component.scss']
})
export class VideoBannerComponent implements OnInit, AfterViewInit {
  @ViewChild('video') video: ElementRef;
  @Input() data: IAdglareVideoCreative;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    (this.video.nativeElement as any).muted = true;
    (this.video.nativeElement as any).play();
    (this.video.nativeElement as any).muted = true;
  }
}
