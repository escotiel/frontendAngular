import { ProdutosService } from './../../../services/produtos.service';
import { IProduto } from './../../../model/IProduto.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

 /* nome: string;
  validade: string;
  preco: number;*/

  produto: IProduto = {
    nome: null,
    validade: null,
    preco: null
  };

  constructor(private ProdutosService: ProdutosService, private router: Router) { }

  ngOnInit(): void {
  }

  //criando método no angular
  salvarProduto():void{
    /*console.log('Nome: ', this.nome);
    console.log('Validade: ', this.validade);
    console.log('Preço: ', this.preco);
    alert('Produto salvo com sucesso!');*/

    this.ProdutosService.cadastrar(this.produto).subscribe(retorno =>{
      this.produto = retorno;
      this.ProdutosService.exibirMensagem(
        'SISTEMA',
        `${this.produto.nome} foi cadastrado com sucesso! ID: ${this.produto.id}`,
        'toast-sucess'
      );
      this.router.navigate(['/produtos']);
    });

  }


}
