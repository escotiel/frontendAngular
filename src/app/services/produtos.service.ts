import { environment } from './../../environments/environment';
import { IProduto } from './../model/IProduto.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators'; //manualmente
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private URL: string = environment.URL;

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  buscarTodos(): Observable<IProduto[]>{  //observer fica o tempo todo monitorando
    return this.http.get<IProduto[]>(this.URL).pipe(  //pipe permite concatenação de vários métodos
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }

  buscarPorId(id: number): Observable<IProduto>{  //observer fica o tempo todo monitorando
    return this.http.get<IProduto>(`${this.URL}/${id}`).pipe(  //pipe permite concatenação de vários métodos
      map(retorno => retorno), //sucesso
      catchError(erro => this.exibeErro(erro)) //erro
    );
  }

  cadastrar(produto: IProduto):Observable<IProduto>{
    return this.http.post<IProduto>(this.URL, produto).pipe(  //pipe permite concatenação de vários métodos
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }

  atualizar(produto: IProduto):Observable<IProduto>{
    return this.http.put<IProduto>(`${this.URL}/${produto.id}`,produto).pipe(  //pipe permite concatenação de vários métodos
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }

  excluir(id: number):Observable<any>{
    return this.http.delete<any>(`${this.URL}/${id}`).pipe(  //pipe permite concatenação de vários métodos
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }

  exibeErro(e: any):Observable<any>{
    this.exibirMensagem('Erro!!','Não foi possível realizar a operação', 'toast-error');
    return EMPTY;
  }

  exibirMensagem(titulo:string, mensagem:string, tipo:string):void{
    this.toastr.show(mensagem, titulo, {closeButton:true, progressBar:true},tipo);
  }
}
