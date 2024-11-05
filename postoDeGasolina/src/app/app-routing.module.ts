import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GasolinaCardComponent } from './components/gasolina-card/gasolina-card.component';

const routes: Routes = [

  {path: 'listaGasolina', component: GasolinaCardComponent,  pathMatch: 'full'},  
  {path: '', redirectTo: '/listaGasolina', pathMatch: 'full'},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
