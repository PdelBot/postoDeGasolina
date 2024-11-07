import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GasolinaListComponent } from './components/gasolina-list/gasolina-list.component';
import { provideHttpClient } from '@angular/common/http';
import { MenuComponent } from './shared/menu/menu.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    GasolinaListComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CommonModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
