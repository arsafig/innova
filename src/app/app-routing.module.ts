import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WizardComponent } from './components/wizard/wizard.component';
import { FinComponent } from './pages/fin/fin.component';
import { Paso1Component } from './pages/paso1/paso1.component';
import { Paso2Component } from './pages/paso2/paso2.component';
import { Paso3Component } from './pages/paso3/paso3.component';
import { RelojComponent } from './components/reloj/reloj.component';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  {
    path: "wizard", component: WizardComponent, children: [
      { path: "p1", component: Paso1Component },
      { path: "p2", component: Paso2Component },
      { path: "p3", component: Paso3Component },
      { path: "fin", component: FinComponent }
    ]
  },
  {
    path: "reloj", component: RelojComponent
  },
  { path: "", component: InicioComponent },
  { path: "**", pathMatch: "full", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
