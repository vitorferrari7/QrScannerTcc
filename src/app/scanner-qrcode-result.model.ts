export class ScannerQRCodeResult {
    type?: ScannerQRCodeSymbolType;
    typeName?: string;
    data?: Int8Array;
    points?: Array<ScannerQRCodePoint>;
    orientation?: ScannerQRCodeOrientation;
    time?: number;
    cacheCount?: number;
    quality?: number;
    value?: string;
  }
  export enum ScannerQRCodeSymbolType {
    ScannerQRCode_NONE = 0,
    ScannerQRCode_PARTIAL = 1,
    ScannerQRCode_EAN2 = 2,
    ScannerQRCode_EAN5 = 5,
    ScannerQRCode_EAN8 = 8,
    ScannerQRCode_UPCE = 9,
    ScannerQRCode_ISBN10 = 10,
    ScannerQRCode_UPCA = 12,
    ScannerQRCode_EAN13 = 13,
    ScannerQRCode_ISBN13 = 14,
    ScannerQRCode_COMPOSITE = 15,
    ScannerQRCode_I25 = 25,
    ScannerQRCode_DATABAR = 34,
    ScannerQRCode_DATABAR_EXP = 35,
    ScannerQRCode_CODABAR = 38,
    ScannerQRCode_CODE39 = 39,
    ScannerQRCode_PDF417 = 57,
    ScannerQRCode_QRCODE = 64,
    ScannerQRCode_SQCODE = 80,
    ScannerQRCode_CODE93 = 93,
    ScannerQRCode_CODE128 = 128,
    ScannerQRCode_SYMBOL = 0x00ff,
    ScannerQRCode_ADDON2 = 0x0200,
    ScannerQRCode_ADDON5 = 0x0500,
    ScannerQRCode_ADDON = 0x0700,
  }
  
  export interface ScannerQRCodePoint {
    x: number;
    y: number;
  }
  
  export enum ScannerQRCodeOrientation {
    ScannerQRCode_ORIENT_UNKNOWN = -1,
    ScannerQRCode_ORIENT_UP,
    ScannerQRCode_ORIENT_RIGHT,
    ScannerQRCode_ORIENT_DOWN,
    ScannerQRCode_ORIENT_LEFT,
  }
  export interface ScannerQRCodeSelectedFiles {
    url: string;
    name: string;
    file: File;
    data?: ScannerQRCodeResult[];
    canvas?: HTMLCanvasElement;
    value?: ScannerQRCodeResult;
  }