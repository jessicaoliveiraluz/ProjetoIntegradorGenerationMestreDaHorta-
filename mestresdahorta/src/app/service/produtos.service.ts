import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produtos } from '../model/Produtos';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) {

  }


    // public pesquisaProd(termo:string): Observable<Produtos[]> {
    // return this.http.get(`http://localhost:8080/produtos?nome=${termo}`)
    //   .map((resposta:any) =>resposta.json())
    // }
    


  findAllProdutos(pagina, quantidade, ordenar, direcao) {
    return this.http.get(`http://localhost:8080/produtos?page=${pagina}&size=${quantidade}&sort=${ordenar},${direcao}`);
  }
  
  findAllProdutosByName(nome, pagina, quantidade, ordenar, direcao) {
    return this.http.get(`http://localhost:8080/produtos/nome/${nome}?page=${pagina}&size=${quantidade}&sort=${ordenar},${direcao}`);
  }

  postProdutos(produto: Produtos) {
    return this.http.post('http://localhost:8080/produtos', produto);
  }

  putProdutos(produto: Produtos) {
    return this.http.put('http://localhost:8080/produtos', produto);

  }
  getByIdProdutos(id: number) {
    return this.http.get(`http://localhost:8080/produtos/${id}`);
  }

  deleteProdutos(id: number) {
    return this.http.delete(`http://localhost:8080/produtos/${id}`);

  }

}