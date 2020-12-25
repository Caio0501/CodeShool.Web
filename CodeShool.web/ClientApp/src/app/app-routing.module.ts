import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaDesafiosComponent } from './view/lista-desafios/lista-desafios.component';
import { HomePageComponent } from './view/home-page/home-page.component';
import { ListaModulosConteudoComponent } from './view/lista-modulos-conteudo/lista-modulos-conteudo.component';
import { ListaModulosComponent } from './view/lista-modulos/lista-modulos.component';
import { LoginScreenComponent } from './view/login-screen/login-screen.component';
import { PerfilUsuarioComponent } from './view/perfil-usuario/perfil-usuario.component';
import { PlaugoundComponent } from './view/plaugound/plaugound.component';
import { PlaugoundIdeComponent } from './view/playground-ide/playground-ide.component';
import { telaCadastrarComponent } from './view/tela-cadastrar/tela-cadastrar.component';
import { ListaDesafiosConteudoComponent } from './view/lista-desafios-conteudo/lista-desafios-conteudo.component';
import { CriarDesafioComponent } from './view/criar-desafio/criar-desafio.component';

const routes: Routes = [
  { path: 'login', component: LoginScreenComponent },
  { path: 'register', component: telaCadastrarComponent },
  { path: '', component: HomePageComponent },
  { path: 'playground', component: PlaugoundComponent },
  { path: 'playground/ide', component: PlaugoundIdeComponent },
  { path: 'modulos', component: ListaModulosComponent },
  { path: 'modulos/conteudo', component: ListaModulosConteudoComponent },
  { path: 'perfil', component: PerfilUsuarioComponent },
  { path: 'desafios', component: ListaDesafiosComponent },
  { path: 'desafios/conteudo', component: ListaDesafiosConteudoComponent },
  { path: 'desafios/criar', component: CriarDesafioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
