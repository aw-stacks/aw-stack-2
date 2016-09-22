import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HomeComponent } from './pages/home/home';

@NgModule({
  imports: [BrowserModule],
  declarations: [HomeComponent],
  bootstrap: [HomeComponent]
})

export class AppModule { }
