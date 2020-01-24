import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JogoDaVelhaModule, JogoDaVelhaService } from './jogo-da-velha';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JogoDaVelhaModule
  ],
  providers: [
    JogoDaVelhaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
