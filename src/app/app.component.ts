import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { NgxScannerQrcodeComponent, NgxScannerQrcodeService, ScannerQRCodeConfig } from 'ngx-scanner-qrcode';
import { ScannerQRCodeResult,ScannerQRCodeSelectedFiles, ScannerQRCodeSymbolType, ScannerQRCodePoint, ScannerQRCodeOrientation } from './scanner-qrcode-result.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'angular-qrscanner';
  public qrCodeResult: any[] = [];
  public config: ScannerQRCodeConfig = {
    fps: 100,
    isBeep: false,
    decode: 'macintosh',
    constraints: {
      video: {
        width: window.innerWidth
      }
    }
  };
  
  public isStart = false; // Variável para controlar o estado de início/parada da leitura

  @ViewChild('scannerInstance') scannerComponent?: NgxScannerQrcodeComponent;

  constructor(private qrcode: NgxScannerQrcodeService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.startScanner(); // Inicia o scanner quando o componente é inicializado
  }

  ngAfterViewInit() {
    this.startScanner();
  }

  public onSelects(files: any) {
    this.qrcode.loadFilesToScan(files, this.config).subscribe((res: ScannerQRCodeSelectedFiles[]) => {
      this.qrCodeResult = res;
    });
  }

  public startScanner() {
    this.isStart = true;
    setTimeout(() => {
      if (this.scannerComponent) {
        this.scannerComponent.start();
        this.cdr.detectChanges(); // Força a detecção de alterações após o atraso
      }
    });
  }

  public stopScanner() {
    this.isStart = false;
    setTimeout(() => {
      if (this.scannerComponent) {
        this.scannerComponent.stop();
        this.cdr.detectChanges(); // Força a detecção de alterações após o atraso
      }
    });
  }

  public handleQrCodeResult(result: ScannerQRCodeSelectedFiles) {
    this.qrCodeResult.push(result);
    this.cdr.detectChanges();
  }
  confirmNavigation(event: MouseEvent) {
    const confirmed = window.confirm('Deseja ir para o link?');
    if (!confirmed) {
      event.preventDefault(); // Impede a navegação padrão se o usuário não confirmar
    }
  }
}







