import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
import { AppComponent } from './app.component';
import { CadastrarAtendimentoComponent } from './cadastrar-atendimento/cadastrar-atendimento.component';
import { ConsultarAtendimentoComponent } from './consultar-atendimento/consultar-atendimento.component';
 
//configurar uma rota (URL) para cada componente
const routes: Routes = [
  { path: 'cadastrar-atendimento', component: CadastrarAtendimentoComponent },
  { path: 'consultar-atendimento', component: ConsultarAtendimentoComponent },
]
 
@NgModule({
  declarations: [
    AppComponent,
    CadastrarAtendimentoComponent,
    ConsultarAtendimentoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //formulários reativos
    ReactiveFormsModule, //formulários reativos
    HttpClientModule, //integração com serviços de API!
    RouterModule.forRoot(routes) //registrando as rotas!
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 


