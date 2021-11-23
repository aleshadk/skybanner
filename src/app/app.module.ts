import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelComponent } from './panel/panel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { StartComponent } from './pages/start/start.component';
import { HtmlBannerComponent } from './core/banners/html-banner/html-banner.component';
import { BannerComponent } from './core/banners/banner/banner.component';
import { HttpClientModule } from '@angular/common/http';
import { ImgBannerComponent } from './core/banners/img-banner/img-banner.component';
import { PollComponent } from './pages/poll/poll.component';
import { OlympiadComponent } from './pages/olympiad/olympiad.component';
import { CabinetComponent } from './pages/cabinet/cabinet.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    StartComponent,
    HtmlBannerComponent,
    BannerComponent,
    ImgBannerComponent,
    PollComponent,
    OlympiadComponent,
    CabinetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
