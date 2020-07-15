import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../model/Usuarios';
import { UsuariosService } from '../service/usuarios.service';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cadastro: Usuarios = new Usuarios
  usuarioLogin: UsuarioLogin = new UsuarioLogin

  senha: string
  confirmaSenha: string

  alerta: boolean = false

  alertaConfirma: boolean = false

  validaEmail: boolean = false

  alerta2: boolean = false
  alertaSenha: boolean = false


  constructor(private usuariosService: UsuariosService, private router: Router) { }

  ngOnInit() {

    window.scroll(0, 0)

    this.alerta2 = false

  }

  cadastrar() {
    if (this.cadastro.senha === this.confirmaSenha) {
      this.usuariosService.cadastroUsuario(this.cadastro).subscribe((resp: Usuarios) => {
        this.cadastro = resp;
        this.alerta2 = true;
        window.scroll(0, 0)
        setTimeout(() => {
          //   location.assign('/cadastro')
          this.router.navigate(['/cadastro'])
        }, 3000);
      });
    } else {
      this.alertaSenha = true
    }

  }

  //   var email = this.cadastro.email

  //   if (email.includes("@") && email.endsWith('.com') || email.endsWith('.br') || email.endsWith('.net') || email.endsWith('.co') || email.endsWith('.org') || email.endsWith('.gov')) {
  //     this.validaEmail = true;

  //   }
  //   else if (this.cadastro.senha === this.confirmaSenha && this.validaEmail === true) {
  //     this.usuariosService.cadastroUsuario(this.cadastro).subscribe((resp: Usuarios) => {
  //       this.cadastro = resp;
  //       // location.assign('/cadastro')
  //       this.router.navigate(['/cadastro'])
  //       this.alerta2 = true;
  //     });
  //   } else {
  //     this.alertaSenha = true
  //   }
  // }






  fazerLogin() {
    // this.alerta = false;

    this.usuariosService.logar(this.usuarioLogin).subscribe((resp: UsuarioLogin) => {
      this.usuarioLogin = resp
      localStorage.setItem('token', this.usuarioLogin.token);
      localStorage.setItem('nome', this.usuarioLogin.nome);
      localStorage.setItem('usuario', this.usuarioLogin.usuario);
      localStorage.setItem('perfil',this.usuarioLogin.usuario);
      this.router.navigate(['/produtos']);
    }, err => {
      this.alerta = true;
    })
  }


}
