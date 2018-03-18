import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppComponent} from "./app.component";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
  ],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
