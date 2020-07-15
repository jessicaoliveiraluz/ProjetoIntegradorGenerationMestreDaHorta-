import { Component, OnInit } from '@angular/core';
import { ContatoService } from 'src/app/service/contato.service';
import { Contato } from 'src/app/model/Contato';

@Component({
  selector: 'app-mensagens',
  templateUrl: './mensagens.component.html',
  styleUrls: ['./mensagens.component.css']
})
export class MensagensComponent implements OnInit {

    listaContatos : Contato[]
    contato:Contato = new Contato

  constructor( private contatoService:ContatoService) { }

  ngOnInit() {
    this.findAllContatos()
  }

  findAllContatos(){
    this.contatoService.getAllContato().subscribe((resp: Contato[])=>{
      this.listaContatos = resp
    })
  }

}
