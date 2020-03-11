import { Usuario } from './../interfaces/usuario';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Produto } from '../interfaces/produto';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

private produtoColecao: AngularFirestoreCollection<Produto>

  constructor(private afs: AngularFirestore) {   this.produtoColecao = this.afs.collection<Produto>("Produtos");}



GetProduto(id:string){
  return this.produtoColecao.doc<Produto>(id).valueChanges();
}

}
