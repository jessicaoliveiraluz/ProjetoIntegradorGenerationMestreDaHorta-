import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/model/Produtos';
import { ProdutosService } from 'src/app/service/produtos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produto-editar',
  templateUrl: './produto-editar.component.html',
  styleUrls: ['./produto-editar.component.css']
})
export class ProdutoEditarComponent implements OnInit {

  produto: Produtos = new Produtos

  constructor(private produtosService: ProdutosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id']
    this.findById(id)
    window.scroll(0, 0)
  }

  findById(id: number) {
    this.produtosService.getByIdProdutos(id).subscribe((resp: Produtos) => {
      this.produto = resp
    })
  }

  salvar() {
    this.produtosService.putProdutos(this.produto).subscribe((resp: Produtos) => {
      this.produto = resp
      this.router.navigate(['/administrador/produtos'])
      location.assign('/administrador/produtos')

    })
  }

  cancelar() {
    this.router.navigate(['/administrador/produtos'])
  }

}