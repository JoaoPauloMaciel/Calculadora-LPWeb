import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  tela = '';
  operador = '';
  memoria = 0;
  resultado = 0;
  valor: Number;
  
  //Botoes
  butao0(){
    this.tela += 0;
  }
  butao1(){
    this.tela += 1;
  }
  butao2(){
    this.tela += 2;
  }
  butao3(){
    this.tela += 3;
  }
  butao4(){
    this.tela += 4;
  }
  butao5(){
    this.tela += 5;
  }
  butao6(){
    this.tela += 6;
  }
  butao7(){
    this.tela += 7;
  }
  butao8(){
    this.tela += 8;
  }
  butao9(){
    this.tela += 9;
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
