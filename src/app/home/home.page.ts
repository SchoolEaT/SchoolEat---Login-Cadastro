import { ProdutoService } from './../services/produto.service';
import { Produto } from './../interfaces/produto';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


public produtos = new Array<Produto>();
private produtosSubscription: Subscription;



  constructor
  (
    private produtoService: ProdutoService,
    public authService: AuthService,
  ) { 
    this.produtosSubscription = this.produtoService
      .getProdutos()
      .subscribe(data =>{
        this.produtos = data;
      });
      
  }

  ngOnDestroy() {
    this.produtosSubscription.unsubscribe();
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
