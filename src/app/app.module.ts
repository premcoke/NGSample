import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePickerModule } from '@syncfusion/ej2-ng-calendars';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule,DatePickerModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
