import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from "./app.component";
import { MatExpansionModule } from '@angular/material/expansion';
import { TocService } from "./toc-service";
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';

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
    MatButtonModule,
  ],
  providers: [
    TocService,
  ],
})
export class AppModule { }
