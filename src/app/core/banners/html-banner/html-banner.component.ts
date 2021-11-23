import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IAdglareHTMLCreative } from '../banner.interface';

@Component({
  selector: 'app-html-banner',
  templateUrl: './html-banner.component.html',
  styleUrls: ['./html-banner.component.scss']
})
export class HtmlBannerComponent implements OnInit {
  @Input() data: IAdglareHTMLCreative;
  public code: SafeHtml;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.code = this.sanitizer.bypassSecurityTrustHtml(this.data.creative_data.code);
  }
}
