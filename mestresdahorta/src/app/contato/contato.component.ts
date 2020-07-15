import { Component, OnInit } from '@angular/core';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { ContatoService } from '../service/contato.service';
import { Contato } from '../model/Contato';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  faInstagram = faInstagram
faUser = faUser
faEnvelope = faEnvelope
faPhone =faPhone
contato: Contato = new Contato;
  constructor(private ContatoService:ContatoService) { }

  ngOnInit(): void {

    window.scroll(0, 0)

  }


  publicar() {
    this.ContatoService.postContato(this.contato).subscribe((resp: Contato) => {
      this.contato = resp;
      location.assign('/contato');
    })
  }

}
