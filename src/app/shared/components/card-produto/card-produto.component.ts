import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-produto', //igual no home.component.html
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css']
})
export class CardProdutoComponent implements OnInit {

//inputs (variaveis para o HTML do CARD)

@Input() foto: string;
@Input() nomeProduto: string;
@Input() promocao: boolean;
@Input() idProduto: number;
@Input() dataValidade: string;
@Input() precoProduto: number;

  constructor() { }

  ngOnInit(): void {
  }

}
