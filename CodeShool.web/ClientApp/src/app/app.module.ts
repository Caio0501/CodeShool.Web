import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PrimaryBtnComponent } from './components/primary-btn/primary-btn.component';
import { SecondaryBtnComponent } from './components/secondary-btn/secondary-btn.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './view/home-page/home-page.component';
import { LoginScreenComponent } from './view/login-screen/login-screen.component';
import { PlaugoundComponent } from './view/plaugound/plaugound.component';
import { ListaModulosComponent } from './view/lista-modulos/lista-modulos.component';
import { AccordionModule } from './components/accordion/accordion.module';
import { telaCadastrarComponent } from './view/tela-cadastrar/tela-cadastrar.component';
import { PerfilUsuarioComponent } from './view/perfil-usuario/perfil-usuario.component';
import { PlaugoundIdeComponent } from './view/playground-ide/playground-ide.component';
import { ListaDesafiosComponent } from './view/lista-desafios/lista-desafios.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaModulosConteudoComponent } from './view/lista-modulos-conteudo/lista-modulos-conteudo.component';
import { LinguagensService } from './services/linguagens.service';
import { ListaDesafiosConteudoComponent } from './view/lista-desafios-conteudo/lista-desafios-conteudo.component';
import { CriarDesafioComponent } from './view/criar-desafio/criar-desafio.component';
import { UsuarioService } from './services/usuario.service';


const Compenents = [
  PrimaryBtnComponent,
  SecondaryBtnComponent,
  FooterComponent,
  NavBarComponent,
];

@NgModule({
  declarations: [
    AppComponent,
    Compenents,
    LoginScreenComponent,
    telaCadastrarComponent,
    HomePageComponent,
    PlaugoundComponent,
    PlaugoundIdeComponent,
    ListaModulosComponent,
    PerfilUsuarioComponent,
    ListaDesafiosComponent,
    ListaModulosConteudoComponent,
    ListaDesafiosConteudoComponent,
    CriarDesafioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AccordionModule,
    ReactiveFormsModule,
  ],
  providers: [
    LinguagensService,
    UsuarioService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
