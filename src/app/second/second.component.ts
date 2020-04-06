import { Component, OnInit, ViewChild , Input } from '@angular/core';
import { TransferService } from '../transfer.service';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  @Input() secondPosts : any[] = [];

  constructor( private _transferService : TransferService) { }

  ngOnInit() {
    this.secondPosts = this._transferService.getOption()
    console.log("in scound", this.secondPosts)
  }


}
