import { Usuario } from './../interfaces/usuario';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

private usuariosColecao: AngularFirestoreCollection<Usuario>

  constructor() { }
}
