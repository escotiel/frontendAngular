import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nomeProduto: string = 'Curso de Angular'; //não precisa usar public (está implícito)
  anuncio: string = `O ${this.nomeProduto} está em promoção!` //usa a crase pra colocar uma variável dentro de uma string diretamente (template screen)
  idProduto: number = 3.5; //inteiro
  precoProduto: number = 2.51; //ponto flutuante
  promocao: boolean = true;
  foto: string = 'assets/img/crud.png';
  dataValidade = '2021-07-04';
  mensagem = 'Coloquei o arquivo mais atualizado (semana 3), pois novamente esqueci de enviar no prazo, mesmo estando acompanhando as aulas certinho! ;-(';

  constructor() {
    //Variáveis de string com concatenação
   // this.anuncio = 'O ' + this.nomeProduto + ' está em promoção!'

   console.log('Nome do Produto: ', this.nomeProduto);
   console.log('Anúncio ', this.anuncio);
   console.log('ID: ', this.idProduto);
   console.log('Preço: R$ ', this.precoProduto);
   console.log('Promoção? : ', this.promocao);

    //Escopo das variáveis dentro do código
    //Databind - exibir conteúdo (sincronizar/atualizar/renderizar) de variáveis dentro de um HTML
    //var variavel1;
    //let variavel2;
   // const variavel3 = 1; //sempre que declarar constante devo atribuir um valor

    //interpolation {{expression}} que vai do TypeScrit do HTML

  }

  ngOnInit(): void {
  }

}
