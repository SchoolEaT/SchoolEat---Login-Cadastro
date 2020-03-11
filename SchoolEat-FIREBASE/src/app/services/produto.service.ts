import { Produto } from './../interfaces/produto';
import { AngularFirestoreModule, AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

private produtosColecao: AngularFirestoreCollection<Produto>;


  constructor(private afs: AngularFirestore) { 
    this.produtosColecao = this.afs.collection<Produto>("Produtos");
  }

  getProdutos(){
    return this.produtosColecao.snapshotChanges().pipe(
      map(actions =>{
        return actions.map(a =>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data};
        });
      })
    );
  }




  addProdutos(produto: Produto){
      return this.produtosColecao.add(produto);
  }

  listaProdutos(id:string){
    return this.produtosColecao.doc<Produto>(id).valueChanges();
  }
  listaProdutosId(userId:string){
    return this.produtosColecao.doc<Produto>(userId).valueChanges();
  }


  updateProdutos(id:string, produto: Produto){
    return this.produtosColecao.doc<Produto>(id).update(produto);
  }

  deleteProduto(id: string){
    return this.produtosColecao.doc(id).delete();
  }


}
