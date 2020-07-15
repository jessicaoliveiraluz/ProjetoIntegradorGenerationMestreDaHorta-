import { Component, OnInit } from '@angular/core';

import { UsuariosService } from '../service/usuarios.service';
import { Usuarios } from '../model/Usuarios';

import { ProdutosService } from '../service/produtos.service';
import { Produtos } from '../model/Produtos';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  listaUsuarios: Usuarios[];


  constructor(private usuariosService: UsuariosService, private produtosService: ProdutosService) { }

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