import {NgModule, Component} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@Component({
  selector: 'hello-world',
  template: '<h1>Hello World</h1>'
})
class HelloWorldComponent { }

@NgModule({
  declarations: [
    HelloWorldComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [HelloWorldComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log("Error"))
