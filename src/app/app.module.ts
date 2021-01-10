import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WizardComponent } from './components/wizard/wizard.component';
import { Paso1Component } from './pages/paso1/paso1.component';
import { Paso2Component } from './pages/paso2/paso2.component';
import { Paso3Component } from './pages/paso3/paso3.component';
import { FinComponent } from './pages/fin/fin.component';
import { RelojComponent } from './components/reloj/reloj.component';
import { InicioComponent } from './pages/inicio/inicio.component';


@NgModule({
  declarations: [
    AppComponent,
    WizardComponent,
    Paso1Component,
    Paso2Component,
    Paso3Component,
    FinComponent,
    RelojComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
