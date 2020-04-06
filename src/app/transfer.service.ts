import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  public data  = [];
  constructor() { }

  setOption(value) {
    this.data = value;
    console.log("in service",this.data)
  }

  getOption() {
    return this.data;
  }


}
