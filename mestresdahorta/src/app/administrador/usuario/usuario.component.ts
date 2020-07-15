import { Component, OnInit } from '@angular/core';

import { UsuariosService } from '../../service/usuarios.service';
import { Usuarios } from '../../model/Usuarios';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  listaUsuarios: Usuarios[];

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {

    this.findAllUsuarios();
    window.scroll(0, 0)

  }


  findAllUsuarios() {
    this.usuariosService.findAllUsuarios().subscribe((resp: Usuarios[]) => {
      this.listaUsuarios = resp;
    })
  }

}
