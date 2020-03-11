import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Login } from './../interfaces/login';
import { Usuario } from './../interfaces/usuario';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Produto } from '../interfaces/produto';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private UsuarioColecao: AngularFirestoreCollection<Usuario>;

  constructor(private afa: AngularFireAuth, public afs:AngularFirestore) { 
    this.UsuarioColecao = this.afs.collection<Usuario>("Usuarios");
  }


  // getUsuarios(){
  //   return this.UsuarioColecao.snapshotChanges().pipe(
  //     map(actions =>{
  //       return actions.map(a =>{
  //         const data = a.payload.doc.data();
  //         const id = a.payload.doc.id;
  //         return { id, ...data};
  //       });
  //     })
  //   );
  // }


  // listaUsuarios(IdUser:string){
  //   return this.UsuarioColecao.doc<Usuario>(IdUser).valueChanges();
  // }


 login(usuario:Usuario){
   return this.afa.auth.signInWithEmailAndPassword(usuario.email, usuario.password);
 }

//  addUsuario(usuario:Usuario){
//     this.UsuarioColecao.add(usuario);
//  }
 register(usuario:Usuario){
   return   this.afa.auth.createUserWithEmailAndPassword(usuario.email, usuario.password);
 }

 logout(){
   return this.afa.auth.signOut();
 }

 getAuth(){
   return this.afa.auth;
 }
  
}
