import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import { BrowserMultiFormatReader } from '@zxing/library';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements AfterViewInit {
  private codeReader = new BrowserMultiFormatReader();
  public result: string | null = null;
  public productInfo: any = null; // Per memorizzare le informazioni del prodotto

  @ViewChild('video') videoElement!: ElementRef<HTMLVideoElement>;

  constructor(private http: HttpClient) {} // Inietta HttpClient

  ngAfterViewInit() {
    this.startScanning();
  }

  startScanning() {
    const video = this.videoElement.nativeElement;

    this.codeReader.decodeFromVideoDevice(null, video, (result, error) => {
      if (result) {
        this.result = result.getText();
        console.log('Codice a barre scansionato:', this.result);
        this.fetchProductInfo(this.result); // Chiama la funzione per ottenere info sul prodotto
        this.codeReader.reset(); // Ferma la scansione dopo aver trovato il codice
      }
      if (error) {
        console.error('Errore nella scansione:', error);
      }
    })
    .catch(err => console.error(err));
  }

  fetchProductInfo(barcode: string) {
    const apiUrl = `https://world.openfoodfacts.org/api/v2/product/${barcode}.json`; // URL per l'API

    this.http.get(apiUrl).subscribe(
      (response: any) => {
        this.productInfo = response.product; // Memorizza le informazioni del prodotto
        console.log('Informazioni sul prodotto:', this.productInfo);
      },
      error => {
        console.error('Errore nella chiamata API:', error);
      }
    );
  }
}
