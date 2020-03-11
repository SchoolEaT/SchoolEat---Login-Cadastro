import { AuthService } from './../services/auth.service';
import { Usuario } from './../interfaces/usuario';
// import { Login } from './../interfaces/login';

import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {



erro: string;
public userLogin: Usuario = {};
// public userRegister: Login = {};
private loading: any;

  constructor
(
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public authService:AuthService,
    private router:Router,
) { }

  ngOnInit() {
  }

async submit(){


  await this.presentLoading();

  try{
     await this.authService.login(this.userLogin);
     this.router.navigate(['/tabs/home']);
    }catch (error){
    console.log("Erro ao logar");
    this.presentToast("Email ou Senha Invalida");
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
      duration: 6000
    });
    toast.present();
  }
}
