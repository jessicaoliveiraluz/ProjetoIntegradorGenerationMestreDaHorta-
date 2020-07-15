import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/model/Usuarios';
import { UsuariosService } from 'src/app/service/usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario-editar',
  templateUrl: './usuario-editar.component.html',
  styleUrls: ['./usuario-editar.component.css']
})
export class UsuarioEditarComponent implements OnInit {

  usuario: Usuarios = new Usuarios

  constructor(private usuariosService: UsuariosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id']
    this.findById(id)
    window.scroll(0, 0)

  }

  findById(id: number) {
    this.usuariosService.getByIdUsuario(id).subscribe((resp: Usuarios) => {
      this.usuario = resp
    })
  }

  salvar() {
    this.usuariosService.editarUsuario(this.usuario).subscribe((resp: Usuarios) => {
      this.usuario = resp
      this.router.navigate(['/administrador/usuarios'])
      location.assign('/administrador/usuarios')

    })
  }

  cancelar() {
    this.router.navigate(['/administrador/usuarios'])
  }

}
