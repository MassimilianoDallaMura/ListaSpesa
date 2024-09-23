import { Injectable } from '@angular/core';
import { Product } from 'src/app/interface/product';

@Injectable({
  providedIn: 'root',
})
export class ListStorageService {
  // private listeSalvate: { [key: string]: Product[] } = {}; // Le liste memorizzate in un oggetto

  // constructor() {
  //   this.loadListeFromLocalStorage(); // Carica le liste all'inizio
  // }

  // Carica le liste dal localStorage e le memorizza in memoria
  // private loadListeFromLocalStorage() {
  //   const liste = localStorage.getItem('listeSalvate');
  //   if (liste) {
  //     this.listeSalvate = JSON.parse(liste);
  //   }
  // }

  // Ottieni tutte le liste memorizzate
  // getListe(): { [key: string]: Product[] } {
  //   return this.listeSalvate;
  // }

  // Salva una nuova lista sia in memoria che nel localStorage
  // saveList(nomeLista: string, lista: Product[]) {
  //   this.listeSalvate[nomeLista] = lista;
  //   // this.updateLocalStorage();
  // }

  // // Aggiorna il localStorage
  // private updateLocalStorage() {
  //   localStorage.setItem('listeSalvate', JSON.stringify(this.listeSalvate));
  // }
}
