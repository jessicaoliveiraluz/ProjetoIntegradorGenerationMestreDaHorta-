import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { DescricaoComponent } from './descricao/descricao.component';
import { FaqComponent } from './faq/faq.component';
import { ContatoComponent } from './contato/contato.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { ProdutoComponent } from './administrador/produto/produto.component';
import { ProdutoEditarComponent } from './administrador/produto-editar/produto-editar.component';
import { ProdutoDeletarComponent } from './administrador/produto-deletar/produto-deletar.component';
import { UsuarioComponent } from './administrador/usuario/usuario.component';
import { UsuarioEditarComponent } from './administrador/usuario-editar/usuario-editar.component';
import { UsuarioDeletarComponent } from './administrador/usuario-deletar/usuario-deletar.component';
import { MeuPerfilComponent } from './meu-perfil/meu-perfil.component';
import { MensagensComponent } from './administrador/mensagens/mensagens.component';
import { MensagensDeleteComponent } from './administrador/mensagens-delete/mensagens-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SobreNosComponent,
    CadastroComponent,
    ProdutosComponent,
    DescricaoComponent,
    FaqComponent,
    ContatoComponent,
    AdministradorComponent,
    ProdutoComponent,
    ProdutoEditarComponent,
    ProdutoDeletarComponent,
    UsuarioComponent,
    UsuarioEditarComponent,
    UsuarioDeletarComponent,
    MeuPerfilComponent,
    MensagensComponent,
    MensagensDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
