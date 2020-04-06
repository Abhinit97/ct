import { Component, OnInit, Input } from '@angular/core';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  post1 ='';
  post2 ='';
  post3 ='';
  @Input() MainPosts: any[] = [];

  ngOnInit() {
  }

  constructor( private _transferService : TransferService){}

  addPost(post1,post2, post3){
    console.log(post1, post2 , post3);
    this.MainPosts.push(post1, post2 , post3);
    this._transferService.setOption(this.MainPosts)
  }
}
