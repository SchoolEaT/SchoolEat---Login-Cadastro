import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { UsuarioService } from './../services/usuario.service';
import { Subscription } from 'rxjs';
import { AuthService } from './../services/auth.service';
import { Usuario } from './../interfaces/usuario';
import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

public userRegister: Usuario = {};
private usuarioSubscription: Subscription;
private usuarioId: string = null;
private loading: any;


  constructor
  (
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public authService: AuthService,
    private router: Router,
    private navCtrl: NavController,
    private activatedRouter:ActivatedRoute,
    private afa: AngularFireAuth,
    private afs: AngularFirestore
    

  ) { 
    
  }

  ngOnInit() {

  }
  
  



  async register(){

    await this.presentLoading();


    try{
      

      const newUser= await this.afa.auth.createUserWithEmailAndPassword(this.userRegister.email, this.userRegister.password);
      const newUserObject = Object.assign({}, this.userRegister);

      delete newUserObject.email;
      delete newUserObject.password;
      await this.afs.collection("Users").doc(newUser.user.uid).set(newUserObject);
      // this.navCtrl.navigateBack('/login');
    }catch(error){
      this.presentToast(error);
    }finally{
      this.loading.dismiss();
    }






  }

    // await this.presentLoading();

    
    // try{
    //   await  this.authService.register(this.userRegister);
    //   this.router.navigate(['/login']);
    // }catch(error){
    //   this.router.navigate(['/cadastro']);
    //   this.presentToast(error);
    // }finally{
    //   this.loading.dismiss();
    // }
  
  


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
