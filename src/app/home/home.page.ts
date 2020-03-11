import { UsuarioService } from './../services/usuario.service';
import { ProdutoService } from './../services/produto.service';
import { Produto } from './../interfaces/produto';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {




  public produtos = new Array<Produto>();
  public produto: Subscription;



  constructor
  (
    public authService:AuthService,
    public afs: AngularFirestore,
    private produtoService: ProdutoService,
    private usuarioService: UsuarioService
    )
    {
      // this.produto = this.usuarioService.GetProduto().subscribe()

    }


  ngOnInit() {
  }







  async logout(){
    try{
        await this.authService.logout();
    }catch(error){
      console.error(error)
    }
  }
}
