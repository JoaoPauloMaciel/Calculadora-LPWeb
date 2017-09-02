import { Component } from '@angular/core';


@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent{
  title = 'app';
  tela = '';
  operador = '';
  memoria = 0;
  resultado = 0;
  valor: Number;
  
  //Botoes
  butao(valor){
    this.tela += valor;
  }
  
  //Operações
  subtracao(){
      this.memoria = Number(this.tela);
      this.operador = '-';
      this.tela = '';      
  }

  adcao(){
    this.memoria = Number(this.tela);
    this.operador = '+';
    this.tela = '';
  }

  divisao (){
    this.memoria = Number(this.tela);
    this.operador = '/';
    this.tela = '';      
  }

  multiplicacao (){
  this.memoria = Number(this.tela);
  this.operador = 'x';
  this.tela = '';
  }

  //Operadores
  resolucao(){
    if (this.operador == '-'){
      this.resultado = this.memoria - Number(this.tela);
      this.tela = String(this.resultado);
      this.operador='';
    }
    else{
      if (this.operador == '+'){
        this.resultado = this.memoria + Number(this.tela);
        this.tela = String(this.resultado);
        this.operador='';
      }
      else{
        if (this.operador == '/'){
          this.resultado = this.memoria / Number(this.tela);
          this.tela = String(this.resultado);
          this.operador='';
        }
        else{
          if (this.operador == 'x'){
            this.resultado = this.memoria * Number(this.tela);
            this.tela = String(this.resultado);
            this.operador='';
          }
        }
      }
    }
  }
  limpar(){
    this.tela = '';
    this.memoria = 0;
    this.resultado = 0;
    this.operador = '';
  }

}
