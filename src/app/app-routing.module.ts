import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnvioComponent } from './components/envio/envio.component';
import { RecepcaoComponent } from './components/recepcao/recepcao.component';
import { ConsultarSituacaoComponent } from './components/consultar-situacao/consultar-situacao.component';

const routes: Routes = [
  { path: '', redirectTo: 'envio', pathMatch: 'full' },
  { path: 'envio', component: EnvioComponent },
  { path: 'recepcao', component: RecepcaoComponent },
  { path: 'consultar-situacao', component: ConsultarSituacaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
