import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppComponent} from "./app.component";
import {MatExpansionModule} from '@angular/material/expansion';
import { TocService } from "./toc-service";
import {ExpansionPanelComponent} from './expansion-panel/expansion-panel.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    ExpansionPanelComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
  ],
  providers: [
    TocService,
  ],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
