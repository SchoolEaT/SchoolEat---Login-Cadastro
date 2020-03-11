import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../interfaces/produto';
import { Subscription } from 'rxjs';
import { ProdutoService } from '../services/produto.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.page.html',
  styleUrls: ['./pesquisa.page.scss'],
})
export class PesquisaPage implements OnInit {

  public produtos = new Array<Produto>();
  private produtosSubscription: Subscription;

  constructor
  (
    public afs: AngularFirestore,
    private produtoService: ProdutoService,
    public authService: AuthService,
  ) 
  {
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

search(event){}

}
