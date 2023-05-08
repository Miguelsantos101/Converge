import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EnvioComponent } from './components/envio/envio.component';
import { AppRoutingModule } from './app-routing.module';
import { RecepcaoComponent } from './components/recepcao/recepcao.component';
import { ConsultarSituacaoComponent } from './components/consultar-situacao/consultar-situacao.component';

@NgModule({
  declarations: [
    AppComponent,
    EnvioComponent,
    RecepcaoComponent,
    ConsultarSituacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
