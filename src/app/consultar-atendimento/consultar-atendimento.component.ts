import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Component({
  selector: 'app-consultar-atendimento',
  templateUrl: './consultar-atendimento.component.html',
  styleUrls: ['./consultar-atendimento.component.css']
})
export class ConsultarAtendimentoComponent implements OnInit {
 
  //array para armazenar os atendimentos
  atendimentos: any[] = [];
 
  constructor(
    //inicializando o atributo
    private httpClient: HttpClient
  ) { }
 
  //Método executado quando a página é aberta
  ngOnInit(): void {
 
    //realizando uma requisição GET para consulta de atendimentos
    this.httpClient.get('http://localhost:8080/api/atendimentos')
      .subscribe(
        (data) => {
          //armazenar os dados dos atendimentos
          this.atendimentos = data as any[];
        },
        (e) => {
          console.log(e);
        }
      )
  }
 
}
 



