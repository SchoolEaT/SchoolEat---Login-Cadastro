import { Produto } from './../interfaces/produto';
import { ProdutoService } from './../services/produto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.page.html',
  styleUrls: ['./cadastro-produto.page.scss'],
})
export class CadastroProdutoPage implements OnInit {


public produto : Produto = {};
private loading: any;
private produtoSubscription: Subscription;
private produtoId : string = null;
  constructor
  (
    private produtoService: ProdutoService,
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private loadinCtrl: LoadingController,
    private authService: AuthService,
    private toastCtrl: ToastController,
  ) { 
      this.produtoId = this.activatedRoute.snapshot.params['idUser'];

      if(this.produtoId) this.loadProduto();
  }






  ngOnInit() {
  }

  loadProduto(){
    this.produtoSubscription = this.produtoService.listaProdutos(this.produtoId).subscribe(data =>{
      this.produto = data;
    })
  }

async save(){
  await this.presentLoading();

  this.produto.IdUser = this.authService.getAuth().currentUser.uid;

  if(this.produtoId){

  }else{
    this.produto.createdAt = new Date().getTime();

    try{
      await this.produtoService.addProdutos(this.produto);
      await this.loading.dismiss();

      this.navCtrl.navigateBack('/tabs/home');
    }catch(error){
      this.presentToast('Erro ao tentar salvar');
      this.loading.dismiss();
    }
  }

}

async presentLoading(){
  this.loading = await this.loadinCtrl.create({
    message: "Aguarde..."
  });
}


async presentToast(message: string){
  const toast = await this.toastCtrl.create({
    message, duration: 2000
  });
  toast.present();
}









}
