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
 public  produtoId:any;
  constructor
  (
    private produtoService: ProdutoService,
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private loadinCtrl: LoadingController,
    private authService: AuthService,
    private toastCtrl: ToastController,
  ) { 
    this.produtoId = this.activatedRoute.snapshot.params["id"];
    if(this.produtoId) this.loadProduto(); 
  }


  loadProduto(){
      this.produtoSubscription = this.produtoService
      .listaProdutos(this.produtoId)
      .subscribe(data =>{
        this.produto = data;
      });
  }




  ngOnInit() {
  }

async save(){
  await this.presentLoading();

  if(this.produtoId){
    try{
      await this.produtoService.updateProdutos(this.produtoId, this.produto);
      await this.loading.dismiss();
    }catch(error){
      this.presentToast("Error");
      this.loading.dismiss();
    }
  }else{
    try{
      await this.produtoService.addProdutos(this.produto);
      await this.loading.dismiss();
      this.navCtrl.navigateBack(['tabs/home']);
      console.error();
    }catch(errorr){
      this.presentToast("Error");
      this.loading.dismiss();
      console.error();
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
