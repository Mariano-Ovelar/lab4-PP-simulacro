import { Injectable } from '@angular/core';
import { collection, addDoc, doc, setDoc, getDocs } from 'firebase/firestore';
import { Actor } from '../models/actor';
import { Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class ActorService {
  public listaActores: any = null;

  public path: string = 'actores';
  public actores: any[] = [];
  unsub: any;
  actoresRef = collection(this.firestore, this.path);
  /*  actorRef = doc(this.firestore, this.path); */
  constructor(private firestore: Firestore) {
    this.actualizarLista();
  }

  async guardar(actor: Actor) {
    // Guardar el objeto actor con un ID automático
    const docRef = await addDoc(this.actoresRef, actor);
    const id = docRef.id;

    // Actualizar el campo 'id' del objeto guardado
    const actorDocRef = doc(this.actoresRef, docRef.id);
    await setDoc(actorDocRef, { ...actor, id });
  }
  async traer() {
    const col = collection(this.firestore, 'actores');
    /*     const observable = collectionData(col);
     */
    const Snapshot = await getDocs(col);
    const list = Snapshot.docs.map((doc) => doc.data());
    localStorage.setItem('actores', JSON.stringify(list));
    this.actualizarLista();
    return list;
  }
  actualizarLista() {
    this.listaActores = JSON.parse(String(localStorage.getItem('actores')));
  }
}
