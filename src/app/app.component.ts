import { Component } from '@angular/core';
import {OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'new-crud';
  showhome:boolean=false;
  constructor(){ }

  ngOnInit(): void {
    this.showhome=true;
  }

  hidehome(): void {
    this.showhome=false;
  }
}
