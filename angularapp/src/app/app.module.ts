import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { ResumeComponent } from './resume-component/resume-component.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { SampleComponent } from './sample/sample.component';
import { ChocolateComponent } from './chocolate/chocolate.component';
import { SubmitComponent } from './submit/submit.component';
import {FormsModule} from "@angular/forms";
import {MdbRippleModule} from "mdb-angular-ui-kit/ripple";


@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    HeaderComponent,
    FooterComponent,
    SampleComponent,
    ChocolateComponent,
    SubmitComponent,
  ],
  imports: [
    BrowserModule, MdbCheckboxModule, AppRoutingModule, HttpClientModule, FormsModule, MdbRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent, FooterComponent]
})
export class AppModule { }
