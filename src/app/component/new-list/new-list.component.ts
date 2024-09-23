import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {
  list: Product[] = [];
  showModal = false; 
  newListName = ''; 
  categories: string[] = [
    'Select',
    'Abbigliamento',
    'Alimenti',
    'Pulizia della casa',
    'Ferramenta',
    'Cura del corpo',
    'Medicinali'
  ];
  nuovoProdotto: Product = {
    name: '',
    quantity: undefined,
    price: undefined,
    checked: false,
    category: 'Select',
    color: this.getRandomColor()
  };

  totalChecked: number = 0;
  totalUnchecked: number = 0;
  total: number = 0;
  suggestions: string[] = [];

  ngOnInit() {
    const listaSalvata = localStorage.getItem('listaSpesa');
    if (listaSalvata) {
      this.list = JSON.parse(listaSalvata);
      this.calculateTotals();
    }
  }

  addProduct() {
    if (this.nuovoProdotto.name.trim() !== '' && this.nuovoProdotto.category !== 'Select') {
      this.list.push({ ...this.nuovoProdotto });
      this.calculateTotals();
      this.updateLocalStorage();
      this.resetNewProduct();
    } else {
      alert('Inserisci un nome di prodotto valido e seleziona una categoria.');
    }
  }

  // Funzione per generare un colore esadecimale casuale
  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 18)];
    }
    return color;
  }

  updateLocalStorage() {
    localStorage.setItem('listaSpesa', JSON.stringify(this.list));
  }

  onProductNameChange() {
    const inputValue = this.nuovoProdotto.name.toLowerCase();
    if (inputValue) {
      this.suggestions = this.list
        .filter(product => product.name.toLowerCase().includes(inputValue))
        .map(product => product.name);
    } else {
      this.suggestions = [];
    }
  }

  selectSuggestion(suggestion: string) {
    this.nuovoProdotto.name = suggestion;
    this.suggestions = [];
  }

  toggleChecked(prodotto: Product) {
    prodotto.checked = !prodotto.checked;
    this.calculateTotals();
    this.updateLocalStorage();
  }

  onPriceChange(prodotto: Product) {
    this.calculateTotals();
    this.updateLocalStorage();
  }

  calculateTotals() {
    this.totalChecked = this.list.reduce((sum, prodotto) => prodotto.checked ? sum + (prodotto.price || 0) : sum, 0);
    this.totalUnchecked = this.list.reduce((sum, prodotto) => !prodotto.checked ? sum + (prodotto.price || 0) : sum, 0);
    this.total = this.list.reduce((sum, prodotto) => prodotto ? sum + (prodotto.price || 0) : sum, 0);
  }

  openModal() {
    this.showModal = true; // Mostra la modale
  }

  closeModal() {
    this.showModal = false; // Chiudi la modale
  }

  // Metodo per salvare la lista con un nome
  saveList() {
    if (this.newListName.trim() !== '' && this.list.length > 0) {
      const listaSalvata = localStorage.getItem('listeSalvate');
      let liste = listaSalvata ? JSON.parse(listaSalvata) : {};

      const nuovaLista = {
        prodotti: this.list,
        data: new Date().toLocaleString() // Data e ora corrente nel formato leggibile
      };

      // Aggiungi la nuova lista con il nome inserito
      liste[this.newListName] = nuovaLista; // Salva i dettagli della lista

      // Salva l'oggetto aggiornato nel localStorage
      localStorage.setItem('listeSalvate', JSON.stringify(liste));

      alert(`Lista "${this.newListName}" salvata con successo!`);
  
      // Reset del nome della nuova lista
      this.resetNewListName(); 
      this.resetList(); 
      this.closeModal();
    } else {
      alert('Inserisci un nome per la lista e aggiungi almeno un prodotto.');
    }
  }

  // Metodo per resettare il nuovo prodotto
  resetNewProduct() {
    this.nuovoProdotto = {
      name: '',
      quantity: undefined,
      price: undefined,
      checked: false,
      category: 'Select', // Reset della categoria su 'Select'
      color: this.getRandomColor()  // Imposta un nuovo colore casuale
    };
    this.suggestions = [];
  }

  // Metodo per resettare il nome della nuova lista
  resetNewListName() {
    this.newListName = ''; // Reset del nome della nuova lista
  }

  resetList() {
    this.list = [];
    this.updateLocalStorage();
  }
}
