import { AuthService } from './../services/auth.service';
import { Usuario } from './../interfaces/usuario';
import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

public userRegister: Usuario = {};
loading: any;

  constructor
  (
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public authService: AuthService,
    private router: Router,

  ) { }

  ngOnInit() {
  }


  async register(){
    await this.presentLoading();
    try{
      await  this.authService.register(this.userRegister);
      this.router.navigate(['/login']);
    }catch(error){
      //console.error(error);
      //alert('Cadastro errado');
      this.router.navigate(['/cadastro']);
      this.presentToast(error);
    }finally{
      this.loading.dismiss();
    }
  }

  async presentLoading(){
    this.loading = await this.loadingCtrl.create({
      message: "Por favor, aguarde..."
    });
    return this.loading.present();
  }

  async presentToast(message: string){
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }


}
