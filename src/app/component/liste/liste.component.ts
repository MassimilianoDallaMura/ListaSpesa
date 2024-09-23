import { Component, OnInit } from '@angular/core';
import { ListStorageService } from 'src/app/service/list-storage-service.service';


@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {
  nomiListe: string[] = []; // Array di nomi delle liste
  listaSelezionata: any[] | null = null; // Lista selezionata per la modale
  showModal: boolean = false; // Per mostrare/nascondere la modale
  nomeListaSelezionata: string = ''; // Nome della lista selezionata

  constructor(private listStorageService: ListStorageService) {} // Inietta il servizio

  ngOnInit() {
    // this.getListeSalvate();
  }

  // Ottiene i nomi delle liste dal servizio
  // getListeSalvate() {
  //   const liste = this.listStorageService.getListe();
  //   this.nomiListe = Object.keys(liste); // Estrae i nomi delle liste
  // }

  // Metodo per aprire la modale e visualizzare i dettagli della lista selezionata
  // openModal(nomeLista: string) {
  //   const liste = this.listStorageService.getListe();
  //   this.listaSelezionata = liste[nomeLista]; // Ottiene i dati della lista selezionata
  //   this.nomeListaSelezionata = nomeLista;
  //   this.showModal = true; // Mostra la modale
  // }

  // Metodo per chiudere la modale
  closeModal() {
    this.showModal = false;
    this.listaSelezionata = null; // Reset della lista selezionata
  }
}
