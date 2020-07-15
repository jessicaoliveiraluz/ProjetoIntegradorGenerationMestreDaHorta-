import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/model/Usuarios';
import { UsuariosService } from 'src/app/service/usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario-deletar',
  templateUrl: './usuario-deletar.component.html',
  styleUrls: ['./usuario-deletar.component.css']
})
export class UsuarioDeletarComponent implements OnInit {


  usuario: Usuarios = new Usuarios
  delOk: boolean = false

  constructor(private usuariosService: UsuariosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id: number = this.route.snapshot.params['id']
    this.findById(id)
    window.scroll(0, 0)

  }

  findById(id: number) {
    this.usuariosService.getByIdUsuario(id).subscribe((resp: Usuarios) => {
      this.usuario = resp
    }, error => {
      console.log(`Error: ${error.status}, nao conseguimos pegar o ID`)
    }

    )
  }

  btnSim() {
    this.usuariosService.deleteUsuario(this.usuario.id).subscribe(() => {
      this.delOk = true
      this.router.navigate(['/administrador/usuarios'])
      localStorage.setItem('delOk', this.delOk.toString())

    })

  }

  btnNao() {
    this.router.navigate(['/administrador/usuarios'])
  }

}
