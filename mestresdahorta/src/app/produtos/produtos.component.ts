import { Component, OnInit, Input } from '@angular/core';
import { Produtos } from '../model/Produtos';
import { ProdutosService } from '../service/produtos.service';
import { Conteudo } from '../model/Conteudo';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  // variaveis para resposta da api
    listaProdutos: Produtos[]
    produto: Produtos = new Produtos;
    conteudo: Conteudo = new Conteudo;
  
    //variaveis de opcoes do usuario
    @Input () barraPesquisa: string;
    pagina: number = 0;
    private quantidade: number = 12;
    numeroDePaginas:number;
    arrayDePaginas:number[] =[0];
    ultimaPagina:boolean;
  
    //variaveis ordenacao produto
    ordenar:string = "nome";
    direcao: string = "asc";
    quantidadePorPagina:string;
  
    constructor(private produtosService: ProdutosService) { }
  
    ngOnInit() {
      if(localStorage.getItem ("pesquisaBarra") != null){
        this.barraPesquisa = localStorage.getItem ("pesquisaBarra")
        this.findAllProdutosByName(this.barraPesquisa, this.pagina, this.quantidade, this.ordenar, this.direcao)
      }
      else{
      this.findAllProdutos(this.pagina, this.quantidade, this.ordenar, this.direcao);
      this.verificarNumeroDePaginas();
      }


      // ao iniciar seta as variaveis com os valores do filtro
      this.ordenar = (<HTMLInputElement>document.getElementById("filtrar-por-select")).value;
      this.direcao = (<HTMLInputElement>document.getElementById("ordem-select")).value;
      this.quantidade = parseInt((<HTMLInputElement>document.getElementById("npag-select")).value);
  
    }
  





    findAllProdutos(pagina, quantidade, ordenar, direcao) {
      this.produtosService.findAllProdutos(pagina, quantidade, ordenar, direcao).subscribe((resp: Conteudo) => {
        this.conteudo = resp;
        this.listaProdutos = this.conteudo.content;
        this.numeroDePaginas = this.conteudo.totalPages;
        this.ultimaPagina = this.conteudo.last;
        this.verificarNumeroDePaginas()
  
      })
    }
    // buscarPorNomeProduto(nome, pagina, quantidade) {
    //   this.produtosService.getByNomeprodutos(nome, pagina, quantidade).subscribe((resp: Conteudo) => {
    //     this.conteudo = resp;
    //     this.listaProdutos = this.conteudo.content;
    //     this.numeroDePaginas = this.conteudo.totalPages;
    //     this.verificarNumeroDePaginas()
    //   })
    // }
    
    findAllProdutosByName(nome,pagina, quantidade, ordenacao, direcao ) {
      this.produtosService.findAllProdutosByName(nome,pagina,quantidade,ordenacao,direcao).subscribe((resp: Conteudo)=> {
        this.conteudo = resp;
        this.listaProdutos = this.conteudo.content;
        this.numeroDePaginas = this.conteudo.totalPages;
        this.verificarNumeroDePaginas()
  
      })
    }
  
    // buscarProdutosOrdenados(pagina,quantidade,ordenacao,ordem) {
    //   this.produtosService.getByProdutosOrdenados(pagina,quantidade,ordenacao, ordem).subscribe((resp: Conteudo) => {
    //     this.conteudo = resp;
    //     this.listaProdutos = this.conteudo.content;
    //     this.numeroDePaginas = this.conteudo.totalPages;
    //     this.verificarNumeroDePaginas()
    //   })
  
    // }
  
  




  
    buttonPesquisar() {
      // se a barra de pesquisa for vazia ou menor que 1 ele mostra todos os produtos
      if(this.barraPesquisa == "" || this.barraPesquisa.length < 1 || this.barraPesquisa == null) {
        this.findAllProdutos(0, this.quantidade, this.ordenar, this.direcao)
        this.pagina = 0;
        this.verificarNumeroDePaginas()
      } else {
      this.findAllProdutosByName(this.barraPesquisa, 0, this.quantidade, this.ordenar, this.direcao);
      this.pagina = 0;
      this.verificarNumeroDePaginas()
    }
    }
  
    paginar(pagina: any) {
      this.pagina = pagina;
      this.findAllProdutos(this.pagina, this.quantidade, this.ordenar,this.direcao)
      // if(this.barraPesquisa != null) {
      //   this.buscarPorNomeProdutoOrdenados(this.barraPesquisa, this.pagina, this.quantidade, this.ordenar, this.direcao)
      //   window.scroll(0,0)
      // } else {
      //   this.findAllProdutos(pagina, this.quantidade);
      //   window.scroll(0,0)
      // }
     
    }
  
    verificarNumeroDePaginas(){
      this.arrayDePaginas.splice(0, this.arrayDePaginas.length)
      this.arrayDePaginas.splice(0, this.numeroDePaginas)
      for(let i = 0; i < this.numeroDePaginas; i++){
        this.arrayDePaginas[i] = i;
      }
    }
  
    filtrarProdutos () {
      this.ordenar = (<HTMLInputElement>document.getElementById("filtrar-por-select")).value;
      this.direcao = (<HTMLInputElement>document.getElementById("ordem-select")).value;
      this.quantidade = parseInt((<HTMLInputElement>document.getElementById("npag-select")).value);
      this.findAllProdutos(this.pagina, this.quantidade, this.ordenar, this.direcao);
      this.verificarNumeroDePaginas()
    } 
  }




