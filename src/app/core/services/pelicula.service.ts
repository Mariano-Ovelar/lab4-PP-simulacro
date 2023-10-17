import { Injectable } from '@angular/core';
import {
  collectionData,
  Firestore,
  getDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { collection, addDoc, doc, setDoc, getDocs } from 'firebase/firestore';

import {
  Storage,
  getDownloadURL,
  ref,
  uploadBytes,
} from '@angular/fire/storage';
import { Pelicula } from '../models/pelicula';
/* import {  } from 'firebase/storage'; */

@Injectable({
  providedIn: 'root',
})
export class PeliculaService {
  listaPeliculas: any = null;
  path: string = 'peliculas';
  peliculasRef = collection(this.firestore, this.path);

  constructor(private firestore: Firestore, private storage: Storage) {
    this.actualizarLista();
  }

  async guardar(pelicula: Pelicula) {
    const imgRef = ref(this.storage, `img/${pelicula.nombre}`);
    pelicula.id = this.peliculasRef.id;
    uploadBytes(imgRef, pelicula.fotoPelicula)
      .then(() => {
        getDownloadURL(imgRef)
          .then(async (res) => {
            pelicula.fotoPelicula = res;
            const docRef = await addDoc(this.peliculasRef, pelicula);
            const id = docRef.id;

            // Actualizar el campo 'id' del objeto guardado
            const peliculasRef = doc(this.peliculasRef, docRef.id);
            await setDoc(peliculasRef, { ...pelicula, id });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async traer() {
    const col = collection(this.firestore, 'peliculas');
    const snapshot = await getDocs(col);
    const list = snapshot.docs.map((doc) => doc.data());
    localStorage.setItem('peliculas', JSON.stringify(list));
    this.actualizarLista();
    return list;
  }

  actualizarLista() {
    this.listaPeliculas = JSON.parse(String(localStorage.getItem('peliculas')));
  }
}
