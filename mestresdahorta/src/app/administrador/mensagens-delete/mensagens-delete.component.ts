import { Component, OnInit } from '@angular/core';
import { ContatoService } from 'src/app/service/contato.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contato } from 'src/app/model/Contato';

@Component({
  selector: 'app-mensagens-delete',
  templateUrl: './mensagens-delete.component.html',
  styleUrls: ['./mensagens-delete.component.css']
})
export class MensagensDeleteComponent implements OnInit {
  contato: Contato = new Contato
  delOk: boolean = false


  constructor(private ContatoService: ContatoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id: number = this.route.snapshot.params['id']
    this.findById(id)

  }

  findById(id: number) {
    this.ContatoService.getByIdContato(id).subscribe((resp: Contato) => {
      this.contato = resp
    }, error => {
      console.log(`Error: ${error.status}, nao conseguimos pegar o ID`)
    }

    )
  }

  btnSim() {
    this.ContatoService.deleteContato(this.contato.id).subscribe(() => {
      this.delOk = true
      this.router.navigate(['/administrador/mensagens'])
      localStorage.setItem('delOk', this.delOk.toString())

    })

  }

  btnNao() {
    this.router.navigate(['/administrador/usuarios'])
  }

}
