import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

@NgModule({
  imports: [ BrowserModule, FormsModule, ButtonsModule,BrowserModule, BrowserAnimationsModule,
           ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
