import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { DescricaoComponent } from './descricao/descricao.component';
import { FaqComponent } from './faq/faq.component';
import { ContatoComponent } from './contato/contato.component';
import { MeuPerfilComponent } from './meu-perfil/meu-perfil.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { ProdutoComponent } from './administrador/produto/produto.component';
import { ProdutoEditarComponent } from './administrador/produto-editar/produto-editar.component';
import { ProdutoDeletarComponent } from './administrador/produto-deletar/produto-deletar.component';
import { UsuarioComponent } from './administrador/usuario/usuario.component';
import { UsuarioEditarComponent } from './administrador/usuario-editar/usuario-editar.component';
import { UsuarioDeletarComponent } from './administrador/usuario-deletar/usuario-deletar.component';
import { MensagensComponent } from './administrador/mensagens/mensagens.component';
import { MensagensDeleteComponent } from './administrador/mensagens-delete/mensagens-delete.component';
/*import { EditarComponent } from './editar/editar.component';
import { DeletarComponent } from './deletar/deletar.component';

*/
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'quem-somos', component: SobreNosComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'produtos', component: ProdutosComponent },
  {path: 'descricao/:id', component: DescricaoComponent},
  { path: 'faq', component: FaqComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'meu-perfil', component: MeuPerfilComponent },
  { path: 'administrador', component: AdministradorComponent },
  { path: 'administrador/produtos', component: ProdutoComponent },
  { path: 'administrador/produtos/editar/:id', component: ProdutoEditarComponent },
  { path: 'administrador/produtos/deletar/:id', component: ProdutoDeletarComponent },
  { path: 'administrador/usuarios', component: UsuarioComponent },
  { path: 'administrador/usuarios/editar/:id', component: UsuarioEditarComponent },
  { path: 'administrador/usuarios/deletar/:id', component: UsuarioDeletarComponent },
  {path: 'administrador/mensagens',component:MensagensComponent},
  {path: 'administrador/mensagens/deletar/:id',component:MensagensDeleteComponent}
  /*{ path: 'editar/:id', component: EditarComponent },
  { path: 'deletar/:id', component: DeletarComponent },
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
