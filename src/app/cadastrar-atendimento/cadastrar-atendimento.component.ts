import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-cadastrar-atendimento',
  templateUrl: './cadastrar-atendimento.component.html',
  styleUrls: ['./cadastrar-atendimento.component.css']
})
export class CadastrarAtendimentoComponent implements OnInit {
 
  //atributos
  medicos: any[] = [];
  pacientes: any[] = [];
 
  mensagem: string = "";
 
  constructor(
    //inicializando o atributo
    private httpClient: HttpClient
  ) { }
 
  //montando a estrutura do formulário
  formCadastro = new FormGroup({
    //campos do formulário
    dataHora: new FormControl('', [Validators.required]),
    idMedico: new FormControl('', [Validators.required]),
    idPaciente: new FormControl('', [Validators.required]),
    medicamento: new FormControl('', [Validators.required]),
    prescricao: new FormControl('', [Validators.required])
  });
 
  //acessando o formulário/campos na página HTML
  get form(): any {
    return this.formCadastro.controls;
  }
 
  //evento executado quando a página é carregada
  ngOnInit(): void {
 
    //consultar os pacientes
    this.httpClient.get('http://localhost:8080/api/pacientes')
      .subscribe(
        (data) => {
          this.pacientes = data as any[];
        },
        (e) => {
          console.log(e);
        }
      )
 
    //consultar os médicos
    this.httpClient.get('http://localhost:8080/api/medicos')
      .subscribe(
        (data) => {
          this.medicos = data as any[];
        },
        (e) => {
          console.log(e);
        }
      )
  }
 
  //função para processar o evento de submit do formulario
  onSubmit(): void {
 
    //montando os dados para enviar para a API
    var request = {
      dataHora: this.formCadastro.value.dataHora,
      idPaciente: this.formCadastro.value.idPaciente,
      idMedico: this.formCadastro.value.idMedico,
      receitas: [
        {
          medicamento: this.formCadastro.value.medicamento,
          prescricao: this.formCadastro.value.prescricao
        }
      ]
    };
 
    //enviando a requisição POST para cadastro de atendimento na API
    this.httpClient.post('http://localhost:8080/api/atendimentos', request,
      { responseType : 'text' })
      .subscribe(
        (data) => {
          this.mensagem = data; //exibir mensagem de erro na página
          this.formCadastro.reset(); //limpando os campos do formulário
        },
        (e) => {
          console.log(e);
        }
      )
  }
}
 


