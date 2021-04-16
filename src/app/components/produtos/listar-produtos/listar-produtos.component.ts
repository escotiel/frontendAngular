import { IProduto } from './../../../model/IProduto.model';
import { ProdutosService } from './../../../services/produtos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  /*listaStrings: string[] = ['Primeiro','Segundo','Terceiro'];
  listaNumeros: number[] = [15,15.18,100];

  //objeto
  objetoModelo = {
    nome: 'Robson Escotiel',
    idade: 40,
    altura: 1.75,
    graduado: true
  };*/

  //array de objetos (any aceita qualquer tipo de informação)
  listaProdutos:IProduto[] = [
    /*{nome: 'Curso de Angular', preco: 35.56, validade: '2021-04-12', id: 1},
    {nome: 'Curso de Ionic', preco: 50, validade: '2021-04-12', id: 2, promocao: true},
    {id: 3, nome: 'Curso de Ionica Avançado', preco: 52.99, validade: '2021-04-12'},*/
  ] //a exibição vai ser direto no HTML usando for

  constructor(private produtoService: ProdutosService) {
    /*for (let item of this.listaStrings){ //let permite criar variáveis dentro de métodos
      console.log(item);
    }

    for (const item of this.listaNumeros){
      console.log(item);
    }

    //imprime todos os itens do objeto
   console.log(this.objetoModelo);

   //imprime um único item do objeto
   console.log(this.objetoModelo.nome);*/
   }

  ngOnInit(): void { //quando este componente for inicializado
    this.carregarProdutos();
  }

//método carregar Produtos do backend
carregarProdutos(): void{
  this.produtoService.buscarTodos().subscribe(retorno => { //subscrive -> aciona o observer (http_client)
    this.listaProdutos = retorno;
  });
}

deletar(produto: IProduto):void{
  this.produtoService.excluir(produto.id).subscribe(() =>{
    this.produtoService.exibirMensagem(
      'SISTEMA',
      `${produto.nome} foi excluído com sucesso!`,
      'toast-error'
    );
    this.carregarProdutos();
  });
}

}
