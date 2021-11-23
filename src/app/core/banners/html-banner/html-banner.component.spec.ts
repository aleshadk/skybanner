import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlBannerComponent } from './html-banner.component';

describe('HtmlBannerComponent', () => {
  let component: HtmlBannerComponent;
  let fixture: ComponentFixture<HtmlBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
