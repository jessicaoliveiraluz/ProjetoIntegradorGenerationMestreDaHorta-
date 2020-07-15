import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/service/produtos.service';
import { Produtos } from 'src/app/model/Produtos';
import { Conteudo } from 'src/app/model/Conteudo';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})



export class ProdutoComponent implements OnInit {



  // variaveis para resposta da api

  conteudo: Conteudo = new Conteudo;

  listaProdutos: Produtos[];

  produto: Produtos = new Produtos;

  alerta: boolean = false;


  //variaveis de opcoes do usuario
  barraPesquisa: string;

  pagina: number = 0;

  private quantidade: number = 60;

  numeroDePaginas:number;

  arrayDePaginas:number[] =[0];

  ultimaPagina:boolean;


  ordenar:string = "nome";
  direcao: string = "asc";
  quantidadePorPagina:number = 60;
  


  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.findAllProdutos(this.pagina, this.quantidade, this.ordenar, this.direcao);

    window.scroll(0, 0)

    let item: string = localStorage.getItem('delOk');

    if (item == 'true') {
      this.alerta = true;
      localStorage.clear();


      setTimeout(() => {
        location.assign('/administrador/produtos');
      }, 3000)

    }
  }

  findAllProdutosByName(nome,pagina, quantidade, ordenacao, direcao ) {
    this.produtosService.findAllProdutosByName(nome,pagina,quantidade,ordenacao,direcao).subscribe((resp: Conteudo)=> {
      this.conteudo = resp;
      

    })
  }

  verificarNumeroDePaginas(){
    if(this.numeroDePaginas == 0) {
      this.arrayDePaginas.splice(0, this.arrayDePaginas.length)
    }
    this.arrayDePaginas.splice(0, this.numeroDePaginas)
    for(let i = 0; i < this.numeroDePaginas; i++){
      this.arrayDePaginas[i] = i;
    }
  }

  findAllProdutos(pagina, quantidade, ordenar, direcao) {
    this.produtosService.findAllProdutos(pagina, quantidade, ordenar, direcao).subscribe((resp: Conteudo) => {
      this.conteudo = resp;
      this.listaProdutos = this.conteudo.content;
    })
  }

  postProduto() {
    this.produtosService.postProdutos(this.produto).subscribe((resp: Produtos) => {
      this.produto = resp;
      location.assign('/administrador/produtos');
    })
  }

}