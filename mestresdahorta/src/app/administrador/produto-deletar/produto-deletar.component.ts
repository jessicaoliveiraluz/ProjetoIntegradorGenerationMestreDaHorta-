import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/model/Produtos';
import { ProdutosService } from 'src/app/service/produtos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-deletar',
  templateUrl: './produto-deletar.component.html',
  styleUrls: ['./produto-deletar.component.css']
})
export class ProdutoDeletarComponent implements OnInit {

  produto: Produtos = new Produtos
  delOk: boolean = false

  constructor(private produtosService: ProdutosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id: number = this.route.snapshot.params['id']
    this.findById(id)
    window.scroll(0, 0)



  }

  findById(id: number) {
    this.produtosService.getByIdProdutos(id).subscribe((resp: Produtos) => {
      this.produto = resp
    }, error => {
      console.log(`Error: ${error.status}, nao conseguimos pegar o ID`)
    }

    )
  }

  btnSim() {
    this.produtosService.deleteProdutos(this.produto.id).subscribe(() => {
      this.delOk = true
      this.router.navigate(['/administrador/produtos'])
      localStorage.setItem('delOk', this.delOk.toString())

    })

  }

  btnNao() {
    this.router.navigate(['/administrador/produtos'])
  }

}
